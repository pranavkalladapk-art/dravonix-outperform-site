import { createAPIFileRoute } from "@tanstack/react-start/api";

// Sends contact form enquiries to admin@dravonixmedia.com via Zoho SMTP.
// Uses ZOHO_SMTP_USER and ZOHO_SMTP_PASSWORD from Cloudflare runtime secrets.

const TO_ADDRESS = "admin@dravonixmedia.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitize(s: string) {
  return s.replace(/[\r\n\t\v\f\x00-\x1F\x7F]/g, "").trim();
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

async function sendViaSmtp(opts: {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  fromName: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  // @ts-ignore - Cloudflare Workers global
  const conn = await (globalThis as any).connect(opts.host, opts.port, { secureTransport: "starttls" });

  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const writer = conn.writable.getWriter();
  const reader = conn.readable.getReader();

  let buffer = "";

  async function readLine(): Promise<string> {
    while (true) {
      const crlf = buffer.indexOf("\r\n");
      if (crlf !== -1) {
        const line = buffer.slice(0, crlf);
        buffer = buffer.slice(crlf + 2);
        return line;
      }
      const { value } = await reader.read();
      buffer += dec.decode(value);
    }
  }

  async function readResponse(): Promise<string> {
    let full = "";
    while (true) {
      const line = await readLine();
      full += line + "\r\n";
      // A line like "250 " (space after code) is the last line
      if (/^\d{3} /.test(line)) return full;
    }
  }

  async function write(line: string) {
    await writer.write(enc.encode(line + "\r\n"));
  }

  async function expect(code: string, label: string) {
    const resp = await readResponse();
    if (!resp.startsWith(code)) throw new Error(`SMTP ${label} failed: ${resp.trim()}`);
    return resp;
  }

  try {
    await expect("220", "greet");
    await write(`EHLO dravonixmedia.com`);
    await expect("250", "EHLO");
    conn.startTls();
    await write(`EHLO dravonixmedia.com`);
    await expect("250", "EHLO after TLS");

    await write("AUTH LOGIN");
    await expect("334", "AUTH");
    await write(btoa(opts.user));
    await expect("334", "AUTH user");
    await write(btoa(opts.pass));
    await expect("235", "AUTH pass");

    await write(`MAIL FROM:<${opts.from}>`);
    await expect("250", "MAIL FROM");
    await write(`RCPT TO:<${opts.to}>`);
    await expect("250", "RCPT TO");
    await write("DATA");
    await expect("354", "DATA");

    const boundary = "----=_DRX_" + crypto.randomUUID().replace(/-/g, "");
    const message = [
      `From: "${opts.fromName}" <${opts.from}>`,
      `To: <${opts.to}>`,
      `Reply-To: ${opts.replyTo}`,
      `Subject: ${opts.subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset="utf-8"`,
      ``,
      opts.text,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="utf-8"`,
      ``,
      opts.html,
      ``,
      `--${boundary}--`,
      ``,
      `.`,
    ].join("\r\n");

    await writer.write(enc.encode(message + "\r\n"));
    await expect("250", "send");
    await write("QUIT");
    try { await readResponse(); } catch { /* noop */ }
  } finally {
    try { writer.close(); } catch { /* noop */ }
  }
}

export const APIRoute = createAPIFileRoute("/api/contact")({
  OPTIONS: async () => {
    return new Response(null, { headers: corsHeaders });
  },

  POST: async ({ request }) => {
    try {
      const body = await request.json().catch(() => null);
      if (!body || typeof body !== "object") {
        return new Response(JSON.stringify({ error: "Invalid request body" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const p = body as Record<string, unknown>;
      const name = sanitize(String(p.name ?? ""));
      const business = sanitize(String(p.business ?? ""));
      const email = sanitize(String(p.email ?? ""));
      const phone = sanitize(String(p.phone ?? ""));
      const need = sanitize(String(p.need ?? ""));

      const allowed = ["Branding", "Social Media", "Content", "Strategy", "All of the above"];
      if (!name || name.length > 100) return new Response(JSON.stringify({ error: "Invalid name" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (!business || business.length > 100) return new Response(JSON.stringify({ error: "Invalid business name" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (!email || !isValidEmail(email)) return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (!phone || phone.length < 7 || !/^[+\d\s()-]+$/.test(phone)) return new Response(JSON.stringify({ error: "Invalid phone" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (!allowed.includes(need)) return new Response(JSON.stringify({ error: "Invalid selection" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });

      // @ts-ignore - Cloudflare env
      const env = (globalThis as any).__env__ ?? process.env;
      const SMTP_USER = env.ZOHO_SMTP_USER ?? env.ZOHO_EMAIL;
      const SMTP_PASS = env.ZOHO_SMTP_PASSWORD ?? env.ZOHO_APP_PASSWORD;

      if (!SMTP_USER || !SMTP_PASS) {
        console.error("Missing Zoho SMTP credentials");
        return new Response(JSON.stringify({ error: "Email service not configured" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const submittedAt = new Date().toUTCString();
      const subject = `New enquiry from ${name} — ${business}`;

      const text = `New enquiry from the Dravonix website\n\nName:      ${name}\nBusiness:  ${business}\nEmail:     ${email}\nPhone:     ${phone}\nNeed:      ${need}\n\nSubmitted: ${submittedAt}`;

      const html = `<div style="font-family:Arial,sans-serif;background:#0b1220;padding:24px;color:#fff;">
  <div style="max-width:560px;margin:0 auto;background:#0f1a33;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
    <div style="padding:20px 24px;background:linear-gradient(135deg,#1d4ed8,#06b6d4);">
      <h1 style="margin:0;font-size:18px;letter-spacing:.5px;">New enquiry — Dravonix</h1>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#e5e7eb;">
        <tr><td style="padding:6px 0;color:#9ca3af;width:110px;">Name</td><td style="padding:6px 0;">${escapeHtml(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Business</td><td style="padding:6px 0;">${escapeHtml(business)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#22d3ee;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Phone</td><td style="padding:6px 0;">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Need</td><td style="padding:6px 0;">${escapeHtml(need)}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Submitted ${escapeHtml(submittedAt)}</p>
    </div>
  </div>
</div>`;

      await sendViaSmtp({
        host: "smtp.zoho.com",
        port: 587,
        user: SMTP_USER,
        pass: SMTP_PASS,
        from: SMTP_USER,
        fromName: "Dravonix Website",
        to: TO_ADDRESS,
        replyTo: `${name} <${email}>`,
        subject,
        text,
        html,
      });

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error("contact API error:", err);
      return new Response(JSON.stringify({ error: "Failed to send enquiry" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
});

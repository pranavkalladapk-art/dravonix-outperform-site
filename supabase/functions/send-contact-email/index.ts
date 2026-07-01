// Sends contact form enquiries to admin@dravonixmedia.com via Zoho SMTP.
// Implements a minimal SMTP-over-TLS client using Deno TLS sockets to keep
// CPU usage low (heavy SMTP libs hit the Edge Function CPU limit).

const ALLOWED_ORIGINS = [
  "https://dravonixmedia.com",
  "https://www.dravonixmedia.com",
  "https://id-preview--6f375153-b965-42e9-9222-f84d3f560846.lovable.app",
  "https://dravonix-outperform-site.lovable.app",
  "http://localhost:8080",
  "http://localhost:3000",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : "*";
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
  };
}

const TO_ADDRESS = "admin@dravonixmedia.com";

interface Payload {
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strip CR/LF and other control characters to prevent SMTP header injection.
function sanitize(s: string) {
  return s.replace(/[\r\n\t\v\f\x00-\x1F\x7F]/g, "").trim();
}

function validate(input: unknown): Payload | string {
  if (!input || typeof input !== "object") return "Invalid request body";
  const p = input as Record<string, unknown>;
  const name = sanitize(String(p.name ?? ""));
  const business = sanitize(String(p.business ?? ""));
  const email = sanitize(String(p.email ?? ""));
  const phone = sanitize(String(p.phone ?? ""));
  const need = sanitize(String(p.need ?? ""));

  if (!name || name.length > 100) return "Invalid name";
  if (!business || business.length > 100) return "Invalid business name";
  if (!email || email.length > 255 || !isValidEmail(email)) return "Invalid email";
  if (phone.length < 7 || phone.length > 20 || !/^[+\d\s()-]+$/.test(phone))
    return "Invalid contact number";
  const allowed = ["Branding", "Social Media", "Content", "Strategy", "All of the above"];
  if (!allowed.includes(need)) return "Invalid selection";

  return { name, business, email, phone, need };
}

// Minimal SMTP client over a TLS socket.
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
  const conn = await Deno.connectTls({ hostname: opts.host, port: opts.port });
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  let pending = "";

  async function readResponse(): Promise<string> {
    // Read until we see a final SMTP line: "NNN " (space, not dash) followed by CRLF.
    const buf = new Uint8Array(4096);
    while (true) {
      // Check if pending already contains a complete response.
      const lines = pending.split("\r\n");
      // Last element is partial (no trailing CRLF) — keep it for next read.
      for (let i = 0; i < lines.length - 1; i++) {
        if (/^\d{3} /.test(lines[i])) {
          // Found terminator. Reconstruct full response up to and including this line.
          const completeLines = lines.slice(0, i + 1);
          const remainder = lines.slice(i + 1).join("\r\n");
          pending = remainder;
          return completeLines.join("\r\n");
        }
      }
      const n = await conn.read(buf);
      if (n === null) throw new Error("SMTP connection closed");
      pending += dec.decode(buf.subarray(0, n));
    }
  }

  async function write(line: string) {
    await conn.write(enc.encode(line + "\r\n"));
  }
  async function expect(code: string, label: string) {
    const resp = await readResponse();
    if (!resp.startsWith(code)) {
      throw new Error(`SMTP ${label} failed: ${resp.trim()}`);
    }
    return resp;
  }

  try {
    await expect("220", "greet");
    await write(`EHLO dravonixmedia.com`);
    await expect("250", "EHLO");

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
    const headers = [
      `From: "${opts.fromName}" <${opts.from}>`,
      `To: <${opts.to}>`,
      `Reply-To: ${opts.replyTo}`,
      `Subject: ${opts.subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/plain; charset="utf-8"`,
      `Content-Transfer-Encoding: 8bit`,
      ``,
      opts.text,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset="utf-8"`,
      `Content-Transfer-Encoding: 8bit`,
      ``,
      opts.html,
      ``,
      `--${boundary}--`,
      ``,
      `.`,
    ].join("\r\n");

    await conn.write(enc.encode(headers + "\r\n"));
    await expect("250", "send");

    await write("QUIT");
    // best-effort read of 221, ignore errors
    try { await readResponse(); } catch { /* noop */ }
  } finally {
    try { conn.close(); } catch { /* noop */ }
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: getCorsHeaders(req) });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);
    const result = validate(body);
    if (typeof result === "string") {
      return new Response(JSON.stringify({ error: result }), {
        status: 400,
        headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
      });
    }
    const data = result;

    const SMTP_USER = Deno.env.get("ZOHO_SMTP_USER");
    const SMTP_PASSWORD = Deno.env.get("ZOHO_SMTP_PASSWORD");
    if (!SMTP_USER || !SMTP_PASSWORD) {
      console.error("Missing Zoho SMTP credentials");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
      });
    }

    const submittedAt = new Date().toUTCString();
    const subject = `New enquiry from ${data.name} — ${data.business}`;

    const text = `New enquiry from the Dravonix website

Name:      ${data.name}
Business:  ${data.business}
Email:     ${data.email}
Phone:     ${data.phone}
Need:      ${data.need}

Submitted: ${submittedAt}

Reply directly to this email to respond to ${data.name}.`;

    const html = `<div style="font-family:Arial,sans-serif;background:#0b1220;padding:24px;color:#fff;">
  <div style="max-width:560px;margin:0 auto;background:#0f1a33;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
    <div style="padding:20px 24px;background:linear-gradient(135deg,#1d4ed8,#06b6d4);">
      <h1 style="margin:0;font-size:18px;letter-spacing:.5px;">New enquiry — Dravonix</h1>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#e5e7eb;">
        <tr><td style="padding:6px 0;color:#9ca3af;width:110px;">Name</td><td style="padding:6px 0;">${escapeHtml(data.name)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Business</td><td style="padding:6px 0;">${escapeHtml(data.business)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#22d3ee;text-decoration:none;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Phone</td><td style="padding:6px 0;">${escapeHtml(data.phone)}</td></tr>
        <tr><td style="padding:6px 0;color:#9ca3af;">Need</td><td style="padding:6px 0;">${escapeHtml(data.need)}</td></tr>
      </table>
      <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Submitted ${escapeHtml(submittedAt)}</p>
      <p style="margin-top:8px;font-size:12px;color:#9ca3af;">Reply directly to this email to respond.</p>
    </div>
  </div>
</div>`;

    // Persist enquiry to DB (best-effort — email is the primary path)
    try {
      const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
      const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
      if (SUPABASE_URL && SERVICE_ROLE) {
        const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_enquiries`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: SERVICE_ROLE,
            Authorization: `Bearer ${SERVICE_ROLE}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify(data),
        });
        if (!dbRes.ok) {
          console.error("DB insert failed:", dbRes.status, await dbRes.text());
        }
      }
    } catch (dbErr) {
      console.error("DB insert error:", dbErr);
    }

    await sendViaSmtp({
      host: "smtp.zoho.com",
      port: 465,
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
      from: SMTP_USER,
      fromName: "Dravonix Website",
      to: TO_ADDRESS,
      replyTo: `${data.name} <${data.email}>`,\
      subject,
      text,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(JSON.stringify({ error: "Failed to send enquiry" }), {
      status: 500,
      headers: { ...getCorsHeaders(req), "Content-Type": "application/json" },
    });
  }
});

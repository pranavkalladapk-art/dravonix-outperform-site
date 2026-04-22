// Sends contact form enquiries to admin@dravonixmedia.com via Zoho SMTP.
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface Payload {
  name: string;
  business: string;
  email: string;
  phone: string;
  need: string;
}

const TO_ADDRESS = "admin@dravonixmedia.com";

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

function validate(input: unknown): Payload | string {
  if (!input || typeof input !== "object") return "Invalid request body";
  const p = input as Record<string, unknown>;
  const name = String(p.name ?? "").trim();
  const business = String(p.business ?? "").trim();
  const email = String(p.email ?? "").trim();
  const phone = String(p.phone ?? "").trim();
  const need = String(p.need ?? "").trim();

  if (!name || name.length > 100) return "Invalid name";
  if (!business || business.length > 100) return "Invalid business name";
  if (!email || email.length > 255 || !isValidEmail(email))
    return "Invalid email";
  if (phone.length < 7 || phone.length > 20 || !/^[+\d\s()-]+$/.test(phone))
    return "Invalid contact number";
  const allowed = [
    "Branding",
    "Social Media",
    "Content",
    "Strategy",
    "All of the above",
  ];
  if (!allowed.includes(need)) return "Invalid selection";

  return { name, business, email, phone, need };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json().catch(() => null);
    const result = validate(body);
    if (typeof result === "string") {
      return new Response(JSON.stringify({ error: result }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const data = result;

    const SMTP_USER = Deno.env.get("ZOHO_SMTP_USER");
    const SMTP_PASSWORD = Deno.env.get("ZOHO_SMTP_PASSWORD");
    if (!SMTP_USER || !SMTP_PASSWORD) {
      console.error("Missing Zoho SMTP credentials");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.zoho.com",
        port: 465,
        tls: true,
        auth: { username: SMTP_USER, password: SMTP_PASSWORD },
      },
    });

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

    const html = `
<div style="font-family:Arial,sans-serif;background:#0b1220;padding:24px;color:#fff;">
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
</div>`.trim();

    await client.send({
      from: `Dravonix Website <${SMTP_USER}>`,
      to: TO_ADDRESS,
      replyTo: `${data.name} <${data.email}>`,
      subject,
      content: text,
      html,
    });

    await client.close();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send enquiry" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});

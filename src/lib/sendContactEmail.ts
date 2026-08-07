'use server';
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  business: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(20).regex(/^[+\d\s()-]+$/),
  need: z.enum([
    'Branding',
    'Social Media',
    'Content',
    'Strategy',
    'All of the above',
    'WhatsApp AI',
    'DRAIVA WhatsApp',
    'DRAIVA Web Chat',
    'DRAIVA Mail',
    'DRAIVA Social',
    'DRAIVA Voice',
  ]),
  details: z.string().trim().max(4000).optional(),
  source: z.string().trim().max(120).optional(),
  pageUrl: z.string().trim().max(300).optional(),
});

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const sendContactEmail = createServerFn({ method: 'POST' })
  .validator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { name, business, email, phone, need, details, source, pageUrl } = data;

    // @ts-ignore - access Cloudflare env via process.env (mapped at runtime)
    const SMTP_USER: string = process.env.ZOHO_SMTP_USER ?? process.env.ZOHO_EMAIL ?? '';
    const SMTP_PASS: string = process.env.ZOHO_SMTP_PASSWORD ?? process.env.ZOHO_APP_PASSWORD ?? '';

    if (!SMTP_USER || !SMTP_PASS) {
      throw new Error('Email service not configured');
    }

    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.default.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const submittedAt = new Date().toUTCString();

    // Strip CR/LF from header-bound values to prevent header injection.
    const clean = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
    const subject =
      source === 'whatsapp-ai-landing-page'
        ? `New WhatsApp AI Demo Request — ${clean(business)}`
        : `New enquiry from ${clean(name)} — ${clean(business)}${source ? ` [${clean(source)}]` : ''}`;

    await transporter.sendMail({
      from: `"Dravonix Website" <${SMTP_USER}>`,
      to: 'admin@dravonixmedia.com',
      replyTo: `${name} <${email}>`,
      subject,
      text: `Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nPhone: ${phone}\nNeed: ${need}\nSubmitted: ${submittedAt}${source ? `\nSource: ${source}` : ''}${pageUrl ? `\nPage: ${pageUrl}` : ''}${details ? `\n\nDetails:\n${details}` : ''}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#1d4ed8;">New enquiry — Dravonix</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#6b7280;width:100px;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Business</td><td>${escapeHtml(business)}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Phone</td><td>${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280;">Need</td><td>${escapeHtml(need)}</td></tr>
          ${source ? `<tr><td style="padding:6px 0;color:#6b7280;">Source</td><td>${escapeHtml(source)}</td></tr>` : ''}
          ${pageUrl ? `<tr><td style="padding:6px 0;color:#6b7280;">Page</td><td>${escapeHtml(pageUrl)}</td></tr>` : ''}
        </table>
        ${details ? `<pre style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px;background:#f9fafb;padding:12px;border-radius:8px;margin-top:16px;">${escapeHtml(details)}</pre>` : ''}
        <p style="font-size:12px;color:#9ca3af;margin-top:20px;">Submitted ${escapeHtml(submittedAt)}</p>
      </div>`,
    });

    return { ok: true };
  });

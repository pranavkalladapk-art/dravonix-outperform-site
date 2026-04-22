

## Goal
Make the contact form on the home page actually deliver enquiries to **admin@dravonixmedia.com** (your Zoho mailbox), instead of only showing a success toast.

## Approach
The form currently runs only in the browser — there is no backend, so it can't send mail. We'll add a small server endpoint that receives the form submission and emails it to your Zoho address. The visitor never sees your address; it stays server-side.

## How email will be sent

I recommend using **Lovable's built-in email infrastructure** (no extra account, no API keys to manage). It needs:

1. **Lovable Cloud** enabled on the project (one-click).
2. A **verified sender domain** — a subdomain of `dravonixmedia.com` (e.g. `notify.dravonixmedia.com`) delegated to Lovable's nameservers. Enquiries will be sent **from** something like `noreply@dravonixmedia.com` and delivered **to** `admin@dravonixmedia.com`.
3. Email infrastructure scaffolding (queues, retry, suppression — set up automatically).

> Important: your Zoho setup for `admin@dravonixmedia.com` (MX records on the root domain) is **not affected**. We only delegate a small `notify.` subdomain for sending. Receiving on `admin@dravonixmedia.com` continues to work exactly as today.

If you prefer to send through Zoho's own SMTP/API instead, that's possible but requires creating an app password / API token in Zoho and storing it as a secret — let me know and I'll switch the plan.

## Changes

**1. Enable Lovable Cloud** (prerequisite for any backend/email).

**2. Set up sender email domain** — guided dialog where you'll add 2 NS records at your domain registrar for `notify.dravonixmedia.com`. Verification can take a few minutes to a few hours.

**3. Email infrastructure setup** — automatic, creates the send queue and tables.

**4. New "Contact Enquiry" email template** (`src/lib/email-templates/contact-enquiry.tsx`)
A clean branded email containing:
- Name, Business, Email, Phone, What they need
- Submission timestamp
- Reply-To header set to the visitor's email so you can reply directly from Zoho

**5. New public server route** (`src/routes/api/public/contact.ts`)
- Accepts POST with the form fields
- Validates with Zod (same rules as the client)
- Basic in-memory rate limit (per IP) to deter spam
- Sends the email to `admin@dravonixmedia.com`
- Returns `{ ok: true }` or a structured error

**6. Update `src/components/dravonix/LeadCapture.tsx`**
- Replace the fake `setTimeout` with a real `fetch('/api/public/contact', …)`
- Keep existing validation, toast on success/failure, form reset on success
- Show a clear error toast if delivery fails

## Files

- `src/lib/email-templates/contact-enquiry.tsx` (new)
- `src/lib/email-templates/registry.ts` (updated to register the template)
- `src/routes/api/public/contact.ts` (new)
- `src/components/dravonix/LeadCapture.tsx` (updated submit handler)

## What you'll need to do
- Approve enabling Lovable Cloud
- Add 2 NS records at your domain registrar when prompted (for `notify.dravonixmedia.com`)
- That's it — enquiries will start arriving at `admin@dravonixmedia.com`


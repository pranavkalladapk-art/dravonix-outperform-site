

## Fix all three security findings

Three issues flagged on the security view, all related to the contact form pipeline. Here's the plan.

### 1. SMTP header injection (error)

In `supabase/functions/send-contact-email/index.ts`, the user-supplied `name`, `business`, and `email` values are interpolated directly into SMTP headers (`Subject`, `Reply-To`). An attacker could inject `\r\n` to add hidden `Bcc:`/`Cc:` headers and turn the Zoho account into a relay.

**Fix**: In `validate()`, strip CR/LF (and other control chars) from every field before returning. Apply the sanitised values everywhere they hit headers (`subject`, `replyTo`, HTML/text body — body too, defensively).

```ts
const sanitize = (s: string) => s.replace(/[\r\n\t\v\f\x00-\x1F\x7F]/g, "").trim();
```

Use it on `name`, `business`, `email`, `phone`, `need` inside `validate()`.

### 2. Public INSERT policy on `contact_enquiries` (warn — RLS Always True + Open Endpoint)

Right now `contact_enquiries` has an anon-accessible `INSERT ... WITH CHECK (true)` policy. That lets anyone bypass the edge function entirely and POST raw rows directly to the REST API — no validation, no email, no audit trail.

**Fix**: Drop the public anon INSERT policy. The edge function already inserts with the service-role key (which bypasses RLS), so legitimate form submissions keep working. Direct REST writes from the browser get blocked.

Migration:
```sql
DROP POLICY "Anyone can submit an enquiry" ON public.contact_enquiries;
```

The "Admins can view all enquiries" SELECT policy stays untouched.

### 3. Unauthenticated edge function with no rate limiting (warn — Open Endpoint)

The edge function accepts unlimited anonymous POSTs. Per project rules, I will **not** add backend rate limiting (no infra primitives for it yet). Closing the direct-DB hole in #2 already removes the worst abuse path (raw row spam). The function itself remains open by design — it's a public contact form — but I'll mark this finding as a known gap so it stops re-surfacing.

**Action**: Mark the `contact_fn_no_ratelimit` finding as ignored with an explanation (known platform limitation; revisit when rate-limiting primitives ship). If you'd rather add a CAPTCHA (e.g. Cloudflare Turnstile) instead, say the word and I'll wire that in.

### Files & operations

- **Edit** `supabase/functions/send-contact-email/index.ts` — add `sanitize()` helper, apply inside `validate()`.
- **Migration** — `DROP POLICY "Anyone can submit an enquiry" ON public.contact_enquiries;`
- **Security findings** — mark `smtp_header_injection` and `SUPA_rls_policy_always_true` as fixed after deploy; mark `contact_fn_no_ratelimit` as ignored (known gap).

No frontend changes needed — `LeadCapture.tsx` already calls the edge function via `supabase.functions.invoke`, which continues to work.


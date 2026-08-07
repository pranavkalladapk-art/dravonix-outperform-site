import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { trackLead } from "@/lib/metaPixel";
import { DRAIVA_PRODUCTS, type DraivaProductKey } from "./draiva-products";

const productKeys = DRAIVA_PRODUCTS.map((p) => p.key) as [DraivaProductKey, ...DraivaProductKey[]];

const schema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  company: z.string().trim().min(1, "Business / company name is required").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone / WhatsApp number")
    .max(20, "Enter a valid phone / WhatsApp number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid phone / WhatsApp number"),
  country: z.string().trim().min(1, "Country is required").max(100),
  product: z.enum(productKeys, { errorMap: () => ({ message: "Select a product" }) }),
  message: z.string().trim().max(2000).optional(),
});

const inputClass =
  "mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none";
const labelClass = "text-xs font-semibold uppercase tracking-widest text-white/60";

export function DraivaEnquiryForm({ initialProduct }: { initialProduct?: DraivaProductKey }) {
  const [product, setProduct] = useState<DraivaProductKey>(initialProduct ?? "whatsapp");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sentRef = useRef(false);

  useEffect(() => {
    if (initialProduct) setProduct(initialProduct);
  }, [initialProduct]);

  const selected = DRAIVA_PRODUCTS.find((p) => p.key === product) ?? DRAIVA_PRODUCTS[0];
  const isLive = selected.status === "NOW ONBOARDING";
  const heading = isLive ? "Request a Live Demo" : "Register Your Interest";
  const submitLabel = isLive ? "Request a Live Demo" : "Register Interest";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    if ((fd.get("company_website") as string)?.length) return;

    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      country: fd.get("country"),
      product: fd.get("product"),
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    const d = parsed.data;
    const item = DRAIVA_PRODUCTS.find((p) => p.key === d.product) ?? DRAIVA_PRODUCTS[0];
    const live = item.status === "NOW ONBOARDING";

    setSubmitting(true);
    try {
      await sendContactEmail({
        data: {
          name: d.name,
          business: d.company,
          email: d.email,
          phone: d.phone,
          need: item.name as never,
          source: "draiva-connect-enquiry",
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          details: [
            `Interested product: ${item.name} (${item.status})`,
            `Request type: ${live ? "Live demo request" : "Interest registration"}`,
            `Country: ${d.country}`,
            `Requirement: ${d.message || "—"}`,
            `Submitted: ${new Date().toISOString()}`,
          ].join("\n"),
        },
      });
      sentRef.current = true;
      trackLead({ content_name: live ? "DRAIVA Demo Request" : "DRAIVA Interest", content_category: item.name });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("DRAIVA enquiry submit failed:", err);
      toast.error("We couldn't submit your request right now. Please email admin@dravonixmedia.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book-demo" className="scroll-mt-28 bg-[var(--navy)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--muted-text)]">
            {isLive
              ? "DRAIVA WhatsApp is onboarding businesses today. Tell us about your business and our team will arrange a live demonstration."
              : `${selected.name} is still in development. Register your interest and we'll contact you as soon as it becomes available.`}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#25D366]" strokeWidth={2} />
                <p className="mt-4 text-lg font-semibold text-white">
                  Thank you. Your request has been received — the Dravonix team will contact you
                  shortly.
                </p>
                <p className="mt-3 text-sm text-[var(--muted-text)]">admin@dravonixmedia.com</p>
                <button
                  type="button"
                  onClick={() => {
                    sentRef.current = false;
                    setSubmitted(false);
                  }}
                  className="mt-6 text-sm text-white/70 underline underline-offset-4 hover:text-white"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dv-name" className={labelClass}>Full Name</label>
                    <input id="dv-name" name="name" required maxLength={100} className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="dv-company" className={labelClass}>Business / Company Name</label>
                    <input id="dv-company" name="company" required maxLength={100} className={inputClass} placeholder="Business or brand" />
                  </div>
                  <div>
                    <label htmlFor="dv-email" className={labelClass}>Business Email</label>
                    <input id="dv-email" name="email" type="email" required maxLength={255} className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="dv-phone" className={labelClass}>Phone / WhatsApp Number</label>
                    <input id="dv-phone" name="phone" type="tel" inputMode="tel" required maxLength={20} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="dv-country" className={labelClass}>Country</label>
                    <input id="dv-country" name="country" required maxLength={100} className={inputClass} placeholder="e.g. India" />
                  </div>
                  <div>
                    <label htmlFor="dv-product" className={labelClass}>Interested Product</label>
                    <select
                      id="dv-product"
                      name="product"
                      required
                      value={product}
                      onChange={(e) => setProduct(e.target.value as DraivaProductKey)}
                      className={inputClass}
                    >
                      {DRAIVA_PRODUCTS.map((p) => (
                        <option key={p.key} value={p.key} className="bg-[var(--navy)]">
                          {p.name} — {p.status === "NOW ONBOARDING" ? "Now Onboarding" : "Coming Soon"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="dv-message" className={labelClass}>Business Requirement / Message</label>
                  <textarea
                    id="dv-message"
                    name="message"
                    rows={4}
                    maxLength={2000}
                    className={inputClass}
                    placeholder="Tell us what you'd like DRAIVA to handle."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--blue-brand)] px-8 py-4 text-base font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : submitLabel}
                </button>
                <p className="text-center text-xs text-[var(--muted-text)]">
                  {isLive
                    ? "We respond within 24 hours."
                    : "No launch date is confirmed. We'll only contact you about this product."}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

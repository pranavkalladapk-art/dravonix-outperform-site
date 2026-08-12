import { useRef, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { sendContactEmail } from "@/lib/sendContactEmail";
import { trackLead } from "@/lib/metaPixel";

const enquiryVolumes = ["Below 500", "500–2,000", "2,000–5,000", "Above 5,000", "Not sure"];
const whatsappSetups = [
  "Normal WhatsApp",
  "WhatsApp Business App",
  "WhatsApp Business Platform/API",
  "Not currently using WhatsApp",
  "Not sure",
];
const languageOptions = [
  "English",
  "Malayalam",
  "Malayalam-English mixed",
  "Hindi",
  "Arabic",
  "Other",
];

const schema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  company: z.string().trim().min(1, "Company name is required").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Enter a valid WhatsApp number")
    .max(20, "Enter a valid WhatsApp number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid WhatsApp number"),
  category: z.string().trim().min(1, "Business category is required").max(100),
  region: z.string().trim().min(1, "Country or region is required").max(100),
  volume: z.string().min(1, "Select approximate monthly enquiries"),
  setup: z.string().min(1, "Select your current WhatsApp setup"),
  languages: z.array(z.string()).min(1, "Select at least one preferred language"),
  requirements: z.string().trim().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the consent statement" }) }),
});

const inputClass =
  "mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none";
const labelClass = "text-xs font-semibold uppercase tracking-widest text-white/60";

export function WhatsAppDemoForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sentRef = useRef(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || sentRef.current) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Honeypot — bots fill hidden fields.
    if ((fd.get("company_website") as string)?.length) return;

    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      whatsapp: fd.get("whatsapp"),
      category: fd.get("category"),
      region: fd.get("region"),
      volume: fd.get("volume") ?? "",
      setup: fd.get("setup") ?? "",
      languages: fd.getAll("languages") as string[],
      requirements: fd.get("requirements") ?? "",
      consent: fd.get("consent") === "on",
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }

    const d = parsed.data;
    setSubmitting(true);
    try {
      await sendContactEmail({
        data: {
          name: d.name,
          business: d.company,
          email: d.email,
          phone: d.whatsapp,
          need: "WhatsApp AI",
          source: "whatsapp-ai-landing-page",
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          details: [
            `Business category: ${d.category}`,
            `Country / region: ${d.region}`,
            `Approx. monthly enquiries: ${d.volume}`,
            `Current WhatsApp setup: ${d.setup}`,
            `Preferred business languages: ${d.languages.join(", ")}`,
            `Main requirements: ${d.requirements || "—"}`,
            `Consent: Accepted`,
            `Source: whatsapp-ai-landing-page`,
            `Submitted: ${new Date().toISOString()}`,
          ].join("\n"),
        },
      });
      sentRef.current = true;
      trackLead({ content_name: "WhatsApp AI Demo Request", content_category: "WhatsApp AI" });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("WhatsApp AI demo submit failed:", err);
      toast.error(
        "We couldn't submit your request right now. Please try again or contact admin@dravonixmedia.com."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="demo" className="scroll-mt-24 bg-[var(--navy)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Book a Demo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--muted-text)]">
            Tell us about your business and the Dravonix team will contact you to discuss the right
            WhatsApp AI setup.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#25D366]" strokeWidth={2} />
                <p className="mt-4 text-lg font-semibold text-white">
                  Thank you. Your demo request has been received. The Dravonix team will contact you
                  shortly.
                </p>
                <p className="mt-3 text-sm text-[var(--muted-text)]">
                  admin@dravonixmedia.com · www.dravonixmedia.com
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate={false} className="grid gap-5">
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
                    <label htmlFor="wa-name" className={labelClass}>Full Name</label>
                    <input id="wa-name" name="name" required maxLength={100} className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="wa-company" className={labelClass}>Company Name</label>
                    <input id="wa-company" name="company" required maxLength={100} className={inputClass} placeholder="Business or brand" />
                  </div>
                  <div>
                    <label htmlFor="wa-email" className={labelClass}>Business Email</label>
                    <input id="wa-email" name="email" type="email" required maxLength={255} className={inputClass} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="wa-number" className={labelClass}>WhatsApp Number</label>
                    <input id="wa-number" name="whatsapp" type="tel" inputMode="tel" required maxLength={20} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="wa-category" className={labelClass}>Business Category</label>
                    <input id="wa-category" name="category" required maxLength={100} className={inputClass} placeholder="e.g. Optical store, Clinic, Real estate" />
                  </div>
                  <div>
                    <label htmlFor="wa-region" className={labelClass}>Country or Region</label>
                    <input id="wa-region" name="region" required maxLength={100} className={inputClass} placeholder="e.g. Kerala, India" />
                  </div>
                  <div>
                    <label htmlFor="wa-volume" className={labelClass}>Approx. Monthly Enquiries</label>
                    <select id="wa-volume" name="volume" required defaultValue="" className={inputClass}>
                      <option value="" disabled className="bg-[var(--navy)]">Select an option</option>
                      {enquiryVolumes.map((v) => (
                        <option key={v} value={v} className="bg-[var(--navy)]">{v}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="wa-setup" className={labelClass}>Current WhatsApp Setup</label>
                    <select id="wa-setup" name="setup" required defaultValue="" className={inputClass}>
                      <option value="" disabled className="bg-[var(--navy)]">Select an option</option>
                      {whatsappSetups.map((v) => (
                        <option key={v} value={v} className="bg-[var(--navy)]">{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>Preferred business languages</legend>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted-text)]">
                    These languages guide DRAIVA's default communication style. DRAIVA can still
                    respond in other customer languages when it can reasonably determine the
                    language.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {languageOptions.map((l) => (
                      <label
                        key={l}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition-colors focus-within:border-[var(--cyan-accent)] hover:border-[var(--cyan-accent)]/60"
                      >
                        <input type="checkbox" name="languages" value={l} className="h-3.5 w-3.5 accent-[var(--cyan-accent)]" />
                        {l}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="wa-req" className={labelClass}>Main Requirements</label>
                  <textarea
                    id="wa-req"
                    name="requirements"
                    rows={4}
                    maxLength={2000}
                    className={inputClass}
                    placeholder="What would you like the assistant to handle?"
                  />
                </div>

                <label htmlFor="wa-consent" className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted-text)]">
                  <input id="wa-consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 flex-shrink-0 accent-[var(--cyan-accent)]" />
                  <span>
                    I agree that Dravonix Media may contact me regarding this enquiry and understand
                    that submitting this form does not activate the service automatically.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--blue-brand)] px-8 py-4 text-base font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Request a Demo"}
                </button>
                <p className="text-center text-xs text-[var(--muted-text)]">
                  admin@dravonixmedia.com · www.dravonixmedia.com
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business: z.string().trim().min(1, "Business name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid contact number")
    .max(20, "Enter a valid contact number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid contact number"),
  need: z.enum(["Branding", "Social Media", "Content", "Strategy", "All of the above"], {
    errorMap: () => ({ message: "Please choose an option" }),
  }),
});

const needs = ["Branding", "Social Media", "Content", "Strategy", "All of the above"] as const;

export function LeadCapture() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const need = sessionStorage.getItem("dravonix_contact_need");
    if (need) {
      const select = document.getElementById("need") as HTMLSelectElement | null;
      if (select) {
        select.value = need;
        select.focus();
      }
      sessionStorage.removeItem("dravonix_contact_need");
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      business: fd.get("business"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      need: fd.get("need"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: parsed.data,
      });
      if (error) throw error;
      toast.success("Request received — we'll respond within 24 hours.");
      form.reset();
    } catch (err) {
      console.error("Contact submit failed:", err);
      toast.error("Couldn't send right now. Please try again or email admin@dravonixmedia.com.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--blue-brand)] py-20 md:py-28"
    >
      <div aria-hidden className="absolute inset-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lead-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lead-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let's Engineer Your Brand.
          </h2>
          <p className="mt-4 max-w-md text-base text-white/90 md:mt-5 md:text-lg">
            Book a free 30-minute strategy call. No commitment. Just clarity.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/85 md:mt-8">
            <li>• Audit of your current presence</li>
            <li>• A clear plan for your next 90 days</li>
            <li>• Honest answers — not a sales pitch</li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-[var(--navy)] p-5 shadow-2xl sm:p-6 md:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="business" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Business / Brand name
                </label>
                <input
                  id="business"
                  name="business"
                  required
                  maxLength={100}
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                  placeholder="Company or brand"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                  placeholder="you@brand.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Contact Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  inputMode="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--cyan-accent)] focus:outline-none"
                  placeholder="+1 555 123 4567"
                />
              </div>
              <div>
                <label htmlFor="need" className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  What do you need help with?
                </label>
                <select
                  id="need"
                  name="need"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white focus:border-[var(--cyan-accent)] focus:outline-none"
                >
                  <option value="" disabled className="bg-[var(--navy)]">
                    Select an option
                  </option>
                  {needs.map((n) => (
                    <option key={n} value={n} className="bg-[var(--navy)]">
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Book My Free Call"}
              </button>
              <p className="text-center text-xs text-white/60">We respond within 24 hours.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

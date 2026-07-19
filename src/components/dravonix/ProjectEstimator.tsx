import { ArrowLeft, ArrowRight, Zap, Target, ShieldCheck, UserCheck, Rocket, MousePointerClick, HelpCircle, Calculator, CalendarCheck, Palette, Globe, Layout, TrendingUp, Search, Share2, Bot, PenTool } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { trackLead } from "@/lib/metaPixel";

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const benefits = [
  { icon: Zap, title: "Instant Estimate", desc: "Get a clear price range in minutes — no waiting, no back-and-forth." },
  { icon: Target, title: "Tailored Pricing", desc: "Every quote is built around your exact scope, goals, and timeline." },
  { icon: ShieldCheck, title: "No Hidden Charges", desc: "Transparent numbers upfront. What you see is what you pay." },
  { icon: UserCheck, title: "Expert Review", desc: "Every estimate is validated by a Dravonix strategist before delivery." },
  { icon: Rocket, title: "Fast & Simple", desc: "A guided flow designed to respect your time from the first click." },
];

const steps = [
  { icon: MousePointerClick, title: "Choose Your Service", desc: "Pick the service that matches your project — branding, web, marketing, or more." },
  { icon: HelpCircle, title: "Answer a Few Questions", desc: "Tell us about scope, features, and timeline in a short guided form." },
  { icon: Calculator, title: "Get Your Estimate", desc: "Receive an instant, tailored budget range built for your project." },
  { icon: CalendarCheck, title: "Book a Consultation", desc: "Talk to our team to refine scope and lock in your roadmap." },
];

const services = [
  { icon: Palette, name: "Brand Identity" },
  { icon: Globe, name: "Website Development" },
  { icon: Layout, name: "UI/UX Design" },
  { icon: TrendingUp, name: "Performance Marketing" },
  { icon: Search, name: "SEO" },
  { icon: Share2, name: "Social Media Management" },
  { icon: Bot, name: "AI Solutions" },
  { icon: PenTool, name: "Content Creation" },
];

function EstimateButton({ children, variant = "primary", label }: { children: React.ReactNode; variant?: "primary" | "light"; label: string }) {
  const base = "group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold shadow-xl transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] text-white shadow-[0_0_40px_-8px_var(--cyan-accent)]"
      : "bg-white text-[var(--navy)]";
  return (
    <a
      href={ESTIMATOR_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead({ content_name: label, content_category: "Project Estimator" })}
      className={`${base} ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function ProjectEstimator() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div aria-hidden className="absolute inset-0 opacity-30">
            <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--blue-brand)] blur-[140px]" />
            <div className="absolute top-40 right-0 h-[300px] w-[300px] rounded-full bg-[var(--cyan-accent)] blur-[120px] opacity-40" />
          </div>
          <div aria-hidden className="absolute inset-0 opacity-[0.04]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="est-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#est-grid)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <div className="flex justify-center">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur-sm transition-all hover:-translate-x-0.5 hover:border-[var(--cyan-accent)]/40 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  Back to Home
                </Link>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--cyan-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                <Calculator className="h-3.5 w-3.5" />
                Project Estimator
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Get an Instant Project Estimate
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                Estimate the budget for your website, branding, digital marketing, or creative project in just a few minutes.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex justify-center">
                <EstimateButton label="Hero – Start Free Estimation">Start Free Estimation</EstimateButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why Use */}
        <section className="bg-[var(--slate-mid)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Why Use Our Estimator
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                  Built for clarity, speed, and the confidence to move forward.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 80}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_-12px_var(--cyan-accent)]">
                    <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--blue-brand)]/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-[var(--blue-brand)]/30 to-[var(--cyan-accent)]/20 text-[var(--cyan-accent)]">
                        <b.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{b.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  How It Works
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                  Four simple steps from question to quote.
                </p>
              </div>
            </Reveal>
            <div className="relative mt-16 grid gap-8 md:grid-cols-4">
              <div aria-hidden className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--cyan-accent)]/40 to-transparent md:block" />
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative grid h-12 w-12 place-items-center rounded-full border border-[var(--cyan-accent)]/40 bg-[var(--navy)] text-[var(--cyan-accent)] shadow-[0_0_20px_-4px_var(--cyan-accent)]">
                      <s.icon className="h-5 w-5" />
                      <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[var(--blue-brand)] text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[var(--slate-mid)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Services You Can Estimate
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/70">
                  Whatever you're building, get a tailored budget in minutes.
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {services.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  <div className="group flex h-full flex-col items-start rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_var(--cyan-accent)]">
                    <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--blue-brand)]/20 text-[var(--cyan-accent)] transition-colors group-hover:bg-[var(--blue-brand)]/30">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-sm font-bold text-white md:text-base">
                      {s.name}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden bg-[var(--blue-brand)] py-20 md:py-28">
          <div aria-hidden className="absolute inset-0 opacity-25">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="est-cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#est-cta-grid)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
                Get an instant estimate and let Dravonix help you build something exceptional.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 flex justify-center">
                <EstimateButton variant="light" label="Banner – Start Free Estimation">
                  Start Free Estimation
                </EstimateButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

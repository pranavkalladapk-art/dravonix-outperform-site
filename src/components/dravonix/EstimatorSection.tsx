import { ArrowRight, Calculator, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { trackLead } from "@/lib/metaPixel";

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

const highlights = [
  { icon: Zap, label: "Instant estimate" },
  { icon: ShieldCheck, label: "No hidden charges" },
  { icon: Sparkles, label: "Expert reviewed" },
];

export function EstimatorSection() {
  return (
    <section id="project-estimator" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--slate-mid)] via-[var(--navy)] to-[var(--slate-mid)] p-8 md:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[var(--blue-brand)] blur-[120px]" />
              <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-[var(--cyan-accent)] blur-[120px] opacity-60" />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="est-sec-grid" width="42" height="42" patternUnits="userSpaceOnUse">
                    <path d="M 42 0 L 0 0 0 42" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#est-sec-grid)" />
              </svg>
            </div>

            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--cyan-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                  <Calculator className="h-3.5 w-3.5" />
                  Project Estimator
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  Know your project budget in minutes.
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  Answer a few quick questions and get a tailored, transparent estimate for
                  branding, web, marketing, or creative work — no calls required.
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {highlights.map((h) => (
                    <li
                      key={h.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80"
                    >
                      <h.icon className="h-3.5 w-3.5 text-[var(--cyan-accent)]" />
                      {h.label}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={ESTIMATOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackLead({ content_name: "Home – Start Free Estimation" })
                    }
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_var(--cyan-accent)] transition-transform hover:-translate-y-0.5"
                  >
                    Start Free Estimation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/project-estimator"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-[var(--cyan-accent)]/40 hover:text-white"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-[var(--navy)]/70 p-6 backdrop-blur-md shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                      Estimated Range
                    </span>
                    <span className="rounded-full bg-[var(--cyan-accent)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--cyan-accent)]">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                    $2,400 – $6,800
                  </div>
                  <div className="mt-6 space-y-3">
                    {[
                      { k: "Service", v: "Website Development" },
                      { k: "Scope", v: "8–12 pages" },
                      { k: "Timeline", v: "3–5 weeks" },
                    ].map((row) => (
                      <div
                        key={row.k}
                        className="flex items-center justify-between border-b border-white/5 pb-2 text-sm last:border-0"
                      >
                        <span className="text-white/50">{row.k}</span>
                        <span className="font-medium text-white">{row.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)]" />
                  </div>
                  <p className="mt-3 text-xs text-white/50">
                    Sample preview — your estimate is tailored to your inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  "Boutique attention — your brand is never one of fifty clients",
  "Strategy first — we plan before we post",
  "Built for growth — every piece of content has a purpose",
  "Senior-only team — no hand-offs, no juniors learning on your budget",
  "Attribution-first reporting tied to revenue, not vanity metrics",
  "In-house creative studio for speed and consistency",
  "Sprint-based execution with weekly performance reviews",
  "Transparent pricing and full ownership of every asset",
];

export function WhyDravonix() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] px-5 py-20 md:px-12 md:py-28 lg:px-16">
      {/* Faint D watermark */}
      <svg
        aria-hidden
        viewBox="0 0 320 320"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        fill="none"
      >
        <defs>
          <linearGradient id="why-dgrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <g>
          <path d="M70 50 H170 a100 110 0 0 1 0 220 H70 Z" stroke="url(#why-dgrad)" strokeWidth="3" />
          <path d="M100 90 H160 a70 70 0 0 1 0 140 H100 Z" stroke="url(#why-dgrad)" strokeWidth="2" opacity="0.55" />
          <path d="M130 130 H155 a30 30 0 0 1 0 60 H130 Z" stroke="url(#why-dgrad)" strokeWidth="2" opacity="0.35" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Why Dravonix
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
              work with us
            </span>
            ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Eight reasons brands choose Dravonix as their long-term growth partner.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-5 md:mt-16 md:grid-cols-2 md:gap-y-6">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 md:gap-4">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-[var(--blue-brand)] text-white shadow-[0_4px_14px_oklch(0.546_0.219_263/0.5)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base leading-relaxed text-white/85 md:text-lg">{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

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
    <section className="bg-[var(--navy)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <Reveal className="px-5 py-16 md:px-12 md:py-28 lg:px-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Why Dravonix
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Why{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
              work with us
            </span>
            ?
          </h2>
          <p className="mt-4 max-w-md text-base text-white/70 md:text-lg">
            Eight reasons brands choose Dravonix as their long-term growth partner.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="relative flex min-h-[480px] items-center justify-center overflow-hidden border-t border-white/5 bg-[var(--card-dark)] px-5 py-16 md:px-10 md:py-20 lg:border-l lg:border-t-0"
        >
          {/* Ambient glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-ambient rounded-full bg-[oklch(0.546_0.219_263/0.35)] blur-3xl" />
          </div>

          {/* Centered D watermark */}
          <svg
            aria-hidden
            viewBox="0 0 320 320"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[110%] w-auto -translate-x-1/2 -translate-y-1/2 opacity-20"
            fill="none"
          >
            <defs>
              <linearGradient id="why-dgrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <filter id="why-dglow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#why-dglow)">
              <path
                d="M70 50 H170 a100 110 0 0 1 0 220 H70 Z"
                stroke="url(#why-dgrad)"
                strokeWidth="3"
              />
              <path
                d="M100 90 H160 a70 70 0 0 1 0 140 H100 Z"
                stroke="url(#why-dgrad)"
                strokeWidth="2"
                opacity="0.55"
              />
              <path
                d="M130 130 H155 a30 30 0 0 1 0 60 H130 Z"
                stroke="url(#why-dgrad)"
                strokeWidth="2"
                opacity="0.35"
              />
            </g>
          </svg>

          {/* Subtle dark overlay for readability */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--card-dark)]/70 via-[var(--card-dark)]/40 to-[var(--card-dark)]/70"
          />

          {/* Checklist overlay */}
          <ul className="relative z-10 w-full max-w-lg space-y-4 md:space-y-5">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 md:gap-4">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-[var(--blue-brand)] text-white shadow-[0_4px_14px_oklch(0.546_0.219_263/0.5)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] md:text-lg">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

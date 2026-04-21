import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import dMark from "@/assets/dravonix-dmark.png";

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
        <Reveal className="px-5 py-20 md:px-12 md:py-28 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            Why Dravonix
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Why work with us?
          </h2>
          <ul className="mt-10 space-y-5">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-[var(--blue-brand)] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base leading-relaxed text-white/85 md:text-lg">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={120}
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-l border-white/5 bg-[var(--card-dark)] p-10"
        >
          <div aria-hidden className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-ambient rounded-full bg-[oklch(0.546_0.219_263/0.4)] blur-3xl" />
          </div>
          <img
            src={dMark}
            alt="Dravonix mark"
            className="relative h-64 w-64 object-contain md:h-80 md:w-80"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  );
}

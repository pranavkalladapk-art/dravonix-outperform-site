import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const quotes = [
  {
    q: "Dravonix rebuilt our content engine from the ground up. We tripled qualified leads in one quarter.",
    name: "Maya Reyes",
    role: "VP Marketing, Hexen Labs",
  },
  {
    q: "The most disciplined team we've worked with. Strategy, creative, and reporting — all sharp.",
    name: "Daniel Okafor",
    role: "Founder, Northwave Apparel",
  },
  {
    q: "They treat social like a system. Numbers compound month after month. No noise, just output.",
    name: "Priya Shah",
    role: "Head of Growth, Loop Fintech",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[oklch(0.24_0.04_257)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
            Trusted By Operators
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Words from the teams we scale.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-xl border border-white/10 bg-[var(--navy)] p-7 transition-colors hover:border-[var(--cyan-accent)]/50">
                <div className="flex gap-0.5 text-[var(--cyan-accent)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/85">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

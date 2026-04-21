import { Instagram, Youtube, Linkedin, Music2, Twitter, Facebook } from "lucide-react";
import { Reveal } from "./Reveal";

const cases = [
  {
    brand: "Northwave Apparel",
    category: "DTC Fashion",
    metric: "+412%",
    metricLabel: "Reach in 90 days",
    platforms: [Instagram, Music2],
  },
  {
    brand: "Hexen Labs",
    category: "B2B SaaS",
    metric: "6.2x",
    metricLabel: "Pipeline from social",
    platforms: [Linkedin, Twitter],
  },
  {
    brand: "Verdant Foods",
    category: "Consumer CPG",
    metric: "1.8M",
    metricLabel: "Organic impressions",
    platforms: [Instagram, Youtube, Facebook],
  },
  {
    brand: "Loop Fintech",
    category: "Fintech",
    metric: "+318%",
    metricLabel: "Follower growth",
    platforms: [Linkedin, Twitter, Instagram],
  },
  {
    brand: "Atlas Outdoors",
    category: "Lifestyle",
    metric: "9.4%",
    metricLabel: "Engagement rate",
    platforms: [Instagram, Youtube],
  },
  {
    brand: "Quantum Studio",
    category: "Creator Brand",
    metric: "+250K",
    metricLabel: "Subscribers in 6 mo",
    platforms: [Youtube, Music2],
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-[var(--offwhite)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--blue-brand)]">
            Selected Work
          </span>
          <div className="mt-3 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-[var(--navy)] md:text-5xl">
              Results that compound.
            </h2>
            <p className="max-w-md text-[var(--navy)]/65">
              Six brands. Six categories. One operating system for outperformance.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.brand} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-[var(--navy)]/15 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--navy)]">
                      {c.brand}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[var(--navy)]/50">
                      {c.category}
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    {c.platforms.map((Icon, k) => (
                      <span
                        key={k}
                        className="grid h-8 w-8 place-items-center rounded-md bg-[var(--navy)]/5 text-[var(--navy)]/70"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <div className="font-display text-4xl font-bold tracking-tight text-[var(--blue-brand)]">
                    {c.metric}
                  </div>
                  <div className="mt-1 text-sm text-[var(--navy)]/70">{c.metricLabel}</div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

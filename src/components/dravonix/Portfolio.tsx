import { ArrowRight, Instagram, Youtube, Linkedin, Music2, Twitter, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const cases = [
  {
    brand: "Northwave Apparel",
    category: "DTC Fashion",
    metric: "+412%",
    metricLabel: "Reach in 90 days",
    outcome: "Rebuilt the content engine and tripled qualified traffic in one quarter.",
    platforms: [Instagram, Music2],
  },
  {
    brand: "Hexen Labs",
    category: "B2B SaaS",
    metric: "6.2x",
    metricLabel: "Pipeline from social",
    outcome: "Engineered a thought-leadership system that converted attention into revenue.",
    platforms: [Linkedin, Twitter],
  },
  {
    brand: "Verdant Foods",
    category: "Consumer CPG",
    metric: "1.8M",
    metricLabel: "Organic impressions",
    outcome: "Native-first creative scaled from zero to category leader in six months.",
    platforms: [Instagram, Youtube, Facebook],
  },
  {
    brand: "Loop Fintech",
    category: "Fintech",
    metric: "+318%",
    metricLabel: "Follower growth",
    outcome: "Compounded audience and engagement across LinkedIn and X without paid lift.",
    platforms: [Linkedin, Twitter, Instagram],
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-[var(--offwhite)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--blue-brand)]">
            Case Studies
          </span>
          <div className="mt-3 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-[var(--navy)] sm:text-4xl md:text-5xl">
              Results we've engineered.
            </h2>
            <p className="max-w-md text-[var(--navy)]/65">
              Four brands. Four categories. One operating system for outperformance.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.brand} delay={(i % 2) * 100}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-[var(--navy)]/15 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--navy)]">
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
                  <div className="font-display text-5xl font-bold tracking-tight text-[var(--blue-brand)]">
                    {c.metric}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[var(--navy)]/70">
                    {c.metricLabel}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--navy)]/65">
                    {c.outcome}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[var(--blue-brand)] transition-all hover:gap-3"
            >
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

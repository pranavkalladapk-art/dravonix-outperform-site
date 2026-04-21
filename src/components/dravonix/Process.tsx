import { Zap, Crosshair, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Zap,
    title: "Discover",
    tag: "Speed",
    desc: "Audit, benchmark, and decode what moves your audience. Zero guesswork.",
  },
  {
    n: "02",
    icon: Crosshair,
    title: "Build",
    tag: "Precision",
    desc: "Engineer the content engine — strategy, systems, and creative built to convert.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Scale",
    tag: "Progress",
    desc: "Iterate against data. Compound reach, retention, and revenue, month over month.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
            How We Work
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            A system, not a sprint.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Cyan connector line — desktop horizontal, mobile vertical */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-[2px] w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--cyan-accent)] to-transparent md:top-10 md:block"
          />
          <div className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-[var(--cyan-accent)] bg-[var(--navy)]">
                    <s.icon className="h-7 w-7 text-[var(--cyan-accent)]" />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="font-display text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                      {s.n} · {s.tag}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

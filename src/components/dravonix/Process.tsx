import { Zap, Crosshair, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    icon: Zap,
    title: "Discover",
    tag: "Speed",
    desc: "We learn your brand, audience, and goals inside out.",
  },
  {
    n: "02",
    icon: Crosshair,
    title: "Engineer",
    tag: "Precision",
    desc: "We build your content system, strategy, and creative direction.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Launch & Scale",
    tag: "Progress",
    desc: "We execute, analyse, and optimise — every week, every platform.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[var(--navy)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            Our Process
          </span>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
              system
            </span>
            , not a sprint.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Animated draw-on connector line */}
          <svg
            aria-hidden
            className="absolute left-1/2 top-10 hidden h-[2px] w-full max-w-5xl -translate-x-1/2 md:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="#2563EB"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              style={{ animation: "draw-line 2s ease-out 0.3s forwards" }}
            />
          </svg>

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 150}>
                <div className="relative">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-[var(--blue-brand)] bg-[var(--navy)] shadow-glow-brand">
                    <s.icon className="h-7 w-7 text-[var(--cyan-accent)]" />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="font-display text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                      {s.n} · {s.tag}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted-text)]">
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

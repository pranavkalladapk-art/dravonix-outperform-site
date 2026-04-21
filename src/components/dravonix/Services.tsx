import { ArrowRight, Sparkles, CalendarRange, Wand2, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Build a brand that commands attention — logo, visual system, tone of voice, brand guidelines.",
  },
  {
    icon: CalendarRange,
    title: "Social Media Management",
    desc: "Strategic content calendars, daily posting, community management and platform growth.",
  },
  {
    icon: Wand2,
    title: "AI-Integrated Video & Design",
    desc: "AI-assisted video edits, motion graphics, and on-brand design — produced faster, iterated smarter, scaled without losing craft.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Paid social campaigns, audience targeting, and funnel strategy focused on ROI.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[var(--navy)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            What We Do
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything your brand needs to compete and win.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]" />
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                  {s.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--cyan-accent)] transition-all group-hover:gap-2.5"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

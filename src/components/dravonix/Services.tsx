import { ArrowRight, Sparkles, CalendarRange, Wand2, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Sparkles,
    title: "Brand Identity",
    desc: "Build a brand that commands attention — logo, visual system, tone of voice, brand guidelines.",
    href: "/brand-identity",
  },
  {
    icon: CalendarRange,
    title: "Social Media Management",
    desc: "Strategic content calendars, daily posting, community management and platform growth.",
    href: "/social-media-management",
  },
  {
    icon: Wand2,
    title: "AI-Integrated Video & Design",
    desc: "AI-assisted video edits, motion graphics, and on-brand design — produced faster, iterated smarter, scaled without losing craft.",
    href: "/ai-studio",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    desc: "Paid social campaigns, audience targeting, and funnel strategy focused on ROI.",
    href: "/performance-marketing",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[var(--navy)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            What We Do
          </span>
          <h2 className="mt-4 mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything your brand needs to{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
              compete and win.
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
            Services that move the needle.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand md:p-7">
                <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]" />
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)] md:h-12 md:w-12">
                  <s.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white md:mt-6 md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted-text)] md:mt-3">
                  {s.desc}
                </p>
                <a
                  href={s.href ?? "/contact"}
                  aria-label={`Explore ${s.title} services`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--cyan-accent)] transition-all group-hover:gap-2.5 md:mt-6"
                >
                  {`Explore ${s.title} Services`}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

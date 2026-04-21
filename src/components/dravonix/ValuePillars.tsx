import { Target, MessageSquareHeart, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Target,
    title: "Precision-Built Strategy",
    desc: "No guesswork. Every decision is backed by data and research.",
  },
  {
    icon: MessageSquareHeart,
    title: "Content That Converts",
    desc: "AI-accelerated production meets human creative direction — content built to stop the scroll and start conversations.",
  },
  {
    icon: TrendingUp,
    title: "Growth, Not Vanity",
    desc: "We measure what matters: leads, reach, revenue — not just likes.",
  },
];

export function ValuePillars() {
  return (
    <section className="bg-[var(--slate-mid)] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:gap-8 md:px-8">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="flex flex-col items-start">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/20 text-[var(--cyan-accent)]">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {p.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

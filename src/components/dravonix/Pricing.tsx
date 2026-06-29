import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    tagline: "One-time project",
    desc: "Brand identity or social setup — perfect for new and relaunching brands.",
    features: [
      "Brand identity OR social media setup",
      "Logo, colour and type system",
      "Profile, bio and grid foundation",
      "Launch-ready handover",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Monthly retainer",
    desc: "Strategy, content and management — the engine room for compounding presence.",
    features: [
      "Monthly content strategy",
      "Reels, posts and creative production",
      "Community and account management",
      "Performance review every month",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    tagline: "Full-service partnership",
    desc: "Creative, paid, strategy and reporting under one roof.",
    features: [
      "Everything in Growth",
      "Performance marketing & paid ads",
      "Cinematic video production",
      "Full reporting and quarterly strategy",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--navy)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Engagement Tiers
          </span>
          <h2 className="mt-4 mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Clear scope. No guesswork.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
            Three ways to work together. Pick the one that fits where your brand is right now.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1",
                  t.highlight
                    ? "border-[var(--cyan-accent)]/50 shadow-[0_20px_60px_-20px_var(--cyan-accent)]"
                    : "border-white/10 hover:border-[var(--cyan-accent)]/40",
                )}
              >
                {t.highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-[var(--blue-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    Most Picked
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                  {t.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cyan-accent)]">
                  {t.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted-text)]">
                  {t.desc}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                    t.highlight
                      ? "bg-[var(--blue-brand)] text-white shadow-glow-brand"
                      : "border border-white/20 text-white hover:bg-white/10",
                  )}
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm italic text-[var(--muted-text)]">
            Transparent pricing shared on your strategy call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

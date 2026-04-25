import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const paragraphs = [
  "Dravonix is built for brands that refuse to be average. Our team brings experience across both national and international markets, giving us a clear understanding of what drives real business growth.",
  "At Dravonix, this isn\u2019t just work for us \u2014 it\u2019s what we\u2019re passionate about. We don\u2019t approach projects with a transactional mindset. Instead, we focus on building long-term value by understanding your goals and delivering work that creates real impact.",
  "We combine strategy, data, and creative execution to deliver measurable results. Every project follows a clear process \u2014 understanding your business, identifying opportunities, and executing with precision.",
  "Our team works closely with clients at every stage, ensuring transparency, consistency, and outcomes that align with real goals. No shortcuts. No inflated promises. Just focused work that performs.",
  "Because for us, the real reward isn\u2019t just revenue \u2014 it\u2019s the results we create and the growth our clients achieve.",
];

export function About() {
  return (
    <section id="about" className="bg-[var(--navy)] py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            About Dravonix
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Precision. Innovation.{" "}
            <span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">
              Performance.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 shadow-[0_0_60px_-20px_rgba(34,211,238,0.25)] backdrop-blur-sm md:p-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan-accent)] to-transparent" />
            <div className="space-y-5 text-left text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-lg font-medium leading-relaxed text-white md:text-xl">
                We&rsquo;re just getting started. So are you. Let&rsquo;s build something
                exceptional together.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="text-center">
          <Link
            to="/team"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-accent)]"
          >
            Meet the Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[var(--navy)] pt-28 pb-20 md:pt-40 md:pb-36"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Light streaks — desktop only */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-[28%] h-[2px] w-1/3 animate-streak bg-gradient-to-r from-transparent via-[var(--cyan-accent)] to-transparent" />
          <div className="absolute top-[58%] h-[1px] w-1/4 animate-streak bg-gradient-to-r from-transparent via-[var(--blue-brand)] to-transparent [animation-delay:-3.5s]" />
          <div className="absolute top-[72%] h-[2px] w-1/3 animate-streak bg-gradient-to-r from-transparent via-white/60 to-transparent [animation-delay:-5s]" />
        </div>

        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hero-grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal delay={80}>
          <h1 className="max-w-5xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            WE DON&rsquo;T MARKET.
            <br />
            WE ENGINEER{" "}
            <span className="text-[var(--blue-brand)]">GROWTH.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:mt-6 md:text-lg">
            Data-driven strategies. Creative excellence.
            <br />
            Results that speak.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5 sm:px-7 sm:text-base"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/0 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-7 sm:text-base"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex items-center gap-3 md:gap-4">
            <span aria-hidden className="hidden h-px w-10 bg-gradient-to-r from-transparent via-[var(--cyan-accent)]/70 to-[var(--cyan-accent)] sm:block" />
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-sm">
              Launching ambitious brands from{" "}
              <span className="text-[var(--blue-brand)]">zero</span> to{" "}
              <span className="text-[var(--blue-brand)]">visible</span>.
            </p>
            <span aria-hidden className="hidden h-px w-10 bg-gradient-to-l from-transparent via-[var(--cyan-accent)]/70 to-[var(--cyan-accent)] sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

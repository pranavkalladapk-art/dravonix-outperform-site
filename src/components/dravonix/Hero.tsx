import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--navy)] pt-32 pb-24 md:pt-40 md:pb-36"
    >
      {/* Abstract speed/arrow motion graphic */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/3 h-[480px] w-[480px] rounded-full bg-[oklch(0.546_0.219_263/0.18)] blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.738_0.13_215/0.12)] blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <svg
          className="absolute right-[-10%] top-1/2 hidden h-[120%] -translate-y-1/2 md:block"
          viewBox="0 0 600 600"
          fill="none"
        >
          <g stroke="url(#arrowGrad)" strokeWidth="1.5" opacity="0.55">
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M ${20 + i * 20} 300 L ${320 + i * 20} 60 L ${280 + i * 20} 60`}
              />
            ))}
          </g>
          <defs>
            <linearGradient id="arrowGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Social Marketing, Engineered
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
            Engineered to{" "}
            <span className="text-gradient-brand">Outperform.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            We build content strategies and social media systems that help brands grow,
            compete, and lead.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gradient-brand px-6 py-3.5 font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
            >
              Start Your Growth
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/0 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              See Our Work
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

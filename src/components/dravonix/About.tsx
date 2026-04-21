import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-[var(--navy)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <Reveal className="px-5 py-20 md:px-12 md:py-28 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
            About Dravonix
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Precision. Innovation. Performance.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Dravonix represents precision, innovation, and performance. We build advanced
            solutions that empower businesses to lead, scale, and outpace the future.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { k: "Speed", v: "Velocity over volume" },
              { k: "Precision", v: "Data-led decisions" },
              { k: "Progress", v: "Compounding outcomes" },
            ].map((p) => (
              <div key={p.k}>
                <div className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[var(--cyan-accent)]">
                  {p.k}
                </div>
                <div className="mt-1 text-sm text-white/65">{p.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-l border-white/5 bg-[oklch(0.24_0.04_257)] p-10"
        >
          <div aria-hidden className="absolute inset-0 opacity-40">
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[oklch(0.546_0.219_263/0.35)] blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-[oklch(0.738_0.13_215/0.25)] blur-3xl" />
          </div>
          {/* Geometric D mark */}
          <svg viewBox="0 0 320 320" className="relative h-64 w-64 md:h-80 md:w-80" fill="none">
            <defs>
              <linearGradient id="dgrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            <path
              d="M70 50 H170 a100 110 0 0 1 0 220 H70 Z"
              stroke="url(#dgrad)"
              strokeWidth="3"
            />
            <path
              d="M100 90 H160 a70 70 0 0 1 0 140 H100 Z"
              stroke="url(#dgrad)"
              strokeWidth="2"
              opacity="0.55"
            />
            <path
              d="M130 130 H155 a30 30 0 0 1 0 60 H130 Z"
              stroke="url(#dgrad)"
              strokeWidth="2"
              opacity="0.35"
            />
            <path d="M50 160 L240 160" stroke="#06B6D4" strokeWidth="1" opacity="0.4" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

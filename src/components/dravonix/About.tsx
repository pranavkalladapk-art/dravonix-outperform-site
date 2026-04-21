import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="bg-[var(--navy)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 lg:grid-cols-2">
        <Reveal className="px-5 py-20 md:px-12 md:py-28 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            About Dravonix
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Precision. Innovation. Performance.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted-text)]">
            Dravonix builds advanced marketing solutions that empower businesses to lead,
            scale, and outpace the future. We combine data intelligence with creative
            mastery to deliver results that move the needle.
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
                <div className="mt-1 text-sm text-[var(--muted-text)]">{p.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-l border-white/5 bg-[var(--card-dark)] p-10"
        >
          <div aria-hidden className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-ambient rounded-full bg-[oklch(0.546_0.219_263/0.4)] blur-3xl" />
          </div>
          {/* Geometric D mark with ambient glow */}
          <svg viewBox="0 0 320 320" className="relative h-64 w-64 md:h-80 md:w-80" fill="none">
            <defs>
              <linearGradient id="dgrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <filter id="dglow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#dglow)">
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
            </g>
            <path d="M50 160 L240 160" stroke="#06B6D4" strokeWidth="1" opacity="0.5" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

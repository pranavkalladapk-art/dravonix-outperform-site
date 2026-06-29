import { Reveal } from "./Reveal";

const stats = [
  { v: "4", l: "Core Services" },
  { v: "3", l: "Countries Served" },
  { v: "10+", l: "Brands Launched" },
  { v: "100%", l: "Asset Ownership — Always" },
];

export function FounderStats() {
  return (
    <section className="w-full border-y border-white/10 bg-[var(--slate-mid)] py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 md:grid-cols-4 md:px-8 md:divide-x md:divide-white/15">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 80}>
            <div className="px-4 text-center">
              <div className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                <span className="bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] bg-clip-text text-transparent">
                  {s.v}
                </span>
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)] sm:text-xs">
                {s.l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

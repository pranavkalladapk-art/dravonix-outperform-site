import { Sparkles, Wand2, Zap, Layers } from "lucide-react";
import { Reveal } from "./Reveal";

const capabilities = [
  {
    icon: Sparkles,
    title: "AI-assisted video editing & cuts",
    desc: "Smart trims, auto-captions, and pacing tuned for each platform.",
  },
  {
    icon: Wand2,
    title: "Generative design & visual concepts",
    desc: "Rapid mood boards, mockups, and on-brand asset variations.",
  },
  {
    icon: Zap,
    title: "Rapid iteration cycles",
    desc: "10x throughput — test more creatives, learn faster, scale what wins.",
  },
  {
    icon: Layers,
    title: "Human-led art direction",
    desc: "Every output reviewed and refined by senior creatives. AI accelerates, humans decide.",
  },
];

export function AIStudio() {
  return (
    <section
      id="ai-studio"
      className="relative overflow-hidden bg-[var(--card-dark)] py-20 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[var(--blue-brand)]/20 blur-3xl animate-ambient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-[360px] w-[360px] rounded-full bg-[var(--cyan-accent)]/15 blur-3xl animate-ambient"
      />

      {/* Decorative grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--navy)]/60 px-4 py-1.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--cyan-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--cyan-accent)]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              AI × Creative
            </span>
          </div>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
            Where AI meets{" "}
            <span className="bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] bg-clip-text text-transparent">
              brand craft.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
            We embed AI into every stage of video and design production —
            from concept to final cut — so your brand ships more, tests
            faster, and stays unmistakably on-brand.
          </p>

          {/* Floating tag chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              "Prompt → Render",
              "On-brand",
              "10x throughput",
              "Cinematic cuts",
              "Auto-captions",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Capability grid — 2x2 centered */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--navy)]/60 p-6 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan-accent)] to-transparent opacity-60"
                />
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--cyan-accent)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stat strip */}
        <Reveal delay={120}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-[var(--navy)]/60 py-5 backdrop-blur md:mt-14">
            {[
              { v: "10x", l: "Faster output" },
              { v: "100%", l: "On-brand" },
              { v: "<1m", l: "First render" },
            ].map((s) => (
              <div key={s.l} className="px-2 sm:px-4">
                <div className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  <span className="bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] bg-clip-text text-transparent">
                    {s.v}
                  </span>
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-[11px] sm:tracking-[0.18em]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}


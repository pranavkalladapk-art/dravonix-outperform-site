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
      className="relative overflow-hidden bg-[var(--card-dark)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-[var(--blue-brand)]/20 blur-3xl animate-ambient"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-[360px] w-[360px] rounded-full bg-[var(--cyan-accent)]/15 blur-3xl animate-ambient"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        {/* Left column */}
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              AI × Creative
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Where AI meets{" "}
              <span className="bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)] bg-clip-text text-transparent">
                brand craft.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)]">
              We embed AI into every stage of video and design production —
              from concept to final cut — so your brand ships more, tests
              faster, and stays unmistakably on-brand.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <li className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--cyan-accent)]">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {c.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Right column — prompt → render visual */}
        <Reveal delay={120}>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--blue-brand)]/30 to-[var(--cyan-accent)]/20 blur-2xl"
            />

            {/* Prompt card */}
            <div className="relative rounded-xl border border-white/10 bg-[var(--navy)]/80 p-5 shadow-glow-brand backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
                  Prompt
                </span>
                <span className="ml-auto h-2 w-2 rounded-full bg-[var(--cyan-accent)] animate-pulse" />
              </div>
              <p className="mt-3 font-mono text-sm leading-relaxed text-white/85">
                <span className="text-[var(--cyan-accent)]">{">"}</span>{" "}
                30s reel · product hero · cinematic, brand palette, hook in
                first 1.5s
              </p>
            </div>

            {/* Connector */}
            <div className="my-4 flex items-center gap-2 pl-6">
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--blue-brand)] to-[var(--cyan-accent)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Render
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--cyan-accent)] to-transparent" />
            </div>

            {/* Render card stack */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-white/5 bg-[var(--navy)]/60"
              />
              <div
                aria-hidden
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl border border-white/10 bg-[var(--navy)]/80"
              />
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[var(--blue-brand)]/30 via-[var(--navy)] to-[var(--cyan-accent)]/20 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Output · v3
                  </span>
                  <span className="rounded-full bg-[var(--cyan-accent)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--cyan-accent)]">
                    On-brand
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-md bg-gradient-to-br from-[var(--blue-brand)] to-[var(--blue-brand)]/40" />
                  <div className="aspect-square rounded-md bg-gradient-to-br from-[var(--cyan-accent)]/80 to-[var(--blue-brand)]/40" />
                  <div className="aspect-square rounded-md bg-gradient-to-br from-white/20 to-[var(--cyan-accent)]/40" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--cyan-accent)]" />
                  Generated in 38s · 6 variations
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

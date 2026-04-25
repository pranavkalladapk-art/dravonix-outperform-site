import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { TeamGrid } from "@/components/dravonix/TeamGrid";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Dravonix" },
      {
        name: "description",
        content:
          "Meet the founders shaping Dravonix — Pranav A, Sreerag S and Arunraj R. The minds behind a new-generation creative and performance agency.",
      },
      { property: "og:title", content: "Meet the Team — Dravonix" },
      {
        property: "og:description",
        content:
          "The minds shaping Dravonix — founders blending technology, storytelling and cinematic craft.",
      },
    ],
    links: [{ rel: "canonical", href: "https://dravonixmedia.com/team" }],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-[var(--navy)] text-white">
      <Nav />

      <main>
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)] transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Reveal>
            <div className="mt-8 text-center">
              <Reveal delay={80}>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  Our People
                </span>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Meet the Team
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  The minds shaping Dravonix.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12 text-center md:mb-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--cyan-accent)]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--cyan-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
                  Leadership
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Co-<span className="bg-gradient-to-r from-[var(--cyan-accent)] to-[var(--blue-brand)] bg-clip-text text-transparent">Founders</span>
                </h2>
              </Reveal>
            </div>
            <TeamGrid />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Want to build with us?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Tell us about your brand. We&rsquo;ll show you what&rsquo;s possible.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

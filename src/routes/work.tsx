import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { GalleryCard } from "@/components/dravonix/GalleryCard";
import { galleryItems, type GalleryItemType } from "@/components/dravonix/gallery-data";
import { buildHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () =>
    buildHead("/work", {
      title: "Our Work — Project Gallery | Dravonix",
      description:
        "Websites, social posts and reels engineered by Dravonix. Browse selected work across brand, content and performance.",
    }),
  component: WorkPage,
});

type Filter = "all" | GalleryItemType;

const FILTERS: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All" },
  { id: "website", label: "Websites" },
  { id: "post", label: "Social Posts" },
  { id: "reel", label: "Reels" },
];

function WorkPage() {
  const [active, setActive] = useState<Filter>("all");

  const items = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((i) => i.type === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-[var(--navy)] text-white">
      <Nav />

      <main>
        <section className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <Reveal>
              <Link
                to="/home"
                hash="work"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)] transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Reveal>
            <div className="mt-8 text-center">
              <Reveal delay={80}>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  Project Gallery
                </span>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Our Work
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  A curated mix of websites, social posts and reels we&rsquo;ve shipped for brands engineered to outperform.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            {/* Filter tabs */}
            <Reveal>
              <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:mb-14">
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActive(f.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all",
                      active === f.id
                        ? "border-[var(--cyan-accent)] bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)]"
                        : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white",
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </Reveal>

            {items.length === 0 ? (
              <Reveal delay={100}>
                <div className="grid place-items-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-20 text-center md:py-28">
                  <p className="font-display text-xl text-white">
                    {active === "all" ? "Gallery launching soon." : "Nothing here yet."}
                  </p>
                  <p className="mt-2 max-w-md text-sm text-[var(--muted-text)]">
                    {active === "all"
                      ? "We&rsquo;re finalising case studies. New work will appear here shortly."
                      : "We haven&rsquo;t published items in this category yet — check back soon."}
                  </p>
                </div>
              </Reveal>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                {items.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 3) * 80}>
                    <GalleryCard item={item} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Want to be the next case study?
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                Let&rsquo;s engineer your next launch.
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/dravonix/Nav";
import { Footer } from "@/components/dravonix/Footer";
import { Reveal } from "@/components/dravonix/Reveal";
import { GalleryCard } from "@/components/dravonix/GalleryCard";
import { LogoWorks } from "@/components/dravonix/LogoWorks";
import { galleryItems, brandGroups } from "@/components/dravonix/gallery-data";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  head: () =>
    buildHead("/work", {
      title: "Our Work — Project Gallery | Dravonix",
      description:
        "Websites, social posts and reels engineered by Dravonix. Browse selected work across brand, content and performance.",
    }),
  component: WorkPage,
});

function WorkPage() {
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
            <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {galleryItems.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
                  <GalleryCard item={item} />
                </Reveal>
              ))}
            </div>

            {brandGroups.map((brand) => (
              <div key={brand.id} className="mt-20 md:mt-28">
                <Reveal>
                  <div className="border-t border-white/10 pt-12 md:pt-16">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                      Client Feature
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                      {brand.name}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                      {brand.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {brand.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <div className="mt-8 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {brand.items.map((item, i) => (
                    <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
                      <GalleryCard item={item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
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

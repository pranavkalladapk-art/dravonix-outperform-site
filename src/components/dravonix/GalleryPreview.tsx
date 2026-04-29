import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { GalleryCard } from "./GalleryCard";
import { galleryItems } from "./gallery-data";

export function GalleryPreview() {
  const featured = galleryItems.filter((i) => i.featured).slice(0, 6);
  const items = featured.length > 0 ? featured : galleryItems.slice(0, 6);

  return (
    <section id="work" className="bg-[var(--navy)] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
            Selected Work
          </span>
          <h2 className="mt-4 mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Project gallery.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
            Websites we&rsquo;ve shipped, posts we&rsquo;ve crafted, and reels we&rsquo;ve produced.
          </p>
        </Reveal>

        {items.length === 0 ? (
          <Reveal delay={120}>
            <div className="mt-12 grid place-items-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center md:mt-16 md:py-24">
              <p className="font-display text-lg text-white sm:text-xl">
                New work coming soon.
              </p>
              <p className="mt-2 max-w-md text-sm text-[var(--muted-text)]">
                Case studies and live launches are in production. Check back shortly.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80}>
                <GalleryCard item={item} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-semibold text-[var(--cyan-accent)] transition-all hover:gap-3"
            >
              View all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

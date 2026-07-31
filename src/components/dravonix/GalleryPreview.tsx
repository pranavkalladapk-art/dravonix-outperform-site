import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { GalleryCard } from "./GalleryCard";
import { galleryItems } from "./gallery-data";

export function GalleryPreview() {
  const featured = galleryItems.filter((i) => i.featured);
  const items = featured.length > 0 ? featured : galleryItems;
  const hero = items.slice(0, 3);
  const rest = items.slice(3, 6);

  return (
    <section id="work" className="relative bg-[var(--navy)] py-20 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
              Selected Work
            </span>
            <h2 className="mt-4 mx-auto max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Selected Projects.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
              Brand identities, websites, digital platforms and creative campaigns engineered
              for real businesses.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {hero.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
              <GalleryCard item={item} />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-3 grid auto-rows-fr grid-cols-2 gap-3 sm:mt-5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 80} className="h-full">
                <GalleryCard item={item} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

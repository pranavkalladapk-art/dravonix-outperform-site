import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { GalleryCard } from "./GalleryCard";
import { galleryItems } from "./gallery-data";

/** Scroll progress (0 → 1) of an element travelling through the viewport. */
function useScrollProgress<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(1);
        return;
      }
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [enabled]);

  return { ref, progress };
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
/** Map progress within [from, to] to 0→1 with an ease-out curve. */
const stage = (p: number, from: number, to: number) => {
  const t = clamp01((p - from) / (to - from));
  return 1 - Math.pow(1 - t, 3);
};

/** Per-column starting transforms — left, centre, right. */
const START = [
  { x: -40, y: 80, rotate: -2, scale: 0.96, speed: 1 },
  { x: 0, y: 120, rotate: 0, scale: 0.94, speed: 0.82 },
  { x: 40, y: 70, rotate: 2, scale: 0.96, speed: 1.1 },
];

function useAnimationEnabled() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wideQuery = window.matchMedia("(min-width: 1024px)");
    const sync = () => setEnabled(!motionQuery.matches && wideQuery.matches);
    sync();
    motionQuery.addEventListener("change", sync);
    wideQuery.addEventListener("change", sync);
    return () => {
      motionQuery.removeEventListener("change", sync);
      wideQuery.removeEventListener("change", sync);
    };
  }, []);
  return enabled;
}

export function GalleryPreview() {
  const featured = galleryItems.filter((i) => i.featured);
  const items = featured.length > 0 ? featured : galleryItems;
  const hero = items.slice(0, 3);
  const rest = items.slice(3, 6);

  const animate = useAnimationEnabled();
  const { ref, progress } = useScrollProgress<HTMLDivElement>(animate);

  const headingP = animate ? stage(progress, 0, 0.08) : 1;

  const cardStyle = (i: number): CSSProperties => {
    if (!animate) return {};
    const s = START[i % START.length];
    const t = stage(progress, 0.15 + i * 0.03, 0.8);
    const drift = (1 - t) * s.speed;
    return {
      transform: `translate3d(${s.x * drift}px, ${s.y * drift}px, 0) rotate(${s.rotate * drift}deg) scale(${s.scale + (1 - s.scale) * t})`,
      opacity: 0.35 + 0.65 * clamp01(t * 1.6),
      willChange: "transform, opacity",
    };
  };

  const mediaParallax = (i: number): CSSProperties => {
    if (!animate) return {};
    const t = stage(progress, 0.15, 0.9);
    const dir = i === 1 ? 1 : 0.6;
    return { transform: `translate3d(0, ${(1 - t) * 24 * dir}px, 0)` };
  };

  return (
    <section id="work" className="relative bg-[var(--navy)]">
      <div
        ref={ref}
        className={animate ? "relative min-h-[200vh]" : "relative"}
      >
        <div
          className={
            animate
              ? "sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden py-16"
              : "py-20 md:py-32"
          }
        >
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <div
              className="text-center"
              style={
                animate
                  ? {
                      opacity: headingP,
                      transform: `translate3d(0, ${(1 - headingP) * 24}px, 0)`,
                    }
                  : undefined
              }
            >
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
                <div key={item.id} style={cardStyle(i)} className="h-full">
                  {animate ? (
                    <div style={mediaParallax(i)} className="h-full">
                      <GalleryCard item={item} />
                    </div>
                  ) : (
                    <Reveal delay={(i % 3) * 80} className="h-full">
                      <GalleryCard item={item} />
                    </Reveal>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-32">
        {rest.length > 0 && (
          <div className="mt-6 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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

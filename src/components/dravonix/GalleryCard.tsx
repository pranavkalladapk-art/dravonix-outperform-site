import { useRef } from "react";
import { ExternalLink, Play, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "./gallery-data";

const TYPE_LABEL: Record<GalleryItem["type"], string> = {
  website: "Website",
  post: "Social Post",
  reel: "Reel",
};

// Uniform aspect ratio across all card types so the grid aligns cleanly
// regardless of which card types appear together in the same row.
const ASPECT: Record<GalleryItem["type"], string> = {
  website: "aspect-[4/3]",
  post: "aspect-[4/3]",
  reel: "aspect-[4/3]",
};

export function GalleryCard({ item }: { item: GalleryItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onEnter = () => {
    if (item.type === "reel" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const onLeave = () => {
    if (item.type === "reel" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan-accent)] hover:shadow-glow-brand"
    >
      {/* Type badge */}
      <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--navy)]/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)] backdrop-blur">
        {item.type === "post" && <Instagram className="h-3 w-3" />}
        {item.type === "reel" && <Play className="h-3 w-3 fill-current" />}
        {item.type === "website" && <ExternalLink className="h-3 w-3" />}
        {TYPE_LABEL[item.type]}
      </span>

      {/* Media */}
      <div className={cn("relative w-full overflow-hidden bg-[var(--navy)]", ASPECT[item.type])}>
        <img
          src={item.thumb}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {item.type === "reel" && item.videoSrc && (
          <video
            ref={videoRef}
            src={item.videoSrc}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {item.type === "reel" && (
          <div className="pointer-events-none absolute inset-0 grid place-items-center transition-opacity group-hover:opacity-0">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--cyan-accent)]/90 text-[var(--navy)] shadow-glow-brand">
              <Play className="h-6 w-6 fill-current" />
            </span>
          </div>
        )}

        {item.type === "website" && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[var(--navy)]/90 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
            {item.domain && (
              <span className="text-xs font-medium text-white/85">{item.domain}</span>
            )}
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-[var(--blue-brand)] px-3 py-1.5 text-xs font-semibold text-white">
              Visit site <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
        {item.client && (
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted-text)]">
            {item.client}
          </p>
        )}
      </div>
    </a>
  );
}

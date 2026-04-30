import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "./gallery-data";

// Uniform aspect ratio across all card types so the grid aligns cleanly.
const ASPECT: Record<GalleryItem["type"], string> = {
  website: "aspect-[4/3]",
  post: "aspect-[4/3]",
  reel: "aspect-[4/3]",
};

export function GalleryCard({ item }: { item: GalleryItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(false);

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

  // Lock body scroll & close on Escape while lightbox is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isWebsite = item.type === "website";

  const cardInner = (
    <>
      <div className={cn("relative w-full overflow-hidden bg-[var(--navy)]", ASPECT[item.type])}>
        <img
          src={item.thumb}
          alt={item.client ?? ""}
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

        {isWebsite && (
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

      {item.client && (
        <div className="flex flex-1 flex-col justify-center p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted-text)]">
            {item.client}
          </p>
        </div>
      )}
    </>
  );

  const sharedClasses =
    "group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan-accent)] hover:shadow-glow-brand";

  return (
    <>
      {isWebsite ? (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={sharedClasses}
        >
          {cardInner}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          aria-label={`Open ${item.client ?? "preview"}`}
          className={cn(sharedClasses, "w-full cursor-zoom-in")}
        >
          {cardInner}
        </button>
      )}

      {open && !isWebsite && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl"
          >
            {item.type === "reel" && item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.thumb}
                controls
                autoPlay
                playsInline
                className="mx-auto max-h-[90vh] w-auto rounded-lg bg-black"
              />
            ) : (
              <img
                src={item.thumb}
                alt={item.client ?? ""}
                className="mx-auto max-h-[90vh] w-auto rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

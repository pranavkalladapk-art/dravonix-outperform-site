import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "./gallery-data";

// Uniform aspect ratio across all card types so the grid aligns cleanly.
const ASPECT: Record<GalleryItem["type"], string> = {
  website: "aspect-[4/3]",
  post: "aspect-square sm:aspect-[4/3]",
  reel: "aspect-[4/5] sm:aspect-[4/3]",
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
          <div className="pointer-events-none absolute inset-0 grid place-items-center transition-opacity sm:group-hover:opacity-0">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--cyan-accent)]/90 text-[var(--navy)] shadow-glow-brand sm:h-14 sm:w-14">
              <Play className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
            </span>
          </div>
        )}

        {isWebsite && (
          <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[var(--navy)]/90 via-transparent to-transparent p-3 opacity-100 transition-opacity sm:p-4 sm:opacity-0 sm:group-hover:opacity-100">
            {item.domain && (
              <span className="text-[11px] font-medium text-white/85 sm:text-xs">{item.domain}</span>
            )}
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-md bg-[var(--blue-brand)] px-2.5 py-1 text-[11px] font-semibold text-white sm:px-3 sm:py-1.5 sm:text-xs">
              Visit <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </span>
          </div>
        )}
      </div>

      {item.client && (
        <div className="flex flex-1 flex-col justify-center px-3 py-2.5 sm:p-4">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--muted-text)] sm:text-xs">
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
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {item.client ?? "Preview"}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              aria-label="Close"
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              <X className="h-4 w-4" />
              Close
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-1 items-center justify-center px-3 pb-4"
          >
            {item.type === "reel" && item.videoSrc ? (
              <video
                src={item.videoSrc}
                poster={item.thumb}
                controls
                autoPlay
                playsInline
                className="max-h-full max-w-full rounded-lg bg-black"
              />
            ) : (
              <img
                src={item.thumb}
                alt={item.client ?? ""}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

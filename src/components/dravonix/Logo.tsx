import { cn } from "@/lib/utils";
import dMark from "@/assets/dravonix-dmark.png";
import wordmark from "@/assets/dravonix-wordmark.png";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Dravonix — home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <img
        src={dMark}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 object-contain"
        loading="eager"
        decoding="async"
      />
      <img
        src={wordmark}
        alt="Dravonix"
        className="h-6 w-auto object-contain md:h-7"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}

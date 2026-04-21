import { cn } from "@/lib/utils";
import dMark from "@/assets/dravonix-dmark.png";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)}>
      <img
        src={dMark}
        alt="Dravonix"
        className="h-9 w-9 object-contain"
        loading="eager"
        decoding="async"
      />
      <span className="font-display text-xl font-bold tracking-tight text-white">
        Dravonix
      </span>
    </a>
  );
}

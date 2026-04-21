import { cn } from "@/lib/utils";
import logo from "@/assets/dravonix-logo.png";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Dravonix — Engineered to Outperform"
      className={cn("inline-flex items-center", className)}
    >
      <img
        src={logo}
        alt="Dravonix"
        className="h-10 w-auto object-contain md:h-12"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}

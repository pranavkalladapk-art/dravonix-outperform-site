import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/dravonix-logo.png";
import { LogoMark } from "./LogoMark";

type LogoVariant = "auto" | "white" | "blue";

type LogoProps = {
  className?: string;
  /**
   * - "auto": use the full-color transparent PNG, fall back to white SVG on error
   * - "white": always render the solid white SVG fallback
   * - "blue": always render the solid brand-blue SVG fallback
   */
  variant?: LogoVariant;
};

export function Logo({ className, variant = "auto" }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const useFallback = variant !== "auto" || imgFailed;
  const fallbackColor =
    variant === "blue" ? "var(--blue-brand)" : "#FFFFFF";

  return (
    <a
      href="#top"
      aria-label="Dravonix — Engineered to Outperform"
      className={cn("inline-flex items-center", className)}
    >
      {useFallback ? (
        <LogoMark
          color={fallbackColor}
          className="h-9 w-auto md:h-10"
        />
      ) : (
        <img
          src={logo}
          alt="Dravonix"
          onError={() => setImgFailed(true)}
          className="h-10 w-auto object-contain md:h-12"
          loading="eager"
          decoding="async"
        />
      )}
    </a>
  );
}

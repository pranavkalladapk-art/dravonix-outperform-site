import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import dMark from "@/assets/dravonix-dmark.webp";
import { LogoMark } from "./LogoMark";

type LogoVariant = "auto" | "white" | "blue";

type LogoProps = {
  className?: string;
  /**
   * - "auto": D-mark PNG icon + "Dravonix" wordmark text. Falls back to solid SVG on image error.
   * - "white": always solid white SVG mark + wordmark
   * - "blue": always solid brand-blue SVG mark + wordmark
   */
  variant?: LogoVariant;
};

export function Logo({ className, variant = "auto" }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (variant !== "auto") {
    const color = variant === "blue" ? "var(--blue-brand)" : "#FFFFFF";
    return (
      <Link
        to="/home"
        aria-label="Dravonix — Engineered to Outperform"
        className={cn("inline-flex items-center", className)}
      >
        <LogoMark color={color} className="h-9 w-auto md:h-10" />
      </Link>
    );
  }

  return (
    <Link
      to="/home"
      aria-label="Dravonix — Engineered to Outperform"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      {imgFailed ? (
        <LogoMark
          color="var(--blue-brand)"
          showWordmark={false}
          className="h-9 w-9"
        />
      ) : (
        <img
          src={dMark}
          alt=""
          aria-hidden="true"
          onError={() => setImgFailed(true)}
          className="h-9 w-9 object-contain md:h-10 md:w-10"
          loading="eager"
          decoding="async"
        />
      )}
      <span className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
        Dravonix
      </span>
    </Link>
  );
}

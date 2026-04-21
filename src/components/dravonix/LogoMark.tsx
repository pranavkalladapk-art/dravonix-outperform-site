import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  /**
   * Solid color for the entire mark + wordmark. Defaults to currentColor so
   * it inherits text color from the parent (works in any theme).
   */
  color?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  title?: string;
};

/**
 * Solid, single-color SVG version of the Dravonix logo.
 * Use this as a fallback if the transparent PNG fails to render
 * (e.g. broken image, print stylesheet, email client, light theme).
 */
export function LogoMark({
  className,
  color = "currentColor",
  showWordmark = true,
  showTagline = false,
  title = "Dravonix",
}: LogoMarkProps) {
  return (
    <svg
      role="img"
      aria-label={title}
      viewBox="0 0 520 140"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-auto", className)}
      fill={color}
    >
      <title>{title}</title>

      {/* D-mark with arrow swoosh */}
      <g>
        {/* Arrow / swoosh */}
        <path d="M14 50 L70 50 L46 74 L14 74 Z" />
        <path d="M14 86 L78 86 L40 124 L14 124 Z" />
        {/* D body */}
        <path
          d="M50 18 H92 a52 52 0 0 1 52 52 v0 a52 52 0 0 1 -52 52 H50 V100 H88 a30 30 0 0 0 30 -30 v0 a30 30 0 0 0 -30 -30 H50 Z"
          fillRule="evenodd"
        />
      </g>

      {showWordmark && (
        <g transform="translate(170 28)">
          <text
            x="0"
            y="62"
            fontFamily="'Space Grotesk', system-ui, sans-serif"
            fontSize="68"
            fontWeight="700"
            letterSpacing="-1"
          >
            Dravonix
          </text>
          {showTagline && (
            <text
              x="2"
              y="92"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="13"
              fontWeight="500"
              letterSpacing="4"
            >
              ENGINEERED TO OUTPERFORM.
            </text>
          )}
        </g>
      )}
    </svg>
  );
}

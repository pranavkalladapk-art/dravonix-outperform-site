import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2", className)}>
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-md bg-gradient-brand text-white shadow-glow-brand"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5h7a7 7 0 0 1 0 14H5z" />
          <path d="M9 9l5 3-5 3" />
        </svg>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Dravonix
      </span>
    </a>
  );
}

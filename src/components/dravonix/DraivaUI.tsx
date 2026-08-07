import { cn } from "@/lib/utils";
import type { DraivaStatus } from "./draiva-products";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
      {children}
    </span>
  );
}

export function StatusBadge({
  status,
  className,
}: {
  status: DraivaStatus;
  className?: string;
}) {
  const live = status === "NOW ONBOARDING";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
        live
          ? "border border-[var(--cyan-accent)]/50 bg-[var(--blue-brand)]/20 text-[var(--cyan-accent)]"
          : "border border-[var(--cyan-accent)]/30 bg-[#334155]/30 text-[var(--cyan-accent)]/85",
        className,
      )}
    >
      {status}
    </span>
  );
}

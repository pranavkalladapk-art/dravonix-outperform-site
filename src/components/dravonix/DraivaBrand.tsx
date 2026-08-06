import { cn } from "@/lib/utils";

const FULL_NAME = "DRAIVA AI Conversation Assistant by Dravonix";

/**
 * Official segmented brand text for the DRAIVA product identity.
 * "DRAIVA AI" and "Dravonix" use the cyan brand accent, the connecting
 * words stay white. Rendered as one accessible label for screen readers.
 */
export function DraivaBrand({
  className,
  primaryClassName,
  neutralClassName,
  block,
}: {
  className?: string;
  primaryClassName?: string;
  neutralClassName?: string;
  /** Break onto two lines: "DRAIVA AI" / "Conversation Assistant by Dravonix" */
  block?: boolean;
}) {
  const primary = cn("font-bold text-[var(--cyan-accent)]", primaryClassName);
  const neutral = cn("font-medium text-white", neutralClassName);

  return (
    <span
      aria-label={FULL_NAME}
      className={cn("[overflow-wrap:anywhere] [white-space:normal]", className)}
    >
      <span aria-hidden className={cn(primary, block && "block tracking-[0.14em]")}>
        DRAIVA AI
      </span>
      {!block && " "}
      <span aria-hidden className={cn(neutral, block && "block leading-snug tracking-normal")}>
        <span className={neutral}>Conversation Assistant by</span>{" "}
        <span className={primary}>Dravonix</span>
      </span>
    </span>
  );
}

/** Short brand mark: "DRAIVA" in accent + a supporting white word. */
export function DraivaMark({
  suffix,
  className,
}: {
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={cn("[overflow-wrap:anywhere]", className)}>
      <span className="font-bold tracking-[0.12em] text-[var(--cyan-accent)]">DRAIVA</span>
      {suffix ? <span className="font-medium text-white"> {suffix}</span> : null}
    </span>
  );
}

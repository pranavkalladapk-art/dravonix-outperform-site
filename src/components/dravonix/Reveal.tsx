import type { CSSProperties, PropsWithChildren } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "footer";
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: PropsWithChildren<RevealProps>) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag
      ref={ref as never}
      style={style}
      className={cn("reveal", inView && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}

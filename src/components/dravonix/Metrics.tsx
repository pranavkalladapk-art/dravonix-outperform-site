import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 200, suffix: "+", label: "Brands Scaled" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 5, suffix: "M+", label: "Content Impressions" },
  { value: 3, suffix: "x", label: "Avg. Engagement Growth" },
];

function Counter({ metric }: { metric: Metric }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(metric.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(metric.value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric.value]);

  const display = metric.value < 10 ? n.toFixed(n === metric.value ? 0 : 1) : Math.round(n).toString();

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--cyan-accent)]">
        {metric.label}
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="bg-[var(--slate-mid)] py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 md:grid-cols-4 md:px-8">
        {metrics.map((m) => (
          <Counter key={m.label} metric={m} />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface Metric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const metrics: Metric[] = [
  { value: 50, suffix: "+", label: "Brands Grown" },
  { value: 250, suffix: "%", label: "Avg. Growth" },
  { value: 10, suffix: "M+", prefix: "$", label: "Revenue Generated" },
  { value: 5, suffix: "+", label: "Countries" },
];

function Counter({ metric }: { metric: Metric }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
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

  const display = Math.round(n).toString();

  return (
    <div ref={ref} className="px-4 text-center">
      <div className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
        {metric.label}
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section className="bg-[var(--slate-mid)] py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 md:grid-cols-4 md:px-8 md:divide-x md:divide-white/15">
        {metrics.map((m) => (
          <Counter key={m.label} metric={m} />
        ))}
      </div>
    </section>
  );
}

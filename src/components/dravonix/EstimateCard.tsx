import { useEffect, useRef, useState } from "react";

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";
const PRICE_MIN = 25000;
const PRICE_MAX = 50000;
const CONFIDENCE = 92;

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

export function EstimateCard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [barActive, setBarActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(true);
            setTimeout(() => setBarActive(true), 300);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const minVal = useCountUp(PRICE_MIN, active);
  const maxVal = useCountUp(PRICE_MAX, active, 1600);

  return (
    <div
      ref={ref}
      className="group relative mx-auto max-w-lg xl:max-w-xl animate-[floaty_6s_ease-in-out_infinite]"
    >
      {/* Outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 rounded-[26px] bg-gradient-to-br from-[var(--blue-brand)]/40 via-transparent to-[var(--cyan-accent)]/40 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
      />

      <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[var(--navy)]/80 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-0.5 sm:p-5">
        {/* Radial glow behind price */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[38%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blue-brand)]/25 blur-3xl"
        />
        {/* Grid lines */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="est-card-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#est-card-grid)" />
          </svg>
        </div>
        {/* Floating particles */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-[var(--cyan-accent)] opacity-70 animate-[particle_7s_ease-in-out_infinite]" />
          <span className="absolute left-[78%] top-[30%] h-1.5 w-1.5 rounded-full bg-[var(--blue-brand)] opacity-60 animate-[particle_9s_ease-in-out_infinite_-2s]" />
          <span className="absolute left-[30%] top-[70%] h-1 w-1 rounded-full bg-white/60 opacity-50 animate-[particle_8s_ease-in-out_infinite_-4s]" />
          <span className="absolute left-[68%] top-[78%] h-1 w-1 rounded-full bg-[var(--cyan-accent)] opacity-60 animate-[particle_10s_ease-in-out_infinite_-1s]" />
        </div>

        <div className="relative">
          {/* Live badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live AI Estimate
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              ~60 sec
            </span>
          </div>

          {/* Heading */}
          <p className="mt-3 text-sm font-medium text-white/60">Your Project Could Cost</p>

          {/* Price - hero element, single line */}
          <div className="relative mt-1.5">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--blue-brand)]/40 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
            />
            <div
              className={`relative font-display font-extrabold leading-none tracking-tight text-white text-[44px] md:text-[48px] lg:text-[56px] xl:text-[64px] transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`}
            >
              <span className="drop-shadow-[0_0_28px_rgba(37,99,235,0.65)]">
                {minVal.toLocaleString()} –{" "}
              </span>
              <span className="bg-gradient-to-r from-white to-[var(--cyan-accent)] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(37,99,235,0.65)]">
                {maxVal.toLocaleString()}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-white/50">
              Based on similar projects completed by Dravonix.
            </p>
          </div>

          {/* Insight grid */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              { k: "Estimated Timeline", v: "3–5 Weeks" },
              { k: "Project Complexity", v: "Medium" },
            ].map((row) => (
              <div
                key={row.k}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-1.5"
              >
                <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                  {row.k}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">{row.v}</div>
              </div>
            ))}
            <div className="col-span-2 rounded-xl border border-white/8 bg-white/[0.03] p-1.5">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
                Recommended Team
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Designer <span className="text-white/30">•</span> Developer{" "}
                <span className="text-white/30">•</span> Marketing
              </div>
            </div>
          </div>

          {/* Confidence bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold uppercase tracking-wider text-white/50">
                Confidence Score
              </span>
              <span className="font-bold text-white">{CONFIDENCE}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="relative h-full rounded-full bg-gradient-to-r from-[var(--blue-brand)] via-[var(--cyan-accent)] to-[var(--blue-brand)] bg-[length:200%_100%] shadow-[0_0_14px_rgba(6,182,212,0.7)] transition-[width] duration-[1600ms] ease-out animate-[shimmer_3s_linear_infinite]"
                style={{ width: barActive ? `${CONFIDENCE}%` : "0%" }}
              />
            </div>
          </div>

          {/* Trust section */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-2">
            <ul className="space-y-0.5 text-[14px] text-white/80">
              {[
                "100+ Projects Delivered",
                "Trusted by Businesses in UAE • UK • India",
                "Transparent Pricing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--cyan-accent)]/15 text-[var(--cyan-accent)] text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer disclaimer */}
          <p className="mt-2 text-center text-[11px] leading-relaxed text-white/60">
            Your estimate is generated based on real project data and industry
            averages. Final pricing may vary depending on scope.
          </p>

        </div>
      </div>
    </div>
  );
}

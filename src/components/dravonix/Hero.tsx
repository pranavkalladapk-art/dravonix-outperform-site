import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const LINE_ONE = ["WE", "DON\u2019T", "MARKET."];
const LINE_TWO = ["WE", "ENGINEER", "GROWTH."];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let raf = 0;
    let pointer: { x: number; y: number } | null = null;

    const apply = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();

      if (!pointer) {
        wordsRef.current.forEach((el) => {
          if (!el) return;
          el.style.transform = "";
          el.style.textShadow = "";
        });
        if (subRef.current) subRef.current.style.transform = "";
        if (bgRef.current) bgRef.current.style.transform = "";
        if (chartRef.current) chartRef.current.style.transform = "";
        return;
      }

      const px = pointer.x;
      const py = pointer.y;
      const nx = (px - rect.left) / rect.width - 0.5;
      const ny = (py - rect.top) / rect.height - 0.5;

      wordsRef.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = px - cx;
        const dy = py - cy;
        const dist = Math.hypot(dx, dy);
        const radius = 380;
        const pull = Math.max(0, 1 - dist / radius);
        const strength = pull * pull * 16;
        const ux = dist === 0 ? 0 : dx / dist;
        const uy = dist === 0 ? 0 : dy / dist;
        el.style.transform = `translate3d(${ux * strength}px, ${uy * strength}px, 0) rotate(${ux * pull * 1.4}deg)`;
        const ab = pull * 3;
        el.style.textShadow = ab
          ? `${-ab}px 0 ${ab * 1.5}px rgba(37,99,235,${0.35 * pull}), ${ab}px 0 ${ab * 1.5}px rgba(6,182,212,${0.35 * pull})`
          : "";
      });

      if (subRef.current) {
        subRef.current.style.transform = `translate3d(${nx * 14}px, ${ny * 8}px, 0)`;
      }
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${nx * -22}px, ${ny * -12}px, 0)`;
      }
      if (chartRef.current) {
        chartRef.current.style.transform = `translate3d(${nx * -38}px, ${ny * -18}px, 0)`;
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onMove = (e: PointerEvent) => {
      pointer = { x: e.clientX, y: e.clientY };
      schedule();
    };
    const onLeave = () => {
      pointer = null;
      schedule();
    };

    section.addEventListener("pointermove", onMove, { passive: true });
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  wordsRef.current = [];
  const collect = (el: HTMLSpanElement | null) => {
    if (el) wordsRef.current.push(el);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[var(--navy)] pt-28 pb-20 md:pt-40 md:pb-36"
    >
      {/* Animated fluid blue wave background */}
      <div
        aria-hidden
        ref={bgRef}
        className="hero-parallax pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-1/4 h-[560px] w-[560px] animate-ambient rounded-full bg-[oklch(0.546_0.219_263/0.22)] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] animate-ambient rounded-full bg-[oklch(0.738_0.13_215/0.18)] blur-3xl [animation-delay:-3s]" />

        {/* Animated wave SVG — desktop only (heavy paint on mobile) */}
        <svg
          className="absolute inset-x-0 bottom-0 hidden h-[60%] w-full animate-wave-drift opacity-40 md:block"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C240,420 480,180 720,260 C960,340 1200,180 1440,280 L1440,600 L0,600 Z"
            fill="url(#waveGrad)"
            opacity="0.6"
          />
          <path
            d="M0,400 C300,300 600,500 900,380 C1140,290 1320,440 1440,400 L1440,600 L0,600 Z"
            fill="url(#waveGrad2)"
            opacity="0.5"
          />
        </svg>

        {/* Light streaks — desktop only */}
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-[28%] h-[2px] w-1/3 animate-streak bg-gradient-to-r from-transparent via-[var(--cyan-accent)] to-transparent" />
          <div className="absolute top-[58%] h-[1px] w-1/4 animate-streak bg-gradient-to-r from-transparent via-[var(--blue-brand)] to-transparent [animation-delay:-3.5s]" />
          <div className="absolute top-[72%] h-[2px] w-1/3 animate-streak bg-gradient-to-r from-transparent via-white/60 to-transparent [animation-delay:-5s]" />
        </div>

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Rising stock chart line */}
      <div
        aria-hidden
        ref={chartRef}
        className="hero-parallax pointer-events-none absolute inset-0 -z-0 opacity-[0.18] md:opacity-[0.22]"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <filter id="chartGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#chartGlow)">
            <path
              className="animate-chart-draw"
              d="M60 500 L240 430 L400 460 L560 340 L720 380 L880 240 L1020 280 L1120 140"
              fill="none"
              stroke="url(#chartGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[
              [240, 430, 0],
              [400, 460, 0.6],
              [560, 340, 1.2],
              [720, 380, 1.8],
              [880, 240, 2.4],
              [1020, 280, 3],
            ].map(([cx, cy, d]) => (
              <circle
                key={`${cx}-${cy}`}
                className="animate-dot-pop"
                cx={cx}
                cy={cy}
                r="5"
                fill="#06B6D4"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
            <path
              className="animate-arrow-pulse"
              d="M1090 168 L1124 136 L1092 130 M1124 136 L1118 168"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <Reveal delay={80}>
          <h1 className="max-w-5xl font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[5.5rem]">
            {LINE_ONE.map((w, i) => (
              <span key={w} ref={collect} className="hero-word">
                {w}
                {i < LINE_ONE.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
            <br />
            {LINE_TWO.map((w, i) => (
              <span
                key={w + i}
                ref={collect}
                className={`hero-word${i === 2 ? " text-[var(--blue-brand)]" : ""}`}
              >
                {w}
                {i < LINE_TWO.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p
            ref={subRef}
            className="hero-parallax mt-5 max-w-xl text-base leading-relaxed text-white/70 md:mt-6 md:text-lg"
          >
            Data-driven strategies. Creative excellence.
            <br />
            Results that speak.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-6 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5 sm:px-7 sm:text-base"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/0 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-7 sm:text-base"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex items-center gap-3 md:gap-4">
            <span aria-hidden className="hidden h-px w-10 bg-gradient-to-r from-transparent via-[var(--cyan-accent)]/70 to-[var(--cyan-accent)] sm:block" />
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 sm:text-sm">
              Launching ambitious brands from{" "}
              <span className="text-[var(--blue-brand)]">zero</span> to{" "}
              <span className="text-[var(--blue-brand)]">visible</span>.
            </p>
            <span aria-hidden className="hidden h-px w-10 bg-gradient-to-l from-transparent via-[var(--cyan-accent)]/70 to-[var(--cyan-accent)] sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

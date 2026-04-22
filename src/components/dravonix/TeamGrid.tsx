import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import pranavPhoto from "@/assets/team-pranav.jpg";
import sreeragPhoto from "@/assets/team-sreerag.png";

type Member = {
  initials: string;
  name: string;
  role: string;
  tagline: string;
  vision: string;
  gradient: string;
  photo?: string;
};

const members: Member[] = [
  {
    initials: "PA",
    name: "Pranav A",
    role: "Video Editor • Content Creator • Web Developer",
    tagline: "Where technology meets creativity.",
    vision:
      "To build Dravonix into a digitally driven powerhouse where technology and creativity merge — creating scalable systems, high-impact content, and seamless brand experiences that set new industry standards.",
    gradient: "from-[var(--cyan-accent)]/40 via-[var(--blue-brand)]/20 to-transparent",
    photo: pranavPhoto,
  },
  {
    initials: "SS",
    name: "Sreerag S",
    role: "Photographer • Content Creator • Content Writer",
    tagline: "Storytelling that audiences trust.",
    vision:
      "To shape Dravonix as a storytelling-first agency — where every brand communicates with clarity, emotion, and purpose, turning content into meaningful connections that audiences trust and remember.",
    gradient: "from-[var(--blue-brand)]/40 via-[var(--cyan-accent)]/20 to-transparent",
    photo: sreeragPhoto,
  },
  {
    initials: "AR",
    name: "Arunraj R",
    role: "Cinematographer • Video Editor • Content Creator",
    tagline: "Cinematic brand storytelling.",
    vision:
      "To position Dravonix as a leader in cinematic brand storytelling — delivering visually powerful content that elevates perception, builds identity, and creates lasting impact in the digital space.",
    gradient: "from-[var(--cyan-accent)]/50 via-[var(--blue-brand)]/25 to-transparent",
  },
];

export function TeamGrid() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m, i) => {
        const isOpen = openIdx === i;
        return (
          <Reveal key={m.name} delay={i * 100}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={cn(
                "group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-500",
                "hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-20px_var(--cyan-accent)]",
                isOpen && "border-[var(--cyan-accent)]/50 bg-white/[0.04] shadow-[0_20px_60px_-20px_var(--cyan-accent)]",
              )}
            >
              {/* Portrait */}
              <div className="relative mx-auto mb-6 grid aspect-square w-full max-w-[220px] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)]">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80 transition-transform duration-700 group-hover:scale-110",
                    m.gradient,
                  )}
                />
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={`${m.name} portrait`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
                    <span className="relative font-display text-6xl font-bold tracking-tight text-white/90">
                      {m.initials}
                    </span>
                  </>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--navy)]/60 via-transparent to-transparent" />
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                {m.name}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                {m.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                {m.tagline}
              </p>

              {/* Expandable vision */}
              <div
                className={cn(
                  "grid overflow-hidden transition-all duration-500 ease-out",
                  isOpen ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="min-h-0">
                  <div className="border-t border-white/10 pt-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                      Founder Vision
                    </span>
                    <p className="mt-3 text-base italic leading-relaxed text-white/85">
                      &ldquo;{m.vision}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                {isOpen ? "Hide vision" : "Read vision"}
                <span
                  className={cn(
                    "transition-transform duration-300",
                    isOpen ? "rotate-180" : "rotate-0",
                  )}
                >
                  ↓
                </span>
              </span>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

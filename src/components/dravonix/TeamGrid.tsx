import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import pranavPhoto from "@/assets/team-pranav.webp";
import sreeragPhoto from "@/assets/team-sreerag.webp";
import arunrajPhoto from "@/assets/team-arunraj.webp";
import akhilPhoto from "@/assets/team-akhil.webp";
import dhanyaPhoto from "@/assets/team-dhanya.jpg";

type Member = {
  initials: string;
  name: string;
  role: string;
  email: string;
  tagline: string;
  bio: string;
  skillTag: string;
  vision: string;
  gradient: string;
  photo?: string;
};

const members: Member[] = [
  {
    initials: "PA",
    name: "Pranav A",
    role: "Video Editor • Content Creator • Web Developer",
    email: "pranav@dravonixmedia.com",
    tagline: "Where technology meets creativity.",
    bio: "Pranav blends a background in web development with hands-on video and content production, shipping work across both code and camera. He leads Dravonix's build pipeline — from websites to short-form creative — keeping every output sharp, fast and on-brand.",
    skillTag: "Web Development & Creative Production",
    vision:
      "To build Dravonix into a digitally driven powerhouse where technology and creativity merge — creating scalable systems, high-impact content, and seamless brand experiences that set new industry standards.",
    gradient: "from-[var(--cyan-accent)]/40 via-[var(--blue-brand)]/20 to-transparent",
    photo: pranavPhoto,
  },
  {
    initials: "SS",
    name: "Sreerag S",
    role: "Photographer • Content Creator • Content Writer",
    email: "sreerag@dravonixmedia.com",
    tagline: "Storytelling that audiences trust.",
    bio: "Sreerag has spent years behind the lens and behind the page, working with brands to translate ideas into visuals and words that connect. At Dravonix he leads storytelling, photography direction and brand copy across every project.",
    skillTag: "Brand Storytelling & Photography",
    vision:
      "To shape Dravonix as a storytelling-first agency — where every brand communicates with clarity, emotion, and purpose, turning content into meaningful connections that audiences trust and remember.",
    gradient: "from-[var(--blue-brand)]/40 via-[var(--cyan-accent)]/20 to-transparent",
    photo: sreeragPhoto,
  },
  {
    initials: "AR",
    name: "Arunraj R",
    role: "Cinematographer • Video Editor • Content Creator",
    email: "arunraj@dravonixmedia.com",
    tagline: "Cinematic brand storytelling.",
    bio: "Arunraj brings a cinematographer's eye to brand work, with experience producing commercial, lifestyle and short-form content for clients across regions. He leads Dravonix's video division — from concept and shoot to final cut.",
    skillTag: "Cinematography & Video Production",
    vision:
      "To position Dravonix as a leader in cinematic brand storytelling — delivering visually powerful content that elevates perception, builds identity, and creates lasting impact in the digital space.",
    gradient: "from-[var(--cyan-accent)]/50 via-[var(--blue-brand)]/25 to-transparent",
    photo: arunrajPhoto,
  },
  {
    initials: "AP",
    name: "Akhil PH",
    role: "Strategic Managing Partner • Marketing Specialist",
    email: "akhil@dravonixmedia.com",
    tagline: "Driving strategy with data and creative marketing intelligence.",
    bio: "Akhil brings cross-market marketing experience across the UK and UAE, working with brands on positioning, paid media and growth strategy. He leads Dravonix's strategic engagements and client partnerships end-to-end.",
    skillTag: "Brand Strategy & Paid Social",
    vision:
      "Focused on building scalable strategies, strengthening brand positioning, and driving measurable growth through innovative marketing and data-driven decision making.",
    gradient: "from-[var(--blue-brand)]/45 via-[var(--cyan-accent)]/25 to-transparent",
    photo: akhilPhoto,
  },
  {
    initials: "DH",
    name: "Dhanya",
    role: "Digital Marketing Expert • Performance Marketer",
    email: "dhanya@dravonixmedia.com",
    tagline: "Performance that outperforms.",
    bio: "Dhanya specializes in digital marketing, paid advertising, and performance campaigns. She helps businesses reach the right audience through strategic Meta and Google Ads, data-driven optimization, and conversion-focused marketing. At Dravonix, she manages advertising campaigns that drive measurable growth, quality leads, and stronger brand visibility.",
    skillTag: "Performance Marketing & Paid Ads",
    vision:
      "Our mission is to transform every advertising campaign into measurable business growth. Through strategic digital marketing, data-driven insights, creative storytelling, and continuous optimization, we help brands reach the right audience, maximize ROI, and build lasting customer relationships. Every campaign is engineered to deliver performance that truly outperforms.",
    gradient: "from-[var(--cyan-accent)]/45 via-[var(--blue-brand)]/20 to-transparent",
    photo: dhanyaPhoto,
  },
];

export function TeamGrid() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {members.map((m, i) => {
        const isOpen = openIdx === i;
        return (
          <Reveal key={m.name} delay={i * 100} className="h-full">
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={cn(
                "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-500",
                "hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_60px_-20px_var(--cyan-accent)]",
                isOpen && "border-[var(--cyan-accent)]/50 bg-white/[0.04] shadow-[0_20px_60px_-20px_var(--cyan-accent)]",
              )}
            >
              {/* Portrait */}
              <div className="relative mb-6 grid aspect-square w-full place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy)]">
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
                    width={440}
                    height={440}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-[center_top] transition-transform duration-700 group-hover:scale-110"
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

              <div className="flex flex-1 flex-col">
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                    {m.role}
                  </p>
                  <a
                    href={`mailto:${m.email}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 inline-block text-sm text-[var(--muted-text)] transition-colors hover:text-[var(--cyan-accent)]"
                  >
                    {m.email}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                    {m.bio}
                  </p>
                  <span className="mt-4 inline-flex items-center rounded-full border border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--cyan-accent)]">
                    {m.skillTag}
                  </span>

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
              </div>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}

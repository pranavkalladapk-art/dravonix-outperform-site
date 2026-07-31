import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const locations = [
  { label: "Kerala", to: "/locations/kerala" },
  { label: "India", to: "/locations/india" },
  { label: "UAE", to: "/locations/uae" },
  { label: "United Kingdom", to: "/locations/united-kingdom" },
  { label: "Global", to: "/locations/global" },
];

export function LocationStrip() {
  return (
    <section id="locations" className="bg-[var(--navy)] pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-[var(--card-dark)] p-8 text-center md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              <MapPin className="h-3.5 w-3.5" />
              Where We Work
            </span>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Built in Kerala. Working Worldwide.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted-text)] md:text-base">
              Partnering with businesses across Kerala, India, the UAE, the United Kingdom and
              international markets.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {locations.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

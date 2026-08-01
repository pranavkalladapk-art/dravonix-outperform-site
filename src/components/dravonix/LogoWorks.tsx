import { Reveal } from "./Reveal";

interface LogoItem {
  id: string;
  name: string;
}

const logoWorks: LogoItem[] = [
  { id: "logo-1", name: "Brand One" },
  { id: "logo-2", name: "Brand Two" },
  { id: "logo-3", name: "Brand Three" },
  { id: "logo-4", name: "Brand Four" },
  { id: "logo-5", name: "Brand Five" },
  { id: "logo-6", name: "Brand Six" },
  { id: "logo-7", name: "Brand Seven" },
  { id: "logo-8", name: "Brand Eight" },
];

function placeholderSvg(name: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect width="400" height="300" fill="#f8fafc" rx="16" />
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="600" fill="#0f172a">${name}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="group flex h-full flex-col items-center rounded-xl border border-white/10 bg-white/95 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan-accent)] hover:shadow-glow-brand sm:p-8 md:p-10">
      <div className="relative flex w-full flex-1 items-center justify-center">
        <img
          src={src}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-28 w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32 md:h-36"
        />
      </div>
      <span className="mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--navy)]/60 transition-colors group-hover:text-[var(--navy)]">
        {name}
      </span>
    </div>
  );
}

export function LogoWorks() {
  return (
    <section className="border-t border-white/10 bg-[var(--navy)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
            Logo Design
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Logo Works
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
            Clean, memorable brand marks designed to work everywhere your business shows up.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {logoWorks.map((logo, i) => (
            <Reveal key={logo.id} delay={(i % 4) * 80} className="h-full">
              <LogoCard name={logo.name} src={placeholderSvg(logo.name)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

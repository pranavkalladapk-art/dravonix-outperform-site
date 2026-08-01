import { Reveal } from "./Reveal";

interface LogoItem {
  id: string;
  name: string;
  src: string;
  dark?: boolean;
}

const logoWorks: LogoItem[] = [
  { id: "logo-abodoo", name: "Abodoo Properties", src: "/logos/abodoo.png" },
  { id: "logo-decolux", name: "Decolux Group", src: "/logos/decolux.png" },
  { id: "logo-threefold", name: "Threefold", src: "/logos/threefold.png" },
  { id: "logo-izhakadha", name: "IZHAKADHA", src: "/logos/izhakadha.png", dark: true },
];

function LogoCard({ name, src, dark }: LogoItem) {
  return (
    <div
      className={`group flex h-full flex-col items-center rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--cyan-accent)] hover:shadow-glow-brand sm:p-8 md:p-10 ${
        dark ? "border-white/10 bg-[var(--card-dark)]" : "border-white/10 bg-white/95"
      }`}
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          className="h-28 w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32 md:h-36"
        />
      </div>
      <span
        className={`mt-5 text-center text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
          dark
            ? "text-[var(--muted-text)] group-hover:text-white"
            : "text-[var(--navy)]/60 group-hover:text-[var(--navy)]"
        }`}
      >
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
              <LogoCard {...logo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

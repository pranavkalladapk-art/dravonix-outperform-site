const clients = ["Halo Group", "Staya", "Zenora", "Luxora", "Novella Homes"];

export function ClientBar() {
  return (
    <section className="bg-[var(--offwhite)] py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--navy)]/50">
          Trusted by Ambitious Brands
        </p>

        {/* Desktop static row */}
        <div className="mt-8 hidden flex-wrap items-center justify-between gap-8 md:flex">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-xl font-bold tracking-tight text-[var(--navy)]/40 grayscale transition-all duration-300 hover:text-[var(--blue-brand)] hover:grayscale-0"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Mobile auto-scrolling marquee */}
        <div className="mt-8 overflow-hidden md:hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={i}
                className="font-display text-lg font-bold tracking-tight text-[var(--navy)]/50"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

export type LocationPageProps = {
  breadcrumb: Array<{ label: string; to?: string }>;
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string; points?: string[] }>;
  services?: Array<{ label: string; to: string }>;
  faqs?: Array<{ q: string; a: string }>;
  ctaTitle: string;
  ctaSubtitle: string;
};

export function LocationPage({
  breadcrumb,
  eyebrow,
  title,
  intro,
  sections,
  services,
  faqs,
  ctaTitle,
  ctaSubtitle,
}: LocationPageProps) {
  const buttons = (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
      >
        Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={ESTIMATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
      >
        Get a Free Estimate
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <main>
        <section className="pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                  {breadcrumb.map((b, i) => (
                    <li key={b.label} className="flex items-center gap-2">
                      {b.to ? (
                        <Link to={b.to} className="transition-opacity hover:opacity-80">
                          {b.label}
                        </Link>
                      ) : (
                        <span className="text-white/60">{b.label}</span>
                      )}
                      {i < breadcrumb.length - 1 && (
                        <ChevronRight aria-hidden className="h-3.5 w-3.5 text-white/30" />
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>

            <div className="mt-8 text-center">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  {eyebrow}
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {title}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  {intro}
                </p>
                {buttons}
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 70}>
                  <article className="h-full rounded-xl border border-white/10 bg-[var(--card-dark)] p-7">
                    <h2 className="font-display text-xl font-bold text-white">{s.heading}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.body}</p>
                    {s.points && (
                      <ul className="mt-4 space-y-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan-accent)]" />
                            <span className="text-sm leading-relaxed text-[var(--muted-text)]">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {services && services.length > 0 && (
          <section className="pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <Reveal>
                <h2 className="text-center font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Services We Deliver
                </h2>
              </Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="pb-20 md:pb-28">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <Reveal>
                <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Frequently Asked Questions
                </h2>
              </Reveal>
              <div className="mt-10 space-y-4">
                {faqs.map((f, i) => (
                  <Reveal key={f.q} delay={i * 50}>
                    <details className="group rounded-xl border border-white/10 bg-[var(--card-dark)] p-5 open:border-[var(--blue-brand)]/50">
                      <summary className="cursor-pointer list-none font-display text-base font-bold text-white marker:hidden">
                        <h3 className="inline text-base font-bold">{f.q}</h3>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                {ctaTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[var(--muted-text)]">{ctaSubtitle}</p>
              {buttons}
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

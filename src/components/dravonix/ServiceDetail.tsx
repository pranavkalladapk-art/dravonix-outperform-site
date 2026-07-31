import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { Breadcrumbs, serviceBreadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

const ESTIMATOR_URL = "https://estimate.dravonix.dev/";

export type ServiceDetailProps = {
  eyebrow: string;
  breadcrumbLabel?: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  estimateCta: string;
  services: Array<{ icon: LucideIcon; title: string; desc: string }>;
  steps: Array<{ title: string; desc: string }>;
  audience: string[];
  ctaTitle: string;
  ctaSubtitle: string;
  benefits?: string[];
  faqs?: Array<{ q: string; a: string }>;
  related?: Array<{ label: string; to: string }>;
};

export function ServiceDetail({
  eyebrow,
  breadcrumbLabel,
  title,
  subtitle,
  primaryCta,
  estimateCta,
  services,
  steps,
  audience,
  ctaTitle,
  ctaSubtitle,
  benefits,
  faqs,
  related,
}: ServiceDetailProps) {
  const buttons = (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-all hover:-translate-y-0.5 hover:bg-[var(--blue-brand)]/90"
      >
        {primaryCta} <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={ESTIMATOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-[var(--cyan-accent)] hover:bg-white/5"
      >
        {estimateCta}
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Nav />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <Breadcrumbs items={serviceBreadcrumbs(breadcrumbLabel ?? eyebrow)} />
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
                {subtitle}
              </p>
              {buttons}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              What&rsquo;s Included
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[var(--card-dark)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--blue-brand)] hover:shadow-glow-brand">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-[var(--blue-brand)]" />
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--blue-brand)]/15 text-[var(--blue-brand)]">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Our Process
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-white/10 bg-[var(--card-dark)] p-7">
                  <span className="font-display text-3xl font-bold text-[var(--blue-brand)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Who Is This For
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {audience.map((a, i) => (
              <Reveal key={a} delay={i * 60}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-[var(--card-dark)] p-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cyan-accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--muted-text)]">{a}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {benefits && benefits.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                Business Benefits
              </h2>
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={i * 60}>
                  <li className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-[var(--card-dark)] p-5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[var(--blue-brand)]" />
                    <span className="text-sm leading-relaxed text-[var(--muted-text)]">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
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

      {related && related.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <h2 className="text-center font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                Related Services &amp; Locations
              </h2>
            </Reveal>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--cyan-accent)] hover:text-white"
                >
                  {r.label}
                </Link>
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

      <Footer />
    </div>
  );
}

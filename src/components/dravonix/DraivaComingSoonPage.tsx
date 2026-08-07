import { ArrowRight, Check, Plus, Minus, Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { StatusBadge, SectionLabel } from "./DraivaUI";
import { DRAIVA_PRODUCTS, type DraivaProduct } from "./draiva-products";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

export type ComingSoonConfig = {
  product: DraivaProduct;
  eyebrow: string;
  h1: string;
  heroCopy: string;
  problem: { headline: string; body: string[]; points: string[] };
  capabilities: string[];
  useCases: string[];
  humanAI: { headline: string; body: string };
  connectCopy: string;
  faqs: Array<{ q: string; a: string }>;
};

function FaqList({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-7"
            >
              <span className="font-display text-base font-semibold text-white md:text-lg">
                {f.q}
              </span>
              <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border border-white/15 text-[var(--cyan-accent)]">
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-6 text-sm leading-relaxed text-[var(--muted-text)] md:px-7 md:text-base">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function DraivaComingSoonPage(cfg: ComingSoonConfig) {
  const { product: p } = cfg;
  const Icon = p.icon;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "DRAIVA Connect", href: "/draiva" },
                { label: p.navLabel, current: true },
              ]}
            />

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                    <span className="font-bold text-[var(--cyan-accent)]">DRAIVA</span>{" "}
                    <span className="text-white/80">{p.suffix.toUpperCase()}</span>
                  </p>
                  <StatusBadge status="COMING SOON" />
                </div>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                  {cfg.h1}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  {cfg.heroCopy}
                </p>
                <p className="mt-4 text-sm text-[var(--muted-text)]">
                  Part of{" "}
                  <Link
                    to="/draiva"
                    className="font-semibold text-[var(--cyan-accent)] underline-offset-4 hover:underline"
                  >
                    DRAIVA Connect
                  </Link>{" "}
                  — the omnichannel AI communication platform by Dravonix.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/draiva"
                    search={{ product: p.key }}
                    hash="book-demo"
                    onClick={() => trackLead({ content_name: `${p.name} — Register Interest` })}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                  >
                    Register Interest
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/draiva/whatsapp-ai"
                    onClick={() => trackLead({ content_name: `${p.name} — Explore WhatsApp` })}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Explore DRAIVA WhatsApp
                  </Link>
                  <Link
                    to="/draiva"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Back to DRAIVA Connect
                  </Link>
                </div>

              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[var(--cyan-accent)]/35 bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)]">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-semibold text-white">{p.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{p.desc}</p>
                  <div className="mt-6 space-y-3">
                    {DRAIVA_PRODUCTS.map((item) => {
                      const ItemIcon = item.icon;
                      const isCurrent = item.key === p.key;
                      const live = item.status === "NOW ONBOARDING";
                      return (
                        <Link
                          key={item.key}
                          to={item.path}
                          className={cn(
                            "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors",
                            isCurrent
                              ? "border-[var(--cyan-accent)]/45 bg-[var(--cyan-accent)]/[0.07]"
                              : "border-white/10 bg-white/[0.02] hover:border-white/25",
                          )}
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <ItemIcon
                              className={cn(
                                "h-4 w-4 flex-shrink-0",
                                live || isCurrent
                                  ? "text-[var(--cyan-accent)]"
                                  : "text-white/40",
                              )}
                              aria-hidden
                            />
                            <span className="truncate text-sm font-semibold text-white">
                              {item.name}
                            </span>
                          </span>
                          <span
                            className={cn(
                              "flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.12em]",
                              live ? "text-[var(--cyan-accent)]" : "text-white/45",
                            )}
                          >
                            {item.status}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-[var(--navy)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>The opportunity</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {cfg.problem.headline}
              </h2>
              {cfg.problem.body.map((b) => (
                <p
                  key={b}
                  className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--muted-text)] md:text-base"
                >
                  {b}
                </p>
              ))}
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cfg.problem.points.map((pt, i) => (
                <Reveal key={pt} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="text-sm leading-relaxed text-white/85">{pt}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PLANNED CAPABILITIES */}
        <section className="bg-[var(--navy)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>Planned for {p.name}</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                What we are designing.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-text)] md:text-base">
                These capabilities are planned directions for {p.name}. They are not available
                today and are described here so businesses can understand where DRAIVA Connect is
                heading.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cfg.capabilities.map((c, i) => (
                <Reveal key={c} delay={i * 40}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border border-[var(--cyan-accent)]/40 text-[var(--cyan-accent)]">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-white/90">{c}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-[var(--navy)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>Potential use cases</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Where {p.name} is intended to help.
              </h2>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {cfg.useCases.map((u) => (
                <span
                  key={u}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/85"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECT + HUMAN AI */}
        <section className="bg-[var(--navy)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-5 lg:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--cyan-accent)]">
                    <Sparkles className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-semibold text-white">
                    How it will connect to DRAIVA Connect
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                    {cfg.connectCopy}
                  </p>
                  <Link
                    to="/draiva"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-accent)]"
                  >
                    Explore DRAIVA Connect
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--cyan-accent)]">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-semibold text-white">
                    {cfg.humanAI.headline}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                    {cfg.humanAI.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[var(--navy)] py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                {p.name} questions.
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <FaqList faqs={cfg.faqs} />
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[var(--blue-brand)] py-20 md:py-28">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`cs-grid-${p.key}`} width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#cs-grid-${p.key})`} />
            </svg>
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Coming to DRAIVA Connect.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              We’re building the next communication layer of DRAIVA. Explore the platform today
              through DRAIVA WhatsApp.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/draiva"
                search={{ product: p.key }}
                hash="book-demo"
                onClick={() => trackLead({ content_name: `${p.name} — Register Interest (CTA)` })}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Register Interest
              </Link>
              <Link
                to="/draiva/whatsapp-ai"
                onClick={() => trackLead({ content_name: `${p.name} — Explore WhatsApp (CTA)` })}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore DRAIVA WhatsApp
              </Link>
              <Link
                to="/draiva"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Back to DRAIVA Connect
              </Link>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

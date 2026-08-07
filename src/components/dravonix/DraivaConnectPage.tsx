import { ArrowRight, Sparkles, UserPlus, Languages, ClipboardList, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { StatusBadge, SectionLabel } from "./DraivaUI";
import { DRAIVA_PRODUCTS, type DraivaProduct } from "./draiva-products";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

const intelligenceLayer = [
  {
    icon: Sparkles,
    title: "One intelligence layer",
    desc: "DRAIVA is the AI layer that understands customer conversations and business context across every supported channel.",
  },
  {
    icon: UserPlus,
    title: "AI with human control",
    desc: "Staff can take over any conversation through Human Handover, and assistant results always stay editable drafts.",
  },
  {
    icon: Languages,
    title: "Multilingual communication",
    desc: "English, Malayalam, Hindi and Arabic are currently supported in DRAIVA WhatsApp, including Malayalam-English mixed conversations.",
  },
  {
    icon: ClipboardList,
    title: "Shared lead context",
    desc: "Customer requirements and conversation context stay organised in one company workspace.",
  },
];

function ProductCard({ p }: { p: DraivaProduct }) {
  const live = p.status === "NOW ONBOARDING";
  const Icon = p.icon;
  const secondLabel = live ? "Book a Live Demo" : "Register Interest";
  return (
    <div
      className={cn(
        "group/card relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1",
        live
          ? "border-[var(--cyan-accent)]/45 bg-white/[0.05] shadow-[0_0_0_1px_rgba(6,182,212,0.08)]"
          : "border-white/10 bg-white/[0.02] hover:border-[var(--cyan-accent)]/35",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-11 w-11 place-items-center rounded-xl border",
            live
              ? "border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)]"
              : "border-white/12 bg-white/5 text-[var(--cyan-accent)]/80",
          )}
        >
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <StatusBadge status={p.status} />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold">
        <span className="font-bold tracking-[0.08em] text-[var(--cyan-accent)]">DRAIVA</span>
        <span className="text-white"> {p.suffix}</span>
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          live ? "text-white/85" : "text-[var(--muted-text)]",
        )}
      >
        {p.desc}
      </p>

      {/* Card body click target — sits behind the buttons, no nested links. */}
      <Link
        to={p.path}
        aria-label={`Explore ${p.name}`}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 z-0 rounded-2xl"
      />

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2.5">
        <Link
          to={p.path}
          onClick={() => trackLead({ content_name: `${p.name} — Explore (card)` })}
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/45 px-4 py-2 text-sm font-semibold text-[var(--cyan-accent)] transition-colors hover:bg-[var(--cyan-accent)]/10"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/draiva"
          search={{ product: p.key }}
          hash="book-demo"
          onClick={() => trackLead({ content_name: `${p.name} — ${secondLabel} (card)` })}
          className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
        >
          {secondLabel}
        </Link>
      </div>
    </div>
  );
}


function IntelligenceHub() {
  const spokes = DRAIVA_PRODUCTS;
  return (
    <div className="relative mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.16),transparent_62%)]"
      />
      <div className="relative">
        <div className="mx-auto flex max-w-xs flex-col items-center rounded-2xl border border-[var(--cyan-accent)]/40 bg-[var(--navy)] px-6 py-5 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
            DRAIVA
          </span>
          <span className="mt-1 font-display text-lg font-semibold text-white">Intelligence</span>
          <span className="mt-2 text-xs leading-relaxed text-[var(--muted-text)]">
            Shared customer context, business knowledge, multilingual communication and human
            collaboration.
          </span>
        </div>

        <div aria-hidden className="mx-auto my-6 h-10 w-px bg-gradient-to-b from-[var(--cyan-accent)]/60 to-transparent" />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {spokes.map((s) => {
            const Icon = s.icon;
            const live = s.status === "NOW ONBOARDING";
            return (
              <li key={s.key}>
                <Link
                  to={s.path}
                  className={cn(
                    "flex h-full flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center transition-colors",
                    live
                      ? "border-[var(--cyan-accent)]/45 bg-[var(--cyan-accent)]/[0.07]"
                      : "border-white/10 bg-white/[0.02] hover:border-[var(--cyan-accent)]/35",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      live ? "text-[var(--cyan-accent)]" : "text-[var(--cyan-accent)]/70",
                    )}
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-white">{s.suffix}</span>
                  <span
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.12em]",
                      live ? "text-[var(--cyan-accent)]" : "text-white/45",
                    )}
                  >
                    {s.status}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-center text-xs leading-relaxed text-[var(--muted-text)]">
          DRAIVA WhatsApp is the only channel available today. Web Chat, Mail, Social and Voice are
          in development and are designed to share this intelligence layer in future.
        </p>
      </div>
    </div>
  );
}

export function DraivaConnectPage() {
  const [current, ...upcoming] = DRAIVA_PRODUCTS;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "DRAIVA Connect", current: true }]}
            />

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  DRAIVA Connect
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                  One AI.
                  <br />
                  Every conversation.
                </h1>
                <p className="mt-4 text-sm font-semibold text-white/85">
                  Omnichannel AI Communication Platform by Dravonix
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  DRAIVA Connect is the intelligent customer communication platform by Dravonix,
                  designed to bring AI, customer conversations and human teams together across
                  messaging, web, email, social and voice.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/draiva/whatsapp-ai"
                    onClick={() => trackLead({ content_name: "DRAIVA Connect — Explore WhatsApp" })}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                  >
                    Explore DRAIVA WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/draiva"
                    search={{ product: "whatsapp" as const }}
                    hash="book-demo"
                    onClick={() => trackLead({ content_name: "DRAIVA Connect — Book a Live Demo" })}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Book a Live Demo
                  </Link>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[var(--muted-text)]">
                  DRAIVA WhatsApp is currently onboarding selected businesses through assisted
                  setup.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-text)]">
                    Channels in the ecosystem
                  </p>
                  <ul className="mt-5 space-y-3">
                    {DRAIVA_PRODUCTS.map((p) => {
                      const live = p.status === "NOW ONBOARDING";
                      const Icon = p.icon;
                      return (
                        <li key={p.key}>
                          <Link
                            to={p.path}
                            className={cn(
                              "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors",
                              live
                                ? "border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/[0.07]"
                                : "border-white/10 bg-white/[0.02] hover:border-white/25",
                            )}
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <Icon
                                className={cn(
                                  "h-4 w-4 flex-shrink-0",
                                  live
                                    ? "text-[var(--cyan-accent)]"
                                    : "text-[var(--cyan-accent)]/60",
                                )}
                                aria-hidden
                              />
                              <span className="truncate text-sm font-semibold text-white">
                                {p.name}
                              </span>
                            </span>
                            <span
                              className={cn(
                                "flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.14em]",
                                live ? "text-[var(--cyan-accent)]" : "text-white/45",
                              )}
                            >
                              {p.status}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-5 text-[11px] leading-relaxed text-white/45">
                    DRAIVA WhatsApp is the only channel currently available. The remaining modules
                    are in development and are not yet functioning products.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>The DRAIVA ecosystem</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                One intelligence layer.
                <br />
                Built for every customer channel.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Your customers communicate across different channels. DRAIVA Connect is being built
                to bring those conversations together through one shared intelligence layer.
              </p>
            </Reveal>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cyan-accent)]">
                Available now
              </p>
              <div className="mt-4 grid gap-5 lg:grid-cols-2">
                <Reveal>
                  <ProductCard p={current} />
                </Reveal>
                <Reveal delay={80}>
                  <div className="flex h-full flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                    <h3 className="font-display text-lg font-semibold text-white">
                      Start where your customers already are
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">
                      WhatsApp is the first live channel in DRAIVA Connect. Businesses can handle
                      enquiries with AI replies, understand voice messages, capture leads and move
                      conversations to staff whenever a human is needed.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold text-white/80">
                      {["AI replies", "Human handover", "Lead capture", "Multilingual"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="mt-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Coming soon
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {upcoming.map((p, i) => (
                  <Reveal key={p.key} delay={i * 60}>
                    <ProductCard p={p} />
                  </Reveal>
                ))}
              </div>
              <p className="mt-6 text-center text-xs leading-relaxed text-[var(--muted-text)]">
                These modules are planned additions to DRAIVA Connect. They are not available for
                signup and no launch dates are confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* CORE MESSAGE + HUB VISUAL */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>The core idea</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Your customers communicate everywhere.
                <br />
                Your AI should too.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                DRAIVA Connect is being built so businesses can understand, manage and respond to
                customer conversations through one intelligent system instead of operating
                disconnected AI tools for every channel.
              </p>
            </Reveal>

            <IntelligenceHub />
          </div>
        </section>

        {/* INTELLIGENCE LAYER */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>The DRAIVA layer</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                The intelligence behind every channel.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                DRAIVA is the AI assistant layer of the platform. As new channels join DRAIVA
                Connect, they are designed to share the same conversation intelligence, staff
                controls and company workspace.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {intelligenceLayer.map((f, i) => (
                <Reveal key={f.title} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--cyan-accent)]">
                      <f.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-white">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <p className="mx-auto mt-10 flex max-w-3xl items-start gap-2.5 rounded-xl border border-[var(--cyan-accent)]/30 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/85">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]"
                  aria-hidden
                />
                <span>
                  Company workspaces are tenant-separated with authenticated, role-based access.
                  Assistant output stays a draft until a staff member sends it.
                </span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* RELATED */}
        <section className="bg-[var(--navy)] pb-20 md:pb-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-white">
                  Explore related Dravonix work
                </h2>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
                  {[
                    { to: "/draiva/whatsapp-ai", label: "DRAIVA WhatsApp" },
                    { to: "/crm-business-automation", label: "CRM & Business Automation" },
                    { to: "/custom-web-applications", label: "Custom Web Applications" },
                    { to: "/contact", label: "Contact Dravonix" },
                  ].map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="rounded-full border border-white/12 px-4 py-2 text-white/85 transition-colors hover:border-[var(--cyan-accent)]/50 hover:text-[var(--cyan-accent)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[var(--blue-brand)] py-20 md:py-28">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="draiva-cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#draiva-cta-grid)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Start with WhatsApp. Grow with DRAIVA Connect.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              DRAIVA WhatsApp is the first channel in the DRAIVA Connect ecosystem, helping
              businesses bring AI into customer conversations today while the wider omnichannel
              platform continues to grow.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/draiva/whatsapp-ai"
                onClick={() =>
                  trackLead({ content_name: "DRAIVA Connect — Explore WhatsApp (CTA)" })
                }
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Explore WhatsApp AI
              </Link>
              <Link
                to="/contact"
                onClick={() =>
                  trackLead({ content_name: "DRAIVA Connect — Book a Live Demo (CTA)" })
                }
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book a Live Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

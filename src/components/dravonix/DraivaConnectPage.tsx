import {
  ArrowRight,
  MessageSquare,
  Globe,
  Mail,
  Share2,
  PhoneCall,
  Sparkles,
  UserPlus,
  Languages,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
      {children}
    </span>
  );
}

type Product = {
  icon: typeof MessageSquare;
  name: string;
  status: "AVAILABLE" | "COMING SOON";
  desc: string;
  href?: string;
  cta?: string;
};

export const draivaProducts: Product[] = [
  {
    icon: MessageSquare,
    name: "DRAIVA WhatsApp",
    status: "AVAILABLE",
    desc: "AI-powered WhatsApp customer conversations, intelligent replies, lead capture, multilingual communication and human handover.",
    href: "/whatsapp-ai",
    cta: "Explore WhatsApp AI",
  },
  {
    icon: Globe,
    name: "DRAIVA Web Chat",
    status: "COMING SOON",
    desc: "Bring DRAIVA directly to your website for intelligent customer conversations, enquiries and lead capture.",
  },
  {
    icon: Mail,
    name: "DRAIVA Mail",
    status: "COMING SOON",
    desc: "AI-assisted customer email communication designed to help teams understand enquiries and prepare intelligent responses.",
  },
  {
    icon: Share2,
    name: "DRAIVA Social",
    status: "COMING SOON",
    desc: "Intelligent social messaging for future supported channels including social direct-message experiences.",
  },
  {
    icon: PhoneCall,
    name: "DRAIVA Voice",
    status: "COMING SOON",
    desc: "AI-powered voice communication designed for natural customer conversations and business enquiries.",
  },
];

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
    desc: "English, Malayalam, Hindi and Arabic are currently supported, including Malayalam-English mixed conversations.",
  },
  {
    icon: ClipboardList,
    title: "Shared lead context",
    desc: "Customer requirements and conversation context stay organised in one company workspace.",
  },
];

function ProductCard({ p }: { p: Product }) {
  const available = p.status === "AVAILABLE";
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 transition-all",
        available
          ? "border-[var(--cyan-accent)]/45 bg-white/[0.05] shadow-[0_0_0_1px_rgba(6,182,212,0.08)] hover:-translate-y-1"
          : "border-white/10 bg-white/[0.02]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid h-11 w-11 place-items-center rounded-xl border",
            available
              ? "border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)]"
              : "border-white/10 bg-white/5 text-white/50",
          )}
        >
          <p.icon className="h-5 w-5" aria-hidden />
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em]",
            available
              ? "bg-[#25D366]/15 text-[#25D366]"
              : "border border-white/12 bg-white/[0.03] text-white/50",
          )}
        >
          {p.status}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold">
        <span className="font-bold tracking-[0.08em] text-[var(--cyan-accent)]">DRAIVA</span>
        <span className="text-white"> {p.name.replace("DRAIVA ", "")}</span>
      </h3>
      <p
        className={cn(
          "mt-3 flex-1 text-sm leading-relaxed",
          available ? "text-white/85" : "text-[var(--muted-text)]",
        )}
      >
        {p.desc}
      </p>

      {p.href && p.cta ? (
        <Link
          to={p.href}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-accent)]"
        >
          {p.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      ) : (
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
          In development
        </p>
      )}
    </div>
  );
}

export function DraivaConnectPage() {
  const [current, ...upcoming] = draivaProducts;

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
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  DRAIVA Connect is the AI communication platform by Dravonix, built to bring
                  customer conversations, AI intelligence and human teams together across every
                  supported communication channel.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/whatsapp-ai"
                    onClick={() => trackLead({ content_name: "DRAIVA Connect — Explore WhatsApp" })}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                  >
                    Explore DRAIVA WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => trackLead({ content_name: "DRAIVA Connect — Book a Live Demo" })}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Book a Live Demo
                  </Link>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-[var(--muted-text)]">
                  DRAIVA WhatsApp is currently available through assisted onboarding.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted-text)]">
                    Channels in the ecosystem
                  </p>
                  <ul className="mt-5 space-y-3">
                    {draivaProducts.map((p) => {
                      const available = p.status === "AVAILABLE";
                      return (
                        <li
                          key={p.name}
                          className={cn(
                            "flex items-center justify-between gap-3 rounded-xl border px-4 py-3",
                            available
                              ? "border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/[0.07]"
                              : "border-white/10 bg-white/[0.02]",
                          )}
                        >
                          <span className="flex min-w-0 items-center gap-3">
                            <p.icon
                              className={cn(
                                "h-4 w-4 flex-shrink-0",
                                available ? "text-[var(--cyan-accent)]" : "text-white/35",
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
                              available ? "text-[#25D366]" : "text-white/40",
                            )}
                          >
                            {p.status}
                          </span>
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
              <SectionLabel>DRAIVA Ecosystem</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                One intelligence layer. Built for every customer channel.
              </h2>
            </Reveal>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25D366]">
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
                  <Reveal key={p.name} delay={i * 60}>
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
                Connect, they share the same conversation intelligence, staff controls and company
                workspace.
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
                    { to: "/whatsapp-ai", label: "DRAIVA WhatsApp" },
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
                to="/whatsapp-ai"
                onClick={() => trackLead({ content_name: "DRAIVA Connect — Explore WhatsApp (CTA)" })}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Explore WhatsApp AI
              </Link>
              <Link
                to="/contact"
                onClick={() => trackLead({ content_name: "DRAIVA Connect — Book a Live Demo (CTA)" })}
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

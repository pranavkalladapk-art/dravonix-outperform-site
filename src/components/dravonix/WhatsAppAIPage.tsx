import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageSquare,
  Mic,
  Languages,
  BookOpen,
  UserPlus,
  Inbox,
  Check,
  X,
  Pause,
  Play,
  ExternalLink,
  Plus,
  Minus,
  Glasses,
  Stethoscope,
  GraduationCap,
  Building2,
  ShoppingCart,
  UtensilsCrossed,
  Plane,
  Briefcase,
  Ruler,
} from "lucide-react";
import { useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";
import { Breadcrumbs } from "./Breadcrumbs";
import { WhatsAppChatPreview } from "./WhatsAppChatPreview";
import { WhatsAppDemoForm } from "./WhatsAppDemoForm";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

export const whatsappFaqs = [
  {
    q: "Can this work with our existing WhatsApp Business number?",
    a: "Onboarding depends on the current number setup and eligibility for the official WhatsApp Business Platform. The Dravonix team will review the number and recommend the correct onboarding route.",
  },
  {
    q: "Can it understand Malayalam voice notes?",
    a: "The platform can be configured to transcribe and understand supported Malayalam, English and mixed-language voice notes. Responses are currently delivered through WhatsApp text.",
  },
  {
    q: "Can our staff take over a conversation?",
    a: "Yes. Important conversations can appear in the Human Handover Inbox, where authorised staff can review the context, pause AI, reply manually and resume AI.",
  },
  {
    q: "How does the AI know about our business?",
    a: "The assistant is configured using approved company information such as services, products, FAQs, policies and response rules.",
  },
  {
    q: "Will it replace our customer-service team?",
    a: "No. It is designed to handle routine conversations and assist the team. Human involvement remains important for pricing, complaints, sensitive enquiries and complex decisions.",
  },
  {
    q: "Is the platform currently available?",
    a: "The platform is in private beta, with selected businesses being accepted for demonstrations, onboarding and controlled testing.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing depends on conversation volume, supported languages, integrations, team access, onboarding complexity and support requirements.",
  },
  {
    q: "Does it use the official WhatsApp platform?",
    a: "Business onboarding is designed around the official WhatsApp Business Platform and its applicable requirements.",
  },
];

const PORTAL_URL = "https://app.dravonix.dev";

function scrollToDemo() {
  const el = document.getElementById("demo");
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--cyan-accent)]" />
      {children}
    </span>
  );
}

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI-Powered WhatsApp Replies",
    desc: "Answer common questions using approved business services, products, policies and FAQs.",
  },
  {
    icon: Mic,
    title: "Voice-Note Understanding",
    desc: "Customers can send supported voice notes. The platform transcribes the message, understands the enquiry and replies through WhatsApp text.",
  },
  {
    icon: Languages,
    title: "Malayalam and Multilingual Support",
    desc: "Configure English, Malayalam, Malayalam-English mixed conversations, Hindi and Arabic according to business requirements.",
  },
  {
    icon: BookOpen,
    title: "Business Knowledge Integration",
    desc: "Configure the assistant using approved company information, FAQs, policies and response rules.",
  },
  {
    icon: UserPlus,
    title: "Lead and Enquiry Capture",
    desc: "Collect customer details, requirements and conversation context for organised follow-up.",
  },
  {
    icon: Inbox,
    title: "Human Handover Inbox",
    desc: "Review important conversations, pause AI, reply manually and resume automation when appropriate.",
  },
];

const industries = [
  { icon: Glasses, title: "Optical stores", use: "Handle eye-test enquiries, store locations, frame questions and appointment requests." },
  { icon: Stethoscope, title: "Clinics and healthcare enquiries", use: "Share timings, services and appointment information. Not for diagnosis, emergency advice or treatment decisions." },
  { icon: GraduationCap, title: "Educational institutions", use: "Answer course enquiries, booking questions, seat availability and admission FAQs." },
  { icon: Building2, title: "Real estate companies", use: "Capture property requirements, schedule viewing enquiries and transfer qualified leads to agents." },
  { icon: ShoppingCart, title: "E-commerce businesses", use: "Respond to product, delivery, return and order-status questions with approved information." },
  { icon: UtensilsCrossed, title: "Restaurants and cloud kitchens", use: "Handle menu questions, timings, delivery areas and table or bulk-order enquiries." },
  { icon: Plane, title: "Travel and hospitality", use: "Answer package, availability and booking questions, then pass detailed enquiries to your team." },
  { icon: Briefcase, title: "Professional service businesses", use: "Qualify enquiries, explain service scope and organise consultation requests." },
];

const steps = [
  { n: "01", title: "Business Discovery", desc: "Understand the company's services, customers, common enquiries and preferred communication style." },
  { n: "02", title: "Knowledge Setup", desc: "Configure approved business information, FAQs, policies and response rules." },
  { n: "03", title: "WhatsApp Integration", desc: "Connect the business through the official WhatsApp Business Platform onboarding process." },
  { n: "04", title: "Testing and Optimisation", desc: "Test realistic conversations, supported languages, voice notes and handover scenarios." },
  { n: "05", title: "Launch and Support", desc: "Activate the system after approval with ongoing monitoring and optimisation options." },
];

const voiceFlow = [
  "Customer sends voice note",
  "Voice is transcribed",
  "AI understands the request",
  "Approved business knowledge is checked",
  "Customer receives a WhatsApp text reply",
];

function Waveform() {
  const bars = [8, 16, 26, 14, 30, 20, 36, 18, 28, 12, 22, 32, 14, 24, 10];
  return (
    <div aria-hidden className="flex h-12 items-center gap-1.5">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1.5 rounded-full bg-gradient-to-t from-[var(--blue-brand)] to-[var(--cyan-accent)] motion-safe:animate-pulse"
          style={{ height: `${h}px`, animationDelay: `${i * 90}ms`, animationDuration: "1.8s" }}
        />
      ))}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-10 space-y-3">
      {whatsappFaqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} delay={i * 40}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`wa-faq-panel-${i}`}
                id={`wa-faq-${i}`}
                className={cn(
                  "flex w-full items-start justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.02] p-5 text-left transition-all hover:border-[var(--cyan-accent)]/40",
                  isOpen && "border-[var(--cyan-accent)]/40 bg-white/[0.04]",
                )}
              >
                <span className="flex-1">
                  <span className="block font-display text-base font-semibold text-white md:text-lg">
                    {f.q}
                  </span>
                  <span
                    id={`wa-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`wa-faq-${i}`}
                    className={cn(
                      "grid overflow-hidden transition-all duration-300 ease-out",
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="min-h-0">
                      <span className="block text-sm leading-relaxed text-[var(--muted-text)]">
                        {f.a}
                      </span>
                    </span>
                  </span>
                </span>
                <span className="mt-1 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-white/15 text-[var(--cyan-accent)]">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WhatsAppAIPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "WhatsApp AI", current: true }]} />

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--cyan-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Coming Soon · Private Beta
                </span>
                <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Turn WhatsApp Conversations Into Customers.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  Dravonix WhatsApp AI helps businesses answer customer enquiries, understand voice
                  notes, capture leads and seamlessly connect important conversations with their team.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
                  Dravonix WhatsApp AI is currently under development. Selected businesses can
                  request a demo and join the early-access programme before the official launch.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      trackLead({ content_name: "WhatsApp AI — Request a Demo" });
                      scrollToDemo();
                    }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                  >
                    Request a Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollToDemo}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Join Early Access
                  </button>
                </div>

                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--muted-text)] underline underline-offset-4 transition-colors hover:text-[var(--cyan-accent)]"
                >
                  Client Portal — Coming Soon
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>

                <ul className="mt-8 grid gap-2.5 text-sm text-white/85 sm:grid-cols-3">
                  {["Text and voice-note understanding", "Malayalam and multilingual conversations", "Human handover support"].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
                  <WhatsAppChatPreview
                    messages={[
                      { from: "customer", voice: true, text: "Do you provide website development and branding packages?" },
                      {
                        from: "ai",
                        text: "Yes. Dravonix Media offers brand identity, website development, e-commerce and digital growth services. Tell me more about your business and I'll guide you to the right option.",
                      },
                    ]}
                    status="Voice note understood · Text response generated"
                    handover
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BUSINESS PROBLEM */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Built for modern customer conversations</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Your customers already use WhatsApp. Your business should be ready to respond.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Slow responses, repeated questions and missed enquiries can reduce customer trust.
                Dravonix WhatsApp AI helps businesses handle everyday conversations faster while
                keeping the team available for important decisions.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-white">
                    Without intelligent automation
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {["Delayed customer replies", "Repeated manual answers", "Missed enquiries", "Difficult team handover", "Unstructured conversations"].map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted-text)]">
                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/35" aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-[var(--cyan-accent)]/30 bg-white/[0.04] p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-white">
                    With Dravonix WhatsApp AI
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {["Faster responses to common enquiries", "Answers based on approved business information", "Voice-note understanding", "Lead and enquiry capture", "Human handover when required"].map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Core capabilities</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                More than an automated reply system.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--cyan-accent)]">
                      <c.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VOICE INTELLIGENCE */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <SectionLabel>Voice intelligence</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  Voice In. Intelligent Reply Out.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted-text)]">
                  Customers do not always type. Dravonix WhatsApp AI can process supported voice
                  notes, convert them into text, understand the request and send a clear written
                  response.
                </p>
                <div className="mt-8"><Waveform /></div>
                <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm leading-relaxed text-[var(--muted-text)]">
                  Voice input is supported. Customer-facing AI responses are currently delivered as
                  WhatsApp text for improved clarity and consistency.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ol className="space-y-3">
                  {voiceFlow.map((s, i) => (
                    <li
                      key={s}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-[var(--cyan-accent)]/40 text-xs font-bold text-[var(--cyan-accent)]">
                        {i + 1}
                      </span>
                      <span className="text-sm text-white/85">{s}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HUMAN HANDOVER */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <SectionLabel>Human handover</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  AI for speed. Your team for important moments.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted-text)]">
                  The assistant can handle routine enquiries while important conversations are made
                  visible to your team. Authorised staff can review the context, pause AI, reply
                  manually and resume automation when appropriate.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Important enquiries are easier to identify", "Team members can view the full conversation context", "AI can continue until manually paused", "Outbound controls help reduce duplicate replies"].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-white/85">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-2xl border border-white/10 bg-[#0E1626] p-4 shadow-2xl sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-text)]">
                    Human Handover Inbox
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { name: "Anjali R. · +91 98•• ••34", reason: "Pricing request", status: "AI Paused", agent: "Assigned to Akhil", paused: true },
                      { name: "+971 5•• ••• 21", reason: "Bulk order enquiry", status: "AI Active", agent: "Unassigned", paused: false },
                      { name: "Grace Optical · +91 90•• ••77", reason: "Appointment change", status: "AI Active", agent: "Assigned to Dhanya", paused: false },
                    ].map((c) => (
                      <div key={c.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-white">{c.name}</p>
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                              c.paused
                                ? "bg-amber-400/15 text-amber-300"
                                : "bg-[#25D366]/15 text-[#25D366]",
                            )}
                          >
                            {c.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[var(--muted-text)]">
                          {c.reason} · {c.agent}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <p className="text-xs text-[var(--muted-text)]">Reply to customer</p>
                    <div className="mt-2 h-9 rounded-md border border-white/10 bg-white/[0.04]" aria-hidden />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80">
                        <Pause className="h-3.5 w-3.5" aria-hidden /> Pause AI
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80">
                        <Play className="h-3.5 w-3.5" aria-hidden /> Resume AI
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                From onboarding to intelligent conversations.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[var(--cyan-accent)]/40">
                    <span className="font-display text-2xl font-bold text-[var(--cyan-accent)]">{s.n}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-xs leading-relaxed text-[var(--muted-text)]">
              Onboarding requirements and approval timelines may vary depending on Meta, the WhatsApp
              Business Platform and third-party service requirements.
            </p>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Built for service-driven businesses</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                A flexible AI assistant for different industries.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind, i) => (
                <Reveal key={ind.title} delay={i * 40}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40">
                    <ind.icon className="h-5 w-5 text-[var(--cyan-accent)]" aria-hidden />
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{ind.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-text)]">{ind.use}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-xs leading-relaxed text-[var(--muted-text)]">
              The assistant does not provide medical diagnosis, emergency advice or treatment
              decisions.
            </p>
          </div>
        </section>

        {/* LANGUAGE EXPERIENCE */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Local conversations. Professional experience.</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for the way your customers communicate.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Customers may communicate through English, Malayalam, Malayalam-English mixed
                language, Hindi or Arabic. The platform can be configured around supported language
                requirements while maintaining the company's approved tone and information rules.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <Reveal>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "Eye test-inu appointment kittumo?" },
                    { from: "ai", text: "Yes, appointment available aanu. Ethu divasam, ethu samayam venam ennu parayamo?" },
                  ]}
                  status="Malayalam-English mixed"
                />
              </Reveal>
              <Reveal delay={80}>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "क्या आप वेबसाइट भी बनाते हैं?" },
                    { from: "ai", text: "जी हाँ। हम वेबसाइट, ब्रांडिंग और ई-कॉमर्स सेवाएँ देते हैं। आपका व्यवसाय किस क्षेत्र में है?" },
                  ]}
                  status="Hindi"
                />
              </Reveal>
              <Reveal delay={160}>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "هل تقدمون خدمات التجارة الإلكترونية؟" },
                    { from: "ai", text: "نعم، نقدم تطوير المتاجر الإلكترونية والهوية التجارية. أخبرنا عن نشاطك التجاري." },
                  ]}
                  status="Arabic"
                />
              </Reveal>
            </div>
            <p className="mt-8 text-center text-xs text-[var(--muted-text)]">
              Language configuration depends on supported languages. Transcription and translation
              accuracy can vary.
            </p>
          </div>
        </section>

        {/* EARLY ACCESS */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <SectionLabel>Selected business onboarding</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Bring intelligent WhatsApp support to your business.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Dravonix WhatsApp AI is currently onboarding selected businesses for private-beta
                demonstrations, configuration and controlled testing.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted-text)]">
                Custom plans are prepared based on conversation volume, required languages,
                integrations, number of team members and support requirements.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                >
                  Request Early Access
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                >
                  Talk to Dravonix
                </Link>
              </div>
              <p className="mt-8 text-sm text-[var(--muted-text)]">
                Explore related services:{" "}
                <Link to="/crm-business-automation" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  CRM &amp; Business Automation
                </Link>
                ,{" "}
                <Link to="/custom-web-applications" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  Custom Web Applications
                </Link>{" "}
                and{" "}
                <Link to="/website-development" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  Website Development
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* COMING SOON */}
        <section className="bg-[var(--navy)] pb-4 pt-4 md:pb-8 md:pt-8">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Coming Soon
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  Intelligent WhatsApp Support Is Almost Here.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                  We&rsquo;re preparing Dravonix WhatsApp AI for selected business demonstrations and
                  controlled onboarding. Submit your details to receive launch updates, request a
                  private demo and discuss early-access availability.
                </p>
                <ul className="mx-auto mt-7 grid gap-2.5 text-left text-sm text-white/85 sm:max-w-2xl sm:grid-cols-3">
                  {[
                    "Platform testing in progress",
                    "Selected business demonstrations available",
                    "Public client access coming later",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={scrollToDemo}
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                >
                  Request Early Access
                </button>
              </div>
              <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[var(--muted-text)]">
                The platform is not publicly launched yet. Submitting this form registers your
                interest and allows the Dravonix team to contact you regarding private
                demonstrations and early-access onboarding.
              </p>
            </Reveal>
          </div>
        </section>

        <WhatsAppDemoForm />

        {/* FAQ */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                WhatsApp AI questions, answered.
              </h2>
            </Reveal>
            <FaqAccordion />
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-[var(--blue-brand)] py-20 md:py-28">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="wa-cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wa-cta-grid)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Build a Faster Customer Experience on WhatsApp.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              Let customers ask naturally, receive faster answers and reach your team when the
              conversation requires a human touch.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToDemo}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Book Your Demo
              </button>
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Client Portal — Coming Soon
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              Dravonix WhatsApp AI · Coming Soon · Private Beta
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MessageSquare,
  Mic,
  Languages,
  Inbox,
  Check,
  UserPlus,
  Bell,
  ShieldCheck,
  Plug,
  Sparkles,
  Plus,
  Minus,
  Stethoscope,
  GraduationCap,
  Building2,
  ShoppingCart,
  Hotel,
  Briefcase,
  Car,
  Headphones,
  FileText,
  Languages as TranslateIcon,
  PenLine,
  ClipboardList,
  CalendarClock,
  Search,
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
    q: "Will the AI automatically send every reply?",
    a: "The automatic WhatsApp assistant can reply according to the company’s approved rules. DRAIVA AI Conversation Assistant by Dravonix is a staff tool that only prepares drafts and never sends them automatically.",
  },
  {
    q: "Can a staff member take over a conversation?",
    a: "Yes. Conversations can be moved into Human Handover so an authorised team member can review the conversation and respond manually.",
  },
  {
    q: "Does the platform support voice messages?",
    a: "Yes. The platform supports voice-message processing and transcription through its configured voice infrastructure.",
  },
  {
    q: "Which languages are currently supported?",
    a: "English, Malayalam, Hindi and Arabic are currently supported. Malayalam-English mixed conversations are also supported.",
  },
  {
    q: "Can we connect our existing WhatsApp number?",
    a: "This depends on the number’s current WhatsApp registration and Meta onboarding eligibility. Dravonix will review the number before activation and recommend the appropriate setup.",
  },
  {
    q: "Can it confirm meetings or callbacks automatically?",
    a: "The platform can recognise meeting and callback requests and surface them to staff. It should not confirm a specific appointment unless the business has approved and recorded that scheduling action.",
  },
  {
    q: "Is this a bulk WhatsApp marketing platform?",
    a: "The platform is primarily designed for customer conversations, lead handling and support operations. Business-initiated campaigns must comply with Meta’s consent, template and messaging-policy requirements.",
  },
  {
    q: "Does DRAIVA AI Conversation Assistant by Dravonix send messages?",
    a: "No. DRAIVA AI Conversation Assistant by Dravonix creates drafts and conversation insights. The staff member reviews and manually sends the final reply.",
  },
];

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

function EarlyAccessBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan-accent)]/30 bg-[var(--cyan-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
      Early Access
    </span>
  );
}

const problemPoints = [
  "Respond to repeated enquiries",
  "Understand customer voice notes",
  "Capture customer requirements",
  "Detect callback and meeting requests",
  "Transfer important conversations to staff",
  "Keep conversations organised in one inbox",
];

const features = [
  {
    icon: MessageSquare,
    title: "AI Text Replies",
    desc: "Respond to supported enquiries using your business information, communication rules and approved AI instructions.",
  },
  {
    icon: Mic,
    title: "Voice Message Processing",
    desc: "Receive customer voice messages, convert speech into text and continue the conversation through supported text or voice workflows.",
  },
  {
    icon: UserPlus,
    title: "Human Handover",
    desc: "Move conversations from AI to authorised staff when customers request human assistance or the AI reaches a limitation.",
  },
  {
    icon: Inbox,
    title: "Live Conversation Inbox",
    desc: "View messages, unread activity, AI status, handover state and assigned team members from one dashboard.",
  },
  {
    icon: ClipboardList,
    title: "Lead Collection",
    desc: "Organise customer details, service requirements, budget information, timelines, quotation intent and follow-up needs.",
  },
  {
    icon: Languages,
    title: "Multilingual Conversations",
    desc: "Support conversations in English, Malayalam, Hindi and Arabic, including natural Malayalam-English mixed communication.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    desc: "Surface unread messages, handover requests and conversations requiring staff attention.",
  },
  {
    icon: Plug,
    title: "Official WhatsApp Integration",
    desc: "Connect through Meta’s official WhatsApp Cloud API and route conversations securely to the correct company workspace.",
  },
];

const copilotActions = [
  { icon: FileText, label: "Summarize" },
  { icon: PenLine, label: "Suggest Reply" },
  { icon: Sparkles, label: "Rewrite" },
  { icon: TranslateIcon, label: "Translate" },
  { icon: ClipboardList, label: "Extract Lead" },
  { icon: CalendarClock, label: "Follow-up" },
  { icon: Search, label: "Ask about this conversation" },
];

const handoverTriggers = [
  "Customer requests a human",
  "Meeting or callback request",
  "Custom quotation requirement",
  "Missing business information",
  "Sensitive or unsupported question",
  "Unread message during human assistance",
];

const handoverActions = [
  "Assign conversation",
  "Pause or resume AI",
  "Reply manually",
  "End human assistance",
  "Review handover reason",
  "Track unread activity",
];

const steps = [
  { n: "01", title: "Connect WhatsApp", desc: "Connect an eligible WhatsApp Business number using Meta’s official Cloud API." },
  { n: "02", title: "Configure the Business", desc: "Add services, supported languages, communication instructions and AI response rules." },
  { n: "03", title: "Receive Conversations", desc: "Customers send text messages, voice notes and supported media through WhatsApp." },
  { n: "04", title: "AI Responds or Escalates", desc: "The AI handles supported enquiries and surfaces conversations that require human attention." },
  { n: "05", title: "Staff Take Over", desc: "Authorised staff can review the conversation, use DRAIVA AI Conversation Assistant by Dravonix and respond manually." },
  { n: "06", title: "Capture the Opportunity", desc: "Customer requirements and lead information remain organised for follow-up." },
];

const dashboardModules = [
  "Overview",
  "Live Conversations",
  "Human Handover",
  "Leads",
  "Notifications",
  "DRAIVA AI Conversation Assistant by Dravonix",
  "Team Settings",
  "Company Settings",
  "WhatsApp Connection",
];

const useCases = [
  { icon: ShoppingCart, title: "Retail and E-commerce", desc: "Handle product, order-status, delivery and return enquiries with approved information." },
  { icon: Stethoscope, title: "Clinics and Healthcare Enquiries", desc: "Share timings, services and appointment enquiry information. Not for diagnosis or treatment decisions." },
  { icon: GraduationCap, title: "Education and Training Centres", desc: "Answer course, schedule, fee-structure and admission enquiries, then route serious interest to staff." },
  { icon: Building2, title: "Real Estate", desc: "Capture property requirements, budget ranges and site-visit interest for the sales team." },
  { icon: Hotel, title: "Hospitality and Resorts", desc: "Respond to availability, package and facility questions, and pass detailed bookings to staff." },
  { icon: Briefcase, title: "Professional Services", desc: "Qualify enquiries, explain service scope and organise consultation requests." },
  { icon: Car, title: "Automotive and Service Businesses", desc: "Handle service enquiries, availability questions and job-request details in one inbox." },
  { icon: Headphones, title: "Agencies and Customer Support Teams", desc: "Keep client conversations organised with AI drafts, handover and shared visibility." },
];

const securityPoints = [
  "Tenant-separated company accounts",
  "Authenticated dashboard access",
  "Role and permission-based controls",
  "Server-side company resolution",
  "Protected provider credentials",
  "Company-scoped conversations and leads",
  "Official WhatsApp Cloud API integration",
  "Duplicate-message safeguards",
];

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

/** Fictional product-interface preview used in the hero. */
function HeroProductVisual() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
      <WhatsAppChatPreview
        messages={[
          {
            from: "customer",
            voice: true,
            text: "Hi, I need a quotation for interior work. Can someone call me tomorrow?",
          },
          {
            from: "ai",
            text: "Thanks for reaching out. I’ve noted your quotation request and callback preference — a team member will confirm the timing with you.",
          },
        ]}
        status="Voice note transcribed · AI reply sent"
        handover
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0E1626] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
            DRAIVA AI Conversation Assistant by Dravonix
          </p>
          <p className="mt-2 text-xs leading-relaxed text-white/80">
            Customer requested an interior-work quotation and a callback tomorrow. No budget shared
            yet.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Summarize", "Suggest reply", "Use in Reply"].map((a) => (
              <span
                key={a}
                className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-semibold text-white/75"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[10px] leading-relaxed text-white/50">
            Draft only · staff review before sending
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0E1626] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-text)]">
            Lead details
          </p>
          <dl className="mt-2 space-y-1.5 text-[11px]">
            {[
              ["Name", "Nadia Rahman"],
              ["Number", "+971 5•• ••• 42"],
              ["Requirement", "Interior quotation"],
              ["Follow-up", "Callback requested"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3">
                <dt className="text-[var(--muted-text)]">{k}</dt>
                <dd className="text-right font-medium text-white/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-white/40">
        Illustrative interface preview. Names, numbers and messages are fictional.
      </p>
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
                <EarlyAccessBadge />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-text)]">
                  Dravonix WhatsApp AI
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                  Turn WhatsApp into an AI-powered customer operations desk.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
                  Dravonix WhatsApp AI helps businesses respond faster, understand customer needs,
                  process text and voice conversations, capture leads and transfer important
                  conversations to human staff—all from one secure dashboard.
                </p>
                <p className="mt-4 text-sm font-semibold text-white/85">
                  Text · Voice · Human Handover · Lead Capture · Multilingual AI
                </p>
                <p className="mt-3 text-sm text-[var(--muted-text)]">
                  Controlled onboarding is currently available for selected businesses.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    aria-label="Book a live demo of Dravonix WhatsApp AI"
                    onClick={() => {
                      trackLead({ content_name: "WhatsApp AI — Book a Live Demo" });
                      scrollToDemo();
                    }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                  >
                    Book a Live Demo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    type="button"
                    aria-label="Join the Dravonix WhatsApp AI early-access programme"
                    onClick={() => {
                      trackLead({ content_name: "WhatsApp AI — Join Early Access" });
                      scrollToDemo();
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                  >
                    Join Early Access
                  </button>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <HeroProductVisual />
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>The everyday problem</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Your customers are messaging. Your team cannot always reply instantly.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Missed WhatsApp enquiries can mean missed leads, delayed support and lost revenue.
                Dravonix WhatsApp AI helps businesses respond consistently, organise conversations
                and bring staff into the conversation whenever human attention is needed.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problemPoints.map((p, i) => (
                <Reveal key={p} delay={i * 50}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-[var(--cyan-accent)]/40">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                    <span className="text-sm leading-relaxed text-white/85">{p}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Core features</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                One platform for every WhatsApp conversation.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((c, i) => (
                <Reveal key={c.title} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40">
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

        {/* DRAVONIX COPILOT */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <SectionLabel>Meet DRAIVA AI Conversation Assistant by Dravonix</SectionLabel>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  Give every staff member an AI conversation copilot.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted-text)]">
                  DRAIVA AI Conversation Assistant by Dravonix helps staff understand customer conversations,
                  prepare replies, translate messages, extract lead details and plan follow-ups without
                  automatically sending messages.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {copilotActions.map((a) => (
                    <li
                      key={a.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-2 text-sm text-white/85"
                    >
                      <a.icon className="h-4 w-4 text-[var(--cyan-accent)]" aria-hidden />
                      {a.label}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 flex items-start gap-2.5 rounded-xl border border-[var(--cyan-accent)]/30 bg-white/[0.03] p-4 text-sm leading-relaxed text-white/85">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                  Every DRAIVA AI Conversation Assistant by Dravonix result remains a draft. Staff review
                  and manually send the final message.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <WhatsAppChatPreview
                    messages={[
                      { from: "customer", text: "Can you share pricing for a 3-bedroom apartment renovation?" },
                      { from: "ai", text: "I can collect the details so our team can prepare an accurate quotation. Which city is the apartment in?" },
                    ]}
                    status="Conversation · DRAIVA AI Conversation Assistant by Dravonix open"
                  />
                  <div className="rounded-2xl border border-white/10 bg-[#0E1626] p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--cyan-accent)]">
                      DRAIVA AI Conversation Assistant by Dravonix workspace
                    </p>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                          Conversation summary
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/85">
                          Renovation enquiry for a 3-bedroom apartment. Pricing requested, location
                          not yet confirmed.
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                          Suggested reply (draft)
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/85">
                          “Happy to help. Could you confirm the location and preferred timeline so we
                          can prepare a detailed quotation?”
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                          Extracted lead
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/85">
                          Service: Renovation · Property: 3BHK apartment · Intent: Quotation
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80">
                        <TranslateIcon className="h-3.5 w-3.5" aria-hidden /> Translate
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--cyan-accent)]">
                        <PenLine className="h-3.5 w-3.5" aria-hidden /> Use in Reply
                      </span>
                    </div>
                    <p className="mt-3 text-[10px] leading-relaxed text-white/50">
                      “Use in Reply” fills the reply composer. Nothing is sent until staff press send.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* HUMAN HANDOVER */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Human handover</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                AI when it helps. Humans when they matter.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                The platform identifies conversations that may need human attention and keeps them
                visible until an authorised staff member reviews them.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-white">
                    Conversations that may need a human
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {handoverTriggers.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--muted-text)]">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white/35" aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="h-full rounded-2xl border border-[var(--cyan-accent)]/30 bg-white/[0.04] p-6 md:p-8">
                  <h3 className="font-display text-lg font-semibold text-white">Staff actions</h3>
                  <ul className="mt-5 space-y-3">
                    {handoverActions.map((i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <p className="mt-8 text-center text-xs leading-relaxed text-[var(--muted-text)]">
              Handover behaviour depends on configured rules and staff review. Meetings and callbacks
              are surfaced to staff, not automatically confirmed.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                From first message to qualified lead.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[var(--cyan-accent)]/40">
                    <span className="font-display text-2xl font-bold text-[var(--cyan-accent)]">{s.n}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-text)]">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DASHBOARD */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>The workspace</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Everything your team needs in one workspace.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0E1626] p-4 shadow-2xl sm:p-6">
                <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                  <nav aria-label="Dashboard sections preview" className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
                    {dashboardModules.map((m, i) => (
                      <span
                        key={m}
                        className={cn(
                          "whitespace-nowrap rounded-xl border px-3.5 py-2 text-xs font-semibold",
                          i === 1
                            ? "border-[var(--cyan-accent)]/40 bg-[var(--cyan-accent)]/10 text-[var(--cyan-accent)]"
                            : "border-white/10 bg-white/[0.03] text-white/75",
                        )}
                      >
                        {m}
                      </span>
                    ))}
                  </nav>

                  <div className="space-y-3">
                    {[
                      { name: "Nadia Rahman · +971 5•• ••• 42", meta: "Quotation request · Assigned to Akhil", tag: "Human Handover", warn: true },
                      { name: "Rahul Menon · +91 98•• ••34", meta: "Voice note transcribed · AI replied", tag: "AI Active", warn: false },
                      { name: "Sara Iqbal · +44 74•• ••••21", meta: "Course enquiry · 2 unread", tag: "Unread", warn: true },
                      { name: "Fahad A. · +971 5•• ••• 09", meta: "Delivery status · AI replied", tag: "AI Active", warn: false },
                    ].map((c) => (
                      <div key={c.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-white">{c.name}</p>
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                              c.warn ? "bg-amber-400/15 text-amber-300" : "bg-[#25D366]/15 text-[#25D366]",
                            )}
                          >
                            {c.tag}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[var(--muted-text)]">{c.meta}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-center text-[10px] text-white/40">
                  Illustrative dashboard preview. All names and numbers are fictional or redacted.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LANGUAGE AND VOICE */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Language and voice</SectionLabel>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for how customers actually communicate.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Customers do not always send perfectly written messages. They use short enquiries,
                voice notes, informal language, mixed-language messages and multiple rapid replies.
                Dravonix WhatsApp AI is being developed to understand natural customer conversations
                without forcing every customer through rigid menus.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "Do you handle e-commerce store setup as well?" },
                    { from: "ai", text: "Yes. Could you share your product category and expected launch timeline?" },
                  ]}
                  status="English"
                />
              </Reveal>
              <Reveal delay={80}>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "Enik oru quotation venam, ethra divasam edukkum?" },
                    { from: "ai", text: "Quotation തയ്യാറാക്കാം. Project details onnu share cheyyamo?" },
                  ]}
                  status="Malayalam-English mixed"
                />
              </Reveal>
              <Reveal delay={160}>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "क्या आप वेबसाइट भी बनाते हैं?" },
                    { from: "ai", text: "जी हाँ। आपका व्यवसाय किस क्षेत्र में है, ताकि हम सही विकल्प बता सकें?" },
                  ]}
                  status="Hindi"
                />
              </Reveal>
              <Reveal delay={240}>
                <WhatsAppChatPreview
                  messages={[
                    { from: "customer", text: "هل يمكنني التحدث مع أحد الموظفين؟" },
                    { from: "ai", text: "بالتأكيد، سأقوم بتحويل المحادثة إلى أحد أعضاء الفريق لمتابعة طلبك." },
                  ]}
                  status="Arabic"
                />
              </Reveal>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {["English", "Malayalam", "Hindi", "Arabic"].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-1.5 text-sm font-semibold text-white/85"
                >
                  {l}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-[var(--muted-text)]">
              Malayalam-English mixed conversations supported.
            </p>
          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Business use cases</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Designed around real customer operations.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 40}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-[var(--cyan-accent)]/40">
                    <u.icon className="h-5 w-5 text-[var(--cyan-accent)]" aria-hidden />
                    <h3 className="mt-4 font-display text-base font-semibold text-white">{u.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted-text)]">{u.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-xs leading-relaxed text-[var(--muted-text)]">
              The platform supports operational conversations only. It does not provide medical,
              financial or legal decisions.
            </p>
          </div>
        </section>

        {/* SECURITY AND ACCESS */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal className="text-center">
              <SectionLabel>Security and access</SectionLabel>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Built for secure company workspaces.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {securityPoints.map((s, i) => (
                <Reveal key={s} delay={i * 40}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                    <span className="text-sm leading-relaxed text-white/85">{s}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EARLY-ACCESS ONBOARDING */}
        <section className="bg-[var(--navy)] py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <EarlyAccessBadge />
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Early-access onboarding for selected businesses.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted-text)]">
                Every business has different message volumes, languages, workflows, team requirements
                and integration needs. Dravonix will review your requirements and recommend the
                appropriate onboarding setup.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  aria-label="Request WhatsApp AI onboarding"
                  onClick={() => {
                    trackLead({ content_name: "WhatsApp AI — Request Onboarding" });
                    scrollToDemo();
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
                >
                  Request Onboarding
                </button>
                <button
                  type="button"
                  aria-label="Book a WhatsApp AI demo"
                  onClick={scrollToDemo}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
                >
                  Book a Demo
                </button>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-[var(--muted-text)]">
                Self-service subscription management and automated usage billing are currently being
                finalised.
              </p>
              <p className="mt-8 text-sm text-[var(--muted-text)]">
                Explore related services:{" "}
                <Link to="/social-media-management" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  Social Media Management
                </Link>
                ,{" "}
                <Link to="/crm-business-automation" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  CRM &amp; Business Automation
                </Link>
                ,{" "}
                <Link to="/custom-web-applications" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  Custom Web Applications &amp; SaaS
                </Link>{" "}
                or{" "}
                <Link to="/contact" className="text-[var(--cyan-accent)] underline underline-offset-4">
                  book a consultation
                </Link>
                .
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
              Build a faster WhatsApp customer experience.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
              See how AI replies, voice processing, lead collection, Human Handover and DRAIVA AI Conversation Assistant by
              Dravonix can work together for your business.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                aria-label="Book a live demo of Dravonix WhatsApp AI"
                onClick={() => {
                  trackLead({ content_name: "WhatsApp AI — Book a Live Demo (Footer CTA)" });
                  scrollToDemo();
                }}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--navy)] shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Book a Live Demo
              </button>
              <button
                type="button"
                aria-label="Join the Dravonix WhatsApp AI early-access programme"
                onClick={scrollToDemo}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                Join Early Access
              </button>
            </div>
            <p className="mt-6 text-sm text-white/85">
              Controlled onboarding is currently available for selected businesses.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

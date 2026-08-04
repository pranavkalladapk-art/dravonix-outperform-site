import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquare, Mic, Languages, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppChatPreview } from "./WhatsAppChatPreview";
import { scrollToSection } from "@/hooks/use-section-url-sync";
import { trackLead } from "@/lib/metaPixel";

const points = [
  { icon: MessageSquare, label: "AI-powered customer replies" },
  { icon: Mic, label: "Voice-note understanding" },
  { icon: Languages, label: "Multilingual Conversations" },
  { icon: Users, label: "Human handover dashboard" },
];

export function WhatsAppAIHighlight() {
  return (
    <section id="whatsapp-ai" className="bg-[var(--navy)] pb-20 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cyan-accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              New · Private Beta
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Meet Dravonix WhatsApp AI.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted-text)] md:text-lg">
              An intelligent WhatsApp business assistant that answers customer enquiries,
              understands voice notes, captures leads and seamlessly connects important
              conversations with your team.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p.label} className="flex items-start gap-2.5 text-sm text-white/85">
                  <p.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--cyan-accent)]" aria-hidden />
                  {p.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/whatsapp-ai"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blue-brand)] px-7 py-3.5 text-sm font-semibold text-white shadow-glow-brand transition-transform hover:-translate-y-0.5"
              >
                Explore WhatsApp AI
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  trackLead({ content_name: "WhatsApp AI — Book a Demo (Home)" });
                  scrollToSection("contact", "smooth");
                }}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cyan-accent)]/60 hover:text-[var(--cyan-accent)]"
              >
                Book a Demo
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <WhatsAppChatPreview
              messages={[
                {
                  from: "customer",
                  voice: true,
                  text: "Can you tell me about your website and branding packages?",
                },
                {
                  from: "ai",
                  text: "Yes. We can help with brand identity, website development and digital growth. Tell me about your business and I'll guide you to the right solution.",
                },
              ]}
              status="Voice note understood · Text response generated"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

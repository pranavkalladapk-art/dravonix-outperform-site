import { createFileRoute } from "@tanstack/react-router";
import { DraivaComingSoonPage } from "@/components/dravonix/DraivaComingSoonPage";
import { DRAIVA_PRODUCTS } from "@/components/dravonix/draiva-products";
import { buildHead, breadcrumbSchema } from "@/lib/seo";

const product = DRAIVA_PRODUCTS.find((p) => p.key === "voice")!;

const title = "DRAIVA Voice — Coming Soon | AI Voice Conversations by Dravonix";
const description =
  "DRAIVA Voice is coming soon — a conversational voice intelligence layer being designed for future customer enquiries, lead handling and business communication.";

export const Route = createFileRoute("/draiva/voice")({
  head: () =>
    buildHead("/draiva/voice", {
      title,
      description,
      noindex: true,
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
          { name: "Voice", path: "/draiva/voice" },
        ]),
      ],
    }),
  component: VoicePage,
});

function VoicePage() {
  return (
    <DraivaComingSoonPage
      product={product}
      eyebrow="DRAIVA VOICE"
      h1="Give business conversations a voice."
      heroCopy="DRAIVA Voice is being designed to bring natural AI-powered voice interactions into the DRAIVA Connect ecosystem for future customer enquiries, lead handling and business communication."
      problem={{
        headline: "Calls still carry the enquiries that matter most.",
        body: [
          "Phone enquiries are often the highest-intent contact a business receives, and also the easiest to lose. A missed call rarely leaves a record of what the caller wanted.",
          "DRAIVA Voice is being designed as a future voice intelligence layer for the DRAIVA Connect ecosystem. It is not available today, and Dravonix does not currently offer AI phone calling.",
        ],
        points: [
          "Missed phone enquiries outside staffed hours.",
          "Repetitive information requests about services and timings.",
          "Limited staff availability during busy periods.",
          "Little structured context left behind after a call.",
          "Slow follow-up on callers who were never called back.",
          "Call enquiries disconnected from messaging conversations.",
        ],
      }}
      capabilities={[
        "Natural voice conversations",
        "Business knowledge understanding",
        "Lead capture",
        "Call intent detection",
        "Multilingual voice experiences",
        "Human escalation",
        "Conversation summaries",
        "Business enquiry handling",
        "DRAIVA intelligence integration",
      ]}
      useCases={[
        "Customer enquiries",
        "Lead qualification",
        "Service information",
        "Business information",
        "Customer support",
        "Appointment request intake",
        "Human escalation",
      ]}
      humanAI={{
        headline: "AI when it helps. Humans when they matter.",
        body: "DRAIVA Voice is being designed so a conversation can be escalated to a person whenever human judgement is needed. Appointment requests are intended to be captured as requests for the team to confirm, not automatically booked.",
      }}
      connectCopy="DRAIVA Voice is planned as a channel inside DRAIVA Connect so voice enquiries can share the same intelligence layer, staff controls and company workspace used by DRAIVA WhatsApp today. It is designed to support multilingual customer conversations across future DRAIVA channels, responding in the customer's language whenever it can reasonably determine the language. It is not available yet, and no launch date is confirmed."
      faqs={[
        {
          q: "What is DRAIVA Voice?",
          a: "DRAIVA Voice is a planned voice intelligence layer within DRAIVA Connect, the AI communication platform by Dravonix. It is being designed for future customer enquiries, lead handling and business voice communication.",
        },
        {
          q: "Is DRAIVA Voice available now?",
          a: "No. DRAIVA Voice is coming soon and is not available for signup. DRAIVA WhatsApp is the only DRAIVA channel currently available, through assisted onboarding.",
        },
        {
          q: "Will it support AI phone conversations?",
          a: "AI-powered voice conversations are the intended direction of the product. Dravonix does not currently offer live AI phone calls, outbound automated calling or production phone-number integration. Capabilities will be announced as development progresses.",
        },
        {
          q: "Will businesses be able to escalate to humans?",
          a: "Human escalation is a planned capability, matching the human handover approach already available in DRAIVA WhatsApp.",
        },
        {
          q: "Which languages will DRAIVA Voice support?",
          a: "DRAIVA is designed for multilingual customer conversations and responds in the customer's language whenever it can reasonably determine the language. For voice specifically, spoken language availability may depend on the configured speech provider and voice model, and will be announced as development progresses.",
        },
      ]}
    />
  );
}

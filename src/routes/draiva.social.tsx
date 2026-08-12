import { createFileRoute } from "@tanstack/react-router";
import { DraivaComingSoonPage } from "@/components/dravonix/DraivaComingSoonPage";
import { DRAIVA_PRODUCTS } from "@/components/dravonix/draiva-products";
import { buildHead, breadcrumbSchema } from "@/lib/seo";

const product = DRAIVA_PRODUCTS.find((p) => p.key === "social")!;

const title = "DRAIVA Social — Coming Soon | AI Social Messaging by Dravonix";
const description =
  "DRAIVA Social is coming soon — a future AI layer being designed for customer conversations across supported social direct-message channels.";

export const Route = createFileRoute("/draiva/social")({
  head: () =>
    buildHead("/draiva/social", {
      title,
      description,
      noindex: true,
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
          { name: "Social", path: "/draiva/social" },
        ]),
      ],
    }),
  component: SocialPage,
});

function SocialPage() {
  return (
    <DraivaComingSoonPage
      product={product}
      eyebrow="DRAIVA SOCIAL"
      h1="Bring intelligence into social conversations."
      heroCopy="DRAIVA Social is being designed as the future social messaging layer of DRAIVA Connect, helping businesses manage supported direct-message conversations through one intelligent communication system."
      problem={{
        headline: "Social enquiries arrive fast and scatter quickly.",
        body: [
          "Campaigns and content bring people into direct messages, often outside working hours and across more than one profile. Without a shared system, those conversations sit apart from the rest of the customer picture.",
          "DRAIVA Social is designed for future supported social messaging channels, including Instagram direct-message experiences. Dravonix is not an official Meta or Instagram partner, and no integration is confirmed.",
        ],
        points: [
          "Enquiries spread across multiple social channels.",
          "Slow direct-message responses during campaign spikes.",
          "Missed leads that never move beyond a first message.",
          "Disconnected customer context between social and other channels.",
          "Repetitive questions about products, pricing and availability.",
          "No shared record of what was promised in a DM.",
        ],
      }}
      capabilities={[
        "Social direct-message assistance",
        "Customer enquiry handling",
        "Lead capture",
        "Conversation classification",
        "Suggested replies",
        "Multilingual messaging",
        "Human handover",
        "Shared conversation context",
        "Centralized inbox workflows",
      ]}
      useCases={[
        "Instagram enquiries",
        "Campaign responses",
        "Product questions",
        "Sales enquiries",
        "Lead capture",
        "Customer support",
        "Social DM management",
      ]}
      humanAI={{
        headline: "AI when it helps. Humans when they matter.",
        body: "As with DRAIVA WhatsApp today, the design intent for DRAIVA Social is that staff can take over any conversation and that assistant output stays a draft until a person sends it.",
      }}
      connectCopy="DRAIVA Social is planned as a channel inside DRAIVA Connect so social conversations can share the same intelligence layer, staff controls and company workspace used by DRAIVA WhatsApp today. It is designed to support multilingual customer conversations across future DRAIVA channels, responding in the customer's language whenever it can reasonably determine the language. It is not available yet, and no launch date or platform integration is confirmed."
      faqs={[
        {
          q: "What is DRAIVA Social?",
          a: "DRAIVA Social is a planned social messaging layer within DRAIVA Connect, the AI communication platform by Dravonix. It is being designed for customer conversations across supported social direct-message channels.",
        },
        {
          q: "Is DRAIVA Social available now?",
          a: "No. DRAIVA Social is coming soon and is not available for signup. DRAIVA WhatsApp is the only DRAIVA channel currently available, through assisted onboarding.",
        },
        {
          q: "Which social platforms will it support?",
          a: "Supported channels will be announced as development progresses. DRAIVA Social is designed for future supported social messaging channels, including Instagram direct-message experiences. Dravonix does not claim any official Meta or Instagram partnership or integration.",
        },
        {
          q: "Will it support human handover?",
          a: "Human handover is a planned capability, matching how DRAIVA WhatsApp already lets staff take over a conversation. It is not available yet.",
        },
        {
          q: "Will social conversations connect to DRAIVA Connect?",
          a: "That is the intent. DRAIVA Social is planned as a channel inside DRAIVA Connect so conversations can share the same intelligence layer and company workspace as other supported channels.",
        },
      ]}
    />
  );
}

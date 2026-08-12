import { createFileRoute } from "@tanstack/react-router";
import { DraivaComingSoonPage } from "@/components/dravonix/DraivaComingSoonPage";
import { DRAIVA_PRODUCTS } from "@/components/dravonix/draiva-products";
import { buildHead, breadcrumbSchema } from "@/lib/seo";

const product = DRAIVA_PRODUCTS.find((p) => p.key === "web-chat")!;

const title = "DRAIVA Web Chat — Coming Soon | AI Website Conversations by Dravonix";
const description =
  "DRAIVA Web Chat is coming soon — an AI website conversation layer being designed to help visitors ask questions, discover services and reach the right human team.";

export const Route = createFileRoute("/draiva/web-chat")({
  head: () =>
    buildHead("/draiva/web-chat", {
      title,
      description,
      noindex: true,
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
          { name: "Web Chat", path: "/draiva/web-chat" },
        ]),
      ],
    }),
  component: WebChatPage,
});

function WebChatPage() {
  return (
    <DraivaComingSoonPage
      product={product}
      eyebrow="DRAIVA WEB CHAT"
      h1="Turn website visits into intelligent conversations."
      heroCopy="DRAIVA Web Chat is being designed to bring AI-assisted customer conversations directly into business websites, helping visitors ask questions, discover services and connect with the right human team when needed."
      problem={{
        headline: "Your website should do more than display information.",
        body: [
          "Most business websites answer the questions the business thought to publish. Visitors arrive with their own question — about a service, a price range, availability or whether the business handles their specific situation — and there is often no fast way to ask it.",
          "DRAIVA Web Chat is being designed as an intelligent conversation layer for that moment, so a visitor can ask in their own words and reach a useful answer or the right person instead of leaving.",
        ],
        points: [
          "Visitors leave when they cannot quickly find a specific answer.",
          "Contact forms delay the conversation until someone replies by email.",
          "Enquiries arrive without context about what the visitor was reading.",
          "Repetitive questions consume time that staff could spend on real opportunities.",
          "Website enquiries stay disconnected from other customer conversations.",
          "After-hours visitors have no way to start a conversation.",
        ],
      }}
      capabilities={[
        "AI website conversations",
        "Business knowledge integration",
        "Visitor enquiry handling",
        "Lead capture",
        "Multilingual conversations",
        "Human handover",
        "Conversation history",
        "Visitor qualification",
        "Shared DRAIVA intelligence",
        "Business dashboard integration",
      ]}
      useCases={[
        "Sales enquiries",
        "Service enquiries",
        "Product questions",
        "Lead capture",
        "Website customer support",
        "After-hours website enquiries",
        "Visitor qualification",
      ]}
      humanAI={{
        headline: "AI when it helps. Humans when they matter.",
        body: "DRAIVA Web Chat is being designed so a conversation can move to a staff member whenever a human should take over. The intent is that people stay in control of what gets committed to a customer, with the assistant supporting rather than replacing the team.",
      }}
      connectCopy="DRAIVA Web Chat is planned as a channel inside DRAIVA Connect, sharing the same intelligence layer, staff controls and company workspace that DRAIVA WhatsApp uses today. It is designed to support multilingual customer conversations across future DRAIVA channels, responding in the customer's language whenever it can reasonably determine the language. It is not available yet, and no launch date is confirmed."
      faqs={[
        {
          q: "What is DRAIVA Web Chat?",
          a: "DRAIVA Web Chat is a planned website conversation channel within DRAIVA Connect, the AI communication platform by Dravonix. It is being designed to let website visitors ask questions and reach the right team through an AI-assisted chat experience.",
        },
        {
          q: "Is DRAIVA Web Chat available now?",
          a: "No. DRAIVA Web Chat is coming soon and is not available for signup. DRAIVA WhatsApp is the only DRAIVA channel currently available, through assisted onboarding.",
        },
        {
          q: "How will DRAIVA Web Chat work with websites?",
          a: "The intended approach is a chat experience embedded in a business website that draws on the business information the company has approved. Exact integration details will be published as development progresses.",
        },
        {
          q: "Will it support human handover?",
          a: "Human handover is a planned capability, matching how DRAIVA WhatsApp already lets staff take over a conversation. It is not available yet.",
        },
        {
          q: "Will it connect with DRAIVA Connect?",
          a: "Yes, that is the plan. DRAIVA Web Chat is designed as a channel within DRAIVA Connect so website conversations can share the same intelligence layer and company workspace as other supported channels.",
        },
      ]}
    />
  );
}

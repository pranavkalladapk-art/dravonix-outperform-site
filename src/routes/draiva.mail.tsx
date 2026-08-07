import { createFileRoute } from "@tanstack/react-router";
import { DraivaComingSoonPage } from "@/components/dravonix/DraivaComingSoonPage";
import { DRAIVA_PRODUCTS } from "@/components/dravonix/draiva-products";
import { buildHead, breadcrumbSchema } from "@/lib/seo";

const product = DRAIVA_PRODUCTS.find((p) => p.key === "mail")!;

const title = "DRAIVA Mail — Coming Soon | AI Email Intelligence by Dravonix";
const description =
  "DRAIVA Mail is coming soon — an AI email intelligence layer being designed to help teams understand enquiries, organise inboxes and prepare context-aware replies.";

export const Route = createFileRoute("/draiva/mail")({
  head: () =>
    buildHead("/draiva/mail", {
      title,
      description,
      noindex: true,
      schemas: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
          { name: "Mail", path: "/draiva/mail" },
        ]),
      ],
    }),
  component: MailPage,
});

function MailPage() {
  return (
    <DraivaComingSoonPage
      product={product}
      eyebrow="DRAIVA MAIL"
      h1="Turn crowded inboxes into intelligent conversations."
      heroCopy="DRAIVA Mail is being designed to help businesses understand customer emails, organize enquiries and prepare context-aware responses while keeping human teams in control."
      problem={{
        headline: "A shared inbox is where enquiries go to wait.",
        body: [
          "Business inboxes collect sales enquiries, support requests, quotation questions and supplier mail in one undifferentiated stream. Sorting what matters takes time, and slow replies quietly cost work.",
          "DRAIVA Mail is being designed as an intelligence layer over that inbox — not an autonomous email sender. The intent is to help a team see what an email is asking for and prepare a reply faster.",
        ],
        points: [
          "Overloaded business inboxes with no clear priority order.",
          "Missed enquiries buried under routine mail.",
          "Repetitive responses written from scratch every time.",
          "Slow response preparation across a busy team.",
          "Email threads disconnected from other customer conversations.",
          "No shared view of who is handling which enquiry.",
        ],
      }}
      capabilities={[
        "Email enquiry understanding",
        "AI-assisted draft responses",
        "Conversation summarization",
        "Lead identification",
        "Intent detection",
        "Priority classification",
        "Multilingual email assistance",
        "Shared customer context",
        "Human review before sending",
        "Team collaboration",
      ]}
      useCases={[
        "Customer enquiries",
        "Sales emails",
        "Support requests",
        "Quotation enquiries",
        "Lead follow-ups",
        "Service enquiries",
        "Business inbox management",
      ]}
      humanAI={{
        headline: "AI prepares. Your team stays in control.",
        body: "DRAIVA Mail is intended to assist teams rather than act on their behalf. Assistant output is planned to stay a draft, with review and approval in human hands wherever a message goes to a customer. DRAIVA Mail is not designed to send emails autonomously.",
      }}
      connectCopy="DRAIVA Mail is planned as an email channel inside DRAIVA Connect, sharing the same intelligence layer, staff controls and company workspace used by DRAIVA WhatsApp today. It is not available yet, and no launch date is confirmed."
      faqs={[
        {
          q: "What is DRAIVA Mail?",
          a: "DRAIVA Mail is a planned email intelligence layer within DRAIVA Connect, the AI communication platform by Dravonix. It is being designed to help teams understand customer emails, organise enquiries and prepare context-aware replies.",
        },
        {
          q: "Is DRAIVA Mail available yet?",
          a: "No. DRAIVA Mail is coming soon and is not available for signup. DRAIVA WhatsApp is the only DRAIVA channel currently available, through assisted onboarding.",
        },
        {
          q: "Will DRAIVA Mail automatically send emails?",
          a: "No. DRAIVA Mail is being designed as an assistance layer. The intent is that assistant output remains a draft and a person decides what is sent.",
        },
        {
          q: "Will teams be able to review replies?",
          a: "Yes, human review is central to the design. Drafts are intended to be editable, and sending is intended to stay a human action.",
        },
        {
          q: "How will it connect with DRAIVA Connect?",
          a: "DRAIVA Mail is planned as a channel inside DRAIVA Connect so email enquiries can share the same intelligence layer and company workspace as other supported channels.",
        },
      ]}
    />
  );
}

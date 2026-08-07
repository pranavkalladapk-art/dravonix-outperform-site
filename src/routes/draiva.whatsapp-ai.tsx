import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppAIPage, whatsappFaqs } from "@/components/dravonix/WhatsAppAIPage";
import { buildHead, breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/seo";

const title = "WhatsApp AI Chatbot for Business | DRAIVA by Dravonix";
const description =
  "Automate customer conversations on WhatsApp with DRAIVA by Dravonix. Handle enquiries, multilingual replies, lead capture and human handover with AI-powered WhatsApp communication.";

export const Route = createFileRoute("/draiva/whatsapp-ai")({
  head: () =>
    buildHead("/draiva/whatsapp-ai", {
      title,
      description,
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DRAIVA WhatsApp",
          alternateName: "Dravonix WhatsApp AI",
          description:
            "AI-Powered WhatsApp Customer Communication by Dravonix — intelligent replies, multilingual conversations, lead capture and human handover.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, WhatsApp",
          url: `${SITE_URL}/draiva/whatsapp-ai`,
          isPartOf: {
            "@type": "SoftwareApplication",
            name: "DRAIVA Connect",
            url: `${SITE_URL}/draiva`,
          },
          publisher: { "@type": "Organization", name: "Dravonix Media", url: SITE_URL },
        },
        faqSchema(whatsappFaqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
          { name: "WhatsApp AI", path: "/draiva/whatsapp-ai" },
        ]),
      ],
    }),
  component: WhatsAppAIPage,
});

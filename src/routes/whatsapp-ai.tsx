import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppAIPage, whatsappFaqs } from "@/components/dravonix/WhatsAppAIPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema, SITE_URL } from "@/lib/seo";

const title = "WhatsApp AI Chatbot for Business | DRAIVA by Dravonix";
const description =
  "Automate customer conversations on WhatsApp with DRAIVA by Dravonix. Handle enquiries, multilingual replies, lead capture and human handover with AI-powered WhatsApp communication.";

export const Route = createFileRoute("/whatsapp-ai")({
  head: () =>
    buildHead("/whatsapp-ai", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "DRAIVA WhatsApp — AI WhatsApp Customer Communication",
          description,
          path: "/whatsapp-ai",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA", path: "/draiva" },
          { name: "WhatsApp AI", path: "/whatsapp-ai" },
        ]),
        faqSchema(whatsappFaqs),
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DRAIVA WhatsApp",
          alternateName: "Dravonix WhatsApp AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, WhatsApp",
          url: `${SITE_URL}/whatsapp-ai`,
          isPartOf: {
            "@type": "SoftwareApplication",
            name: "DRAIVA Connect",
            url: `${SITE_URL}/draiva`,
          },
          publisher: { "@type": "Organization", name: "Dravonix Media", url: SITE_URL },
        },
      ],
    }),
  component: WhatsAppAIPage,
});

import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppAIPage, whatsappFaqs } from "@/components/dravonix/WhatsAppAIPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema, SITE_URL } from "@/lib/seo";

const title = "WhatsApp AI for Business | Dravonix Media";
const description =
  "Dravonix WhatsApp AI is coming soon. Request a private demo and join early access for AI-powered WhatsApp customer replies, voice-note understanding and human handover.";

export const Route = createFileRoute("/whatsapp-ai")({
  head: () =>
    buildHead("/whatsapp-ai", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "WhatsApp AI Business Assistant",
          description,
          path: "/whatsapp-ai",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "WhatsApp AI", path: "/whatsapp-ai" },
        ]),
        faqSchema(whatsappFaqs),
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Dravonix WhatsApp AI",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, WhatsApp",
          url: `${SITE_URL}/whatsapp-ai`,
          publisher: { "@type": "Organization", name: "Dravonix Media", url: SITE_URL },
        },
      ],
    }),
  component: WhatsAppAIPage,
});

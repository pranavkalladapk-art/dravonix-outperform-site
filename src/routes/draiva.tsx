import { createFileRoute } from "@tanstack/react-router";
import { DraivaConnectPage } from "@/components/dravonix/DraivaConnectPage";
import { buildHead, breadcrumbSchema, SITE_URL } from "@/lib/seo";

const title = "DRAIVA Connect — Omnichannel AI Communication by Dravonix";
const description =
  "One AI communication ecosystem connecting WhatsApp today with web chat, mail, social and voice experiences coming next.";

export const Route = createFileRoute("/draiva")({
  head: () =>
    buildHead("/draiva", {
      title,
      description,
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url: `${SITE_URL}/draiva`,
          isPartOf: { "@type": "WebSite", name: "Dravonix Media", url: SITE_URL },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
        ]),
      ],
    }),
  component: DraivaConnectPage,
});

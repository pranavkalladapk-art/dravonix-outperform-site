import { createFileRoute } from "@tanstack/react-router";
import { DraivaConnectPage } from "@/components/dravonix/DraivaConnectPage";
import { buildHead, breadcrumbSchema, SITE_URL } from "@/lib/seo";

const title = "DRAIVA Connect | AI Communication Platform by Dravonix";
const description =
  "Discover DRAIVA Connect by Dravonix — one intelligent customer communication ecosystem, starting with WhatsApp AI and expanding to web chat, email, social and voice.";

export const Route = createFileRoute("/draiva/")({
  head: () =>
    buildHead("/draiva", {
      title,
      description,
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "DRAIVA Connect",
          alternateName: "DRAIVA Connect by Dravonix",
          description:
            "Omnichannel AI communication platform by Dravonix, currently available through DRAIVA WhatsApp.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${SITE_URL}/draiva`,
          publisher: { "@type": "Organization", name: "Dravonix Media", url: SITE_URL },
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "DRAIVA Connect", path: "/draiva" },
        ]),
      ],
    }),
  component: DraivaConnectPage,
});

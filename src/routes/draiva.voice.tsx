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
        headline: "Calls still carry the enquiries that matter most."
        }
        as never as never}
      capabilities={[]}
      useCases={[]}
      humanAI={{ headline: "", body: "" }}
      connectCopy=""
      faqs={[]}
    />
  );
}

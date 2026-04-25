import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/home")({
  head: () =>
    buildHead("/home", {
      title: "Dravonix — Engineered to Outperform",
      description:
        "Data-driven strategy, creative excellence, and AI-integrated production for brands that refuse to be average.",
    }),
  component: HomePage,
});

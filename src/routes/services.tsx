import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildHead("/services", {
      title: "Services — Brand, Social, AI Studio & Performance Marketing | Dravonix",
      description:
        "Brand identity, social media management, AI-integrated video & design, and performance marketing — engineered to outperform.",
    }),
  component: HomePage,
});

import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead("/about", {
      title: "About Dravonix — Precision. Innovation. Performance.",
      description:
        "Dravonix is built for brands that refuse to be average. Long-term value through strategy, data, and creative execution.",
    }),
  component: HomePage,
});

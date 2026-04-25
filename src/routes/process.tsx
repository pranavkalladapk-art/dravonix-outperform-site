import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    buildHead("/process", {
      title: "Our Process — How Dravonix Delivers | Dravonix",
      description:
        "Discover, strategize, create, and scale. The clear, transparent process behind every Dravonix engagement.",
    }),
  component: HomePage,
});

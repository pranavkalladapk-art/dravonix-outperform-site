import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead("/contact", {
      title: "Contact Dravonix — Get a Free Audit",
      description:
        "Book a free 30-minute strategy call. No commitment. Just clarity on your next 90 days.",
    }),
  component: HomePage,
});

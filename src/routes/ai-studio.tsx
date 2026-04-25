import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/ai-studio")({
  head: () =>
    buildHead("/ai-studio", {
      title: "AI Studio — AI-Integrated Video & Design | Dravonix",
      description:
        "Where AI meets brand craft. 10x throughput on video and design without losing your brand voice.",
    }),
  component: HomePage,
});

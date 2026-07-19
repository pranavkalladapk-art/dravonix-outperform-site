import { createFileRoute } from "@tanstack/react-router";
import { ProjectEstimator } from "@/components/dravonix/ProjectEstimator";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/project-estimator")({
  head: () =>
    buildHead("/project-estimator", {
      title: "Project Estimator — Instant Project Estimate | Dravonix",
      description:
        "Estimate the budget for your website, branding, digital marketing, or creative project in minutes. Tailored, transparent pricing from Dravonix.",
    }),
  component: ProjectEstimator,
});

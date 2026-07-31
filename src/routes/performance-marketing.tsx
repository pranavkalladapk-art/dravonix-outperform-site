import { createFileRoute } from "@tanstack/react-router";
import {
  Megaphone,
  Search,
  Crosshair,
  Filter,
  Clapperboard,
  LineChart,
} from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/performance-marketing")({
  head: () =>
    buildHead("/performance-marketing", {
      title: "Performance Marketing — Meta & Google Ads Built for ROI | Dravonix",
      description:
        "Data-driven paid social and search campaigns — Meta ads, Google Ads, audience targeting, funnel strategy and reporting focused on measurable results.",
    }),
  component: PerformanceMarketingPage,
});

const services = [
  {
    icon: Megaphone,
    title: "Meta Advertising",
    desc: "Facebook and Instagram paid campaigns built for lead generation and brand awareness.",
  },
  {
    icon: Search,
    title: "Google Ads Management",
    desc: "Search, display, and shopping campaigns optimised for conversions and ROI.",
  },
  {
    icon: Crosshair,
    title: "Audience Research & Targeting",
    desc: "Deep audience analysis to reach the right people with precision.",
  },
  {
    icon: Filter,
    title: "Funnel Strategy",
    desc: "Full-funnel campaign design from awareness to conversion.",
  },
  {
    icon: Clapperboard,
    title: "Creative Production for Ads",
    desc: "Ad creatives, copy, and visuals produced in-house and optimised for performance.",
  },
  {
    icon: LineChart,
    title: "Campaign Reporting & Optimisation",
    desc: "Weekly performance tracking and continuous campaign refinement.",
  },
];

const steps = [
  { title: "Research", desc: "Audience analysis, competitor review, and campaign strategy." },
  { title: "Build", desc: "Ad creatives, copy, targeting, and campaign setup." },
  { title: "Launch", desc: "Campaign go-live with close monitoring and optimisation." },
  { title: "Scale", desc: "Doubling down on what works and eliminating what doesn't." },
];

const audience = [
  "Businesses that want leads, not just impressions.",
  "Brands launching new products or services and needing fast results.",
  "Companies with ad spend but poor return on investment.",
  "Businesses ready to scale with a proven paid marketing partner.",
];

function PerformanceMarketingPage() {
  return (
    <ServiceDetail
      eyebrow="Performance Marketing"
      title="Paid Campaigns Built for ROI, Not Just Reach."
      subtitle="Dravonix runs data-driven paid social and search campaigns — targeting the right audience, at the right time, with the right message — focused entirely on measurable business results."
      primaryCta="Start Your Marketing Campaign"
      estimateCta="Get a Marketing Estimate"
      services={services}
      steps={steps}
      audience={audience}
      ctaTitle="Ready to Turn Ad Spend Into Real Revenue?"
      ctaSubtitle="Let's build campaigns that drive leads, sales, and measurable growth."
    />
  );
}

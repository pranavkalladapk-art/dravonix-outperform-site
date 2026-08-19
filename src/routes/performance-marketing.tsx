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
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Performance Marketing Agency in Kerala | Dravonix Media";
const description =
  "Performance marketing agency in Kerala running Meta and Google Ads for ROI — audience targeting, funnel strategy, ad creative and transparent monthly reporting.";

const faqs = [
  {
    q: "What ad budget do I need to start?",
    a: "It depends on your market and objective. We recommend a budget during the strategy call based on your goals rather than quoting a fixed number upfront.",
  },
  {
    q: "How soon will I see results?",
    a: "Early signal usually appears within the first few weeks of testing, with performance improving as data accumulates and creative is refined.",
  },
  {
    q: "Do you create the ad creative too?",
    a: "Yes. Ad copy, visuals and video creative are produced in-house so testing never stalls waiting on assets.",
  },
  {
    q: "How do you report on performance?",
    a: "Regular reporting on spend, cost per result and conversions — tied to business outcomes, not vanity metrics.",
  },
];

export const Route = createFileRoute("/performance-marketing")({
  head: () =>
    buildHead("/performance-marketing", {
      title,
      description,
      schemas: [
        serviceSchema({ name: "Performance Marketing", description, path: "/performance-marketing" }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Performance Marketing", path: "/performance-marketing" },
        ]),
        faqSchema(faqs),
      ],
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
      benefits={[
        "Spend tied to measurable cost per lead, not impressions.",
        "Creative and targeting tested continuously.",
        "A funnel that keeps working after the click.",
        "Clear reporting you can act on.",
      ]}
      faqs={faqs}
      related={[
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "SEO Services", to: "/seo" },
        { label: "Website Development", to: "/website-development" },
        { label: "Kerala", to: "/locations/kerala" },
      ]}
      ctaTitle="Ready to Turn Ad Spend Into Real Revenue?"
      ctaSubtitle="Let's build campaigns that drive leads, sales, and measurable growth."
    />
  );
}

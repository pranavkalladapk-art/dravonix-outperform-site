import { createFileRoute } from "@tanstack/react-router";
import { Search, FileSearch, PenLine, MapPin, Link2, BarChart3 } from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/seo")({
  head: () =>
    buildHead("/seo", {
      title: "SEO & Online Visibility — Rank Higher, Get Found | Dravonix",
      description:
        "Data-driven SEO strategies that improve search rankings, drive qualified organic traffic, and deliver long-term sustainable growth for your brand.",
    }),
  component: SeoPage,
});

const services = [
  {
    icon: FileSearch,
    title: "Technical SEO Audit",
    desc: "Deep analysis of your website's technical health, speed, structure, and crawlability.",
  },
  {
    icon: Search,
    title: "On-Page Optimisation",
    desc: "Keyword research, meta tags, content structure, and internal linking optimised for search engines.",
  },
  {
    icon: PenLine,
    title: "Content Strategy",
    desc: "SEO-driven content plans that attract, engage, and convert your target audience.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Optimise your presence for local search results and Google Business Profile to attract nearby customers.",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "High-quality backlink strategies that build domain authority and improve search rankings.",
  },
  {
    icon: BarChart3,
    title: "SEO Reporting & Analytics",
    desc: "Monthly performance reports tracking rankings, traffic, and ROI tied to real business results.",
  },
];

const steps = [
  { title: "Audit", desc: "Analysing your current SEO performance and identifying opportunities." },
  { title: "Strategy", desc: "Building a custom SEO roadmap aligned with your business goals." },
  { title: "Execution", desc: "Implementing on-page, technical, and off-page SEO improvements." },
  { title: "Monitor & Grow", desc: "Tracking rankings, traffic, and continuously optimising for results." },
];

const audience = [
  "Businesses that are invisible on Google and want to change that.",
  "Brands launching new websites and wanting to rank from day one.",
  "Companies relying too heavily on paid ads and wanting organic growth.",
  "Businesses targeting local, national, or international search audiences.",
];

function SeoPage() {
  return (
    <ServiceDetail
      eyebrow="SEO & Online Visibility"
      title="Rank Higher. Get Found. Grow Faster."
      subtitle="Dravonix builds data-driven SEO strategies that improve your search rankings, drive qualified organic traffic, and deliver long-term sustainable growth for your brand."
      primaryCta="Start Your SEO Project"
      estimateCta="Get an SEO Estimate"
      services={services}
      steps={steps}
      audience={audience}
      ctaTitle="Ready to Rank Higher and Grow Organically?"
      ctaSubtitle="Let's build an SEO strategy that drives real, measurable results for your business."
    />
  );
}

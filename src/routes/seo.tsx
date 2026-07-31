import { createFileRoute } from "@tanstack/react-router";
import { Search, FileSearch, PenLine, MapPin, Link2, BarChart3 } from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "SEO Services Kerala | Rank Higher on Google | Dravonix";
const description =
  "SEO services in Kerala — technical audits, on-page optimisation, local SEO, content strategy and link building that improve rankings and drive qualified organic traffic.";

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Meaningful movement typically takes a few months. Technical fixes can help sooner, while content and authority building compound over time.",
  },
  {
    q: "Do you guarantee first-page rankings?",
    a: "No credible agency can guarantee positions. We commit to the work that drives rankings and report honestly on progress.",
  },
  {
    q: "Do you handle local SEO for Kerala businesses?",
    a: "Yes. Google Business Profile optimisation, local landing pages, citations and location-relevant content are all part of our local SEO work.",
  },
  {
    q: "What's included in your reporting?",
    a: "Monthly reporting on rankings, organic traffic, visibility and the actions taken — tied back to enquiries and business outcomes.",
  },
];

export const Route = createFileRoute("/seo")({
  head: () =>
    buildHead("/seo", {
      title,
      description,
      schemas: [
        serviceSchema({ name: "SEO Services", description, path: "/seo" }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO Services", path: "/seo" },
        ]),
        faqSchema(faqs),
      ],
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

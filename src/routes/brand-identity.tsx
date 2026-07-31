import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Palette, MessageSquare, BookOpen, Target, Lightbulb } from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Branding Agency in Kerala | Brand Identity | Dravonix";
const description =
  "Branding agency in Kerala building complete brand identity systems — logo design, visual identity, positioning, tone of voice and brand guidelines built to endure.";

const faqs = [
  {
    q: "What's included in a brand identity project?",
    a: "Positioning, logo and brand mark, a full visual identity system, tone of voice and a brand guidelines document with all source files.",
  },
  {
    q: "How long does branding take?",
    a: "A full identity project runs through discovery, strategy, design and delivery — typically several weeks, confirmed in your proposal.",
  },
  {
    q: "Can you rebrand an existing business?",
    a: "Yes. We handle rebrands carefully, keeping the equity worth keeping and replacing what's holding you back.",
  },
  {
    q: "Do I own the final files?",
    a: "Yes. On completion you receive full ownership and all working and export files.",
  },
];

export const Route = createFileRoute("/brand-identity")({
  head: () =>
    buildHead("/brand-identity", {
      title,
      description,
      schemas: [
        serviceSchema({ name: "Brand Identity Design", description, path: "/brand-identity" }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Brand Identity", path: "/brand-identity" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: BrandIdentityPage,
});

const services = [
  {
    icon: PenTool,
    title: "Logo & Brand Mark Design",
    desc: "Distinctive logos and marks crafted to anchor your brand with clarity and longevity.",
  },
  {
    icon: Palette,
    title: "Visual Identity System",
    desc: "Color, typography, layout, and visual language unified into a cohesive system.",
  },
  {
    icon: Target,
    title: "Brand Positioning",
    desc: "Sharp positioning that differentiates you and earns a defensible space in your market.",
  },
  {
    icon: MessageSquare,
    title: "Tone of Voice & Messaging",
    desc: "A clear voice and message architecture that sounds unmistakably like you.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    desc: "Comprehensive guidelines so every team and partner stays on-brand, every time.",
  },
  {
    icon: Lightbulb,
    title: "Creative Consulting",
    desc: "Strategic creative direction to align your brand vision with business goals.",
  },
];

const steps = [
  { title: "Discovery", desc: "Understanding your business, audience, and market." },
  { title: "Strategy", desc: "Positioning, messaging, and brand architecture." },
  { title: "Design", desc: "Logo, visual identity, and full brand system." },
  { title: "Delivery", desc: "Brand guidelines, files, and handover." },
];

const audience = [
  "Startups launching for the first time.",
  "Established businesses rebranding.",
  "Businesses entering new markets.",
  "Companies that have outgrown their current brand.",
];

function BrandIdentityPage() {
  return (
    <ServiceDetail
      eyebrow="Brand Identity"
      title="Branding Agency in Kerala"
      subtitle="Dravonix Media creates complete brand identity systems — combining strategy and creativity to build powerful, memorable brands that stand out and endure."
      primaryCta="Start Your Brand Project"
      estimateCta="Get a Brand Estimate"
      services={services}
      steps={steps}
      audience={audience}
      benefits={[
        "A brand that looks credible from the first impression.",
        "Consistency across every channel and partner.",
        "Clear positioning that makes selling easier.",
        "Guidelines your team can apply without guesswork.",
      ]}
      faqs={faqs}
      related={[
        { label: "Website Development", to: "/website-development" },
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "AI Video and Design", to: "/ai-studio" },
        { label: "Kerala", to: "/locations/kerala" },
      ]}
      ctaTitle="Ready to Build a Brand Worth Remembering?"
      ctaSubtitle="Let's craft an identity that earns attention and holds it."
    />
  );
}

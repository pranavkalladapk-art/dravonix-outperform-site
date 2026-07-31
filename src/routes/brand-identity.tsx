import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Palette, MessageSquare, BookOpen, Target, Lightbulb } from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/brand-identity")({
  head: () =>
    buildHead("/brand-identity", {
      title: "Brand Identity — Logo, Visual System & Positioning | Dravonix",
      description:
        "Complete brand identity systems — logo design, visual identity, positioning, tone of voice and brand guidelines built to endure.",
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
      title="Build a Brand That Commands Attention."
      subtitle="Dravonix creates complete brand identity systems — combining strategy and creativity to build powerful, memorable brands that stand out and endure."
      primaryCta="Start Your Brand Project"
      estimateCta="Get a Brand Estimate"
      services={services}
      steps={steps}
      audience={audience}
      ctaTitle="Ready to Build a Brand Worth Remembering?"
      ctaSubtitle="Let's craft an identity that earns attention and holds it."
    />
  );
}

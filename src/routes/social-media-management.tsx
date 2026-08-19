import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarRange,
  Send,
  Users,
  TrendingUp,
  Sparkles,
  BarChart3,
} from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Social Media Management in Kerala | Dravonix Media";
const description =
  "Social media marketing agency in Kerala — content strategy, reels and post production, daily scheduling, community management and monthly performance reporting.";

const faqs = [
  {
    q: "Which platforms do you manage?",
    a: "Primarily Instagram, Facebook, LinkedIn and YouTube. We recommend the mix based on where your audience actually spends time.",
  },
  {
    q: "Do you create the content or do we supply it?",
    a: "We create it — reels, posts, carousels and stories are produced in-house. We'll use your assets where they help.",
  },
  {
    q: "How often will you post?",
    a: "Posting frequency is agreed upfront in your content plan and kept consistent rather than sporadic.",
  },
  {
    q: "Is paid advertising included?",
    a: "Organic management and paid campaigns are separate services, though they work best together. Paid sits under performance marketing.",
  },
];

export const Route = createFileRoute("/social-media-management")({
  head: () =>
    buildHead("/social-media-management", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Social Media Management",
          description,
          path: "/social-media-management",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Social Media Management", path: "/social-media-management" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: SocialMediaManagementPage,
});

const services = [
  {
    icon: CalendarRange,
    title: "Content Strategy",
    desc: "Monthly content plans aligned with your brand voice, audience, and business goals.",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    desc: "Reels, posts, carousels, and stories produced in-house by our creative team.",
  },
  {
    icon: Send,
    title: "Daily Posting & Scheduling",
    desc: "Consistent publishing across all your platforms at optimal times.",
  },
  {
    icon: Users,
    title: "Community Management",
    desc: "Responding to comments, DMs, and building genuine audience relationships.",
  },
  {
    icon: TrendingUp,
    title: "Platform Growth",
    desc: "Follower growth strategies tailored to each platform's algorithm and audience.",
  },
  {
    icon: BarChart3,
    title: "Monthly Performance Reports",
    desc: "Clear reporting on reach, engagement, growth, and content performance.",
  },
];

const steps = [
  { title: "Audit", desc: "Reviewing your current social presence, competitors, and audience." },
  { title: "Strategy", desc: "Building your content system, brand voice, and platform plan." },
  { title: "Create & Publish", desc: "Producing and posting content consistently every week." },
  { title: "Review & Optimise", desc: "Monthly performance reviews and strategy refinement." },
];

const audience = [
  "Brands with no time to manage their own social media.",
  "Businesses with inconsistent or inactive social presence.",
  "Companies launching new products or entering new markets.",
  "Brands that want social media to actually drive business results.",
];

function SocialMediaManagementPage() {
  return (
    <ServiceDetail
      eyebrow="Social Media Management"
      title="Social Media Marketing Agency in Kerala"
      subtitle="Dravonix Media manages your social media end-to-end — strategy, content creation, daily posting, and community management — built for compounding brand presence."
      primaryCta="Start Your Social Media Project"
      estimateCta="Get a Social Media Estimate"
      services={services}
      steps={steps}
      audience={audience}
      benefits={[
        "A consistent presence instead of sporadic posting.",
        "Content produced for you, on brand, every month.",
        "Faster replies and a warmer community.",
        "Reporting that shows what content actually works.",
      ]}
      faqs={faqs}
      related={[
        { label: "AI Video and Design", to: "/ai-studio" },
        { label: "Performance Marketing", to: "/performance-marketing" },
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "Kerala", to: "/locations/kerala" },
      ]}
      ctaTitle="Ready to Build a Social Presence That Works?"
      ctaSubtitle="Let's create content that grows your brand and drives real results."
    />
  );
}

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
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/social-media-management")({
  head: () =>
    buildHead("/social-media-management", {
      title: "Social Media Management — Content, Strategy & Growth | Dravonix",
      description:
        "End-to-end social media management — strategy, content creation, daily posting, community management and monthly reporting built for compounding growth.",
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
      title="Content That Builds Presence. Strategy That Drives Growth."
      subtitle="Dravonix manages your social media end-to-end — strategy, content creation, daily posting, and community management — built for compounding brand presence."
      primaryCta="Start Your Social Media Project"
      estimateCta="Get a Social Media Estimate"
      services={services}
      steps={steps}
      audience={audience}
      ctaTitle="Ready to Build a Social Presence That Works?"
      ctaSubtitle="Let's create content that grows your brand and drives real results."
    />
  );
}

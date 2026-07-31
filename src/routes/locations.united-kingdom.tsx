import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/dravonix/LocationPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Digital Marketing Services for UK Businesses | Dravonix";
const description =
  "Website development, brand identity, social media and SEO for UK businesses — delivered remotely by Dravonix Media with UK-hours collaboration and clear reporting.";

const faqs = [
  {
    q: "Are you based in the UK?",
    a: "No. Dravonix Media is based in Kerala, India, and works with UK businesses remotely. All meetings and reviews are scheduled inside UK working hours.",
  },
  {
    q: "Have you delivered work for UK clients?",
    a: "Yes — Abodoo Properties is one example of a UK-facing project delivered through our remote workflow.",
  },
  {
    q: "How does invoicing and communication work?",
    a: "Clear written scopes, milestone-based invoicing and a single point of contact throughout the project.",
  },
];

export const Route = createFileRoute("/locations/united-kingdom")({
  head: () =>
    buildHead("/locations/united-kingdom", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Digital Marketing Services for UK Businesses",
          description,
          path: "/locations/united-kingdom",
          areaServed: ["United Kingdom"],
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "United Kingdom", path: "/locations/united-kingdom" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: UkPage,
});

function UkPage() {
  return (
    <LocationPage
      breadcrumb={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: "United Kingdom" },
      ]}
      eyebrow="United Kingdom"
      title="Creative and Digital Services for UK Businesses"
      intro="Dravonix Media supports UK businesses with website development, brand identity, social media and SEO — delivered remotely, to a standard that holds up in a demanding market."
      sections={[
        {
          heading: "Website Development",
          body: "Fast, responsive, SEO-ready websites built to convert — from single landing pages to multi-service business sites.",
        },
        {
          heading: "Brand Identity and Social Support",
          body: "Identity systems, guidelines and ongoing social content that keep a UK-facing brand consistent across every touchpoint.",
        },
        {
          heading: "Remote Collaboration and Time Zones",
          body: "We work inside UK hours for calls and approvals, with written summaries so nothing depends on being online at the same moment.",
          points: [
            "Meetings scheduled in GMT/BST",
            "Async updates and shared timelines",
            "Milestone-based delivery and sign-off",
          ],
        },
        {
          heading: "UK Project Experience",
          body: "Abodoo Properties is one example of UK-facing work delivered through this model — a clearer, more professional digital presentation for a property brand.",
        },
      ]}
      services={[
        { label: "Website Development", to: "/website-development" },
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "SEO Services", to: "/seo" },
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "See our work", to: "/work" },
      ]}
      faqs={faqs}
      ctaTitle="Need a Digital Partner for Your UK Business?"
      ctaSubtitle="Book a call and we'll scope the work honestly, with no obligation."
    />
  );
}

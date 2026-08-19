import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/dravonix/LocationPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Digital Marketing Services for UAE Businesses | Dravonix";
const description =
  "Remote branding, website development, social media, SEO and performance marketing for businesses across the UAE, delivered with time-zone aligned collaboration.";

const faqs = [
  {
    q: "Do you have an office in the UAE?",
    a: "No. Dravonix Media is based in Kerala, India, and serves businesses across the UAE through a remote-first workflow with online meetings and time-zone aligned communication.",
  },
  {
    q: "How do you handle the time difference?",
    a: "We schedule calls within UAE business hours and keep written updates asynchronous, so approvals never wait a full day.",
  },
  {
    q: "Can you produce Arabic-market creative?",
    a: "We produce English-language creative in-house and coordinate Arabic copy and localisation with vetted specialists when a project requires it.",
  },
];

export const Route = createFileRoute("/locations/uae")({
  head: () =>
    buildHead("/locations/uae", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Digital Marketing Services for UAE Businesses",
          description,
          path: "/locations/uae",
          areaServed: ["United Arab Emirates"],
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "UAE", path: "/locations/uae" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: UaePage,
});

function UaePage() {
  return (
    <LocationPage
      breadcrumb={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: "UAE" },
      ]}
      eyebrow="United Arab Emirates"
      title="Digital Marketing Services for Businesses in the UAE"
      intro="Dravonix Media provides remote branding, website development, social media, SEO, performance marketing and creative services to businesses across the UAE."
      sections={[
        {
          heading: "Services for UAE Businesses",
          body: "A full creative and digital stack, scoped for competitive, presentation-driven markets.",
          points: [
            "Brand identity and rebranding",
            "Websites and e-commerce stores",
            "Social media content and paid campaigns",
          ],
        },
        {
          heading: "Remote-First Collaboration",
          body: "We serve UAE clients through a remote-first workflow — no local office, no overhead passed on to you, and the same senior team on every project.",
        },
        {
          heading: "Time-Zone Coordination",
          body: "Only a 90-minute difference from Kerala means near-complete working-hours overlap. Calls sit inside your day, not after it.",
          points: [
            "Meetings scheduled in Gulf Standard Time",
            "Same-day responses during business hours",
            "Clear written recaps after every call",
          ],
        },
        {
          heading: "Communication Workflow",
          body: "Kick-off call, agreed milestones, structured review rounds, and a single point of contact from brief to launch.",
        },
      ]}
      services={[
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "Website Development", to: "/website-development" },
        { label: "E-commerce Development", to: "/ecommerce-development" },
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "Performance Marketing", to: "/performance-marketing" },
        { label: "See our work", to: "/work" },
      ]}
      faqs={faqs}
      ctaTitle="Growing a Business in the UAE?"
      ctaSubtitle="Let's talk through your goals and map a plan that fits your market."
    />
  );
}

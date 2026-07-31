import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/dravonix/LocationPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Global Digital Marketing Agency | Dravonix Media";
const description =
  "Dravonix Media is a remote-first global digital marketing agency delivering branding, website development, SEO, social media and AI-powered creative production worldwide.";

const faqs = [
  {
    q: "Which countries do you work with?",
    a: "We work with businesses in any market where we can communicate in English and collaborate online — currently across India, the Gulf, the UK and Europe.",
  },
  {
    q: "How do international projects run?",
    a: "Discovery call, written scope, milestone plan, structured review rounds and a launch handover — all managed online.",
  },
  {
    q: "How do you handle very different time zones?",
    a: "We fix a recurring call slot that works for you and keep everything else asynchronous, so progress continues between calls.",
  },
];

export const Route = createFileRoute("/locations/global")({
  head: () =>
    buildHead("/locations/global", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Global Digital Marketing Agency",
          description,
          path: "/locations/global",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "Global", path: "/locations/global" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: GlobalPage,
});

function GlobalPage() {
  return (
    <LocationPage
      breadcrumb={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: "Global" },
      ]}
      eyebrow="Global"
      title="Digital Solutions for Businesses Worldwide"
      intro="Dravonix Media is a Kerala-based creative technology and digital marketing company serving businesses across India, the UAE, the United Kingdom and global markets through a remote-first delivery model."
      sections={[
        {
          heading: "Remote Project Delivery",
          body: "A proven online workflow covering discovery, creative direction, build, launch and reporting — with the same team from start to finish.",
          points: [
            "Written scope before work begins",
            "Milestone-based delivery",
            "Structured review and approval rounds",
          ],
        },
        {
          heading: "Meetings and Time Zones",
          body: "We agree a recurring meeting slot in your time zone and keep day-to-day communication asynchronous so momentum never depends on overlap.",
        },
        {
          heading: "Onboarding",
          body: "A short discovery questionnaire, a kick-off call and access to a shared project timeline — usually complete within the first week.",
        },
        {
          heading: "Services Offered Globally",
          body: "Brand identity, website and e-commerce development, SEO, social media management, performance marketing and AI-assisted video and design.",
        },
      ]}
      services={[
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "Website Development", to: "/website-development" },
        { label: "E-commerce Development", to: "/ecommerce-development" },
        { label: "SEO Services", to: "/seo" },
        { label: "AI Video and Design", to: "/ai-studio" },
        { label: "See our work", to: "/work" },
      ]}
      faqs={faqs}
      ctaTitle="Working Across Borders? So Are We."
      ctaSubtitle="Book a call and we'll show you how remote delivery works in practice."
    />
  );
}

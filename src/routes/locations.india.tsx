import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/dravonix/LocationPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Digital Marketing Agency in India | Dravonix Media";
const description =
  "Dravonix Media delivers branding, website development, SEO, social media and performance marketing to startups and growing businesses across India remotely.";

const faqs = [
  {
    q: "Do you work with clients outside Kerala?",
    a: "Yes. We deliver projects nationwide through a fully digital workflow — onboarding, reviews and reporting all happen online.",
  },
  {
    q: "Are you a good fit for early-stage startups?",
    a: "Yes. We regularly help founders launch with a complete identity, a conversion-focused website and a first campaign structure.",
  },
  {
    q: "How is pricing handled for projects across India?",
    a: "Scope-based, quoted upfront. You can use our project estimator for an indicative range before speaking to us.",
  },
];

export const Route = createFileRoute("/locations/india")({
  head: () =>
    buildHead("/locations/india", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Digital Marketing Agency in India",
          description,
          path: "/locations/india",
          areaServed: ["India"],
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "India", path: "/locations/india" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: IndiaPage,
});

function IndiaPage() {
  return (
    <LocationPage
      breadcrumb={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: "India" },
      ]}
      eyebrow="India"
      title="Digital Marketing and Creative Services Across India"
      intro="Dravonix Media is a Kerala-based creative technology and digital marketing company working with startups, small businesses and established companies across India through a digital-first delivery model."
      sections={[
        {
          heading: "Nationwide Remote Delivery",
          body: "Every stage — discovery, design, development, launch and reporting — runs on a structured online workflow, so distance never slows a project down.",
          points: [
            "Scheduled video calls and written recaps",
            "Shared timelines and review rounds",
            "One accountable point of contact",
          ],
        },
        {
          heading: "Built for Indian Startups",
          body: "Founders need to look credible fast. We build the identity, the site and the first campaign structure as one connected launch package.",
        },
        {
          heading: "Small and Growing Businesses",
          body: "For businesses already trading, we focus on the gaps that cost enquiries — dated websites, inconsistent social presence and weak search visibility.",
        },
        {
          heading: "Established Companies",
          body: "Rebranding, website rebuilds, ongoing SEO and always-on performance marketing, run with clear monthly reporting.",
        },
      ]}
      services={[
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "Website Development", to: "/website-development" },
        { label: "E-commerce Development", to: "/ecommerce-development" },
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "Performance Marketing", to: "/performance-marketing" },
        { label: "SEO Services", to: "/seo" },
        { label: "Kerala", to: "/locations/kerala" },
      ]}
      faqs={faqs}
      ctaTitle="Planning a Launch or a Rebuild?"
      ctaSubtitle="Tell us where you are today and we'll map the fastest route forward."
    />
  );
}

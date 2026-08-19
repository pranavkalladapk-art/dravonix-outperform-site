import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/dravonix/LocationPage";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Marketing & Web Design Agency in Kochi, Kerala | Dravonix";
const description =
  "Dravonix Media is a digital marketing agency in Kerala offering branding, website development, SEO, social media management and performance marketing locally.";

const faqs = [
  {
    q: "Do you work with businesses across Kerala?",
    a: "Yes. We work with businesses throughout Kerala, combining in-person conversations where practical with a digital-first workflow so location is never a limitation.",
  },
  {
    q: "What kind of businesses do you work with in Kerala?",
    a: "Startups, retail and showroom brands, clinics, real estate, education, hospitality and service businesses that want a stronger, more professional online presence.",
  },
  {
    q: "Can you handle branding and the website together?",
    a: "Yes. Many Kerala clients start with brand identity and move into website development, SEO and social media as one connected roadmap.",
  },
  {
    q: "How do projects usually start?",
    a: "With a free strategy call. We review your current presence, agree on goals and scope, then share a clear proposal and timeline.",
  },
];

export const Route = createFileRoute("/locations/kerala")({
  head: () =>
    buildHead("/locations/kerala", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Digital Marketing Agency in Kerala",
          description,
          path: "/locations/kerala",
          areaServed: ["Kerala", "India"],
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: "Kerala", path: "/locations/kerala" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: KeralaPage,
});

function KeralaPage() {
  return (
    <LocationPage
      breadcrumb={[
        { label: "Home", to: "/" },
        { label: "Locations", to: "/locations" },
        { label: "Kerala" },
      ]}
      eyebrow="Kerala"
      title="Digital Marketing Agency in Kerala"
      intro="Dravonix Media is a Kerala-based creative technology and digital marketing company. We build brands, websites and campaigns for businesses across Kerala — and take the same standard to clients worldwide."
      sections={[
        {
          heading: "Understanding the Kerala Market",
          body: "Kerala buyers research carefully, compare locally and rely heavily on mobile search and social proof. We build presence around how people here actually discover and choose businesses.",
          points: [
            "Mobile-first design for a mobile-first audience",
            "Local search and Google Business Profile visibility",
            "Bilingual, culturally aware creative direction",
          ],
        },
        {
          heading: "What We Deliver",
          body: "A complete digital foundation — from identity through to the campaigns that bring qualified enquiries in.",
          points: [
            "Brand identity and visual systems",
            "Website and e-commerce development",
            "SEO, social media and performance marketing",
          ],
        },
        {
          heading: "Industries We Serve",
          body: "We work across retail, real estate, healthcare, education, hospitality, professional services and product startups.",
        },
        {
          heading: "How We Collaborate",
          body: "Meetings in person where it helps, and a clear online workflow the rest of the time — shared timelines, review rounds and a single point of contact throughout.",
        },
      ]}
      services={[
        { label: "Brand Identity", to: "/brand-identity" },
        { label: "Website Development", to: "/website-development" },
        { label: "E-commerce Development", to: "/ecommerce-development" },
        { label: "Social Media Management", to: "/social-media-management" },
        { label: "Performance Marketing", to: "/performance-marketing" },
        { label: "SEO Services", to: "/seo" },
        { label: "See our work", to: "/work" },
      ]}
      faqs={faqs}
      ctaTitle="Ready to Grow Your Kerala Business Online?"
      ctaSubtitle="Let's build the brand, website and campaigns your business deserves."
    />
  );
}

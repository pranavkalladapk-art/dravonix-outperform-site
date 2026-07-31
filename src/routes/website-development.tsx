import { createFileRoute } from "@tanstack/react-router";
import { Layout, Code2, ShoppingCart, Rocket, LifeBuoy, FileEdit } from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "Website Development Company Kerala | Dravonix Media";
const description =
  "Website development company in Kerala building fast, mobile-first, conversion-focused business websites — UI/UX design, landing pages, CMS and ongoing support.";

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Most business websites move from discovery to launch in a matter of weeks. The exact timeline depends on page count, content readiness and review speed, and is confirmed in your proposal.",
  },
  {
    q: "Will my website work well on mobile?",
    a: "Yes. Every site we build is designed mobile-first and tested across common phone, tablet and desktop sizes before launch.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing maintenance, updates and technical support, and we hand over documentation so your team can manage day-to-day content.",
  },
  {
    q: "Is the website built for SEO?",
    a: "We build SEO-ready foundations — clean structure, fast loading, proper headings and metadata. Ongoing ranking work is covered by our SEO service.",
  },
];

export const Route = createFileRoute("/website-development")({
  head: () =>
    buildHead("/website-development", {
      title,
      description,
      schemas: [
        serviceSchema({ name: "Website Development", description, path: "/website-development" }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Website Development", path: "/website-development" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: WebsiteDevelopmentPage,
});

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Pixel-perfect design crafted to reflect your brand and convert visitors into clients.",
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "Fast, modern, and scalable websites built on the latest technologies.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Online stores built to sell — optimized for performance, UX, and conversion.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-converting landing pages built for campaigns, launches, and lead generation.",
  },
  {
    icon: LifeBuoy,
    title: "Website Maintenance & Support",
    desc: "Ongoing support, updates, and technical management post-launch.",
  },
  {
    icon: FileEdit,
    title: "CMS Integration",
    desc: "Easy-to-manage content systems so you can update your site without a developer.",
  },
];

const steps = [
  { title: "Discovery", desc: "Understanding your goals, audience, and technical requirements." },
  { title: "Design", desc: "UI/UX wireframes and visual design approval." },
  { title: "Development", desc: "Building, testing, and quality assurance." },
  { title: "Launch", desc: "Deployment, performance optimization, and handover." },
];

const audience = [
  "Businesses launching a new website.",
  "Companies replatforming or redesigning.",
  "Brands needing e-commerce functionality.",
  "Businesses wanting better conversion from their existing traffic.",
];

function WebsiteDevelopmentPage() {
  return (
    <ServiceDetail
      eyebrow="Website Development"
      title="Websites Built to Perform, Not Just Impress."
      subtitle="Dravonix builds premium websites that combine stunning design, technical excellence, and conversion-focused strategy — delivering real business results from day one."
      primaryCta="Start Your Website Project"
      estimateCta="Get a Website Estimate"
      services={services}
      steps={steps}
      audience={audience}
      ctaTitle="Ready for a Website That Works as Hard as You Do?"
      ctaSubtitle="Let's build something fast, beautiful, and built to convert."
    />
  );
}

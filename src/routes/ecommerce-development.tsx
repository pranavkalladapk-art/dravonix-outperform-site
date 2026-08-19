import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingCart,
  CreditCard,
  Smartphone,
  PackageSearch,
  ShieldCheck,
  Search,
} from "lucide-react";
import { ServiceDetail } from "@/components/dravonix/ServiceDetail";
import { buildHead, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

const title = "E-commerce Development Company in Kerala | Dravonix Media";
const description =
  "Ecommerce website development in Kerala — product catalogues, secure checkout, payment gateway integration, mobile-first shopping experiences and product-page SEO.";

const faqs = [
  {
    q: "What does an online store project include?",
    a: "Store structure and catalogue setup, product and category pages, cart and checkout, payment gateway integration, mobile optimisation and on-page SEO for product pages.",
  },
  {
    q: "Which platforms do you build on?",
    a: "We scope the platform to the business — custom builds for stores with specific requirements, and established hosted platforms where speed to launch matters more. We confirm the choice with you before development starts.",
  },
  {
    q: "Can you integrate payment gateways?",
    a: "Yes. We integrate the payment gateway that suits your market and business setup, and test the full checkout flow before launch.",
  },
  {
    q: "Will my product pages rank in search?",
    a: "We build them SEO-ready — clean URLs, unique titles and descriptions, structured headings and fast mobile loading. Ongoing ranking work is covered by our SEO service.",
  },
];

export const Route = createFileRoute("/ecommerce-development")({
  head: () =>
    buildHead("/ecommerce-development", {
      title,
      description,
      schemas: [
        serviceSchema({
          name: "Ecommerce Website Development",
          description,
          path: "/ecommerce-development",
        }),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "E-commerce Development", path: "/ecommerce-development" },
        ]),
        faqSchema(faqs),
      ],
    }),
  component: EcommercePage,
});

const services = [
  {
    icon: PackageSearch,
    title: "Product Catalogue & Pages",
    desc: "Clean category structures and product pages built to inform, reassure and convert.",
  },
  {
    icon: ShoppingCart,
    title: "Cart & Checkout",
    desc: "A short, friction-free checkout flow designed to reduce abandonment at the final step.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    desc: "Secure payment integration configured and fully tested for your market before launch.",
  },
  {
    icon: Smartphone,
    title: "Mobile Shopping Experience",
    desc: "Mobile-first layouts and fast loading, because most shoppers arrive from a phone.",
  },
  {
    icon: Search,
    title: "Product-Page SEO",
    desc: "Unique titles, descriptions, clean URLs and structured markup so products can be found.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Store Management",
    desc: "HTTPS, secure checkout, inventory options and an admin setup your team can actually run.",
  },
];

const steps = [
  { title: "Discovery", desc: "Products, margins, logistics and the buying journey you need to support." },
  { title: "Structure", desc: "Catalogue architecture, page templates and checkout flow design." },
  { title: "Build", desc: "Development, payment integration, testing and SEO groundwork." },
  { title: "Launch & Support", desc: "Go-live, staff handover and ongoing maintenance options." },
];

const audience = [
  "Retail businesses selling offline that want to open an online channel.",
  "Brands outgrowing a marketplace-only presence.",
  "Stores with a slow, dated or poorly converting website.",
  "Businesses launching a new product line online.",
];

const benefits = [
  "A sales channel that works while your shop is closed.",
  "Fewer abandoned carts through a simpler checkout.",
  "Product pages that can earn organic search traffic.",
  "A store your team can update without a developer.",
];

function EcommercePage() {
  return (
    <ServiceDetail
      eyebrow="E-commerce Development"
      title="E-commerce Website Development in Kerala"
      subtitle="Dravonix Media builds online stores that load fast, look premium and make buying simple — from catalogue and checkout to payment integration and product-page SEO."
      primaryCta="Start Your Store Project"
      estimateCta="Get an E-commerce Estimate"
      services={services}
      steps={steps}
      audience={audience}
      benefits={benefits}
      faqs={faqs}
      related={[
        { label: "Website Development", to: "/website-development" },
        { label: "SEO Services", to: "/seo" },
        { label: "Performance Marketing", to: "/performance-marketing" },
        { label: "Kerala", to: "/locations/kerala" },
      ]}
      ctaTitle="Ready to Start Selling Online?"
      ctaSubtitle="Let's build a store that turns browsers into buyers."
    />
  );
}

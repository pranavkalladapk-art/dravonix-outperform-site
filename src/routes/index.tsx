import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/dravonix/HomePage";
import { buildHead, faqSchema, webPageSchema } from "@/lib/seo";

const title = "Digital Marketing Agency in Kerala | Dravonix Media";
const description =
  "Dravonix Media is a digital marketing agency in Kerala offering branding, website development, SEO, social media management and AI-powered creative production for brands worldwide.";

const faqs = [
  {
    q: "Where is Dravonix Media based?",
    a: "Dravonix Media is based in Kerala, India, and works with clients across India, the UAE, the United Kingdom and global markets.",
  },
  {
    q: "What services does Dravonix Media offer?",
    a: "Brand identity, website and e-commerce development, SEO, social media management, performance marketing and AI-assisted video and design.",
  },
  {
    q: "Do you work with businesses outside Kerala?",
    a: "Yes. Our delivery is remote-first, with meetings scheduled in your time zone and structured written updates throughout the project.",
  },
  {
    q: "How do I get a price for my project?",
    a: "Use the project estimator for an indicative range, or book a call and we'll scope the work and quote it properly.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    buildHead("/", {
      title,
      description,
      schemas: [
        webPageSchema({ name: title, description, path: "/" }),
        faqSchema(faqs),
      ],
    }),
  component: HomePage,
});

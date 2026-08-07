import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://dravonixmedia.com";

const routes: Array<{ loc: string; changefreq: string; priority: string }> = [
  { loc: `${SITE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE}/project-estimator`, changefreq: "weekly", priority: "0.95" },
  { loc: `${SITE}/services`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/work`, changefreq: "weekly", priority: "0.9" },
  { loc: `${SITE}/website-development`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/seo`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/ecommerce-development`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/brand-identity`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/social-media-management`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/performance-marketing`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/business-email-setup`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/custom-web-applications`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/crm-business-automation`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/ai-studio`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/draiva/whatsapp-ai`, changefreq: "weekly", priority: "0.9" },
  { loc: `${SITE}/draiva`, changefreq: "monthly", priority: "0.9" },

  { loc: `${SITE}/locations`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/locations/kerala`, changefreq: "monthly", priority: "0.85" },
  { loc: `${SITE}/locations/india`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/locations/uae`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/locations/united-kingdom`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/locations/global`, changefreq: "monthly", priority: "0.7" },
  { loc: `${SITE}/process`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/about`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/contact`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/team`, changefreq: "monthly", priority: "0.7" },
  { loc: `${SITE}/privacy-policy`, changefreq: "yearly", priority: "0.5" },
  { loc: `${SITE}/terms-and-conditions`, changefreq: "yearly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = routes
          .map(
            (r) =>
              `  <url>\n    <loc>${r.loc}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

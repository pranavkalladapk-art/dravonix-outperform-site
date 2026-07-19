import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://dravonixmedia.com";

const routes: Array<{ loc: string; changefreq: string; priority: string }> = [
  { loc: `${SITE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE}/project-estimator`, changefreq: "weekly", priority: "0.95" },
  { loc: `${SITE}/services`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/work`, changefreq: "weekly", priority: "0.9" },
  { loc: `${SITE}/ai-studio`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/process`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/about`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/contact`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/team`, changefreq: "monthly", priority: "0.7" },
  { loc: "https://estimate.dravonix.dev/", changefreq: "weekly", priority: "0.9" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = routes
          .map(
            (r) =>
              `  <url>\n    <loc>${r.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
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

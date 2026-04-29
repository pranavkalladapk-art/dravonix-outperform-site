import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://dravonixmedia.com";

const routes: Array<{ path: string; changefreq: string; priority: string }> = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/home", changefreq: "weekly", priority: "0.9" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/ai-studio", changefreq: "monthly", priority: "0.8" },
  { path: "/process", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/brand-identity", changefreq: "monthly", priority: "0.8" },
  { path: "/performance-marketing", changefreq: "monthly", priority: "0.8" },
  { path: "/social-media-management", changefreq: "monthly", priority: "0.8" },
  { path: "/work", changefreq: "weekly", priority: "0.8" },
  { path: "/team", changefreq: "monthly", priority: "0.7" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lastmod = new Date().toISOString().split("T")[0];
        const urls = routes
          .map(
            (r) =>
              `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
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

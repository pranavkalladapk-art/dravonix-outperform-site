import {
  assertEquals,
  assertStringIncludes,
  assert,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

// Override with SITEMAP_CHECK_SITE env var when running against preview/staging.
const SITE = Deno.env.get("SITEMAP_CHECK_SITE") ?? "https://dravonixmedia.com";

const EXPECTED_PATHS = [
  "/",
  "/brand-identity",
  "/performance-marketing",
  "/social-media-management",
  "/team",
];

Deno.test("sitemap.xml returns 200 with valid XML", async () => {
  const res = await fetch(`${SITE}/sitemap.xml`, {
    headers: { "User-Agent": "dravonix-sitemap-check/1.0" },
  });
  const body = await res.text();

  assertEquals(res.status, 200, `expected 200, got ${res.status}`);

  const ct = res.headers.get("content-type") ?? "";
  assert(
    ct.includes("xml"),
    `expected XML content-type, got "${ct}"`,
  );

  // XML prolog + urlset wrapper
  assertStringIncludes(body, '<?xml version="1.0"');
  assertStringIncludes(body, "<urlset");
  assertStringIncludes(body, "</urlset>");
  assertStringIncludes(
    body,
    "http://www.sitemaps.org/schemas/sitemap/0.9",
  );

  // Tag balance
  const opens = (body.match(/<url>/g) ?? []).length;
  const closes = (body.match(/<\/url>/g) ?? []).length;
  assertEquals(opens, closes, "<url> open/close tag count mismatch");
  assert(opens >= EXPECTED_PATHS.length, `expected at least ${EXPECTED_PATHS.length} <url> entries, got ${opens}`);

  // Every public route must be listed
  for (const path of EXPECTED_PATHS) {
    assertStringIncludes(
      body,
      `<loc>${SITE}${path}</loc>`,
      `sitemap missing entry for ${path}`,
    );
  }
});

Deno.test("robots.txt returns 200 and references the sitemap", async () => {
  const res = await fetch(`${SITE}/robots.txt`, {
    headers: { "User-Agent": "dravonix-sitemap-check/1.0" },
  });
  const body = await res.text();

  assertEquals(res.status, 200, `expected 200, got ${res.status}`);

  const ct = res.headers.get("content-type") ?? "";
  assert(
    ct.includes("text/plain") || ct.includes("text"),
    `expected text content-type, got "${ct}"`,
  );

  assertStringIncludes(body, "User-agent:");
  assertStringIncludes(body, `Sitemap: ${SITE}/sitemap.xml`);
});

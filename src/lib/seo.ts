export const SITE_URL = "https://dravonixmedia.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLd = Record<string, unknown>;

type Meta = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  schemas?: JsonLd[];
};

/**
 * Builds a complete, self-referencing head config for a route.
 * Canonical + og:url always point at the page itself (apex, non-www, no trailing slash
 * except the homepage) so crawlers attribute the metadata correctly.
 */
export function buildHead(
  path: string,
  { title, description, image, type = "website", noindex, schemas }: Meta,
) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(schemas && schemas.length
      ? {
          scripts: schemas.map((s) => ({
            type: "application/ld+json",
            children: JSON.stringify(s),
          })),
        }
      : {}),
  };
}

/** BreadcrumbList schema. Pass items in order, excluding nothing. */
export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = ["Kerala", "India", "United Arab Emirates", "United Kingdom", "Worldwide"],
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    areaServed,
    provider: {
      "@type": "Organization",
      name: "Dravonix Media",
      url: SITE_URL,
    },
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@type": "WebSite", name: "Dravonix Media", url: SITE_URL },
  };
}

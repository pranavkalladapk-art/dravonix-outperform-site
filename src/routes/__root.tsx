import { useEffect, useRef } from "react";
import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { trackEvent, trackViewContent } from "@/lib/metaPixel";
import { SITE_PHONE_TEL } from "@/lib/site";

const SAME_AS = [
  "https://www.facebook.com/profile.php?id=61588836449902",
  "https://www.instagram.com/dravonixmedia/",
  "https://www.linkedin.com/in/dravonix/",
  "https://x.com/dravonixmedia",
];

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "facebook-domain-verification", content: "cumszn7kks9cv56an0bjenlihgcbo4" },
      { title: "Dravonix Media — Engineered to Outperform" },
      { name: "description", content: "Dravonix Media builds content strategies and social media systems that help brands grow, compete, and lead." },
      { name: "author", content: "Dravonix" },
      { property: "og:title", content: "Dravonix Media — Engineered to Outperform" },
      { property: "og:description", content: "Dravonix Media builds content strategies and social media systems that help brands grow, compete, and lead." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://dravonixmedia.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://dravonixmedia.com/og-image.jpg" },
      { name: "theme-color", content: "#2563EB" },
      { name: "twitter:title", content: "Dravonix Media — Engineered to Outperform" },
      { name: "twitter:description", content: "Dravonix Media builds content strategies and social media systems that help brands grow, compete, and lead." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon-180.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dravonix Media Private Limited",
          alternateName: "Dravonix",
          legalName: "Dravonix Media Private Limited",
          url: "https://dravonixmedia.com",
          logo: "https://dravonixmedia.com/og-image.jpg",
          description:
            "Data-driven strategy, creative excellence, and AI-integrated production for brands that refuse to be average.",
          email: "admin@dravonixmedia.com",
          telephone: SITE_PHONE_TEL,
          identifier: {
            "@type": "PropertyValue",
            name: "CIN",
            value: "U62011KL2026PTC105404",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "East Kallada",
            addressLocality: "Kollam",
            addressRegion: "Kerala",
            postalCode: "691502",
            addressCountry: "IN",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: SITE_PHONE_TEL,
              email: "admin@dravonixmedia.com",
              contactType: "customer service",
              areaServed: ["IN", "AE", "GB"],
              availableLanguage: ["en", "ml"],
            },
          ],
          sameAs: SAME_AS,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://dravonixmedia.com/#localbusiness",
          name: "Dravonix Media Private Limited",
          image: "https://dravonixmedia.com/og-image.jpg",
          url: "https://dravonixmedia.com",
          email: "admin@dravonixmedia.com",
          telephone: SITE_PHONE_TEL,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "East Kallada",
            addressLocality: "Kollam",
            addressRegion: "Kerala",
            postalCode: "691502",
            addressCountry: "IN",
          },
          areaServed: ["Kerala", "India", "United Arab Emirates", "United Kingdom", "Worldwide"],
          sameAs: SAME_AS,
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Redirect www → apex domain */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){if(location.hostname==='www.dravonixmedia.com'){location.replace('https://dravonixmedia.com'+location.pathname+location.search+location.hash);}})();",
          }}
        />
        {/* Async-load Google Fonts via JS-injected link — non-render-blocking and hydration-safe (link is not React-managed) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap';l.media='print';l.onload=function(){l.media='all'};document.head.appendChild(l);})();",
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1003198699295646');fbq('track','PageView');",
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1003198699295646&ev=PageView&noscript=1" alt="" />',
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirst = useRef(true);
  useEffect(() => {
    const firstRender = isFirst.current;
    if (firstRender) {
      isFirst.current = false;
      // Initial PageView fired by inline pixel script — don't duplicate.
    } else {
      trackEvent("PageView");
    }
    const servicePages: Record<string, string> = {
      "/services": "All Services",
      "/brand-identity": "Brand Identity",
      "/social-media-management": "Social Media Management",
      "/ai-studio": "AI-Integrated Video & Design",
      "/performance-marketing": "Performance Marketing",
    };
    if (servicePages[pathname]) {
      trackViewContent({
        content_name: servicePages[pathname],
        content_category: "Service",
        content_ids: [pathname],
      });
    }
  }, [pathname]);
  return <Outlet />;
}

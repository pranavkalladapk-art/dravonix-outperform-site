# Add canonical URLs to all public routes

Tells search engines the preferred URL for each page (prevents duplicate-content issues across `dravonixmedia.com`, `www.dravonixmedia.com`, and `.lovable.app` preview domains).

## Edits

**1. `src/routes/__root.tsx`** — add homepage canonical as default fallback in the root `links` array:
```ts
{ rel: "canonical", href: "https://dravonixmedia.com/" }
```

**2. Per-route overrides** — add `links: [{ rel: "canonical", href: "..." }]` inside each route's `head()`:

| File | Canonical href |
|---|---|
| `src/routes/index.tsx` | `https://dravonixmedia.com/` (also adds new `head()` since route currently has none) |
| `src/routes/brand-identity.tsx` | `https://dravonixmedia.com/brand-identity` |
| `src/routes/social-media-management.tsx` | `https://dravonixmedia.com/social-media-management` |
| `src/routes/performance-marketing.tsx` | `https://dravonixmedia.com/performance-marketing` |
| `src/routes/team.tsx` | `https://dravonixmedia.com/team` |

Excluded: `/admin/*` and `/sitemap.xml` (not indexed).

## Why per-route

TanStack Router merges `head()` from all matched routes. A canonical only at the root would tell Google every page is a duplicate of `/`. Each leaf route must declare its own.

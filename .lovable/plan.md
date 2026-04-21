
# Dravonix — One-Page Marketing Site

A bold, dark-first single-page site for Dravonix, built to feel like a high-performance tech brand. Sharp typography, geometric layout, and subtle motion — engineered for clarity and conversion.

## Structure (single page, anchor-scroll nav)

1. **Sticky Nav** — Logo left, links right (Services, Work, About, Contact). Transparent on hero, darkens with blur on scroll. Hamburger drawer on mobile.
2. **Hero** — Dark navy with subtle abstract arrow/speed motion graphic (SVG). Headline "Engineered to Outperform." with blue→cyan gradient text. Sub-headline + dual CTAs.
3. **Metrics Bar** — Slate background, 4 animated counters (count up when scrolled into view): 200+ Brands Scaled · 98% Client Retention · 5M+ Content Impressions · 3x Avg. Engagement Growth.
4. **Services** — Light section, 3 cards (Content Creation, Marketing Strategy, Brand Building) with blue Lucide icons, dark borders, hover lift, "Learn More →" links.
5. **How We Work** — Dark section, 3-step horizontal timeline (Discover → Build → Scale) with Speed/Precision/Progress icons, cyan connector line. Stacks vertically on mobile.
6. **Portfolio** — Light section, 6 case study cards in 2/3-column grid. Each shows brand name, platform icons, and headline metric in blue (e.g. "+412% reach in 90 days").
7. **About** — Split layout: dark navy copy on left, abstract geometric "D" mark on right.
8. **Testimonials** — Dark section, 3 quote cards with star ratings, name, company.
9. **CTA Banner** — Full-width primary blue, "Ready to Outperform?" + white "Book a Free Strategy Call" button.
10. **Footer** — Dark navy, 4 columns (Brand, Services, Company, Connect with social icons), bottom copyright bar.

## Design System

- **Tokens** (added to `src/styles.css`): primary `#2563EB`, accent cyan `#06B6D4`, navy bg `#0B1220`, slate `#334155`, off-white `#F8FAFC`. Wired into Tailwind theme variables.
- **Font**: Space Grotesk (400/500/700) loaded via Google Fonts in `__root.tsx` head.
- **Gradient**: blue→cyan reserved exclusively for hero headline + primary CTAs.
- **Icons**: Lucide React (Zap for Speed, Target for Precision, TrendingUp for Progress, etc.).

## Motion & Interactions

- Scroll-triggered fade/slide-in via IntersectionObserver hook (`useInView`) — subtle, 400ms.
- Animated counters using `requestAnimationFrame`, triggered once on view.
- Sticky nav adds backdrop-blur + dark bg after 40px scroll.
- Smooth scroll for in-page anchor links.
- Hover: card lift, button glow on primary CTAs.

## Tech

- Single route `src/routes/index.tsx` (replaces placeholder) composed of section components in `src/components/sections/`.
- Shared `useInView` hook in `src/hooks/`.
- Fully responsive: mobile-first, tablet at md, desktop at lg.
- No backend, no DB — pure static marketing page, fast load.

## Copy

Sharp, action-led, numbers-forward. Every line written in the Dravonix voice — confident, engineered, no filler.

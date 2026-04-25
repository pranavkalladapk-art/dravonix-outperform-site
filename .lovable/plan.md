Replace `src/components/dravonix/About.tsx` content and visual treatment:

### Content (replace single paragraph)
1. "Dravonix is built for brands that refuse to be average. Our team brings experience across both national and international markets, giving us a clear understanding of what drives real business growth."
2. "At Dravonix, this isn't just work for us — it's what we're passionate about. We don't approach projects with a transactional mindset. Instead, we focus on building long-term value by understanding your goals and delivering work that creates real impact."
3. "We combine strategy, data, and creative execution to deliver measurable results. Every project follows a clear process — understanding your business, identifying opportunities, and executing with precision."
4. "Our team works closely with clients at every stage, ensuring transparency, consistency, and outcomes that align with real goals. No shortcuts. No inflated promises. Just focused work that performs."
5. "Because for us, the real reward isn't just revenue — it's the results we create and the growth our clients achieve."
6. Closing tagline (emphasized): "We're just getting started. So are you. Let's build something exceptional together."

### UI box treatment
- Outer container widened to `max-w-5xl`.
- Card: `rounded-3xl`, `p-8 md:p-14`, `bg-gradient-to-br from-white/[0.04] to-white/[0.01]`, `border border-white/10`, `shadow-[0_0_60px_-20px_rgba(34,211,238,0.25)]`, `backdrop-blur-sm`.
- Cyan→blue gradient accent bar across top of card.
- Eyebrow chip "About Dravonix" with cyan dot (matching Co-Founders style on /team).
- Headline "Precision. Innovation. Performance." with gradient on "Performance.".
- Paragraphs: left-aligned, `text-base md:text-lg leading-relaxed text-[var(--muted-text)] space-y-5`.
- Closing tagline: divider `border-t border-white/10 pt-6`, `text-lg md:text-xl text-white font-medium`.
- "Meet the Team" CTA preserved, centered below the card.
- Existing `<Reveal>` stagger preserved.

### Files
- `src/components/dravonix/About.tsx` — rewrite only. No new files, deps, or routes.
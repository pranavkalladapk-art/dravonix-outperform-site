

## Goal
Make the "Meet the Team" link on the home page navigate to a new dedicated `/team` page that introduces Pranav A, Sreerag S, and Arunraj R with a premium, cinematic feel matching the rest of Dravonix.

## What you'll see

A new page at `/team` containing:

- **Header**: Eyebrow "Our People", title **Meet the Team**, subtitle *"The minds shaping Dravonix."*
- **3-column team grid** (stacks to 1 column on mobile, 2 on tablet) — one premium card per founder with:
  - Portrait area with soft cyan/blue gradient lighting behind it
  - Name (large display font)
  - Role line (e.g. *Video Editor • Content Creator • Web Developer*)
  - A short tagline preview of their vision
  - Hover: subtle zoom on portrait, glow ring around card, lift animation
  - Click: smoothly **expands the card inline** to reveal the full Founder Vision quote (no separate page — keeps it fast and elegant)
- **Closing CTA** strip: "Want to build with us?" → links to the contact form on the home page.

Visual direction: dark navy background, white text, thin white/10 borders, cyan accent, scroll-triggered reveal animations (using your existing `Reveal` component), Apple-style spacing and typography hierarchy.

### Founder content used

- **Pranav A** — Video Editor • Content Creator • Web Developer
  *"To build Dravonix into a digitally driven powerhouse where technology and creativity merge — creating scalable systems, high-impact content, and seamless brand experiences that set new industry standards."*
- **Sreerag S** — Photographer • Content Creator • Content Writer
  *"To shape Dravonix as a storytelling-first agency — where every brand communicates with clarity, emotion, and purpose, turning content into meaningful connections that audiences trust and remember."*
- **Arunraj R** — Cinematographer • Video Editor • Content Creator
  *"To position Dravonix as a leader in cinematic brand storytelling — delivering visually powerful content that elevates perception, builds identity, and creates lasting impact in the digital space."*

### Portrait images
Since no photos were provided, each card will use a tasteful **monogram portrait** (initials over a soft gradient) as a placeholder. You can drop real photos in later — the layout will accept them without changes.

## Navigation wiring

- The existing **"Meet the Team"** link inside the About section will point to `/team` instead of `#contact`.
- Add **"Team"** to the main nav (desktop + mobile menu) so visitors can reach it from anywhere.
- The `/team` page gets its own back-to-home link in a top bar and reuses the global Nav and Footer.

## Technical notes (for the build step)

- New route file: `src/routes/team.tsx` with its own `head()` meta (title, description, og:title, og:description) so the page is independently shareable and SEO-indexable.
- New component: `src/components/dravonix/TeamGrid.tsx` containing the cards, expand-on-click state, and scroll reveals (reuses `Reveal` and existing CSS variables `--navy`, `--cyan-accent`, `--blue-brand`, `--muted-text`).
- Update `src/components/dravonix/About.tsx`: change the `<a href="#contact">` "Meet the Team" CTA to a TanStack `<Link to="/team">`.
- Update `src/components/dravonix/Nav.tsx`: convert the in-page hash links to work from any route (prefix with `/` when not on home) and add a **Team** entry pointing to `/team`. The "Get a Free Audit" CTA will route to `/#contact` so it works from `/team` too.
- Page metadata: `title: "Meet the Team — Dravonix"`, description summarizing the three founders.
- No backend changes, no new dependencies.


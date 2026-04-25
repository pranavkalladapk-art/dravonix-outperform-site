I’ll fix the page scroll behavior by making the section URL sync passive during manual scrolling, so it no longer traps the user around `/process` or prevents reaching the bottom/contact area.

Implementation plan:

1. Update the section scroll sync hook
   - In `src/hooks/use-section-url-sync.ts`, stop programmatic section scrolling from running during normal browser/manual scrolling.
   - Only run `scrollToSection(...)` when the route/path actually changes through navigation, not when the hook’s own scroll-spy updates the URL with `history.replaceState`.
   - Keep the URL changing as the user scrolls through sections, but make that URL update non-invasive so it does not trigger another scroll jump.

2. Improve bottom-of-page detection
   - Adjust the scroll-spy logic so the contact section can become active when the user reaches the bottom of the page.
   - Add a bottom guard such as: if the user is near `document.documentElement.scrollHeight`, prefer the `contact` section instead of keeping the URL stuck on `/process` or `/about`.

3. Preserve smooth navigation clicks
   - Keep top nav clicks smooth when moving between Home, Services, Process, About, and Contact.
   - Maintain the fixed nav offset so section headings are not hidden under the header.

4. Keep accessibility behavior
   - Preserve the existing `prefers-reduced-motion` behavior so users who request reduced motion do not get forced smooth scrolling.

Technical details:

- Files to edit:
  - `src/hooks/use-section-url-sync.ts`
- Likely fix:
  - Track whether the path change was caused by internal scroll-spy URL replacement versus a real route navigation.
  - Use `window.history.replaceState(...)` for passive URL updates only.
  - Avoid calling `scrollToSection(...)` in response to those passive updates.
  - Add near-bottom logic based on `window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - threshold`.

Expected result:

- The user can scroll from top to the full end of the page smoothly.
- The page will not jump back to earlier sections while scrolling.
- Navigation menu clicks will still smoothly scroll to their target sections.
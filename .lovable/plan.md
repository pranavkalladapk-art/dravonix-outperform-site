
## Goal
Add each founder's email address to their team card on the `/team` page, so visitors can contact them directly.

## What you'll see
On every founder card in the Meet the Team grid, a new email line appears just below the role:

- **Pranav A** → pranav@dravonixmedia.com
- **Sreerag S** → sreerag@dravonixmedia.com
- **Arunraj R** → arunraj@dravonixmedia.com

The email is rendered as a clickable `mailto:` link in muted text with a cyan hover state, matching the existing typography. Clicking opens the visitor's mail app with a fresh message to that founder. The card itself stays click-to-expand; the email link uses `stopPropagation` so tapping it does not toggle the vision panel.

## Technical notes
- Edit `src/components/dravonix/TeamGrid.tsx`:
  - Add `email: string` to the `Member` type and to each of the three member objects.
  - Render `<a href="mailto:{email}" onClick={(e) => e.stopPropagation()}>` between the role and tagline.
- No new files, no routing changes, no backend work.

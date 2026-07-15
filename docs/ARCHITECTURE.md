src/

components/

layout/

sections/

ui/

assets/

styles/

docs/

App.tsx

main.tsx

## Layout

- Fixed navigation at the top for consistent access and cross-browser compatibility.
- `App.tsx` composes `Navbar`, `main`, and `Footer` as the primary root layout.
- `main` contains all content sections in the storytelling order.

## Styles

- Shared design tokens are defined in `styles/variables.css` and imported through `styles/globals.css`.
- Global spacing, typography, and color tokens support consistent visual rhythm.
- `Navbar` uses shared tokens for spacing, blur, and color.

## Animation

- A shared `useReveal` hook supports scroll reveal animations.
- Motion is slow, subtle, and respects `prefers-reduced-motion`.

## Component responsibilities

- `Navbar`: fixed header, link navigation, glass effect styling.
- `HeroSection`: hero imagery, overlay, entry text, button action.
- `BookSection`: book presentation and call to action.
- `QuotesSection`: thought fragments and poetic content.
- `ReelsSection`: prepared layout for future media embeds.
- `AuthorSection`: author profile, intro, and contact prompt.
- `ContactSection`: form and visitor outreach.
- `Footer`: page footer and attribution.

## Responsive layout

- Components use responsive CSS and token-based spacing.
- Section wrappers and grid layouts adapt to desktop, tablet, and mobile.

## Accessibility strategy

- Semantic HTML elements are used throughout.
- Focus states and contrast are preserved.
- Motion respects `prefers-reduced-motion`.
- No placeholder artwork is introduced in production.

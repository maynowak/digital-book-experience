# Roadmap & Sprint Backlog

This document defines the project phases and the sprint backlog aligned with the project's design and storytelling goals. Treat this file as the official development roadmap; all work should align with `docs/AI_CONTEXT.md` and `docs/DESIGN_SYSTEM.md`.

---

## Project Phases

- **Version 1.0 — Foundation**: Establish a buildable baseline and core sections.
- **Version 1.1 — Design**: Apply the documented visual system and design tokens.
- **Version 1.2 — Storytelling**: Shape the site flow into an emotional journey.
- **Version 1.3 — Animations**: Add subtle, supporting motion.
- **Version 2.0 — Release**: Final polish, real assets, and handoff.

---

## Current Sprint Status

## Sprint 1.0 Foundation

✅ Completed

---

## Sprint 1.1 Design

✅ Completed

---

## Sprint 1.2 Storytelling

✅ Completed

---

## Sprint 1.3 Animation

✅ Completed

- ✅ Hero Motion
- ✅ Scroll Storytelling
- ✅ Navigation Polish
- ✅ Firefox Compatibility Fix
- ✅ Visual Polish

---

## Sprint 2.0 Release

🚧 Ready to Start (blocked — pending production media assets, see `docs/MEDIA_INTEGRATION_PLAN.md`)

---

## Sprint 2.1 Accessibility, SEO & Documentation Finalization

🚧 Planned

---

## Sprints

### Sprint 1.0 — Foundation

- **Goal:** Establish the buildable baseline and core page structure.
- **User Experience Objective:** Deliver a calm, readable entry experience with all primary sections present in the correct order.
- **Components:** `Navbar`, `HeroSection`, `BookSection`, `AuthorSection`, `QuotesSection`, `ReelsSection`, `ContactSection`, `Footer`, `Container`, `SectionHeading`, `Button`, `Card`, `Image`.
- **Acceptance Criteria:**
  - Project builds successfully (`npm run build`).
  - All main sections render in the documented order (Welcome → Staunen → Gedanken → Natur → Buch → Autorin → Kontakt).
  - Semantic HTML and accessible attributes (alt text, focus states) are present.
  - Missing assets are preserved as components and marked with TODOs rather than substituted with generated artwork.
- **Estimated Effort:** Medium
- **Notes:** Preserve the calm, minimal aesthetic described in `docs/AI_CONTEXT.md`.

### Sprint 1.1 — Design

- **Goal:** Apply the visual system and create a premium, poetic atmosphere.
- **User Experience Objective:** Make the page feel natural, warm, and spacious while maintaining legibility.
- **Components:** `HeroSection`, `BookSection`, `AuthorSection`, `ReelsSection`, `Navbar`, `Footer`, global style tokens.
- **Acceptance Criteria:**
  - Color palette and typography follow `docs/DESIGN_SYSTEM.md`.
  - Components use design tokens for spacing, color, and type.
  - Navigation is visually de-emphasized; content remains central.
  - Build passes and visual regressions are minimal.
- **Estimated Effort:** Medium
- **Notes:** Avoid aggressive visual effects; prefer subtlety.

### Sprint 1.2 — Storytelling

- **Goal:** Shape the site flow into an emotional, coherent journey.
- **User Experience Objective:** Guide visitors through the documented narrative sequence and encourage lingering.
- **Components:** `HeroSection`, `QuotesSection`, `ReelsSection`, `BookSection`, `AuthorSection`, `ContactSection`, `Navbar`.
- **Acceptance Criteria:**
  - Section order and content support the journey (welcome → wonder → thoughts → nature → book → author → contact).
  - Transitions between sections feel coherent and calm.
  - Content is presented in an emotional, not sales-oriented, tone.
  - Build passes and accessibility is maintained.
- **Estimated Effort:** Medium

### Sprint 1.3 — Animations

- **Goal:** Introduce slow, supporting motion to enhance atmosphere.
- **User Experience Objective:** Use gentle fades, slow parallax, and soft hover states to support the narrative.
- **Components:** `HeroSection`, `SectionHeading`, `Button`, `Card`, `Image`, `Navbar`.
- **Acceptance Criteria:**
  - Animations are slow, subtle, and optional (respect `prefers-reduced-motion`).
  - No animation distracts from reading or interaction.
  - Accessibility remains intact.
- **Estimated Effort:** Small to Medium

### Sprint 1.3 Planning

#### Sprint Goal

- Add a calm, elegant animation layer that supports the story without calling attention to the interface.

#### User Experience Goal

- Strengthen the poetic site flow through slow, natural motion while preserving quiet reading and restful pacing.

#### Epics

1. **Section transitions** — gentle entry/exit motion for major page sections.
2. **Surface refinement** — subtle hover and focus feedback for cards, buttons, and links.
3. **Visual depth** — restrained parallax-like movement for background and layered elements.
4. **Motion accessibility** — ensure all animation respects `prefers-reduced-motion`.

#### Task-by-task tickets

- **T1:** Audit current section components to identify natural motion entry points.
- **T2:** Define animation duration and easing standards that feel slow and calm.
- **T3:** Implement subtle fade-in and slide-in motion for `HeroSection`, `BookSection`, `AuthorSection`, `ReelsSection`, and `ContactSection`.
- **T4:** Add soft hover/focus states for `Button`, `Card`, and interactive links using micro-motion only.
- **T5:** Implement a gentle background or element shift in `HeroSection` to add visual depth without motion sickness.
- **T6:** Add a subtle, optional parallax-like movement to layered imagery or text blocks in `HeroSection` and `QuotesSection`.
- **T7:** Add `prefers-reduced-motion` handling across all motion styles and test with system settings.
- **T8:** Validate animation performance on desktop and mobile, ensuring no jank and no flicker.
- **T9:** Document the animation approach in a short section of `docs/ROADMAP.md` or `docs/COMPONENT_GUIDE.md` if needed.

#### Priority

- High: `prefers-reduced-motion` support, section transition motion, accessibility checks.
- Medium: hover/focus micro-interactions, background depth.
- Low: decorative parallax enhancements, animation documentation cleanup.

#### Estimated effort

- S: Define motion tokens, easing, and accessibility rules.
- M: Implement motion in the main sections and button/card surfaces.
- L: Test across responsive breakpoints and fine-tune timing for all supported viewports.

#### Acceptance Criteria

- Motion is calm, subtle, elegant, and never distracting.
- Animations feel slow, not rushed, and support reading rather than interrupt it.
- All animation is disabled or simplified for `prefers-reduced-motion` users.
- Existing layout, spacing, and typography remain unchanged.
- Build passes successfully after animation changes.
- No new placeholder artwork or fake assets are introduced.

#### Accessibility requirements

- Use semantic HTML for all animated elements.
- Respect `prefers-reduced-motion` with appropriate CSS media queries or JS detection.
- Ensure focus states remain visible and not removed by animation.
- Maintain contrast ratios and readable motion timing.
- Test keyboard navigation in animated sections and confirm motion does not hinder use.

#### Risks

- Motion may feel too strong and distract from the calm narrative.
- Animation timing may be inconsistent across screen sizes or devices.
- `prefers-reduced-motion` could be omitted or implemented incompletely.
- Performance overhead from animation may create jank on lower-end devices.

#### Out of Scope

- Large UI redesigns or layout changes.
- New section content, copy, or storytelling flow changes.
- Heavy scroll-triggered parallax or complex interactive animations.
- Introducing new graphic assets or placeholder art.

#### Definition of Done

- The animation backlog is documented and ready for implementation.
- Sprint 1.3 motion requirements follow the project vision: calm, slow, subtle, elegant, never distracting.
- `prefers-reduced-motion` support is explicitly required.
- No source code changes are performed in this planning task.
- The planning document can be used directly in `docs/ROADMAP.md` or as GitHub Issue content.

### Notes

- Keep the motion layer minimal: the site is primarily a poetic reading experience, not an interactive showcase.
- Preserve the existing architecture and component boundaries; apply motion within the current design system.

### Ready for Sprint 1.3

- This document is the complete Sprint 1.3 backlog and can be used as the implementation plan for the next work cycle.

### Sprint 2.0 — Release

- **Goal:** Finalize the product for release with polish and real assets.
- **User Experience Objective:** Deliver a complete and stable digital book experience ready for handoff.
- **Components:** All sections and layout components; build and deployment tooling.
- **Acceptance Criteria:**
  - Full build succeeds and artifacts are ready for deployment.
  - Real hero/book/author/reels assets are used or documented TODOs are present.
  - No placeholder artwork introduced in production.
  - Documentation is complete and aligned with implementation.
- **Estimated Effort:** Medium

### Sprint 2.1 — Accessibility, SEO & Documentation Finalization

#### Sprint Goal

- Finalize accessibility compliance and SEO metadata, and reconcile outstanding documentation inconsistencies, while Sprint 2.0 remains blocked on production media assets.

#### User Experience Goal

- Ensure every visitor, including those using assistive technology, experiences the same calm, accessible journey — and that search engines and social shares represent the book correctly ahead of release.

#### Epics

1. **Accessibility audit & remediation** — verify contrast, focus states, ARIA, and keyboard navigation across all sections.
2. **SEO metadata implementation** — single `H1`, meta title/description, Open Graph tags.
3. **Documentation reconciliation** — resolve the `public/images` vs `src/assets` mismatch in `docs/BUILD.md` (deferred from `docs/MEDIA_INTEGRATION_PLAN.md`).
4. **Cross-browser/responsive verification** — confirm Sprint 1.3 fixes (Firefox compatibility, fixed navigation) remain stable across browsers and breakpoints.

#### Task-by-task tickets

- **T1:** Run a full accessibility audit (color contrast, focus visibility, ARIA attributes, keyboard navigation) across all sections and document findings.
- **T2:** Remediate any accessibility issues found in T1 without altering layout or architecture.
- **T3:** Verify a single `H1` exists on the page and add/confirm `<meta name="description">` and document `<title>` in `index.html`.
- **T4:** Add Open Graph tags (`og:title`, `og:description`, `og:type`, `og:image`) to `index.html`; use the existing `hero.png` as a temporary `og:image` (it is a real project asset, not placeholder artwork) until the final hero image lands.
- **T5:** Update `docs/BUILD.md` so the expected asset paths reflect the actual `src/assets/<section>/` convention used in code, resolving the mismatch flagged in `docs/MEDIA_INTEGRATION_PLAN.md`.
- **T6:** Confirm `prefers-reduced-motion` handling is complete and consistent across all animated components (`useReveal`, hero, buttons).
- **T7:** Perform a cross-browser and responsive smoke test (Chrome, Firefox, mobile viewport) validating that Sprint 1.3 fixes remain stable.
- **T8:** Summarize Sprint 2.1 outcomes in `docs/CHANGELOG.md`.

#### Priority

- High: accessibility audit + remediation (T1–T2), SEO meta tags (T3), `BUILD.md` reconciliation (T5).
- Medium: Open Graph tags (T4), cross-browser verification (T7).
- Low: motion consistency check (T6), changelog documentation (T8).

#### Estimated effort

- S: meta title/description, `BUILD.md` path correction.
- M: accessibility audit and remediation, Open Graph tags.
- L: full cross-browser/responsive verification pass.

#### Acceptance Criteria

- Exactly one `H1` is present on the page.
- Meta title and description are present and accurate.
- Open Graph tags are present and use only real, existing assets.
- `docs/BUILD.md` accurately reflects the `src/assets/<section>/` convention actually used in code.
- Accessibility audit is documented with no critical issues outstanding.
- Build passes successfully after all changes.
- No new placeholder artwork is introduced.

#### Accessibility requirements

- Verify keyboard navigation across nav links, buttons, and form fields.
- Confirm visible focus states are not obscured by any styling.
- Verify color contrast ratios, particularly for text over the hero overlay.
- Confirm all existing images retain descriptive `alt` text or appropriate `aria-hidden`/decorative handling.

#### Risks

- SEO/Open Graph work may raise expectations for a high-quality `og:image`, which depends on the still-pending, low-resolution `hero.png` (tracked as a known limitation, not a blocker for this sprint).
- Accessibility remediation could reveal issues requiring coordination with Sprint 1.3 visual polish decisions (e.g. contrast vs. calm aesthetic).
- Documentation reconciliation (`BUILD.md`) must stay purely descriptive and not trigger unrelated code changes.

#### Out of Scope

- Hero, Book, Author, and Reels media integration (remains Sprint 2.0, blocked on production assets).
- Any layout, animation, or architecture changes.
- New libraries, CMS integration, or analytics tooling.
- Modifying `docs/MEDIA_INTEGRATION_PLAN.md` or `docs/PROJECT_RESOURCES.md`.

#### Definition of Done

- `docs/ROADMAP.md` contains the complete Sprint 2.1 backlog above.
- Sprint 2.1 requirements follow the project vision: calm, accessible, and technically sound without depending on unavailable media.
- No source code changes are performed in this planning task.
- The planning document can be used directly as the Sprint 2.1 implementation plan.

---

## Notes

- Follow the rules in `docs/AI_CONTEXT.md`: keep the site buildable, preserve architecture, use design tokens, and avoid introducing placeholder artwork.
- `docs/ARCHITECTURE.md` currently contains no content; before major refactors add an architecture section describing high-level module boundaries and build expectations.
- After each sprint update, summarize modified files and run `npm run build` to ensure the project remains stable.

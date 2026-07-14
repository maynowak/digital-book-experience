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

🚧 Ready to Start

---

## Sprint 2.0 Release

⬜ Planned

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

---

## Notes

- Follow the rules in `docs/AI_CONTEXT.md`: keep the site buildable, preserve architecture, use design tokens, and avoid introducing placeholder artwork.
- `docs/ARCHITECTURE.md` currently contains no content; before major refactors add an architecture section describing high-level module boundaries and build expectations.
- After each sprint update, summarize modified files and run `npm run build` to ensure the project remains stable.

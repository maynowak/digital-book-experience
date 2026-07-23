# AGENTS.md

# Digital Book Experience

## Project Overview

Digital Book Experience is a modern React + TypeScript application that presents
the book "Die Kleine und das Universum" through an immersive experience.

The application focuses on:

- emotional storytelling
- responsive design
- accessibility
- performance
- reusable UI components
- scalable architecture

---

# Tech Stack

- React
- TypeScript
- Vite
- CSS Modules
- Git
- GitHub
- Netlify / Vercel
- Terraform (planned)
- AWS (planned)

---

# Coding Style

## TypeScript

- Strict mode
- Prefer interfaces over type aliases for component props
- Avoid `any`
- Explicit return types for exported functions

## React

- Functional Components only
- Hooks only
- Composition over inheritance
- Keep components small
- One responsibility per component

## Styling

- CSS Modules
- Design Tokens
- Mobile First
- Semantic HTML
- Responsive Layout

---

# Folder Structure

src/

components/
ui/
layout/

sections/

HeroSection
BookSection
QuotesSection
ReelsSection
AuthorSection

assets/

data/

hooks/

types/

utils/

---

# Performance Rules

- Lazy load images
- Lazy load videos
- Use poster images
- Don't autoplay hidden videos
- Only one video may play simultaneously
- Use IntersectionObserver whenever possible

---

# Reels Component

Goals:

- Poster image visible immediately
- Poster disappears only after `onPlaying`
- Lazy loading of video sources
- Click selects active reel
- Auto play active reel
- Auto advance after ending
- Unload videos outside viewport where possible

---

# Accessibility

- Keyboard navigation
- Visible focus states
- Semantic headings
- Alt texts
- ARIA labels where required

---

# Git Workflow

Feature branches

feature/reels
feature/performance
feature/aws

Commit style

feat:
fix:
refactor:
docs:
style:
test:
chore:

---

# Future Roadmap

Phase 1

✅ React Foundation

Phase 2

✅ Design System

Phase 3

🚧 Reels 2.0

- Lazy Loading
- Better Posters
- Selection
- Smooth transitions

Phase 4

Cloud

- Terraform
- AWS
- CI/CD

Phase 5

Backend

- API
- Authentication
- Admin Dashboard

---

# AI Instructions

When generating code:

- preserve existing architecture
- reuse existing components
- avoid unnecessary dependencies
- prefer readable code
- avoid duplicate logic
- follow existing naming conventions
- optimize for maintainability
- preserve responsive behavior

Never replace working code unless requested.
Always explain architectural decisions when introducing new patterns.

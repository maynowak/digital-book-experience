# AI Project Context

## Project

**Digital Book Experience**

A calm, poetic digital experience based on the published book **„Die Kleine und das Universum“** by Maymilly Nowak.

## Current Project Status

- Foundation: completed
- Design System: completed
- Storytelling: completed
- React/Vite application: buildable
- Git/GitHub workflow: established
- Responsive design and visual polish: implemented
- Book section: real published cover integrated
- Book cover architecture: `coverSurface → coverPrint → coverHolder → img.cover`
- Current work: visual refinement of the book presentation and hover interaction
- Deployment target: Vercel
- Repository: `https://github.com/maynowak/digital-book-experience`

## AI-Assisted Development

AI was used as an active development partner, not only for text generation.

### Documented AI collaborators

- **ChatGPT (GPT-5.6 Luna)** — architecture, planning, UX review, documentation, debugging, technical reasoning, prompt engineering and project coordination.
- **OpenAI Codex / GitHub Copilot Agent** — implementation, refactoring, build validation and Git workflow support.
- **Claude Sonnet 5** — documentation auditing, architecture review, media planning and temporary implementation support when Codex was unavailable.
- **DeepSeek V4 Flash Free** — detailed CSS/rendering analysis, browser-debugging hypotheses, Reels rendering investigations and iterative visual refinement.
- **GitHub Copilot** — codebase inspection and implementation assistance.

The project documentation was used as a shared context so that AI-assisted changes remained aligned with the project architecture and visual goals.

## AI Working Agreement

Every AI assistant working on this repository should:

1. Read `AI_CONTEXT.md` first.
2. Read `DESIGN_SYSTEM.md`.
3. Read `ARCHITECTURE.md`.
4. Read `STORYBOARD.md`.
5. Understand the project vision before proposing implementation changes.
6. Distinguish observations from hypotheses.
7. Make small, reversible changes.
8. Preserve the existing architecture unless a structural change is explicitly justified.
9. Run `npm run build` after implementation changes.
10. Summarize modified files and the reason for each change.

## Collaboration Model

**Human Developer — Maymilly Nowak**
- Product Owner
- final technical and creative decisions
- testing and browser validation
- Git checkpoints and release decisions

**AI collaborators**
- support analysis, implementation, review, documentation and technical exploration
- do not replace human QA or final decision-making

## Important Development Principle

The project uses AI collaboratively and iteratively:

**Human observation → AI analysis → small technical change → build → browser test → human evaluation → Git checkpoint**

This workflow is especially important for visual effects, where a technically valid CSS change can still produce an undesirable visual result.

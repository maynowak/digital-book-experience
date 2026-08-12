# AI Development Team

This document records the AI-assisted collaboration used for the **Digital Book Experience** project.

## Human

### Maymilly Nowak

**Role**
- Product Owner
- Creative Direction
- Project Vision
- Technical Decisions
- Browser Testing / QA
- Git Workflow
- Release Decisions

---

## ChatGPT — GPT-5.6 Luna

**Role**
- Software Architecture
- Project Planning
- UX Review
- Documentation Strategy
- Code Review
- Debugging Support
- Prompt Engineering
- Technical Reasoning
- Project Coordination

ChatGPT is used primarily for analysis, planning, review and structured collaboration.

---

## OpenAI Codex / GitHub Copilot Agent

**Role**
- Software Implementation
- Refactoring
- Build Validation
- Git Workflow Support

**Typical responsibilities**
- feature implementation
- refactoring
- documentation updates
- build checks
- repository changes
- technical implementation

---

## Claude Sonnet 5

**Role**
- Documentation Auditor
- Architecture Reviewer
- Media Planning
- Temporary Software Implementation

Claude was also used for cross-file consistency checks and implementation support.

---

## DeepSeek V4 Flash Free

**Role**
- Technical CSS analysis
- Browser rendering investigation
- Visual-effect analysis
- Reels/video rendering debugging
- Iterative visual refinement

DeepSeek was particularly useful for detailed analysis of stacking contexts, pseudo-elements, `object-fit`, `mask-composite`, `box-shadow`, transitions, z-index and browser rendering behavior.

---

## GitHub Copilot

**Role**
- Codebase inspection
- CSS/TypeScript assistance
- Implementation support
- Repository navigation

---

## AI Collaboration Workflow

```text
Maymilly Nowak
      ↓
ChatGPT — architecture / analysis / planning
      ↓
Codex / Copilot — implementation
      ↓
Claude / DeepSeek — review and technical investigation
      ↓
Maymilly Nowak — browser QA and final decision
      ↓
Git checkpoint
```

The human developer remains the final decision maker. AI suggestions are tested against the actual browser result before being accepted.

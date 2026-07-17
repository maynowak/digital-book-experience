# Project Rules

Theme

Poetic

Minimalistic

Calm

Do not create flashy UI.

Always preserve the storytelling.

Website Flow

Hero

↓

Book

↓

Reading Preview

↓

Reels

↓

Author

↓

Contact

Video Rules

Only one video playing.

Poster before playback.

Lazy loading.

Smooth transitions.

Accessibility

WCAG compliant.

Performance

Lazy Loading.

Minimal JS.

Responsive first.

---

## AI-Assisted Workflow

For reusable AI engineering workflow rules, use:

- `docs/AI_AGENT_PLAYBOOK.md`

This repository follows a minimal-invasive AI development process.

AI assistants must:

- analyze the current implementation before editing
- read only the files required for the task
- preserve the existing architecture and design language
- validate source changes explicitly
- distinguish between build success and browser-confirmed behavior

---

## Prompt Baseline

Task prompts should define:

- context
- exact task
- constraints
- validation command
- expected output format

This reduces repetition and keeps AI-assisted work consistent across future tasks.

---

## Validation Baseline

When code changes are made:

- run `npm run build`
- verify runtime-sensitive behavior separately when needed
- do not present unverified browser behavior as confirmed

---

## Documentation Goal

These rules exist to improve:

- consistency
- maintainability
- reproducibility
- quality assurance

across future AI-assisted development work.

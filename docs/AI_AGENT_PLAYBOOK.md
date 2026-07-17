# AI Agent Playbook

This playbook defines the reusable workflow for AI-assisted software engineering in the **Digital Book Experience** repository.

Use this document before implementation work, reviews, bug fixing, or documentation updates.

---

## Purpose

The goal of this playbook is to reduce prompt duplication and create a consistent, maintainable way to work with AI agents across the project.

It establishes:

- engineering rules for AI assistants
- a standard task prompt structure
- a minimal-invasive execution workflow
- explicit validation expectations
- a consistent closing summary format

---

## Core Principles

### 1. Preserve the existing product

This project is already architected and styled.

AI assistants must preserve:

- the existing React component architecture
- the storytelling flow
- the documented design philosophy
- responsiveness
- accessibility
- performance expectations

Do not treat the repository as a greenfield project.

### 2. Work minimal-invasively

Only modify the code or documentation required for the current task.

Do not:

- redesign sections
- refactor unrelated code
- rename files or folders without necessity
- introduce new packages unless explicitly approved

### 3. Confirm the real cause first

Before changing code, identify the actual root cause of the problem using the current implementation.

Examples:

- render logic
- component state timing
- CSS stacking
- overflow or sizing
- lifecycle timing
- browser media behavior

Do not assume that a successful build proves correct behavior.

### 4. Reuse before creating

Prefer existing:

- components
- design tokens
- spacing conventions
- interaction patterns
- summary format

Create new files or components only when the existing architecture does not provide a suitable place.

---

## Standard Workflow

### Step 1. Read only what is required

Read only the files necessary for the task.

Typical order:

1. task-relevant rules
2. directly affected component
3. directly affected CSS module
4. one adjacent dependency if required

Avoid broad repo exploration when the task is local.

### Step 2. Analyze before editing

State the likely cause internally from the current code path.

Verify by checking:

- data source
- DOM structure
- state transitions
- relevant CSS rules
- asset existence
- event ordering

### Step 3. Implement the smallest correct fix

Make the minimum change that addresses the confirmed cause.

Favor:

- local edits
- focused CSS corrections
- small logic adjustments
- existing abstractions

### Step 4. Validate explicitly

After changes, run the narrowest meaningful validation.

Preferred order:

1. targeted UI or behavior validation when possible
2. `npm run build`
3. additional verification for runtime-only behavior when required

### Step 5. Report consistently

After completion, provide a structured closing summary.

Do not provide a vague recap.

---

## Standard Prompt Structure

When opening a new AI task, use this structure.

```text
Context
- Existing React + TypeScript + Vite project
- No redesign
- Preserve architecture and design system

Task
- Describe the exact change

Constraints
- Files or sections that must not change
- No new libraries
- Minimal-invasive implementation

Validation
- Required build command
- Additional runtime checks if needed

Output
- Required summary format
```

This prompt structure should be reused for future implementation sprints, bug fixes, and polish tasks.

---

## Validation Policy

### Build validation

If source code changes, run:

```bash
npm run build
```

### Runtime-sensitive validation

If the task concerns runtime-only behavior, visual rendering, media playback, scrolling, or interaction timing, explicitly separate:

- what was verified by compilation
- what was verified from code inspection
- what still requires browser confirmation

Never claim browser behavior was confirmed unless it was actually observed.

### Evidence standard

Use only confirmed evidence from:

- current source code
- existing assets
- command results
- actual browser-visible behavior when available

Do not report assumptions as facts.

---

## Completion Format

Unless a task requests a more specific format, use:

### Summary

- what changed

### Build Status

- whether `npm run build` passed

### Modified Files

- only files changed in this task

### Git Checkpoint

- files intentionally not changed when relevant

### Commit Title

- one conventional commit suggestion

### Git Commands

```bash
git add <files>
git commit -m "<commit title>"
git push
```

---

## Notes for Future AI Tasks

- Keep the site calm, poetic, and minimalistic.
- Prefer clarity over cleverness.
- Keep JS small when CSS or native browser behavior is enough.
- For UI bugs, inspect DOM structure and state timing before adding more logic.
- For media tasks, validate asset presence, preload behavior, and visible fallback states.

This file is the reusable AI engineering playbook for the repository.
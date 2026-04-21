---
name: nextjs-v0dev
description: Generate and refine Next.js App Router UI in a v0.dev style using TypeScript, reusable components, and accessible responsive layouts. Use when the user mentions Next.js UI generation, v0 prompts, landing pages, App Router components, or visual polish/refactors.
---

# Next.js v0.dev

## Quick Start

Use this skill when the request is primarily UI work in a Next.js App Router codebase.

1. Classify the request:
   - **New UI**: create a new section/page/component from a prompt.
   - **Refactor UI**: improve existing JSX/TSX to a cleaner v0-style composition.
2. Keep implementation practical:
   - Prefer server components by default.
   - Add client components only when interactivity is required.
3. Ship complete code:
   - Avoid placeholder TODO code and fake data unless the user asks for mock data.

## Default Constraints

- Prefer App Router conventions and colocated components.
- Prefer TypeScript React components.
- Preserve existing design tokens, utilities, and naming patterns in the repo.
- Keep components composable with clear props and small surface area.
- Use semantic HTML and keyboard-accessible interactions.

## Generation Workflow

Copy this checklist while implementing:

```text
Task Progress:
- [ ] Parse user intent and identify target files/routes
- [ ] Identify existing styling/component patterns to preserve
- [ ] Generate or refactor component structure
- [ ] Add responsive behavior and accessible states
- [ ] Integrate with page/layout and verify imports
- [ ] Report changed files and verification steps
```

### 1) Parse intent and target
- Determine whether this is a new section, page, or existing component refactor.
- Map the request to likely App Router locations (`app/...`, `components/...`).

### 2) Match project patterns
- Reuse existing utility classes, spacing scale, and naming conventions.
- Prefer existing shared primitives before creating new wrappers.

### 3) Build component structure
- Break large UI into small reusable pieces.
- Keep props explicit and avoid overly generic config objects.
- Favor deterministic rendering and straightforward conditionals.

### 4) Add responsive and a11y behavior
- Ensure layouts adapt to mobile and desktop states.
- Add visible focus styles and semantic labels.
- Use buttons/links according to action vs navigation semantics.

### 5) Integrate and verify
- Wire component into the correct page/layout.
- Verify imports and exported symbols are clean.
- Note any assumptions about data sources or assets.

## Output Contract

When delivering results, provide:
- A short explanation of what changed and why.
- A concise list of changed file paths.
- Verification notes (build/lint/test commands run, or what still needs checking).

## Quality Checklist

- [ ] Uses App Router-friendly structure.
- [ ] TypeScript types are valid and minimal.
- [ ] Semantic HTML is used for major sections/actions.
- [ ] Keyboard/focus states are handled for interactive elements.
- [ ] Responsive behavior is intentional, not accidental.
- [ ] No placeholder TODO comments in shipped code.
- [ ] Styling and naming align with repository conventions.

## Escalation Rules

Ask the user for clarification before coding when:
- The requested design conflicts with established project patterns.
- The task implies data/API wiring but no source contract is provided.
- Multiple route/component locations are plausible and context is missing.

## Additional Resources

- For concise prompt-to-output examples, see [examples.md](examples.md).

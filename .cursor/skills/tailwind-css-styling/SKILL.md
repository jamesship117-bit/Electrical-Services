---
name: tailwind-css-styling
description: Apply Tailwind CSS styling with consistent utility patterns, responsive behavior, and accessible interaction states. Use when the user asks for Tailwind classes, UI polish, layout cleanup, design-system consistency, or mentions utility-first CSS, Tailwind, or cursor.directory styling.
---

# Tailwind CSS Styling

## When To Use This Skill

Use this skill when the user wants to:
- style or restyle UI with Tailwind CSS utilities
- improve spacing, alignment, and visual hierarchy
- make components responsive across breakpoints
- clean up inconsistent utility usage
- add interaction states (hover, focus-visible, disabled, loading)

## Core Rules

1. Preserve behavior while improving styling.
2. Prefer reusable class patterns over one-off utility sprawl.
3. Keep responsive logic mobile-first (`sm`, `md`, `lg`, `xl`, `2xl` only as needed).
4. Ensure accessible states (`focus-visible`, contrast, disabled semantics).
5. Favor project tokens/semantic colors over arbitrary values when available.

## Workflow

Copy this checklist and track progress:

```md
Tailwind Styling Progress
- [ ] Step 1: Inspect structure and constraints
- [ ] Step 2: Establish layout and spacing baseline
- [ ] Step 3: Apply typography, color, and hierarchy
- [ ] Step 4: Add responsive behavior and wrapping safety
- [ ] Step 5: Add interactive and accessibility states
- [ ] Step 6: Refactor repeated class groups and verify
```

### Step 1: Inspect structure and constraints

- Identify each area role (container, content, controls, metadata).
- Keep semantic HTML correct before styling changes.
- Note dynamic states before editing classes.

### Step 2: Establish layout and spacing baseline

- Define outer container rhythm first (`mx-auto`, `max-w-*`, `px-*`, `py-*`).
- Use stable layout primitives (`flex`, `grid`, `gap-*`, `items-*`, `justify-*`).
- Keep spacing scale consistent and avoid ad-hoc jumps.

### Step 3: Apply typography, color, and hierarchy

- Use readable text hierarchy (`text-sm`, `text-base`, `text-lg`, `font-medium`, `font-semibold`).
- Keep secondary copy visually muted.
- Use borders/background/shadows with restraint.

### Step 4: Add responsive behavior and wrapping safety

- Start mobile-first; add breakpoint variants only when needed.
- Ensure long text and actions wrap cleanly.
- Collapse redundant adjacent breakpoint classes.

### Step 5: Add interactive and accessibility states

- Add `focus-visible` styles to interactive controls.
- Add hover styles only on interactive elements.
- Keep disabled state explicit (`disabled:opacity-*`, `disabled:cursor-not-allowed`).

### Step 6: Refactor repeated class groups and verify

- Extract repeated class groups into shared components/helpers when recurring.
- Keep class strings grouped by intent (layout, spacing, typography, visuals, state).
- Run lint/typecheck after substantial style edits.

## Utility Ordering

When class strings grow large, keep this order:
1. Layout and position
2. Sizing
3. Spacing
4. Typography
5. Visuals
6. Effects/transitions
7. State and responsive variants

## cursor.directory Compatibility Notes

- Keep class combinations composable and easy to move between components.
- Avoid tightly coupled utility chains that are difficult to reuse.
- Prefer reusable presentational primitives for repeated sections.

## Output Format For Agent Responses

When finishing styling work, respond with:
1. What changed in styling and where
2. Why those utility choices were made
3. Any follow-up needed (token alignment, accessibility checks, visual QA)

## Additional Resources

- For prompt templates and examples, see [examples.md](examples.md).

# Tailwind CSS Styling Examples

## Example 1: Layout polish

**User prompt**
> Clean up this dashboard header spacing and alignment with Tailwind.

**Expected approach**
1. Normalize container width/padding.
2. Align title, subtitle, and action row with consistent spacing.
3. Add responsive stacking for smaller viewports.

## Example 2: Card grid refactor

**User prompt**
> Make this plain list look like modern cards and keep it mobile friendly.

**Expected approach**
1. Convert to a responsive grid.
2. Add card surface styles with restrained borders/shadows.
3. Improve text hierarchy and CTA affordance.

## Example 3: Form interaction states

**User prompt**
> Improve this form with proper focus and disabled states.

**Expected approach**
1. Add clear `focus-visible` ring treatments.
2. Improve input spacing/labels for scanability.
3. Add explicit disabled styling and cursor feedback.

## Example 4: cursor.directory style alignment

**User prompt**
> Match this section to a cursor.directory-style utility pattern.

**Expected approach**
1. Keep classes composable and readable.
2. Avoid over-nesting and brittle utility combinations.
3. Prefer reusable presentational components for repeated blocks.

## Example response template

When completing a styling request, return:
- What changed and in which files/components
- Why these Tailwind utilities were chosen
- Remaining checks (a11y, token consistency, visual QA)

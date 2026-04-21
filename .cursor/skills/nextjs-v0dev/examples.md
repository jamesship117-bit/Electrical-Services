# Next.js v0.dev Examples

Use these patterns to transform user requests into concrete implementation tasks.

## Example 1: New hero and feature sections

**User prompt**
> Create a modern hero and 3-feature section for a home services site. Use App Router and keep it responsive.

**Expected execution pattern**
1. Add or update a section component in `components/`.
2. Compose semantic sections (`header`, `section`, `h1`, `p`).
3. Add responsive spacing and grid behavior.
4. Integrate into the target route in `app/.../page.tsx`.

**Response shape**
- Explain component structure and responsive choices.
- List changed files.
- Include verification notes.

## Example 2: Refactor plain JSX into v0-style cards

**User prompt**
> Refactor this plain JSX list into a polished card grid like v0 output.

**Expected execution pattern**
1. Preserve existing data mapping logic.
2. Extract reusable `Card`-like subcomponent if repeated.
3. Improve hierarchy, spacing, and interaction affordances.
4. Keep semantics and avoid unnecessary client boundaries.

**Response shape**
- Explain what was refactored vs preserved.
- Note any new component boundaries.
- List verification commands or follow-up checks.

## Example 3: Add mobile navigation interactions

**User prompt**
> Add a mobile nav drawer with accessible toggle behavior.

**Expected execution pattern**
1. Create a client component only for interactive nav state.
2. Use buttons for toggles, links for navigation targets.
3. Add keyboard/focus handling and clear open/close states.
4. Keep desktop navigation unaffected.

**Response shape**
- Call out client/server split and why it exists.
- List changed files and interaction behavior verified.

## Example 4: Refactor page into reusable sections

**User prompt**
> Break this long landing page into reusable sections/components.

**Expected execution pattern**
1. Split page into cohesive section components.
2. Keep prop contracts minimal and explicit.
3. Preserve visual result while improving maintainability.
4. Ensure route entry remains simple and readable.

**Response shape**
- Describe the new composition model.
- List extracted components and imports updated.
- Provide a short validation checklist.

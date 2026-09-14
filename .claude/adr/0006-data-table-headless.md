# ADR-0006: Data Table is headless only

**Status:** Accepted (2026-09-14)

## Context
shadcn's Data Table is a documentation recipe around TanStack Table, not a packaged component. A batteries-included web component would be large and opinionated.

## Decision
We ship a `table-state` primitive in `@aranghat/primitives` (sorting, filtering, pagination, row selection, column visibility over a plain array) and the styled `art-table` family in `base`. The Data Table docs page is a composition recipe using both, with the four framework samples; no `art-data-table` element is published. The Tier 6 "Data Table Page" widget composes the recipe.

## Consequences
- The 15 kB Data Table budget in §7 applies to the primitive plus the recipe bundle.
- No virtualisation in v1; documented as a limitation.

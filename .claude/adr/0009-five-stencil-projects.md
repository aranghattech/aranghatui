# ADR-0009: Five independent Stencil projects, one per tier

**Status:** Accepted (2026-09-14)

## Context
One Stencil project with five output configs would share chunks and build faster, but every tier package would depend on the single core build, so installing `base` would install everything.

## Decision
`packages/base`, `components`, `navigation`, `modals`, `widgets` are separate Stencil projects with their own `stencil.config.ts`. Cross-tier use is by importing the lower tier's published custom elements (peer + dev dependency) and its JSX type declarations. The runtime is shared per ADR-0002.

## Consequences
- Turborepo orders builds via `dependsOn: ["^build"]`.
- A shared `stencil.base.config.ts` in `tooling/` keeps the five configs identical except for namespace and output paths.

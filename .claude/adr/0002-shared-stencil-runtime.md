# ADR-0002: Stencil runtime is inlined per tier (`externalRuntime: false`)

**Status:** Accepted (2026-09-14). Revised the same day after measurement — supersedes the "shared external runtime" resolution recorded in the first round of decisions.

## Context
With five independent Stencil projects the runtime is either bundled into each tier or imported from `@stencil/core/internal/client` and deduped by the consumer's bundler. The first-round decision chose the external runtime on the assumption that it would be small and shared. Measured on the Phase 0 build (gzip):

| Variant | `art-hello` module | HTML sandbox (runtime + 2 components) | Notes |
|---|---|---|---|
| External runtime | 1.9 kB | **24.7 kB** | `@stencil/core/internal/client` alone is **25.6 kB**: it cannot be tree-shaken by feature flags |
| Inlined runtime | 1.9 kB + ~7 kB shared chunk per tier | **12.1 kB** | Stencil emits a per-project runtime containing only the features its components use |

The landing-page budget (`base` only, ≤ 15 kB) is unreachable with the external runtime. A full admin shell pays ~7 kB per additional tier when inlined (≈ 35 kB for five tiers) versus 25.6 kB shared — a difference well inside the 180 kB budget.

## Decision
Every tier builds `dist-custom-elements` with `externalRuntime: false` and `customElementsExportBehavior: 'single-export-module'`. `@stencil/core` is a **devDependency** only, pinned to one exact version across tiers (`scripts/check-stencil-pin.mjs`), so the peer-only dependency rule has no exception. Lower tiers, primitives and the approved runtime deps stay Rollup externals so they are never duplicated.

`ARTUI_EXTERNAL_RUNTIME=1` rebuilds with the external runtime for re-measurement only; it is never used for a release.

## Consequences
- Budget accounting: "Stencil runtime + primitives ≤ 20 kB" is measured as base's inlined runtime chunk plus primitives; each further tier adds its own runtime chunk, reported per tier in the size table.
- A tier with a single component gets the runtime inlined into that component's file (no shared chunk); `scripts/gen-size-limit.mjs` adds the runtime budget to that entry until a second component splits the chunk.
- Two tiers on one page carry two runtime copies. They do not conflict: registrations are guarded and each tier's runtime is self-contained.
- Revisit if Stencil ships a tree-shakable external runtime.

# ADR-0002: One shared Stencil runtime via `externalRuntime: true`

**Status:** Accepted (2026-09-14)

## Context
With five independent Stencil projects, `externalRuntime: false` inlines a copy of the Stencil runtime into every tier package. A full admin app would ship five copies and the "runtime + primitives ≤ 20 kB" budget could not be met.

## Decision
Every tier builds `dist-custom-elements` with `externalRuntime: true` and `customElementsExportBehavior: 'single-export-module'`. The runtime is imported from `@stencil/core/internal/client`; `@stencil/core` is listed under `dependencies` (pinned to one exact version across all tiers, enforced by a repo script) so the consumer's bundler dedupes it. This is the single exception to the peer-only dependency rule.

For consumers without a bundler, each tier also ships `dist/iife/<tier>.js`, a self-contained bundle with the runtime inlined. It is documented as the CDN path only and excluded from budgets except the "all tiers" reference measurement.

## Consequences
- Runtime measured once in `size-limit`, as `@stencil/core/internal/client` gzip.
- Lockstep releases must also pin the same `@stencil/core` version; `scripts/check-stencil-pin.mjs` fails CI otherwise.

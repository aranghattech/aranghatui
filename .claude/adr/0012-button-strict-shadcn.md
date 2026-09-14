# ADR-0012: Button follows shadcn's API exactly

**Status:** Accepted (2026-09-14)

## Context
The previous incarnation of this library made `default` a neutral ink fill and added a `primary` variant plus `rounded` and `fullWidth` props. CLAUDE.md N2 and the no-extra-variants rule say otherwise.

## Decision
`art-button` variants are exactly `default | secondary | outline | ghost | destructive | link`, sizes `sm | md | lg`, plus `icon` sizing via a boolean `icon` prop (shadcn's `icon` size family). `default` is the primary fill, which is ink in the neutral theme and the brand colour in brand themes. No `primary`, `rounded` or `fullWidth`.

## Consequences
- Brand themes get a branded default button for free by overriding `--art-color-primary-*`.
- Full-width buttons are a consumer layout concern (`style="width:100%"` or a wrapper).

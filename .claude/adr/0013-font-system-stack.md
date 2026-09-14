# ADR-0013: System font stack, no shipped font files

**Status:** Accepted (2026-09-14)

## Context
The previous incarnation self-hosted IBM Plex Sans. The user chose a system stack for the restart.

## Decision
`--art-font-sans` is the platform stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`), `--art-font-mono` the platform mono stack. No woff2 files in any package. A brand theme may override `--art-font-sans` and load its own font.

## Consequences
- Zero font bytes; docs and screenshots use the platform font of the rendering OS, which is why VRT is pinned to Linux (ADR-0018).

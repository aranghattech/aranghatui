# ADR-0018: Visual and a11y tests run in the Playwright Docker image

**Status:** Accepted (2026-09-14)

## Context
Screenshots differ between macOS and Linux (font rasterisation, system fonts per ADR-0013). Baselines must be identical locally and in CI.

## Decision
`pnpm test:visual` and `pnpm test:a11y` run Playwright inside `mcr.microsoft.com/playwright:v<pinned>-noble` via a wrapper script, both on developer machines and in GitHub Actions. Baselines are Linux Chromium only and committed under `tests/visual/__screenshots__/`. Stencil e2e tests use `@stencil/playwright` so the whole browser stack is Playwright; Puppeteer is not installed.

## Consequences
- Docker is a development prerequisite (documented in Contributing).
- One browser (Chromium) for VRT; cross-browser checks are a manual smoke item in Phase 8.

# ADR-0016: No package is published before 1.0

**Status:** Accepted (2026-09-14)

## Context
`@aranghat/tokens` 0.0.7 and `@aranghat/ui-*` from the previous incarnation were published to GitHub Packages and are still pinned by the Atoms app.

## Decision
All workspace packages sit at `0.0.0` with Changesets configured as one `fixed` group. No publish workflow runs before Phase 8; the first publish is `1.0.0`. Consumers before that use workspace or git links. Migrating Atoms and Goodu is a separate, later task.

## Consequences
- Release tooling and `pnpm pack` install-isolation checks are exercised in CI without publishing.

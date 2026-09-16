# Changesets

All `@aranghat/*` packages are released in lockstep (one `fixed` group). Add a changeset with `pnpm changeset` in any PR that changes a published package. `one-point-oh.md` is the pending first release.

Publishing is manual and inert until the repository variable `RELEASE_ENABLED` is `true` (ADR-0016): `release.yml` runs `pnpm version-packages` through the Changesets action (release PR), and `pnpm release` publishes to GitHub Packages on merge.

# Changesets

All `@aranghat/*` packages are released in lockstep (one `fixed` group). Add a changeset with `pnpm changeset` in any PR that changes a published package. `one-point-oh.md` is the pending first release.

## Releasing

Publishing is manual and inert until the repository **variable** `RELEASE_ENABLED` is `true` (ADR-0016). With it set, run the *Release* workflow:

1. `pnpm version-packages` — the Changesets action opens (or updates) a release PR that applies the version bump and the changelogs.
2. Merging that PR runs `pnpm release` (`changeset publish`), which pushes every package to GitHub Packages.

Both steps authenticate with the repository **secret** `ART_PKG_TOKEN`. It needs:

| Scope | Used for |
|---|---|
| `write:packages` | publishing `@aranghat/*` to `npm.pkg.github.com` |
| `repo` | pushing the release branch and opening the release PR |

A classic PAT with those two scopes is enough; a fine-grained token needs *Contents: read and write*, *Pull requests: read and write* and *Packages: read and write* on this repository. The workflow uses it for `actions/checkout` as well, so the release PR triggers CI — a PR opened with the default `GITHUB_TOKEN` would not.

# Versioning

## One version for every package

Every `@aranghat/*` package — tokens, primitives, icons, the five tiers, `hydrate`, `ui`, and each framework binding — is released **in lockstep at one version** (ADR-0016). A page that mixes versions is the single most likely source of duplicate element registration and token drift, so there is nothing to mix: upgrade the scope, not a package.

```bash
pnpm up "@aranghat/*"
```

Releases are cut with [Changesets](https://github.com/changesets/changesets) from `main` and published to GitHub Packages by the *Release* workflow; the changelog of each package lists what changed for it, and the release notes list everything.

## Semantic versioning, from 1.0

- **Major** — a breaking change anywhere in the public surface: a custom element renamed or moved between tiers, a prop, event, slot, method, CSS custom property or `::part()` renamed or removed, a token renamed or removed, an event `detail` shape changed, a peer range dropped (React, Vue, Angular, Node), or the `artui-ssr` contract changed.
- **Minor** — a new component, prop, event, slot, token or theme; a deprecation (see below); a behaviour change that matches shadcn/ui more closely and is called out in the changelog.
- **Patch** — a bug fix, an accessibility fix, a size reduction, a documentation change. Visual baselines may change in a patch only when the change fixes a defect.

Public surface means everything a component page documents: the API reference (props, events, methods, slots, CSS custom properties, shadow parts), the tokens table, and the framework idioms of §3a in `CLAUDE.md`. Internal helpers in `@aranghat/primitives` are published for the tiers to share and follow the same rule, but are not a supported surface for apps.

## Deprecation cycle

Nothing public is renamed or removed in one step:

1. The new name ships in a **minor** alongside the old one. The old one keeps working, logs a one-line `console.warn` on first use in development, and the component page carries a migration note.
2. The old name is removed in the **next major**, listed in the release notes with the note from step 1.

The pre-1.0 line (`0.x`) made no such promise; the [Migration](./migration) guide covers the move from the previous packages.

## Peer ranges

| Peer | Range |
|---|---|
| React (`*-react`) | `^18 \|\| ^19` |
| Vue (`*-vue`) | `^3.4` |
| Angular (`*-angular`) | `^22` |
| Node (`@aranghat/hydrate`, tooling) | `>= 24` |
| Browsers | The last two versions of Chrome, Edge, Firefox and Safari — the Popover API and declarative shadow DOM are required (ADR-0022, ADR-0023). |

Widening a range is a minor; dropping one is a major.

## Cross-tier dependencies

A tier lists the tiers it builds on as **peer** dependencies, never as dependencies, so your app's package manager installs each tier once. Install the tiers you use at the same version; a version mismatch across `@aranghat/*` packages is a bug in your lockfile, not a supported state.

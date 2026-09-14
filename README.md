# artui — AranghatUI

Framework-agnostic design system and component library. Authored once in **Stencil** (Web Components), distributed to **HTML, React, Vue and Angular**, styled by **tokens only**, held to **shadcn/ui** craft.

- Rulebook: [`CLAUDE.md`](./CLAUDE.md) · Plan: [`.claude/PLAN.md`](./.claude/PLAN.md) · Decisions: [`.claude/adr/`](./.claude/adr/)
- Packages: `@aranghat/tokens` · `primitives` · `icons` · `base` · `components` · `navigation` · `modals` · `widgets` (+ `-react`, `-vue`, `-angular` per tier)

## Develop

```bash
pnpm install
pnpm build            # turbo: tokens → primitives/icons → tiers → wrappers → apps
pnpm verify           # the gate: build, lint:tokens, unit, e2e, size, docs parity, isolation, visual, a11y, smoke
pnpm --filter @aranghat/base dev   # Stencil dev server for one tier
pnpm --filter @artui/docs dev      # docs site
```

Visual, a11y and smoke suites run inside the official Playwright Docker image (`scripts/pw-docker.sh`) so baselines match CI byte-for-byte. Docker is a prerequisite; set `ARTUI_NO_DOCKER=1` to run on the host for a quick look (baselines will not match).

## Layout

See `CLAUDE.md` §2. Every component lives in `packages/<tier>/src/<name>/art-<name>.{tsx,css,spec.tsx,e2e.ts,stories.ts}`; the stories file is the single source for the VRT matrix, the a11y sweep and the docs Examples section.

# Tokens

Source of truth: `packages/tokens/src/**/*.json` (DTCG). Three tiers:

1. **Primitive** — raw scales (`--art-color-neutral-500`, `--art-space-4`). Never used by components.
2. **Semantic** — intent (`--art-color-bg-surface`, `--art-color-border-default`). What components consume.
3. **Component** — only when no semantic token fits; must reference a semantic or primitive token.

Outputs: `aranghat.css`, `themes/*.css`, `tailwind.css` (Tailwind v4 `@theme` mapping compiled per component), `scss`, `js/ts`, `json`, Compose, Swift.

Full token table: generated in Phase 1.

---
name: token-authoring
description: Add or change design tokens in packages/tokens (Style Dictionary, DTCG) without breaking consumers — naming, tiers, light/dark, Tailwind mapping, contrast.
---

# Token authoring (artui)

- Source: `packages/tokens/src/{primitive,semantic/shared,semantic/light,semantic/dark}/*.json` (DTCG `$value`/`$type`). Themes: `packages/tokens/themes/<name>/{light,dark}.json` (semantic only).
- Naming: path → `--art-<path-kebab>`; `radius.base` → `--art-radius`. Semantic names describe intent (`color.bg.surface`, `color.fg.muted`, `color.border.default`), never a colour.
- Rules: primitives never used by components; semantic values reference primitives (`{color.neutral.200}`); component tokens only when no semantic fits and must reference a token; one border width, one border colour (+ `strong` for focus/selected); radius steps derive from `radius.base` with `calc()`.
- Every semantic colour needs light **and** dark values; check contrast (AA) for text on its background pairs.
- Expose in Tailwind: extend the mapping in `packages/tokens/scripts/build.mjs` (`css/artui-tailwind`) — only `var(--art-*)` references, never literals (the build test asserts it).
- Build + test: `pnpm --filter @aranghat/tokens build && pnpm --filter @aranghat/tokens test:unit`; rebuild tiers afterwards (per-component CSS is compiled against the mapping).
- Renaming or removing a token is a breaking change: deprecate first (keep the old name as an alias for one minor version) and add a migration note.
- Land token changes as their own commit before the component that needs them.

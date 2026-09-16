# Tokens

Source of truth: `packages/tokens/src/**/*.json` (DTCG). Tables below are generated from the build output — never edited by hand.

Three tiers:

1. **Primitive** — raw scales. Never used by components.
2. **Semantic** — intent. What components consume; what brand themes override.
3. **Component** — only when no semantic token fits; must reference a token.

Outputs: `aranghat.css` (light + dark), `themes/*.css` (brands), `tailwind.css` (Tailwind v4 `@theme` mapping compiled per component), `scss/_tokens.scss`, `js`/`ts`, `json` (nested + flat), Compose (`Tokens.kt`, `TokensDark.kt`), Swift (`Tokens.swift`, `TokensDark.swift`).

## Semantic

### Surfaces
<TokenTable prefix="color.bg" tier="semantic" />

### Text
<TokenTable prefix="color.fg" tier="semantic" />

### Intent fills
<TokenTable prefix="color.primary" /><TokenTable prefix="color.secondary" /><TokenTable prefix="color.destructive" /><TokenTable prefix="color.success" /><TokenTable prefix="color.warning" /><TokenTable prefix="color.info" />

### Borders and focus
<TokenTable prefix="color.border" /><TokenTable prefix="color.ring" /><TokenTable prefix="border" /><TokenTable prefix="ring" />

### Shape
<TokenTable prefix="radius" />

### Density
<TokenTable prefix="control" /><TokenTable prefix="size" />

### Elevation, motion, layers
<TokenTable prefix="shadow" /><TokenTable prefix="duration" /><TokenTable prefix="ease" /><TokenTable prefix="z" />

## Primitive

### Colour
<TokenTable prefix="color" tier="primitive" />

### Space, type, layout
<TokenTable prefix="space" /><TokenTable prefix="font" /><TokenTable prefix="breakpoint" /><TokenTable prefix="container" />

## Guarantees

- `pnpm --filter @aranghat/tokens test:unit` runs an AA contrast sweep over every text pair (4.5:1), UI fill (3:1) and the focus halo as rendered (3:1) in light, dark and every brand theme.
- Brand sheets may only override semantic tokens that exist in the default theme (checked by the same sweep).

## Figma

The build also emits the tokens for [Tokens Studio](https://tokens.studio) in its multi-file, DTCG-style layout at `@aranghat/tokens/figma/`: `core.json` (primitives and shared semantics), `light.json`, `dark.json`, plus `$metadata.json` (set order) and `$themes.json` (a *Light* and a *Dark* theme, both sourcing `core`). References stay references (`{color.white}`), so a Figma variable follows its primitive exactly as the CSS does.

Point the Tokens Studio plugin at the `figma` folder of the published package (or at `packages/tokens/dist/figma` in this repository) with the *Multi-file* sync option; the sync is one-way — Style Dictionary sources in `packages/tokens/src` stay the only place a value is born (§4 of `CLAUDE.md`). Regenerate with `pnpm -F @aranghat/tokens build`.


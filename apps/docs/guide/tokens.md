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

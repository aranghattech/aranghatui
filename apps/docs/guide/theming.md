# Theming

Components read **semantic** tokens (`--art-color-bg-surface`, `--art-color-fg-muted`, `--art-radius`, …) through the shadow boundary. A theme is a stylesheet that overrides semantic tokens — nothing else.

## Mode

Light and dark ship in `aranghat.css`. `data-theme="dark"` (or the OS preference) switches; `data-theme="light"` always wins. See [Dark Mode](/guide/dark-mode).

## Brand themes

A brand is a scoped override sheet generated from `packages/tokens/themes/<name>/{light,dark}.json`:

```ts
import '@aranghat/tokens/aranghat.css';
import '@aranghat/tokens/themes/example.css';
```

```html
<html data-brand="example">          <!-- whole app -->
<section data-brand="example">…</section>   <!-- or just a subtree -->
```

Mode and brand compose: `data-brand="example"` + `data-theme="dark"` uses the brand's dark values. Try it — switch the brand and the mode on the frame:

<Preview :brands="['example']">
  <art-button>Primary</art-button>
  <art-button variant="outline">Outline</art-button>
</Preview>

Changing `--art-radius` restyles every component: `sm/md/lg/xl` derive from it with `calc()` — the example brand sets a tighter radius.

## Writing a brand

Override only what the brand needs; everything else inherits the default theme. Values must reference primitives:

```json
{
  "color": { "$type": "color", "primary": { "solid": { "$value": "{color.blue.700}" } } },
  "radius": { "$type": "dimension", "base": { "$value": "0.375rem" } }
}
```

Run `pnpm --filter @aranghat/tokens build`; the contrast sweep fails the build if a pair drops below AA. The six Aranghat brand themes from the previous library are re-ported this way (ADR-0014).

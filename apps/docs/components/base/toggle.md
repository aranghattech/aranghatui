# Toggle

A two-state button that can be either on or off. shadcn/ui parity, form-associated.

## Preview

<Preview frame="inline">
  <art-toggle icon aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
</Preview>

## Installation

Lives in `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/basic.ts [Angular]
:::

`pressed` is the state; `change` bubbles from the host with `detail.pressed`. Icon-only toggles need `aria-label`. Use `art-toggle-group` for a set of related toggles.

## Examples

### Basic

<Preview frame="inline">
  <art-toggle icon aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/basic.ts [Angular]
:::

### Outline

<Preview frame="inline">
  <art-toggle variant="outline" icon aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/outline.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/outline.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/outline.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/outline.ts [Angular]
:::

### With text

<Preview frame="inline">
  <art-toggle><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon>Italic</art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/with-text.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/with-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/with-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/with-text.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-toggle size="sm" icon aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
  <art-toggle icon aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
  <art-toggle size="lg" icon aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/sizes.ts [Angular]
:::

### Pressed

<Preview frame="inline">
  <art-toggle pressed><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon>Bold</art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/pressed.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/pressed.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/pressed.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/pressed.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-toggle disabled><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon>Bold</art-toggle>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-toggle" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus |
| `Space / Enter` | Toggle |

Native `<button>` with `aria-pressed`; icon-only toggles are named by `aria-label` (forwarded across the shadow boundary). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

States: hover, active (press), focus-visible and disabled are implemented; `invalid` and `loading` are not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`` | sizes |
| ``--art-color-bg-accent`, `--art-color-bg-muted`, `--art-color-fg-muted`` | pressed and hover fills |
| ``--art-color-border-default`, `--art-shadow-raised`` | outline variant |
| ``--art-radius-md`` | shape |
| ``--art-ring-*`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Use for formatting-style on/off tools | Use for settings that persist (use Switch) |
| Keep the icon and label stable across states | Swap the label between "On" and "Off" |

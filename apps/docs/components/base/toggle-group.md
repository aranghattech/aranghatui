# Toggle Group

A set of two-state buttons that can be toggled on or off. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-toggle-group type="multiple" value="bold" aria-label="Text formatting">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
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
<<< ../../../sandbox/html/src/samples/toggle-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/basic.ts [Angular]
:::

Items are `<art-toggle value="…">`; the group owns `value` (string for `single`, array — comma-separated as an attribute — for `multiple`) and emits one `change`. `variant`, `size` and `disabled` on the group apply to every item.

## Examples

### Basic

<Preview frame="inline">
  <art-toggle-group type="multiple" value="bold" aria-label="Text formatting">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/basic.ts [Angular]
:::

### Single

`type="single"` keeps at most one item pressed; pressing it again clears the value.

<Preview frame="inline">
  <art-toggle-group type="single" value="italic" aria-label="Text formatting">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle-group/single.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/single.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/single.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/single.ts [Angular]
:::

### Outline

<Preview frame="inline">
  <art-toggle-group variant="outline" type="multiple" value="bold,italic" aria-label="Text formatting">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle-group/outline.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/outline.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/outline.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/outline.ts [Angular]
:::

### Sizes

<Preview frame="inline">
  <art-toggle-group size="sm" value="bold" aria-label="Small">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
  <art-toggle-group value="bold" aria-label="Medium">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
  <art-toggle-group size="lg" value="bold" aria-label="Large">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle-group/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/sizes.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-toggle-group disabled value="bold" aria-label="Text formatting">
    <art-toggle value="bold" aria-label="Toggle bold"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></art-icon></art-toggle>
    <art-toggle value="italic" aria-label="Toggle italic"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></art-icon></art-toggle>
    <art-toggle value="underline" aria-label="Toggle underline"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></art-icon></art-toggle>
  </art-toggle-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toggle-group/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/toggle-group/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/toggle-group/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toggle-group/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-toggle-group" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the group (one tab stop) |
| `Arrow Left / Right` | Move between items (swapped in RTL) |
| `Home / End` | First / last item |
| `Space / Enter` | Toggle the focused item |

`role="group"` on the host (`aria-label` goes there); each item is a button with `aria-pressed` and its own `aria-label` when icon-only. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).

States: Item states as Toggle; `disabled` on the group disables every item. `invalid` and `loading` are not applicable.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-radius-md`` | outer corners (items join their edges) |
| ``--art-shadow-raised`, `--art-color-border-default`` | outline variant |
| `Toggle tokens` | items |

## Do / Don't

| Do | Don't |
|---|---|
| Use `single` for one-of choices like alignment | Use it for navigation (use Tabs) |
| Give every icon-only item an `aria-label` | Rely on tooltips for the name |

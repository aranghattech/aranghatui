# Button Group

A container that groups related buttons together with consistent styling. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-button-group>
    <art-button variant="outline">Archive</art-button>
    <art-button variant="outline">Report</art-button>
    <art-button variant="outline">Snooze</art-button>
  </art-button-group>
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
<<< ../../../sandbox/html/src/samples/button-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/basic.ts [Angular]
:::

Put buttons (any variant), inputs, native selects, `art-button-group-text` labels or vertical separators inside; nest groups to space clusters. `orientation="vertical"` stacks them.

## Examples

### Basic

Neighbours share one border and only the outer corners stay rounded. Works with every button variant.

<Preview frame="inline">
  <art-button-group>
    <art-button variant="outline">Archive</art-button>
    <art-button variant="outline">Report</art-button>
    <art-button variant="outline">Snooze</art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/basic.ts [Angular]
:::

### Vertical

<Preview frame="inline">
  <art-button-group orientation="vertical">
    <art-button variant="outline">Top</art-button>
    <art-button variant="outline">Middle</art-button>
    <art-button variant="outline">Bottom</art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/vertical.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/vertical.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/vertical.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/vertical.ts [Angular]
:::

### Sizes

The group has no size of its own — size the buttons.

<Preview frame="inline">
  <art-button-group>
    <art-button variant="outline" size="sm">Small</art-button>
    <art-button variant="outline" size="sm">Small</art-button>
  </art-button-group>
  <art-button-group>
    <art-button variant="outline" size="lg">Large</art-button>
    <art-button variant="outline" size="lg">Large</art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/sizes.ts [Angular]
:::

### Nested

A group of groups is spaced instead of joined; each inner group keeps its own corners.

<Preview frame="inline">
  <art-button-group>
    <art-button-group>
      <art-button variant="outline">1</art-button>
      <art-button variant="outline">2</art-button>
      <art-button variant="outline">3</art-button>
    </art-button-group>
    <art-button-group>
      <art-button variant="outline">Next</art-button>
    </art-button-group>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/nested.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/nested.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/nested.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/nested.ts [Angular]
:::

### With separator

Filled variants have no border, so a vertical `art-separator` draws the split.

<Preview frame="inline">
  <art-button-group>
    <art-button variant="secondary">Copy</art-button>
    <art-separator orientation="vertical"></art-separator>
    <art-button variant="secondary">Paste</art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/with-separator.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/with-separator.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/with-separator.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/with-separator.ts [Angular]
:::

### Split button

<Preview frame="inline">
  <art-button-group>
    <art-button>Update</art-button>
    <art-button icon aria-label="More options">
      <art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></art-icon>
    </art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/split.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/split.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/split.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/split.ts [Angular]
:::

### With input

Inputs and native selects join the group the same way; the input grows to fill the row.

<Preview frame="inline">
  <art-button-group>
    <art-input placeholder="Search…" aria-label="Search"></art-input>
    <art-button variant="outline">Search</art-button>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/with-input.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/with-input.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/with-input.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/with-input.ts [Angular]
:::

### With text

`art-button-group-text` is a muted, bordered label that stretches to the height of its neighbours.

<Preview frame="inline">
  <art-button-group>
    <art-button-group-text>$</art-button-group-text>
    <art-input placeholder="0.00" aria-label="Amount"></art-input>
    <art-button-group-text>USD</art-button-group-text>
  </art-button-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/button-group/with-text.html [HTML]
<<< ../../../sandbox/react/src/samples/button-group/with-text.tsx [React]
<<< ../../../sandbox/vue/src/samples/button-group/with-text.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/button-group/with-text.ts [Angular]
:::

## API Reference

<ApiReference tag="art-button-group" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Moves through the buttons in order — every button stays its own tab stop |
| `Enter / Space` | Activate the focused button (native) |

`role="group"` on the host; children keep their native semantics. Name the group with `aria-label` when its purpose is not obvious from the buttons. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/).

States: The group itself has no states; `focus-visible` is shown because a focused item is lifted above its neighbours so the ring is never clipped. Other states belong to the buttons.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-border-width`` | border overlap between neighbours |
| ``--art-radius-md`` | outer corners |
| ``--art-space-2`` | gap between nested groups |
| ``--art-color-bg-muted`, `--art-color-border-default`, `--art-control-padding-x-md`, `--art-font-size-sm`, `--art-font-weight-medium`` | `art-button-group-text` |

## Do / Don't

| Do | Don't |
|---|---|
| Group actions that belong together (Archive · Report · Snooze) | Group unrelated actions to save space |
| Use one variant across a group | Mix filled and outline buttons in one group |
| Use Toggle Group for exclusive on/off choices | Fake a toggle group with buttons |

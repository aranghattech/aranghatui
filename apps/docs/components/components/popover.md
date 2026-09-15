# Popover

Displays rich content in a portal, triggered by a button. shadcn/ui parity, on the platform top layer.

## Preview

<Preview frame="inline">
  <art-popover>
    <art-button slot="trigger" variant="outline">Open popover</art-button>
    <h4>Dimensions</h4>
    <p class="muted">Set the dimensions for the layer.</p>
    <art-field>
      <art-label slot="label">Width</art-label>
      <art-input value="100%" size="sm"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Height</art-label>
      <art-input value="25px" size="sm"></art-input>
    </art-field>
  </art-popover>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/popover/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/popover/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/popover/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/popover/basic.ts [Angular]
:::

Slot the trigger as `trigger`; everything else is the content. `open` reflects the state; `open-change` fires on user interaction. React `onOpenChange`, Vue `v-model:open`, Angular `[open]` / `(openChange)`.

## Examples

### Basic

Click the trigger to open; Escape, a click outside or focus leaving closes it. Focus moves into the panel and back to the trigger.

<Preview frame="inline">
  <art-popover>
    <art-button slot="trigger" variant="outline">Open popover</art-button>
    <h4>Dimensions</h4>
    <p class="muted">Set the dimensions for the layer.</p>
    <art-field>
      <art-label slot="label">Width</art-label>
      <art-input value="100%" size="sm"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Height</art-label>
      <art-input value="25px" size="sm"></art-input>
    </art-field>
  </art-popover>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/popover/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/popover/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/popover/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/popover/basic.ts [Angular]
:::

### Open

Controlled with the `open` attribute; `open-change` reports user interaction.

<Preview frame="inline">
  <art-popover open>
    <art-button slot="trigger" variant="outline">Open popover</art-button>
    <h4>Dimensions</h4>
    <p class="muted">Set the dimensions for the layer.</p>
    <art-field>
      <art-label slot="label">Width</art-label>
      <art-input value="100%" size="sm"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Height</art-label>
      <art-input value="25px" size="sm"></art-input>
    </art-field>
  </art-popover>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/popover/open.html [HTML]
<<< ../../../sandbox/react/src/samples/popover/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/popover/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/popover/open.ts [Angular]
:::

### Placements

`placement` is the preferred side (`top`, `right`, `bottom`, `left`, with `-start` / `-end` alignments); the panel flips when there is no room.

<Preview frame="inline">
  <art-popover placement="top">
    <art-button slot="trigger" variant="outline">Top</art-button>
    <p>Popover on top</p>
  </art-popover>
  <art-popover placement="right">
    <art-button slot="trigger" variant="outline">Right</art-button>
    <p>Popover on the right</p>
  </art-popover>
  <art-popover placement="bottom">
    <art-button slot="trigger" variant="outline">Bottom</art-button>
    <p>Popover on bottom</p>
  </art-popover>
  <art-popover placement="left">
    <art-button slot="trigger" variant="outline">Left</art-button>
    <p>Popover on the left</p>
  </art-popover>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/popover/placements.html [HTML]
<<< ../../../sandbox/react/src/samples/popover/placements.tsx [React]
<<< ../../../sandbox/vue/src/samples/popover/placements.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/popover/placements.ts [Angular]
:::

## API Reference

<ApiReference tag="art-popover" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space on the trigger` | Toggle |
| `Tab` | Move through the content; leaving it closes the popover |
| `Escape` | Close and return focus to the trigger |

The panel is a non-modal `role="dialog"` that receives focus on open; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

States: Open / closed with enter and exit motion. No hover, active, disabled, loading or invalid state of its own.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-popover`, `--art-color-fg-default`` | panel |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-popover`` | frame |
| ``--art-space-4`, `--art-space-72`` | padding and width |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-space-2`` | enter / exit motion and slide |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for a small form or details tied to one control | Use it for a whole page of content (use a Sheet) |
| Keep one popover open at a time | Nest popovers three deep |

# Sheet

Extends Dialog to display content that complements the main content of the screen: a panel sliding in from an edge over a scrim. shadcn/ui parity, on the native `<dialog>`.

## Preview

<Preview frame="inline">
  <art-sheet side="right">
    <art-button slot="trigger" variant="outline">Open</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
</Preview>

## Installation

Lives in `@aranghat/modals` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/modals-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/sheet/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/sheet/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/sheet/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sheet/basic.ts [Angular]
:::

Put a button in `trigger`, text in `title` / `description`, content in the default slot (it scrolls) and buttons in `footer` (`dialog-close` closes). `side` picks the edge. Control it with `open` / `open-change`: React `<Sheet open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.

## Examples

### Basic

Slides in from the end by default. Same slots and behaviour as Dialog: `trigger`, `title`, `description`, the body, `footer` with `dialog-close` buttons; Escape, the backdrop and the close button dismiss it.

<Preview frame="inline">
  <art-sheet side="right">
    <art-button slot="trigger" variant="outline">Open</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sheet/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/sheet/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/sheet/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sheet/basic.ts [Angular]
:::

### Sides

`side` is `top`, `right`, `bottom` or `left`; `left` / `right` follow the writing direction.

<Preview frame="inline">
  <art-sheet side="top">
    <art-button slot="trigger" variant="outline">Top</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
  <art-sheet side="right">
    <art-button slot="trigger" variant="outline">Right</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
  <art-sheet side="bottom">
    <art-button slot="trigger" variant="outline">Bottom</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
  <art-sheet side="left">
    <art-button slot="trigger" variant="outline">Left</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sheet/sides.html [HTML]
<<< ../../../sandbox/react/src/samples/sheet/sides.tsx [React]
<<< ../../../sandbox/vue/src/samples/sheet/sides.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sheet/sides.ts [Angular]
:::

### Without close button

`hide-close` removes the corner button; the footer closes.

<Preview frame="inline">
  <art-sheet side="right" hide-close>
    <art-button slot="trigger" variant="outline">Filters</art-button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Pedro Duarte"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Username</art-label>
      <art-input value="@peduarte"></art-input>
    </art-field>
    <art-button slot="footer">Save changes</art-button>
    <art-button slot="footer" variant="outline" dialog-close>Close</art-button>
  </art-sheet>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sheet/hide-close.html [HTML]
<<< ../../../sandbox/react/src/samples/sheet/hide-close.tsx [React]
<<< ../../../sandbox/vue/src/samples/sheet/hide-close.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sheet/hide-close.ts [Angular]
:::

## API Reference

<ApiReference tag="art-sheet" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space on the trigger` | Open |
| `Tab / Shift + Tab` | Cycle through the sheet only (the page is inert) |
| `Escape` | Close and return focus to the trigger |

A native `<dialog>` shown with `showModal()` (`aria-modal`, page inert), `aria-labelledby` the title, `aria-describedby` the description; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Focus moves inside and returns to the trigger on close. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

States: Open / closed with a slide from the edge and a scrim fade (the same motion as the Sidebar off-canvas mode), four sides, RTL mirrored. Interactive states belong to the controls inside.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-sm`, `--art-space-4`` | panel width, padding |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`` | panel |
| ``--art-color-bg-overlay`` | scrim |
| ``--art-font-size-md`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`` | title, description |
| ``--art-radius-xs`, `--art-color-bg-accent`, `--art-ring-width`, `--art-color-ring`` | close button |
| ``--art-duration-slow`, `--art-duration-base`, `--art-ease-out`` | slide and scrim motion |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for filters, settings and secondary forms | Put the primary task of a page in a sheet |
| Keep the footer actions at the end | Bury the save button in scrolling content |
| Pick the edge that matches the trigger | Slide from the top for a side navigation |

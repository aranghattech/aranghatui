# Dialog

A modal window over the page, on the native `<dialog>`: content, a title, a description and actions, dismissed by Escape, the backdrop or a close button. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-dialog>
    <art-button slot="trigger" variant="outline">Edit profile</art-button>
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
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
    <art-button slot="footer">Save changes</art-button>
  </art-dialog>
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
<<< ../../../sandbox/html/src/samples/dialog/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/dialog/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/dialog/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dialog/basic.ts [Angular]
:::

Put a button in the `trigger` slot, text in `title` / `description`, the form in the default slot and buttons in `footer` (`dialog-close` on any of them closes). Control it with `open` and listen to `open-change`: React `<Dialog open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.

## Examples

### Basic

The `trigger` opens it; `title` and `description` name and describe it; fields go in the default slot; `footer` holds the actions. Any slotted element with `dialog-close` closes the dialog — so does Escape, the close button or a click on the backdrop.

<Preview frame="inline">
  <art-dialog>
    <art-button slot="trigger" variant="outline">Edit profile</art-button>
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
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
    <art-button slot="footer">Save changes</art-button>
  </art-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dialog/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/dialog/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/dialog/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dialog/basic.ts [Angular]
:::

### Footer actions

A single footer button with `dialog-close` is the shadcn "custom close button" pattern.

<Preview frame="inline">
  <art-dialog>
    <art-button slot="trigger" variant="outline">Share</art-button>
    <span slot="title">Share link</span>
    <span slot="description">Anyone who has this link will be able to view this.</span>
    <art-field>
      <art-label slot="label">Link</art-label>
      <art-input value="https://ui.shadcn.com/docs/installation" readonly></art-input>
    </art-field>
    <art-button slot="footer" variant="secondary" dialog-close>Close</art-button>
  </art-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dialog/share.html [HTML]
<<< ../../../sandbox/react/src/samples/dialog/share.tsx [React]
<<< ../../../sandbox/vue/src/samples/dialog/share.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dialog/share.ts [Angular]
:::

### Without close button

`hide-close` removes the corner button; the footer decides.

<Preview frame="inline">
  <art-dialog hide-close>
    <art-button slot="trigger" variant="outline">Terms</art-button>
    <span slot="title">Terms of service</span>
    <span slot="description">Read the terms before you continue.</span>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">By continuing you agree to the terms of service and the privacy policy.</p>
    <art-button slot="footer" variant="outline" dialog-close>Decline</art-button>
    <art-button slot="footer" dialog-close>Accept</art-button>
  </art-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dialog/hide-close.html [HTML]
<<< ../../../sandbox/react/src/samples/dialog/hide-close.tsx [React]
<<< ../../../sandbox/vue/src/samples/dialog/hide-close.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dialog/hide-close.ts [Angular]
:::

### Scrollable content

Long content scrolls inside the panel, which never grows past the viewport.

<Preview frame="inline">
  <art-dialog>
    <art-button slot="trigger" variant="outline">Read more</art-button>
    <span slot="title">Terms of service</span>
    <span slot="description">Scroll inside the dialog to read everything.</span>
    <p style="margin: 0">Section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <p style="margin: 0">Section 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    <art-button slot="footer" dialog-close>Done</art-button>
  </art-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dialog/scrollable.html [HTML]
<<< ../../../sandbox/react/src/samples/dialog/scrollable.tsx [React]
<<< ../../../sandbox/vue/src/samples/dialog/scrollable.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dialog/scrollable.ts [Angular]
:::

## API Reference

<ApiReference tag="art-dialog" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space on the trigger` | Open |
| `Tab / Shift + Tab` | Cycle through the dialog only (the page is inert) |
| `Escape` | Close and return focus to the trigger |

A native `<dialog>` shown with `showModal()`: `aria-modal`, the rest of the page inert, `aria-labelledby` the title (or `label`), `aria-describedby` the description; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Focus moves to the first field and returns to the trigger on close. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

States: Open / closed with enter and exit motion (fade + zoom, scrim fade). `hover`, `focus-visible`, `active`, `disabled` and `loading` belong to the buttons inside; `invalid` to the fields.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-lg`, `--art-space-4`, `--art-space-6`` | panel width, margins, padding |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`` | panel |
| ``--art-color-bg-overlay`` | scrim |
| ``--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`` | title, description |
| ``--art-radius-xs`, `--art-color-bg-accent`, `--art-ring-width`, `--art-color-ring`` | close button |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`` | enter / exit motion |

## Do / Don't

| Do | Don't |
|---|---|
| Always give it a title | Rely on the body text to explain the dialog |
| Keep one task per dialog | Nest dialogs or tabs inside a dialog |
| Use Alert Dialog for destructive confirmations | Ask "are you sure?" in a dismissable dialog |

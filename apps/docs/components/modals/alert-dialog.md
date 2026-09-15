# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response. shadcn/ui parity, on the native `<dialog>` with `role="alertdialog"`.

## Preview

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Show dialog</art-button>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action">Continue</art-button>
  </art-alert-dialog>
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
<<< ../../../sandbox/html/src/samples/alert-dialog/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/alert-dialog/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert-dialog/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert-dialog/basic.ts [Angular]
:::

Slot a `trigger`, `title`, `description`, optional `media`, and two buttons: `cancel` (closes) and `action` (emits `action`, then closes unless you `preventDefault()`). Control it with `open` / `open-change`: React `<AlertDialog open onOpenChange onAction>`, Vue `v-model:open @action`, Angular `[open] (openChange) (action)`.

## Examples

### Basic

A question with a `cancel` and an `action` button. The backdrop does not dismiss it and there is no close button; Escape cancels. Focus starts on Cancel. `action` (cancelable) fires before it closes.

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Show dialog</art-button>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action">Continue</art-button>
  </art-alert-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert-dialog/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/alert-dialog/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert-dialog/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert-dialog/basic.ts [Angular]
:::

### Small

`size="sm"` narrows the panel for a short question.

<Preview frame="inline">
  <art-alert-dialog size="sm">
    <art-button slot="trigger" variant="outline">Show dialog</art-button>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action">Continue</art-button>
  </art-alert-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert-dialog/small.html [HTML]
<<< ../../../sandbox/react/src/samples/alert-dialog/small.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert-dialog/small.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert-dialog/small.ts [Angular]
:::

### With media

An icon (or image) in the `media` slot sits before the title.

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Show dialog</art-button>
    <svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action">Continue</art-button>
  </art-alert-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert-dialog/media.html [HTML]
<<< ../../../sandbox/react/src/samples/alert-dialog/media.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert-dialog/media.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert-dialog/media.ts [Angular]
:::

### Destructive

Make the action button `destructive` when it deletes something.

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Show dialog</art-button>
    <svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action" variant="destructive">Delete</art-button>
  </art-alert-dialog>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/alert-dialog/destructive.html [HTML]
<<< ../../../sandbox/react/src/samples/alert-dialog/destructive.tsx [React]
<<< ../../../sandbox/vue/src/samples/alert-dialog/destructive.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/alert-dialog/destructive.ts [Angular]
:::

## API Reference

<ApiReference tag="art-alert-dialog" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space on the trigger` | Open (focus lands on Cancel) |
| `Tab / Shift + Tab` | Move between Cancel and the action (the page is inert) |
| `Escape` | Cancel and return focus to the trigger |

A native `<dialog role="alertdialog">` shown with `showModal()`, `aria-labelledby` the title and `aria-describedby` the description; no close button and no backdrop dismissal, so the user has to choose. The trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/).

States: Open / closed with enter and exit motion; `sm` / `md` sizes. `hover`, `focus-visible`, `active`, `disabled` and `loading` belong to the two buttons; `invalid` does not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-lg`, `--art-container-sm`, `--art-space-4`, `--art-space-6`` | panel widths, margins, padding |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`` | panel |
| ``--art-color-bg-overlay`` | scrim |
| ``--art-color-bg-muted`, `--art-space-10`, `--art-radius-md`, `--art-size-icon-lg`` | media tile |
| ``--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`` | title, description |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`` | enter / exit motion |

## Do / Don't

| Do | Don't |
|---|---|
| Name the consequence in the description | Write "Are you sure?" with no context |
| Label the action with the verb ("Delete") | Label it "OK" or "Yes" |
| Use it for irreversible actions only | Confirm every routine save |

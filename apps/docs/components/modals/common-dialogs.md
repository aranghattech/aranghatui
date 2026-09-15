<!-- hand-written -->
# Common Dialogs

`confirm()`, `alert()` and `prompt()` — the browser's three questions, on the design system's dialogs, returning promises. An imperative API from `@aranghat/modals`, not an element.

## Preview

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Delete account</art-button>
    <span slot="title">Delete account?</span>
    <span slot="description">This permanently removes your account and all of its data.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action" variant="destructive">Delete</art-button>
  </art-alert-dialog>
</Preview>

## Installation

Lives in `@aranghat/modals` (requires `@aranghat/base` for the buttons and the prompt field). There is no element to place: each call mounts an `art-alert-dialog` or `art-dialog` at the end of `<body>`, opens it, and removes it after it closes.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/modals @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/common-dialogs/confirm.html [HTML]
<<< ../../../sandbox/react/src/samples/common-dialogs/confirm.tsx [React]
<<< ../../../sandbox/vue/src/samples/common-dialogs/confirm.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/common-dialogs/confirm.ts [Angular]
:::

`import { confirm, alert, prompt } from '@aranghat/modals'`. Each function takes a title string or an options object and resolves when the dialog closes: `confirm` with `true` / `false`, `alert` with nothing, `prompt` with the text or `null`. The dialogs register themselves on first use, so nothing else has to be imported. Only one call at a time is meaningful — a second dialog would open over the first.

## Examples

### Confirm

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Delete account</art-button>
    <span slot="title">Delete account?</span>
    <span slot="description">This permanently removes your account and all of its data.</span>
    <art-button slot="cancel" variant="outline">Cancel</art-button>
    <art-button slot="action" variant="destructive">Delete</art-button>
  </art-alert-dialog>
</Preview>

`confirm({ title, description, actionLabel, cancelLabel, destructive, size })` resolves `true` for the action and `false` for cancel or Escape. The preview is the Alert Dialog the call shows.

::: code-group
<<< ../../../sandbox/html/src/samples/common-dialogs/confirm.html [HTML]
<<< ../../../sandbox/react/src/samples/common-dialogs/confirm.tsx [React]
<<< ../../../sandbox/vue/src/samples/common-dialogs/confirm.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/common-dialogs/confirm.ts [Angular]
:::

### Alert

<Preview frame="inline">
  <art-alert-dialog>
    <art-button slot="trigger" variant="outline">Show alert</art-button>
    <span slot="title">Export finished</span>
    <span slot="description">Your report is ready to download.</span>
    <art-button slot="action">OK</art-button>
  </art-alert-dialog>
</Preview>

`alert({ title, description, actionLabel })` shows one button and resolves when the dialog closes.

::: code-group
<<< ../../../sandbox/html/src/samples/common-dialogs/alert.html [HTML]
<<< ../../../sandbox/react/src/samples/common-dialogs/alert.tsx [React]
<<< ../../../sandbox/vue/src/samples/common-dialogs/alert.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/common-dialogs/alert.ts [Angular]
:::

### Prompt

<Preview frame="inline">
  <art-dialog>
    <art-button slot="trigger" variant="outline">Rename</art-button>
    <span slot="title">Rename project</span>
    <span slot="description">Pick a short, memorable name.</span>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input value="Design system"></art-input>
    </art-field>
    <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>
    <art-button slot="footer">OK</art-button>
  </art-dialog>
</Preview>

`prompt({ title, description, label, defaultValue, placeholder, type, required })` resolves the text for OK or Enter and `null` for cancel or Escape; with `required` an empty field keeps the dialog open and marks the field invalid.

::: code-group
<<< ../../../sandbox/html/src/samples/common-dialogs/prompt.html [HTML]
<<< ../../../sandbox/react/src/samples/common-dialogs/prompt.tsx [React]
<<< ../../../sandbox/vue/src/samples/common-dialogs/prompt.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/common-dialogs/prompt.ts [Angular]
:::

## API Reference

`import { confirm, alert, prompt } from '@aranghat/modals'`

| Function | Resolves | Options (a plain string is the `title`) |
|---|---|---|
| `confirm(options)` | `Promise<boolean>` — `true` for the action, `false` for cancel / Escape | `title`, `description`, `actionLabel` (`'Continue'`), `cancelLabel` (`'Cancel'`), `destructive`, `size` (`'sm' \| 'md'`) |
| `alert(options)` | `Promise<void>` when the dialog closes | `title`, `description`, `actionLabel` (`'OK'`), `size` |
| `prompt(options)` | `Promise<string \| null>` — the text for OK / Enter, `null` for cancel / Escape | the `confirm` options plus `label` (defaults to the title), `defaultValue`, `placeholder`, `type` (`'text'`), `required` |

`confirm` and `alert` build an [Alert Dialog](./alert-dialog); `prompt` builds a [Dialog](./dialog) with an `art-field` + `art-input`. The element carries `data-art-common-dialog` while it is mounted and is removed after the exit motion.

## Accessibility

| Key | Action |
|---|---|
| `Tab / Shift + Tab` | Move between the buttons (and the field); the page behind is inert |
| `Enter` | In the prompt field: submit (OK) |
| `Escape` | Cancel: `confirm` → `false`, `prompt` → `null`, `alert` → resolves |

Everything the underlying dialogs provide: `role="alertdialog"` / native `<dialog>` with `showModal()`, `aria-labelledby` the title and `aria-describedby` the description, focus on Cancel (or the field) when it opens and back where it was when it closes, a scrim, no dismissal by clicking outside an alert dialog. Give every call a clear title and a description that states the consequence — the browser's `confirm()` never did.

States: the dialogs' own — open / closed with motion, `destructive` action, `required` field invalid until filled.

## Tokens used

| Token | Used for |
|---|---|
| (none) | the API adds no styling; `art-alert-dialog`, `art-dialog`, `art-button`, `art-field` and `art-input` bring their own |

## Do / Don't

| Do | Don't |
|---|---|
| Use `confirm` for irreversible actions with a verb as the action label | Confirm routine saves |
| Use `alert` for outcomes the user must see before continuing | Replace toasts with alerts |
| Use `prompt` for one short value | Build a form out of chained prompts |

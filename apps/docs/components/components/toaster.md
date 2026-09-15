# Toast

An opinionated toast component. shadcn/ui (Sonner) parity: one toaster region, an imperative `toast()` API, variants, actions and promises.

## Preview

<Preview frame="stack">
  <art-toaster inline>
    <art-toast duration="0">Event has been created<span slot="description">Sunday, December 03, 2023 at 9:00 AM</span></art-toast>
  </art-toaster>
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
<<< ../../../sandbox/html/src/samples/toaster/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/basic.ts [Angular]
:::

Mount `<art-toaster>` once (React `<Toaster />`, Vue `<Toaster />`, Angular `<art-toaster>`), then `import { toast } from "@aranghat/components"` and call `toast("Saved")`, `toast.success(…)`, `toast.error(…)`, `toast.promise(…)`, `toast.dismiss(id)`. Options: `description`, `duration`, `action` / `cancel` (`{ label, onClick }`), `closeButton`. `art-toast` also works declaratively inside the toaster.

## Examples

### Basic

One `art-toaster` per page, in a fixed corner (`position`), then `toast("Event has been created")` from anywhere — `import { toast } from "@aranghat/components"`. Toasts auto-dismiss after `duration` (4 s), pausing while hovered or focused. The preview uses `inline` and a declarative toast; the framework tabs show the imperative call.

<Preview frame="stack">
  <art-toaster inline>
    <art-toast duration="0">Event has been created<span slot="description">Sunday, December 03, 2023 at 9:00 AM</span></art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/basic.ts [Angular]
:::

### Variants

`toast.success()`, `.error()`, `.warning()`, `.info()` and `.loading()` set the variant and its icon; loading toasts stay until updated or dismissed.

<Preview frame="stack">
  <art-toaster inline>
    <art-toast duration="0">Default</art-toast>
    <art-toast variant="success" duration="0">Success</art-toast>
    <art-toast variant="error" duration="0">Error</art-toast>
    <art-toast variant="warning" duration="0">Warning</art-toast>
    <art-toast variant="info" duration="0">Info</art-toast>
    <art-toast variant="loading" duration="0">Loading…</art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/variants.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/variants.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/variants.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/variants.ts [Angular]
:::

### Rich colors

`rich-colors` on the toaster tints the whole card with the status colour.

<Preview frame="stack">
  <art-toaster inline rich-colors>
    <art-toast variant="success" duration="0">Success</art-toast>
    <art-toast variant="error" duration="0">Error</art-toast>
    <art-toast variant="warning" duration="0">Warning</art-toast>
    <art-toast variant="info" duration="0">Info</art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/rich-colors.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/rich-colors.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/rich-colors.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/rich-colors.ts [Angular]
:::

### With action

`action` / `cancel` (imperative: `{ label, onClick }`) render buttons; pressing one dismisses the toast and emits `action` / `cancel`. Declaratively, put buttons in the `action` slot.

<Preview frame="stack">
  <art-toaster inline>
    <art-toast duration="0" action-label="Undo" cancel-label="Dismiss">Message deleted<span slot="description">The message was moved to Trash.</span></art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/with-action.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/with-action.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/with-action.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/with-action.ts [Angular]
:::

### Close button

`close-button` adds an explicit close; Escape is not captured (toasts are non-modal).

<Preview frame="stack">
  <art-toaster inline close-button>
    <art-toast duration="0">Copied to clipboard</art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/close-button.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/close-button.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/close-button.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/close-button.ts [Angular]
:::

### Promise

`toast.promise(promise, { loading, success, error })` shows a loading toast that turns into success or error when the promise settles.

<Preview frame="stack">
  <art-toaster inline>
    <art-toast variant="loading" duration="0">Saving…</art-toast>
  </art-toaster>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/toaster/promise.html [HTML]
<<< ../../../sandbox/react/src/samples/toaster/promise.tsx [React]
<<< ../../../sandbox/vue/src/samples/toaster/promise.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/toaster/promise.ts [Angular]
:::

## API Reference

<ApiReference tag="art-toaster" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Reach the action, cancel and close buttons; a focused toast pauses its timer |
| `Enter / Space` | Activate a button (the toast dismisses) |

The toaster is a `role="region"` named "Notifications"; each toast is `role="status"` (`aria-live="polite"`), or `role="alert"` (assertive) for `error` and `warning`, with `aria-atomic`. The region is on the platform top layer so it stays above dialogs; nothing traps focus. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/alert/).

States: `focus-visible` on the buttons; hover pauses the timer (no visual change, Sonner parity); open / closed with enter and exit motion. `active`, `disabled`, `loading` (a variant, not a state) and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-container-xs`, `--art-space-4`, `--art-space-2`, `--art-z-toast`` | region |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-radius-lg`, `--art-shadow-overlay`, `--art-space-4`, `--art-space-3`` | card |
| ``--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`` | title and description |
| ``--art-color-{success,destructive,warning,info}-{solid,muted,fg}`` | variant icons and rich colours |
| ``--art-space-5`, `--art-color-bg-canvas`, `--art-shadow-raised`` | close button |
| ``--art-animate-overlay-in/out`` | motion |

## Do / Don't

| Do | Don't |
|---|---|
| Keep toasts to one line plus a short description | Put forms or long text in a toast |
| Offer an undo action for destructive operations | Rely on a toast for critical errors (use a dialog) |
| Mount one toaster at the app root | One toaster per page section |

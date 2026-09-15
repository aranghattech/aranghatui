import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-toaster',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', manual: true, render: () => `<art-toaster inline>\n  <art-toast duration="0">Event has been created<span slot="description">Sunday, December 03, 2023 at 9:00 AM</span></art-toast>\n</art-toaster>`, note: 'One `art-toaster` per page, in a fixed corner (`position`), then `toast("Event has been created")` from anywhere — `import { toast } from "@aranghat/components"`. Toasts auto-dismiss after `duration` (4 s), pausing while hovered or focused. The preview uses `inline` and a declarative toast; the framework tabs show the imperative call.' },
    variants: { title: 'Variants', render: () => `<art-toaster inline>\n  <art-toast duration="0">Default</art-toast>\n  <art-toast variant="success" duration="0">Success</art-toast>\n  <art-toast variant="error" duration="0">Error</art-toast>\n  <art-toast variant="warning" duration="0">Warning</art-toast>\n  <art-toast variant="info" duration="0">Info</art-toast>\n  <art-toast variant="loading" duration="0">Loading…</art-toast>\n</art-toaster>`, note: '`toast.success()`, `.error()`, `.warning()`, `.info()` and `.loading()` set the variant and its icon; loading toasts stay until updated or dismissed.' },
    'rich-colors': { title: 'Rich colors', render: () => `<art-toaster inline rich-colors>\n  <art-toast variant="success" duration="0">Success</art-toast>\n  <art-toast variant="error" duration="0">Error</art-toast>\n  <art-toast variant="warning" duration="0">Warning</art-toast>\n  <art-toast variant="info" duration="0">Info</art-toast>\n</art-toaster>`, note: '`rich-colors` on the toaster tints the whole card with the status colour.' },
    'with-action': { title: 'With action', render: () => `<art-toaster inline>\n  <art-toast duration="0" action-label="Undo" cancel-label="Dismiss">Message deleted<span slot="description">The message was moved to Trash.</span></art-toast>\n</art-toaster>`, note: '`action` / `cancel` (imperative: `{ label, onClick }`) render buttons; pressing one dismisses the toast and emits `action` / `cancel`. Declaratively, put buttons in the `action` slot.' },
    'close-button': { title: 'Close button', render: () => `<art-toaster inline close-button>\n  <art-toast duration="0">Copied to clipboard</art-toast>\n</art-toaster>`, note: '`close-button` adds an explicit close; Escape is not captured (toasts are non-modal).' },
    promise: { title: 'Promise', manual: true, render: () => `<art-toaster inline>\n  <art-toast variant="loading" duration="0">Saving…</art-toast>\n</art-toaster>`, note: '`toast.promise(promise, { loading, success, error })` shows a loading toast that turns into success or error when the promise settles.' },
  },
  render: () => `<art-toaster inline>\n  <art-toast duration="0" close-button>Event has been created<span slot="description">Sunday, December 03, 2023 at 9:00 AM</span></art-toast>\n</art-toaster>`,
  focusTarget: 'art-toast [part="close"]',
  docs: {
    description: 'An opinionated toast component. shadcn/ui (Sonner) parity: one toaster region, an imperative `toast()` API, variants, actions and promises.',
    usage: 'Mount `<art-toaster>` once (React `<Toaster />`, Vue `<Toaster />`, Angular `<art-toaster>`), then `import { toast } from "@aranghat/components"` and call `toast("Saved")`, `toast.success(…)`, `toast.error(…)`, `toast.promise(…)`, `toast.dismiss(id)`. Options: `description`, `duration`, `action` / `cancel` (`{ label, onClick }`), `closeButton`. `art-toast` also works declaratively inside the toaster.',
    requires: ['base'],
    keyboard: [['Tab', 'Reach the action, cancel and close buttons; a focused toast pauses its timer'], ['Enter / Space', 'Activate a button (the toast dismisses)']],
    roles: 'The toaster is a `role="region"` named "Notifications"; each toast is `role="status"` (`aria-live="polite"`), or `role="alert"` (assertive) for `error` and `warning`, with `aria-atomic`. The region is on the platform top layer so it stays above dialogs; nothing traps focus.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    states: '`focus-visible` on the buttons; hover pauses the timer (no visual change, Sonner parity); open / closed with enter and exit motion. `active`, `disabled`, `loading` (a variant, not a state) and `invalid` do not apply.',
    tokens: [['`--art-container-xs`, `--art-space-4`, `--art-space-2`, `--art-z-toast`', 'region'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-radius-lg`, `--art-shadow-overlay`, `--art-space-4`, `--art-space-3`', 'card'], ['`--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`', 'title and description'], ['`--art-color-{success,destructive,warning,info}-{solid,muted,fg}`', 'variant icons and rich colours'], ['`--art-space-5`, `--art-color-bg-canvas`, `--art-shadow-raised`', 'close button'], ['`--art-animate-overlay-in/out`', 'motion']],
    dos: [['Keep toasts to one line plus a short description', 'Put forms or long text in a toast'], ['Offer an undo action for destructive operations', 'Rely on a toast for critical errors (use a dialog)'], ['Mount one toaster at the app root', 'One toaster per page section']],
  },
};

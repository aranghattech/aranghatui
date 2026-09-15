import type { ComponentStories } from '@artui/stories';

const trash = `<svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;
const body = (media = '', actionAttrs = '', actionText = 'Continue') => `  <art-button slot="trigger" variant="outline">Show dialog</art-button>\n${media ? `  ${media}\n` : ''}  <span slot="title">Are you absolutely sure?</span>\n  <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>\n  <art-button slot="cancel" variant="outline">Cancel</art-button>\n  <art-button slot="action"${actionAttrs}>${actionText}</art-button>`;

export const stories: ComponentStories = {
  tag: 'art-alert-dialog',
  tier: 'modals',
  variants: ['default'],
  sizes: ['sm', 'md'],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-alert-dialog>\n${body()}\n</art-alert-dialog>`, note: 'A question with a `cancel` and an `action` button. The backdrop does not dismiss it and there is no close button; Escape cancels. Focus starts on Cancel. `action` (cancelable) fires before it closes.' },
    small: { title: 'Small', render: () => `<art-alert-dialog size="sm">\n${body()}\n</art-alert-dialog>`, note: '`size="sm"` narrows the panel for a short question.' },
    media: { title: 'With media', render: () => `<art-alert-dialog>\n${body(trash)}\n</art-alert-dialog>`, note: 'An icon (or image) in the `media` slot sits before the title.' },
    destructive: { title: 'Destructive', render: () => `<art-alert-dialog>\n${body(trash, ' variant="destructive"', 'Delete')}\n</art-alert-dialog>`, note: 'Make the action button `destructive` when it deletes something.' },
  },
  render: ({ size }) => `<art-alert-dialog open${size === 'sm' ? ' size="sm"' : ''}>\n${body(trash)}\n</art-alert-dialog>`,
  docs: {
    description: 'A modal dialog that interrupts the user with important content and expects a response. shadcn/ui parity, on the native `<dialog>` with `role="alertdialog"`.',
    usage: 'Slot a `trigger`, `title`, `description`, optional `media`, and two buttons: `cancel` (closes) and `action` (emits `action`, then closes unless you `preventDefault()`). Control it with `open` / `open-change`: React `<AlertDialog open onOpenChange onAction>`, Vue `v-model:open @action`, Angular `[open] (openChange) (action)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the trigger', 'Open (focus lands on Cancel)'], ['Tab / Shift + Tab', 'Move between Cancel and the action (the page is inert)'], ['Escape', 'Cancel and return focus to the trigger']],
    roles: 'A native `<dialog role="alertdialog">` shown with `showModal()`, `aria-labelledby` the title and `aria-describedby` the description; no close button and no backdrop dismissal, so the user has to choose. The trigger carries `aria-haspopup="dialog"` and `aria-expanded`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/',
    states: 'Open / closed with enter and exit motion; `sm` / `md` sizes. `hover`, `focus-visible`, `active`, `disabled` and `loading` belong to the two buttons; `invalid` does not apply.',
    tokens: [['`--art-container-lg`, `--art-container-sm`, `--art-space-4`, `--art-space-6`', 'panel widths, margins, padding'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`', 'panel'], ['`--art-color-bg-overlay`', 'scrim'], ['`--art-color-bg-muted`, `--art-space-10`, `--art-radius-md`, `--art-size-icon-lg`', 'media tile'], ['`--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`', 'title, description'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`', 'enter / exit motion']],
    dos: [['Name the consequence in the description', 'Write "Are you sure?" with no context'], ['Label the action with the verb ("Delete")', 'Label it "OK" or "Yes"'], ['Use it for irreversible actions only', 'Confirm every routine save']],
  },
};

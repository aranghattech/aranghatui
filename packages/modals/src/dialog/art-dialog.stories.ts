import type { ComponentStories } from '@artui/stories';

const profile = `  <art-button slot="trigger" variant="outline">Edit profile</art-button>\n  <span slot="title">Edit profile</span>\n  <span slot="description">Make changes to your profile here. Click save when you're done.</span>\n  <art-field>\n    <art-label slot="label">Name</art-label>\n    <art-input value="Pedro Duarte"></art-input>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Username</art-label>\n    <art-input value="@peduarte"></art-input>\n  </art-field>\n  <art-button slot="footer" variant="outline" dialog-close>Cancel</art-button>\n  <art-button slot="footer">Save changes</art-button>`;
const paragraphs = Array.from({ length: 8 }, (_, i) => `  <p style="margin: 0">Section ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>`).join('\n');

export const stories: ComponentStories = {
  tag: 'art-dialog',
  tier: 'modals',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-dialog>\n${profile}\n</art-dialog>`, note: 'The `trigger` opens it; `title` and `description` name and describe it; fields go in the default slot; `footer` holds the actions. Any slotted element with `dialog-close` closes the dialog — so does Escape, the close button or a click on the backdrop.' },
    share: { title: 'Footer actions', render: () => `<art-dialog>\n  <art-button slot="trigger" variant="outline">Share</art-button>\n  <span slot="title">Share link</span>\n  <span slot="description">Anyone who has this link will be able to view this.</span>\n  <art-field>\n    <art-label slot="label">Link</art-label>\n    <art-input value="https://ui.shadcn.com/docs/installation" readonly></art-input>\n  </art-field>\n  <art-button slot="footer" variant="secondary" dialog-close>Close</art-button>\n</art-dialog>`, note: 'A single footer button with `dialog-close` is the shadcn "custom close button" pattern.' },
    'hide-close': { title: 'Without close button', render: () => `<art-dialog hide-close>\n  <art-button slot="trigger" variant="outline">Terms</art-button>\n  <span slot="title">Terms of service</span>\n  <span slot="description">Read the terms before you continue.</span>\n  <p style="margin: 0; font-size: var(--art-font-size-sm)">By continuing you agree to the terms of service and the privacy policy.</p>\n  <art-button slot="footer" variant="outline" dialog-close>Decline</art-button>\n  <art-button slot="footer" dialog-close>Accept</art-button>\n</art-dialog>`, note: '`hide-close` removes the corner button; the footer decides.' },
    scrollable: { title: 'Scrollable content', render: () => `<art-dialog>\n  <art-button slot="trigger" variant="outline">Read more</art-button>\n  <span slot="title">Terms of service</span>\n  <span slot="description">Scroll inside the dialog to read everything.</span>\n${paragraphs}\n  <art-button slot="footer" dialog-close>Done</art-button>\n</art-dialog>`, note: 'Long content scrolls inside the panel, which never grows past the viewport.' },
  },
  render: () => `<art-dialog open>\n${profile}\n</art-dialog>`,
  docs: {
    description: 'A modal window over the page, on the native `<dialog>`: content, a title, a description and actions, dismissed by Escape, the backdrop or a close button. shadcn/ui parity.',
    usage: 'Put a button in the `trigger` slot, text in `title` / `description`, the form in the default slot and buttons in `footer` (`dialog-close` on any of them closes). Control it with `open` and listen to `open-change`: React `<Dialog open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the trigger', 'Open'], ['Tab / Shift + Tab', 'Cycle through the dialog only (the page is inert)'], ['Escape', 'Close and return focus to the trigger']],
    roles: 'A native `<dialog>` shown with `showModal()`: `aria-modal`, the rest of the page inert, `aria-labelledby` the title (or `label`), `aria-describedby` the description; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Focus moves to the first field and returns to the trigger on close.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    states: 'Open / closed with enter and exit motion (fade + zoom, scrim fade). `hover`, `focus-visible`, `active`, `disabled` and `loading` belong to the buttons inside; `invalid` to the fields.',
    tokens: [['`--art-container-lg`, `--art-space-4`, `--art-space-6`', 'panel width, margins, padding'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-lg`', 'panel'], ['`--art-color-bg-overlay`', 'scrim'], ['`--art-font-size-lg`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`', 'title, description'], ['`--art-radius-xs`, `--art-color-bg-accent`, `--art-ring-width`, `--art-color-ring`', 'close button'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`', 'enter / exit motion']],
    dos: [['Always give it a title', 'Rely on the body text to explain the dialog'], ['Keep one task per dialog', 'Nest dialogs or tabs inside a dialog'], ['Use Alert Dialog for destructive confirmations', 'Ask "are you sure?" in a dismissable dialog']],
  },
};

import type { ComponentStories } from '@artui/stories';

const profile = (side = 'right', attrs = '', trigger = 'Open') => `<art-sheet side="${side}"${attrs}>\n  <art-button slot="trigger" variant="outline">${trigger}</art-button>\n  <span slot="title">Edit profile</span>\n  <span slot="description">Make changes to your profile here. Click save when you're done.</span>\n  <art-field>\n    <art-label slot="label">Name</art-label>\n    <art-input value="Pedro Duarte"></art-input>\n  </art-field>\n  <art-field>\n    <art-label slot="label">Username</art-label>\n    <art-input value="@peduarte"></art-input>\n  </art-field>\n  <art-button slot="footer">Save changes</art-button>\n  <art-button slot="footer" variant="outline" dialog-close>Close</art-button>\n</art-sheet>`;

export const stories: ComponentStories = {
  tag: 'art-sheet',
  tier: 'modals',
  variants: ['right', 'left', 'top', 'bottom'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => profile(), note: 'Slides in from the end by default. Same slots and behaviour as Dialog: `trigger`, `title`, `description`, the body, `footer` with `dialog-close` buttons; Escape, the backdrop and the close button dismiss it.' },
    sides: { title: 'Sides', render: () => ['top', 'right', 'bottom', 'left'].map((s) => profile(s, '', s[0]!.toUpperCase() + s.slice(1))).join('\n'), note: '`side` is `top`, `right`, `bottom` or `left`; `left` / `right` follow the writing direction.' },
    'hide-close': { title: 'Without close button', render: () => profile('right', ' hide-close', 'Filters'), note: '`hide-close` removes the corner button; the footer closes.' },
  },
  render: ({ variant }) => profile(variant, ' open'),
  docs: {
    description: 'Extends Dialog to display content that complements the main content of the screen: a panel sliding in from an edge over a scrim. shadcn/ui parity, on the native `<dialog>`.',
    usage: 'Put a button in `trigger`, text in `title` / `description`, content in the default slot (it scrolls) and buttons in `footer` (`dialog-close` closes). `side` picks the edge. Control it with `open` / `open-change`: React `<Sheet open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the trigger', 'Open'], ['Tab / Shift + Tab', 'Cycle through the sheet only (the page is inert)'], ['Escape', 'Close and return focus to the trigger']],
    roles: 'A native `<dialog>` shown with `showModal()` (`aria-modal`, page inert), `aria-labelledby` the title, `aria-describedby` the description; the trigger carries `aria-haspopup="dialog"` and `aria-expanded`. Focus moves inside and returns to the trigger on close.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    states: 'Open / closed with a slide from the edge and a scrim fade (the same motion as the Sidebar off-canvas mode), four sides, RTL mirrored. Interactive states belong to the controls inside.',
    tokens: [['`--art-container-sm`, `--art-space-4`', 'panel width, padding'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`', 'panel'], ['`--art-color-bg-overlay`', 'scrim'], ['`--art-font-size-md`, `--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`', 'title, description'], ['`--art-radius-xs`, `--art-color-bg-accent`, `--art-ring-width`, `--art-color-ring`', 'close button'], ['`--art-duration-slow`, `--art-duration-base`, `--art-ease-out`', 'slide and scrim motion']],
    dos: [['Use it for filters, settings and secondary forms', 'Put the primary task of a page in a sheet'], ['Keep the footer actions at the end', 'Bury the save button in scrolling content'], ['Pick the edge that matches the trigger', 'Slide from the top for a side navigation']],
  },
};

import type { ComponentStories } from '@artui/stories';

const bar = `  <art-menubar-menu label="File">\n    <art-menu-item value="new-tab">New tab<span slot="shortcut">⌘T</span></art-menu-item>\n    <art-menu-item value="new-window">New window<span slot="shortcut">⌘N</span></art-menu-item>\n    <art-menu-item value="incognito" disabled>New incognito window</art-menu-item>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-sub>\n      <art-menu-item slot="trigger">Share</art-menu-item>\n      <art-menu-item value="email">Email link</art-menu-item>\n      <art-menu-item value="messages">Messages</art-menu-item>\n    </art-menu-sub>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-item value="print">Print…<span slot="shortcut">⌘P</span></art-menu-item>\n  </art-menubar-menu>\n  <art-menubar-menu label="Edit">\n    <art-menu-item value="undo">Undo<span slot="shortcut">⌘Z</span></art-menu-item>\n    <art-menu-item value="redo">Redo<span slot="shortcut">⇧⌘Z</span></art-menu-item>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-item value="cut">Cut</art-menu-item>\n    <art-menu-item value="copy">Copy</art-menu-item>\n    <art-menu-item value="paste">Paste</art-menu-item>\n  </art-menubar-menu>\n  <art-menubar-menu label="View">\n    <art-menu-item type="checkbox" value="bookmarks">Always show bookmarks bar</art-menu-item>\n    <art-menu-item type="checkbox" value="urls" checked>Always show full URLs</art-menu-item>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-item value="reload" inset>Reload<span slot="shortcut">⌘R</span></art-menu-item>\n  </art-menubar-menu>\n  <art-menubar-menu label="Profiles">\n    <art-menu-radio-group value="benoit">\n      <art-menu-item type="radio" value="andy">Andy</art-menu-item>\n      <art-menu-item type="radio" value="benoit">Benoit</art-menu-item>\n      <art-menu-item type="radio" value="luis">Luis</art-menu-item>\n    </art-menu-radio-group>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-item value="edit" inset>Edit…</art-menu-item>\n  </art-menubar-menu>`;

export const stories: ComponentStories = {
  tag: 'art-menubar',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-menubar aria-label="Application">\n${bar}\n</art-menubar>`, note: 'Each `art-menubar-menu` has a `label` (its trigger) and the item family inside. One trigger is in the tab order; ← / → move between menus, ↓ or Enter opens, and while a menu is open pointing at another trigger switches to it.' },
    open: { title: 'Open', render: () => `<art-menubar aria-label="Application">\n${bar.replace('<art-menubar-menu label="Edit">', '<art-menubar-menu label="Edit" open>')}\n</art-menubar>`, note: 'Controlled with `open` on a menu; opening one closes the others.' },
  },
  render: () => `<art-menubar aria-label="Application">\n${bar}\n</art-menubar>`,
  focusTarget: 'art-menubar-menu [part="trigger"]',
  docs: {
    description: 'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands. shadcn/ui parity.',
    usage: 'Put `art-menubar-menu`s (with `label`) inside `art-menubar`, and the `art-menu-*` family inside each. Listen to `select` from items and `open-change` on a menu. React `onSelect`, Vue `@select`, Angular `(select)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the active trigger'], ['← / →', 'Move between menus (and switch the open one)'], ['↓ / Enter / Space', 'Open the menu on its first item'], ['↓ / ↑, Home / End, typing', 'Move inside the open menu'], ['→ / ← on a submenu trigger', 'Open / close the submenu'], ['Enter / Space', 'Activate the item'], ['Escape', 'Close and return to the trigger']],
    roles: 'The bar is `role="menubar"`; each trigger is a `menuitem` with `aria-haspopup="menu"` and `aria-expanded` (roving tabindex across triggers); panels are `role="menu"` named by their label; items carry the `menuitem*` roles.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/menubar/',
    states: '`hover` and `focus-visible` on triggers (the open trigger keeps the accent), open / closed panels with enter and exit motion, `disabled` menus and items. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-9`, `--art-space-1`, `--art-color-bg-canvas`, `--art-color-border-default`, `--art-radius-md`, `--art-shadow-raised`', 'bar'], ['`--art-space-2`, `--art-radius-sm`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-bg-accent`', 'triggers'], ['`--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-48`', 'panels'], ['(items)', 'see Dropdown Menu']],
    dos: [['Use it for application-wide commands', 'Use it as site navigation (use Navigation Menu)'], ['Keep labels to one word', 'Put icons in the bar'], ['Mirror OS menubar keyboard behaviour', 'Open menus on hover when none is open']],
  },
};

import type { ComponentStories } from '@artui/stories';

const area = `<div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>`;
const items = `  <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>\n  <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>\n  <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>\n  <art-menu-sub slot="menu">\n    <art-menu-item slot="trigger">More tools</art-menu-item>\n    <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>\n    <art-menu-item value="shortcut">Create shortcut…</art-menu-item>\n    <art-menu-separator></art-menu-separator>\n    <art-menu-item value="devtools">Developer tools</art-menu-item>\n  </art-menu-sub>\n  <art-menu-separator slot="menu"></art-menu-separator>\n  <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>\n  <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>\n  <art-menu-separator slot="menu"></art-menu-separator>\n  <art-menu-radio-group slot="menu" value="pedro">\n    <art-menu-label inset>People</art-menu-label>\n    <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>\n    <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>\n  </art-menu-radio-group>`;

export const stories: ComponentStories = {
  tag: 'art-context-menu',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-context-menu>\n  ${area}\n${items}\n</art-context-menu>`, note: 'Right-click (or Shift+F10 / the Menu key with focus inside) the area to open the menu at the pointer. Items go in the `menu` slot and behave as in Dropdown Menu: `select`, checkbox `change`, radio `value-change`, submenus.' },
    open: { title: 'Open', render: () => `<art-context-menu open>\n  ${area}\n${items}\n</art-context-menu>`, note: 'Controlled with `open` (the menu then anchors to the area\'s corner until the next right-click).' },
    'visible-items': { title: 'Limited height', render: () => `<art-context-menu open visible-items="5">\n  ${area}\n${items}\n</art-context-menu>`, note: '`visible-items` caps the menu at a number of rows rather than a pixel height: the row height is measured from a real item, so it follows the control size. Leave it unset and the menu is as tall as its items, scrolling only when the viewport has no room — set `--art-menu-max-height` instead if you would rather give a length.' },
  },
  render: () => `<art-context-menu>\n  ${area}\n${items}\n</art-context-menu>`,
  docs: {
    description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button. shadcn/ui parity: the same menu opened by right-click at the pointer.',
    usage: 'Wrap the target content; put `art-menu-item`s (and labels, separators, groups, radio groups, submenus) in the `menu` slot. Listen to `select` from items, `open-change` on the menu. React `onSelect`, Vue `@select`, Angular `(select)`.',
    requires: ['base'],
    keyboard: [['Shift + F10 / Menu key', 'Open at the focused element'], ['↓ / ↑', 'Move between items (wraps)'], ['Home / End', 'First / last item'], ['Typing', 'Jump to a matching item'], ['→ / Enter / Space on a submenu trigger', 'Open the submenu'], ['← / Escape in a submenu', 'Close it'], ['Enter / Space', 'Activate the item'], ['Escape', 'Close and return focus'], ['Tab', 'Close']],
    roles: 'The panel is `role="menu"` named by `label`; the item family carries the `menuitem*` roles; a submenu is a `group` around a nested `menu`. Focus returns to where it was when the menu closes by keyboard.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    states: 'Open / closed with enter and exit motion; items highlight on hover / focus, `disabled` items are dimmed and skipped, `checked` items show their indicator. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply to the area.',
    tokens: [['`--art-color-bg-popover`, `--art-color-border-default`, `--art-radius-md`, `--art-shadow-popover`, `--art-space-1`', 'panel'], ['(items)', 'see Dropdown Menu']],
    dos: [['Offer the same actions elsewhere (a toolbar or menu)', 'Hide actions only in a context menu'], ['Keep it short and specific to the target', 'List the whole app menu'], ['Give the area a visible affordance', 'Expect users to discover a right-click']],
  },
};

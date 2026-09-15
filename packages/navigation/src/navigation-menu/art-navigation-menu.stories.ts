import type { ComponentStories } from '@artui/stories';

const link = (title: string, desc: string) => `      <li><art-navigation-menu-link href="#">${title}<span slot="description">${desc}</span></art-navigation-menu-link></li>`;
const menu = `  <art-navigation-menu-item label="Getting started">\n    <ul style="display: grid; gap: var(--art-space-1); width: var(--art-container-xs); margin: 0; padding: 0; list-style: none">\n${link('Introduction', 'Re-usable components built with Stencil and Tailwind.')}\n${link('Installation', 'How to install dependencies and structure your app.')}\n${link('Typography', 'Styles for headings, paragraphs, lists…')}\n    </ul>\n  </art-navigation-menu-item>\n  <art-navigation-menu-item label="Components">\n    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--art-space-1); width: var(--art-container-lg); margin: 0; padding: 0; list-style: none">\n${link('Alert Dialog', 'A modal dialog that interrupts the user with important content.')}\n${link('Hover Card', 'For sighted users to preview content available behind a link.')}\n${link('Progress', 'Displays an indicator showing the completion progress of a task.')}\n${link('Scroll Area', 'Visually or semantically separates content.')}\n${link('Tabs', 'A set of layered sections of content displayed one at a time.')}\n${link('Tooltip', 'A popup that displays information related to an element.')}\n    </ul>\n  </art-navigation-menu-item>\n  <art-navigation-menu-item label="Docs" href="#docs"></art-navigation-menu-item>`;

export const stories: ComponentStories = {
  tag: 'art-navigation-menu',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-navigation-menu>\n${menu}\n</art-navigation-menu>`, note: 'Items with a `label` are triggers whose default slot is the panel; items with `href` are plain links. Hover, click, Enter / Space or ↓ opens a panel; ← / → move along the bar.' },
    open: { title: 'Open', render: () => `<art-navigation-menu>\n${menu.replace('<art-navigation-menu-item label="Components">', '<art-navigation-menu-item label="Components" open>')}\n</art-navigation-menu>`, note: 'Controlled with `open` on an item; opening one closes the others. `art-navigation-menu-link` gives panel links a title and description.' },
    active: { title: 'Active link', render: () => `<art-navigation-menu>\n  <art-navigation-menu-item label="Home" href="#" active></art-navigation-menu-item>\n  <art-navigation-menu-item label="Pricing" href="#pricing"></art-navigation-menu-item>\n  <art-navigation-menu-item label="Blog" href="#blog"></art-navigation-menu-item>\n</art-navigation-menu>`, note: '`active` marks the current page (`aria-current="page"`) with a tint.' },
  },
  render: () => `<art-navigation-menu>\n${menu}\n</art-navigation-menu>`,
  focusTarget: 'art-navigation-menu-item [part="trigger"]',
  docs: {
    description: 'A collection of links for navigating websites. shadcn/ui parity; panels open below the bar on the top layer.',
    usage: 'Put `art-navigation-menu-item`s inside: `label` + content for a panel, `href` (and `active`) for a link. Use `art-navigation-menu-link` for rich links inside panels. Listen to `open-change` on items. React `<NavigationMenu>`, Vue and Angular likewise.',
    requires: ['base'],
    keyboard: [['Tab', 'Move along the bar, then into an open panel'], ['← / →', 'Move between bar entries'], ['↓ / Enter / Space', 'Open the panel (focus its first link)'], ['Escape', 'Close and return to the trigger'], ['Enter on a link', 'Follow it']],
    roles: 'A `<nav>` named by `label` with a list of `listitem`s; triggers are buttons with `aria-expanded` and `aria-controls`; links carry `aria-current="page"` when `active`. Panels are plain content (no menu roles — they hold links, not commands).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/',
    states: '`hover` and `focus-visible` on triggers and links, open / closed panels with enter and exit motion, `active` links. `disabled`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-9`, `--art-space-4`, `--art-space-2`, `--art-space-1`, `--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`', 'bar entries'], ['`--art-color-bg-canvas`, `--art-color-bg-accent`', 'entry background, hover, open and active tints'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-container-xl`', 'panels'], ['`--art-color-fg-muted`, `--art-radius-sm`, `--art-font-line-height-sm`', 'link descriptions'], ['`--art-duration-base`, `--art-duration-hover-open`, `--art-duration-hover-close`', 'chevron and hover delays']],
    dos: [['Use panels for a few grouped destinations', 'Put a whole sitemap in one panel'], ['Give every link a description only when it helps', 'Repeat the title as the description'], ['Mark the current section `active`', 'Leave users guessing where they are']],
  },
};

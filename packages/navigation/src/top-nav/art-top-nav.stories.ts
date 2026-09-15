import type { ComponentStories } from '@artui/stories';

const brand = `<a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>`;
const links = `  <a href="#" aria-current="page">Overview</a>\n  <a href="#">Customers</a>\n  <a href="#">Products</a>\n  <a href="#">Settings</a>`;
const end = `  <art-button slot="end" variant="ghost" size="sm">Sign in</art-button>\n  <art-button slot="end" size="sm">Get started</art-button>`;
const nav = (attrs = '') => `<art-top-nav${attrs}>\n  ${brand}\n${links}\n${end}\n</art-top-nav>`;

export const stories: ComponentStories = {
  tag: 'art-top-nav',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  screenshot: 'viewport',
  frame: 'block',
  examples: {
    basic: { title: 'Basic', render: () => nav(), note: 'A `brand` at the start, plain `<a>` links in the default slot (`aria-current="page"` marks the current one), actions in `end`. Below the md breakpoint the links fold behind a menu button.' },
    collapsed: { title: 'Collapsed', render: () => nav(' collapse="always" open'), note: '`collapse="always"` keeps the menu button at every width (`never` keeps the row); `open` shows the panel under the bar. Escape or a click outside closes it.' },
    sticky: { title: 'Sticky', render: () => nav(' sticky'), note: '`sticky` pins the bar to the top of its scroll container (`--art-z-sticky`).' },
  },
  render: () => nav(' open'),
  focusTarget: 'art-top-nav a',
  docs: {
    description: 'An app header bar with a brand, a row of links and actions; the links fold behind a menu button on narrow screens.',
    usage: 'Put the logo / product name in `brand`, `<a>` (or router) links in the default slot, buttons in `end`. `sticky` pins it; `collapse` controls when the links fold (`auto` below md, `always`, `never`); `open` / `open-change` drive the folded panel. Pair with `art-sidebar` by placing an `art-sidebar-trigger` in `brand`. React `<TopNav open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Move through the brand, links and actions'], ['Enter', 'Follow a link; open / close the folded menu'], ['Escape', 'Close the folded menu and return to the button']],
    roles: 'A `<header>` with a `<nav>` named by `label` holding the links; the current link carries `aria-current="page"`. The menu button has `aria-expanded` and `aria-controls` pointing at the panel.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/',
    states: '`hover` and `focus-visible` on links and the menu button, current link, open / closed panel with enter motion. `active`, `disabled`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-14`, `--art-space-4`, `--art-space-9`, `--art-space-10`, `--art-space-3`, `--art-space-1`', 'bar height, padding, link size'], ['`--art-color-bg-canvas`, `--art-color-border-default`, `--art-shadow-overlay`', 'bar and panel'], ['`--art-color-fg-muted`, `--art-color-fg-default`, `--art-color-bg-accent`', 'links, current / hover'], ['`--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`', 'links'], ['`--art-z-sticky`, `--art-z-dropdown`', 'sticky bar, panel'], ['`--art-ring-width`, `--art-color-ring`', 'focus ring'], ['`--art-duration-fast`, `--art-duration-base`, `--art-ease-out`', 'hover and panel motion']],
    dos: [['Keep five or fewer top-level links', 'Fold a whole sitemap into the bar'], ['Mark the current section with `aria-current`', 'Style the current link by hand'], ['Put primary actions in `end`', 'Mix links and buttons in the link row']],
  },
};

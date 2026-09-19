import type { ComponentStories } from '@artui/stories';

const svg = (d: string) => `<svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const sparkle = svg('<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/>');
const code = svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>');
const layers = svg('<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/>');
const chart = svg('<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>');
const shield = svg('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>');
const zap = svg('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>');
const file = svg('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>');
const video = svg('<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>');
const book = svg('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>');

type Link = [title: string, description?: string, icon?: string, active?: boolean];
const link = ([title, description, icon, active]: Link, pad: string) =>
  `${pad}<art-mega-menu-link href="#${title.toLowerCase().replace(/[^a-z]+/g, '-')}"${active ? ' active' : ''}>${icon ?? ''}${title}${description ? `<span slot="description">${description}</span>` : ''}</art-mega-menu-link>`;
const group = (label: string, links: Link[], attrs = '', pad = '    ') =>
  `${pad}<art-mega-menu-group label="${label}"${attrs}>\n${links.map((l) => link(l, pad + '  ')).join('\n')}\n${pad}</art-mega-menu-group>`;

// The reference panel: shadcn's full mega menu example.
const platform = [
  group('Core features', [['AI Assistant', 'Intelligent code suggestions', sparkle], ['Code Editor', 'Advanced syntax highlighting', code], ['Design Tools', 'Visual design system builder', layers]]),
  group('Advanced', [['Analytics', 'Real-time performance insights', chart], ['Security', 'Enterprise-grade protection', shield], ['Automation', 'Workflow automation tools', zap]]),
  group('Resources', [['Documentation', undefined, file], ['Video Tutorials', undefined, video], ['Guides', undefined, book]]),
  group('Company', [['About'], ['Blog'], ['Careers']]),
].join('\n');
const aside = `    <art-card slot="aside">
      <span slot="title">Getting started</span>
      <span slot="description">Learn the basics in five minutes.</span>
      <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
    </art-card>
    <art-card slot="aside">
      <span slot="title">Need help?</span>
      <span slot="description">Talk to our sales team.</span>
      <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
    </art-card>`;
const links = `  <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
  <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>`;

// Six product areas, titles and a line each: enough groups to wrap in every layout.
const areas: Array<[string, Link[]]> = [
  ['Build', [['Editor', 'Write and review together'], ['Deploy', 'Ship every commit'], ['Functions', 'Run code at the edge']]],
  ['Observe', [['Analytics', 'Real-time traffic'], ['Logs', 'Search every request'], ['Alerts', 'Know before users do']]],
  ['Secure', [['Firewall', 'Block bad traffic'], ['Access', 'Roles and SSO'], ['Audit log', 'Who changed what']]],
  ['Store', [['Postgres', 'Serverless SQL'], ['Key-value', 'Low-latency cache'], ['Blob', 'Files at any size']]],
  ['AI', [['Models', 'One API, every model'], ['Agents', 'Long-running tasks'], ['Evals', 'Measure quality']]],
  ['Collaborate', [['Comments', 'Feedback in context'], ['Toolbar', 'Tools on every preview'], ['Flags', 'Release safely']]],
];
const titles = (ls: Link[]): Link[] => ls.map(([t]) => [t]);
const products = (n: number, opts: { plain?: boolean; attrs?: string } = {}) =>
  areas.slice(0, n).map(([label, ls]) => group(label, opts.plain ? titles(ls) : ls, opts.attrs)).join('\n');

const bar = (item: string, panel: string, barAttrs = '') => `<art-mega-menu${barAttrs}>\n  <art-mega-menu-item ${item}>\n${panel}\n  </art-mega-menu-item>\n${links}\n</art-mega-menu>`;
const trigger = 'art-mega-menu-item [part="trigger"]';

const burger = `    <svg slot="trigger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`;
const logo = `    <svg slot="trigger" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 22 20H2z"/></svg>
    <span slot="trigger">Acme</span>`;

const footer = `    <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>`;

export const stories: ComponentStories = {
  tag: 'art-mega-menu',
  tier: 'extended',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: {
      title: 'Basic',
      render: () => bar('label="Platform" layout="rows" max-rows="2"', `${platform}\n${aside}`),
      click: trigger,
      note: 'shadcn\'s full mega menu: four named groups, two to a column, beside an aside of two cards. Items with a `label` are triggers whose default slot is the panel; items with `href` are plain links. Hover, click, Enter / Space or ↓ opens a panel; ← / → move along the bar.',
    },
    columns: {
      title: 'Groups in columns',
      render: () => bar('label="Products"', products(4)),
      click: trigger,
      note: '`layout="columns"` (the default) sets the groups side by side and each group lists its links top to bottom. With no `max-columns`, every group gets a column.',
    },
    'max-columns': {
      title: 'Maximum columns',
      render: () => bar('label="Products" max-columns="3"', products(6, { plain: true })),
      click: trigger,
      note: '`max-columns` caps how many groups sit side by side; the rest start a new line, filling left to right.',
    },
    rows: {
      title: 'Groups in rows',
      render: () => bar('label="Products" layout="rows"', products(3, { plain: true, attrs: ' columns="3"' })),
      click: trigger,
      note: '`layout="rows"` stacks the groups. `columns` on a group spreads its own links across the row, so each group reads as a band.',
    },
    'max-rows': {
      title: 'Maximum rows',
      render: () => bar('label="Products" layout="rows" max-rows="2"', products(6, { plain: true })),
      click: trigger,
      note: '`max-rows` caps how many groups stack in a column; the rest start a new column, filling top to bottom. The reference layout in Basic is `layout="rows" max-rows="2"`.',
    },
    'full-width': {
      title: 'Full-width panel',
      render: () => bar('label="Products" max-columns="4"', `${products(4)}\n${footer}`, ' full-width'),
      click: trigger,
      note: '`full-width` makes the panel span the viewport, hanging from the bottom edge of the bar. Its content stays in a centred container, `--art-mega-menu-content-width` wide (72rem by default): set that to your page container so the panel lines up with the page. Set it on `art-mega-menu` for every panel, or on one item.',
    },
    'full-width-content': {
      title: 'Full-width content',
      render: () => bar('label="Products" max-columns="4"', `${products(4)}\n${footer}`, ' full-width full-width-content'),
      click: trigger,
      note: '`full-width-content` lets the content fill the panel instead of the centred container, and the groups share the whole width. It is independent of `full-width`, and like it can be set on the bar or on one item.',
    },
    'per-item': {
      title: 'Widths per item',
      render: () => `<art-mega-menu>\n  <art-mega-menu-item label="Products" full-width max-columns="3">\n${products(3)}\n  </art-mega-menu-item>\n  <art-mega-menu-item label="Company">\n${group('Company', [['About'], ['Blog'], ['Careers']])}\n  </art-mega-menu-item>\n${links}\n</art-mega-menu>`,
      click: trigger,
      note: 'Width settings on an item apply to that panel alone: here Products spans the viewport while Company stays a small panel under its trigger.',
    },
    'aside-footer': {
      title: 'With an aside and a footer',
      render: () => bar('label="Products" max-columns="2"', `${products(2)}\n${aside}\n${footer}`),
      click: trigger,
      note: 'The `aside` slot sits beside the groups (`--art-mega-menu-aside-width`, 16rem by default) and holds whatever you put there — here two `art-card`s. The `footer` slot is a strip under the groups for a "view all" link or a changelog note. Both disappear when empty.',
    },
    'icon-trigger': {
      title: 'Icon trigger',
      render: () => `<art-mega-menu full-width>\n  <art-mega-menu-item label="Menu" hide-chevron max-columns="4">\n${burger}\n${products(4)}\n${footer}\n  </art-mega-menu-item>\n</art-mega-menu>`,
      click: trigger,
      note: 'The `trigger` slot replaces the label with your own content — here a burger icon, with `hide-chevron` because the icon already says "menu". It sits inside the item\'s own button, so the keyboard, `aria-expanded` and the focus ring work as before, and an icon-only trigger becomes a square control. `label` is then the button\'s accessible name: always set it.',
    },
    'logo-trigger': {
      title: 'Logo trigger',
      render: () => bar('label="Acme"', `${logo}\n${products(2)}\n${aside}`),
      click: trigger,
      note: 'A logo, or a logo and a name, can open the menu too. Several elements may share the `trigger` slot; an `<svg>` without a `width` takes the icon size, one with a `width` keeps it. The chevron stays unless `hide-chevron` is set. On an `href` item the slot works the same way, for a logo that links home.',
    },
    active: {
      title: 'Current page',
      render: () => `<art-mega-menu>\n  <art-mega-menu-item label="Products">\n${group('Build', [['Editor', 'Write and review together', undefined, true], ['Deploy', 'Ship every commit'], ['Functions', 'Run code at the edge']])}\n  </art-mega-menu-item>\n  <art-mega-menu-item label="Pricing" href="#pricing" active></art-mega-menu-item>\n  <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>\n</art-mega-menu>`,
      click: trigger,
      note: '`active` marks the current page with `aria-current="page"` and a tint — on a bar link or on a link inside a panel.',
    },
  },
  // The matrix shows the reference panel open, so every viewport exercises the grid (one column below md).
  render: () => bar('label="Platform" layout="rows" max-rows="2" open', `${platform}\n${aside}`),
  focusTarget: trigger,
  docs: {
    description: 'A site navigation bar whose triggers open wide panels of named link groups, laid out in columns or rows, with an optional aside and footer. Built on the pattern of shadcn\'s full mega menu example.',
    usage: 'Put `art-mega-menu-item`s in the bar: a `label` makes a trigger whose default slot is the panel, `href` makes a plain link. Fill a panel with `art-mega-menu-group`s (a `label` names each group) of `art-mega-menu-link`s (title, `description` slot, `icon` slot). Put your own trigger content — a burger icon, a logo — in the item\'s `trigger` slot (with `label` as its accessible name) and drop the chevron with `hide-chevron`. Choose the flow with `layout` and cap it with `max-columns` / `max-rows`; widen the panel with `full-width` and its content with `full-width-content`, on the bar for every panel or on one item. Listen to `open-change` on items: React `<MegaMenuItem onOpenChange>`, Vue `@open-change`, Angular `(openChange)`.',
    requires: ['base'],
    keyboard: [
      ['Tab', 'Move along the bar, then into an open panel and through its links'],
      ['← / →', 'Move between bar entries'],
      ['↓ / Enter / Space', 'On a trigger: open the panel and focus its first link'],
      ['↓ / ↑', 'In a panel: next / previous link (↑ from the first returns to the trigger)'],
      ['Home / End', 'In a panel: first / last link'],
      ['Escape', 'Close and return to the trigger'],
    ],
    roles: 'A `<nav>` named by `label` holding a list of `listitem`s. Triggers are buttons with `aria-expanded` and `aria-controls`; bar links and panel links carry `aria-current="page"` when `active`. Each group is a `role="list"` named by its label (`aria-labelledby`), and each link is one of its `listitem`s. Panels hold links, not commands, so they carry no menu roles (the disclosure navigation pattern).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/',
    states: '`hover` and `focus-visible` on triggers and links, open and closed panels with enter and exit motion, `active` links. `disabled`, `loading` and `invalid` do not apply to navigation.',
    tokens: [
      ['`--art-space-9`, `--art-space-4`, `--art-space-2`, `--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`', 'bar entries'],
      ['`--art-control-height-md`, `--art-size-icon-md`', 'icon-only triggers'],
      ['`--art-color-bg-canvas`, `--art-color-bg-accent`', 'entry background, hover, open and active tints'],
      ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-border-width`, `--art-shadow-popover`', 'panels'],
      ['`--art-space-6`, `--art-space-64`, `--art-container-6xl`', 'panel padding, group gaps, column and aside width, content container'],
      ['`--art-color-fg-muted`, `--art-font-size-xs`, `--art-size-icon-md`', 'group labels, link descriptions and icons'],
      ['`--art-color-bg-muted`, `--art-space-3`', 'footer strip'],
      ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-duration-hover-open`, `--art-duration-hover-close`', 'panel motion, chevron and hover delays'],
    ],
    dos: [
      ['Name every group — the name is the list\'s accessible name', 'Leave a group of links without a label'],
      ['Give an icon or logo trigger a `label` — it becomes the button\'s name', 'Ship a burger button that a screen reader announces as "button"'],
      ['Cap the flow with `max-columns` / `max-rows` so the panel keeps its shape', 'Let ten groups run across one row'],
      ['Set `--art-mega-menu-content-width` to your page container with `full-width`', 'Let full-width content drift out of line with the page'],
      ['Swap the bar for a Sheet with an Accordion on small screens', 'Squeeze a desktop bar into a phone header'],
    ],
    api: ['art-mega-menu-item', 'art-mega-menu-group', 'art-mega-menu-link'],
  },
};

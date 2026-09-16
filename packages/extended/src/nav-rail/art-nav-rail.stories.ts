import type { ComponentStories } from '@artui/stories';

const icon = (d: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const search = icon('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>');
const home = icon('<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>');
const inbox = icon('<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>');
const chat = icon('<path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/>');
const clock = icon('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>');
const chart = icon('<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/>');
const globe = icon('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>');
const shield = icon('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>');
const moon = icon('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>');
const person = icon('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>');
const grid = icon('<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>');

const rail = `  <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
  <art-nav-rail-item slot="rail" label="Search">${search}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Overview" href="#overview">${home}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Inbox" href="#inbox">${inbox}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Threads" href="#threads">${chat}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active>${clock}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Reports" href="#reports">${chart}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Markets" href="#markets">${globe}</art-nav-rail-item>
  <art-nav-rail-item slot="rail" label="Compliance" href="#compliance">${shield}</art-nav-rail-item>
  <art-nav-rail-item slot="rail-end" label="Apps">${grid}</art-nav-rail-item>
  <art-nav-rail-item slot="rail-end" label="Appearance">${moon}</art-nav-rail-item>
  <art-nav-rail-item slot="rail-end" label="Account">${person}</art-nav-rail-item>`;

const header = `  <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
    <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
    <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
  </button>`;

const sections = `  <art-nav-section label="Portfolio">
    <art-nav-link href="#dashboard">${chart.replace('<svg ', '<svg slot="icon" ')}Dashboard</art-nav-link>
    <art-nav-link href="#companies" active>${grid.replace('<svg ', '<svg slot="icon" ')}Companies</art-nav-link>
    <art-nav-link href="#performance">${clock.replace('<svg ', '<svg slot="icon" ')}Performance</art-nav-link>
    <art-nav-link href="#allocation">${globe.replace('<svg ', '<svg slot="icon" ')}Asset Allocation</art-nav-link>
    <art-nav-link disabled badge="Soon">${chart.replace('<svg ', '<svg slot="icon" ')}Forecast</art-nav-link>
  </art-nav-section>
  <art-nav-section label="Operations">
    <art-nav-link href="#tax">${shield.replace('<svg ', '<svg slot="icon" ')}Tax Harvesting</art-nav-link>
    <art-nav-link href="#reporting">${inbox.replace('<svg ', '<svg slot="icon" ')}Reporting</art-nav-link>
    <art-nav-link disabled badge="Soon">${chart.replace('<svg ', '<svg slot="icon" ')}Rebalancer</art-nav-link>
  </art-nav-section>
  <art-nav-section label="Execution queue">
    <art-nav-link href="#blotter">${clock.replace('<svg ', '<svg slot="icon" ')}Order Blotter</art-nav-link>
  </art-nav-section>`;

const user = `  <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
    <art-avatar size="sm" alt="">JM</art-avatar>
    <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
  </div>`;

const card = `  <art-card slot="footer">
    <span slot="title" style="font-size:var(--art-font-size-sm)">AI Rebalancer</span>
    <p style="margin:0;font-size:var(--art-font-size-xs);color:var(--art-color-fg-muted)">Your target allocation for fixed income has drifted by 4.2%.</p>
    <art-button slot="footer" size="sm" full>Review</art-button>
  </art-card>`;

const nav = (attrs = '', extra = '') => `<art-nav-rail${attrs}>\n${rail}\n${header}\n${sections}\n${extra}${user}\n</art-nav-rail>`;

export const stories: ComponentStories = {
  tag: 'art-nav-rail',
  tier: 'extended',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'shell',
  focusTarget: 'art-nav-rail-item [part="control"]',
  examples: {
    basic: {
      title: 'Basic',
      render: () => nav(),
      note: 'The rail switches context, the panel lists the sections of the context you are in. `art-nav-rail-item`s go in `rail` and `rail-end`; `art-nav-section`s of `art-nav-link`s go in the default slot. The brand mark, the workspace switcher, the promo card and the user row are slots, because they belong to the product.',
    },
    collapsed: {
      title: 'Collapsed',
      render: () => nav(' collapsed'),
      note: '`collapsed` narrows the panel to its icons and hides the section labels, leaving a rule in their place. Each link then shows its text in a tooltip, the way the rail\'s items always do. The toggle stays visible; `collapsed-change` reports the user\'s choice, so you can remember it.',
    },
    footer: {
      title: 'With a footer card',
      render: () => nav('', `${card}\n`),
      note: 'The `footer` slot sits above the user row — an assistant prompt, an upgrade nudge, a drift alert. It is your markup, so it can be anything; here it is an `art-card` with a full-width `art-button`.',
    },
    'no-toggle': {
      title: 'Without the toggle',
      render: () => nav(' hide-toggle'),
      note: '`hide-toggle` removes the button when the panel is driven from elsewhere — a keyboard shortcut of your own, or a layout that decides by viewport.',
    },
  },
  render: () => nav(),
  docs: {
    description: 'A two-level application sidebar: a permanent icon rail that switches context, beside a secondary panel that lists the sections of the context you are in.',
    usage: 'Put the contexts in `rail` and the account-level ones in `rail-end`, then the current context\'s navigation as `art-nav-section`s in the default slot. Mark the current context and page with `active`. Bind `collapsed` and listen to `collapsed-change`: React `<NavRail collapsed onCollapsedChange>`, Vue `v-model:collapsed`, Angular `[collapsed] (collapsedChange)`.',
    requires: ['base'],
    keyboard: [
      ['Tab', 'Rail items, then the panel header, then the links'],
      ['Enter / Space', 'Follow the item or link'],
      ['Shift + Tab', 'Back out of the panel to the rail'],
    ],
    roles: 'Two `<nav>` landmarks, named by `rail-label` and `label`, so a screen reader can tell the context switcher from the page navigation. A rail item is a `<button>`, or an `<a>` with `href`; the current one carries `aria-current="page"`. A section is a heading over a `role="list"`, and each link is its `listitem`. The toggle reports `aria-expanded`. Icon-only rows carry their name as the accessible name and repeat it in a tooltip.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/',
    states: 'Hover and focus-visible on every row; `active` marks the current context and page; `disabled` pairs with a `badge` that says why. The panel animates between its two widths unless reduced motion is set.',
    tokens: [
      ['`--art-color-bg-sidebar`, `--art-color-bg-sidebar-accent`', 'rail and panel surface, hover wash'],
      ['`--art-sidebar-width`, `--art-sidebar-width-icon`', 'panel width, expanded and collapsed'],
      ['`--art-space-14`', 'rail width (`--art-nav-rail-width`)'],
      ['`--art-color-border-default`', 'column rules and the active outline'],
      ['`--art-duration-base`, `--art-ease-out`', 'collapse motion'],
    ],
    dos: [
      ['Give every rail item a `label` — it is the accessible name', 'Ship an icon with no name'],
      ['Say why a link is disabled with `badge="Soon"`', 'Disable a link with no explanation'],
      ['Remember the user\'s `collapsed` choice', 'Reset the panel on every navigation'],
      ['Keep the rail to one row of icons per context', 'Put page-level navigation in the rail'],
    ],
  },
};

import type { ComponentStories } from '@artui/stories';

const icon = (d: string) => `<svg slot="media" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const mention = icon('<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>');
const deploy = icon('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>');
const invite = icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>');
const check = icon('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>');
const items = `  <art-notification-item value="n1" heading="Pedro mentioned you" description="in #design-system: “can you review the sidebar tokens?”" time="2m" unread href="#thread">${mention}</art-notification-item>\n  <art-notification-item value="n2" heading="Deploy finished" description="artui-docs v0.9.4 is live on production." time="1h" unread>${deploy}</art-notification-item>\n  <art-notification-item value="n3" heading="Sofia invited you to Acme" description="Accept to join the workspace." time="3h">${invite}\n    <art-button size="sm">Accept</art-button>\n    <art-button size="sm" variant="outline">Decline</art-button>\n  </art-notification-item>\n  <art-notification-item value="n4" heading="Weekly report ready" description="Your usage summary for last week." time="1d">${check}</art-notification-item>`;

export const stories: ComponentStories = {
  tag: 'art-notification-centre',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  screenshot: 'viewport',
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-notification-centre inline>\n${items}\n</art-notification-centre>`, note: '`inline` renders the panel in place. Items carry `heading`, `description`, `time`, `unread` and an optional `href`; extra buttons go in the default slot. Clicking an item emits `select` and marks it read; "Mark all as read" emits `read-all`.' },
    unread: { title: 'Unread filter', render: () => `<art-notification-centre inline filter="unread">\n${items}\n</art-notification-centre>`, note: '`filter="unread"` hides read rows (pure CSS, your DOM is untouched); the count sits on the button.' },
    empty: { title: 'Empty', render: () => `<art-notification-centre inline></art-notification-centre>`, note: 'With nothing to show the list gives way to an empty state (`empty-heading` / `empty-description`).' },
    bell: { title: 'Bell trigger', render: () => `<art-notification-centre open>\n${items}\n</art-notification-centre>`, note: 'Without `inline` the panel opens from a bell that shows the unread count; Escape, a click outside or the bell closes it. `open` / `open-change` control it.' },
  },
  render: () => `<art-notification-centre inline>\n${items}\n</art-notification-centre>`,
  focusTarget: 'art-notification-centre art-button',
  docs: {
    description: 'A bell with an unread count and a panel of notifications: mark all as read, an all / unread filter, rows with media, text, time and an unread dot, and an empty state. Compiled widget (ADR-0010).',
    usage: 'Slot `art-notification-item`s (`value`, `heading`, `description`, `time`, `unread`, `href`, `media` slot, buttons in the default slot). Listen to `select` on items and `read-all` / `open-change` on the centre; keep `unread` in sync with your store. `inline` for a page section. React `<NotificationCentre open onOpenChange onReadAll>`, Vue `v-model:open @read-all`, Angular `[open] (openChange) (readAll)`.',
    requires: ['base'],
    keyboard: [['Enter / Space on the bell', 'Open the panel (focus moves inside)'], ['Tab', 'Mark all, the filter buttons, each row, its buttons'], ['Enter on a row', 'Activate it (marks it read)'], ['Escape', 'Close and return to the bell']],
    roles: 'The bell is a button named "Notifications, n unread" with `aria-haspopup="dialog"` and `aria-expanded`; the panel is a `role="dialog"` on the top layer (in flow with `inline`); the filter buttons carry `aria-pressed`; the list is `role="list"` of `listitem` rows whose heading is a button (or link) stretched over the row so extra actions stay independent; the unread dot is decorative (the count is in the bell\'s name and the Unread button).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
    states: 'Unread rows (tinted, dot), the unread filter, an empty list, open / closed panel with motion. Interactive states belong to the buttons.',
    tokens: [['`--art-container-xs`, `--art-container-sm`, `--art-space-9`, `--art-space-4`, `--art-space-3`, `--art-space-2`, `--art-space-1`', 'panel and list sizes, row padding, bell, badge'], ['`--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`, `--art-radius-md`', 'panel'], ['`--art-color-bg-accent`, `--art-color-primary-solid`', 'unread tint, hover, the dot'], ['`--art-color-destructive-solid`, `--art-color-fg-on-destructive`', 'the count badge'], ['`--art-color-bg-muted`, `--art-color-fg-muted`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`', 'media box, text'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`', 'panel and hover motion']],
    dos: [['Keep `unread` in your store and reflect it on the items', 'Let the widget be the only record of what was read'], ['Give rows a real destination (`href`) when there is one', 'Make every row a dead end'], ['Group by recency and prune old rows', 'Show a hundred notifications in one panel']],
  },
};

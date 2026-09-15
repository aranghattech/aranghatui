import type { ComponentStories } from '@artui/stories';

const icon = (slot = 'media') => `<art-icon slot="${slot}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></art-icon>`;
const image = `<img slot="media" alt="" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23a3a3a3'/%3E%3C/svg%3E">`;

export const stories: ComponentStories = {
  tag: 'art-item',
  tier: 'base',
  variants: ['default', 'outline', 'muted'],
  sizes: ['sm', 'md'],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-item variant="outline">\n  ${icon()}\n  <p slot="title">Basic Item</p>\n  <p slot="description">A simple item with title and description.</p>\n  <art-button slot="actions" variant="outline" size="sm">Action</art-button>\n</art-item>`, note: 'Media, title, description and actions each have a slot; an `art-icon` in `media` gets a bordered box, an `<img>` becomes a thumbnail.' },
    variants: { title: 'Variants', render: () => `<art-item>\n  <p slot="title">Default</p>\n  <p slot="description">No border, no fill.</p>\n</art-item>\n<art-item variant="outline">\n  <p slot="title">Outline</p>\n  <p slot="description">Bordered.</p>\n</art-item>\n<art-item variant="muted">\n  <p slot="title">Muted</p>\n  <p slot="description">Filled with the muted background.</p>\n</art-item>` },
    sizes: { title: 'Sizes', render: () => `<art-item variant="outline" size="sm">\n  ${icon()}\n  <p slot="title">Small item</p>\n  <art-button slot="actions" variant="ghost" size="sm">Open</art-button>\n</art-item>\n<art-item variant="outline">\n  ${icon()}\n  <p slot="title">Medium item</p>\n  <art-button slot="actions" variant="ghost" size="sm">Open</art-button>\n</art-item>` },
    'with-image': { title: 'With image', render: () => `<art-item variant="outline">\n  ${image}\n  <p slot="title">Photo album</p>\n  <p slot="description">124 photos · Updated yesterday</p>\n</art-item>` },
    group: { title: 'Group', render: () => `<art-item-group>\n  <art-item>\n    ${icon()}\n    <p slot="title">Personal</p>\n    <p slot="description">Your private workspace.</p>\n  </art-item>\n  <art-separator></art-separator>\n  <art-item>\n    ${icon()}\n    <p slot="title">Team</p>\n    <p slot="description">Shared with 4 people.</p>\n  </art-item>\n</art-item-group>`, note: '`art-item-group` is a list (`role="list"`); its items are list items. Put an `art-separator` between them for dividers.' },
    link: { title: 'As a link', render: () => `<art-item variant="outline" href="#">\n  ${icon()}\n  <p slot="title">Open settings</p>\n  <p slot="description">Manage your account, billing and teams.</p>\n</art-item>`, note: '`href` renders the row as a link with hover and focus states.' },
    'header-and-footer': { title: 'Header and footer', render: () => `<art-item variant="outline">\n  <span slot="header">Release notes<art-badge variant="secondary">New</art-badge></span>\n  <p slot="title">v1.2.0</p>\n  <p slot="description">Field, Input OTP and Button Group land in base.</p>\n  <span slot="footer">Published today<art-button variant="link" size="sm">Read more</art-button></span>\n</art-item>` },
  },
  render: ({ variant, size, state }) => `<art-item variant="${variant}" size="${size}"${state === 'hover' || state === 'focus-visible' ? ' href="#"' : ''}>\n  ${icon()}\n  <p slot="title">Item title</p>\n  <p slot="description">Item description</p>\n  <art-button slot="actions" variant="outline" size="sm">Action</art-button>\n</art-item>`,
  focusTarget: 'art-item a',
  docs: {
    description: 'A versatile component that you can use to display any content. shadcn/ui parity.',
    usage: 'Fill the `media`, `title`, `description` and `actions` slots; add `header` / `footer` rows when needed. `variant` and `size` style the row; `href` makes it a link. Group rows in `art-item-group`.',
    keyboard: [['Tab', 'Focus a linked item (`href`), then the buttons in its actions'], ['Enter', 'Follow the link']],
    roles: 'A plain row, or an `<a>` when `href` is set. Inside `art-item-group` (`role="list"`) each item is a `listitem`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`hover` and `focus-visible` apply to linked items; `active`, `disabled`, `loading` and `invalid` do not apply to a row.',
    tokens: [['`--art-space-4`, `--art-space-2-5`, `--art-space-3`, `--art-space-1`, `--art-space-2`', 'padding and gaps per size'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-md`', 'outline'], ['`--art-color-bg-muted`', 'muted variant, icon box'], ['`--art-color-bg-accent`', 'link hover'], ['`--art-space-8`, `--art-space-10`, `--art-radius-sm`', 'media box and thumbnail'], ['`--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`', 'title and description']],
    dos: [['Keep the description to two lines', 'Put paragraphs in an item'], ['Use one primary action per item', 'Stack many buttons in the actions slot'], ['Use `art-item-group` for lists', 'Space items with margins']],
  },
};

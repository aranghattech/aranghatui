import type { ComponentStories } from '@artui/stories';

const check = `<art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-marker',
  tier: 'base',
  variants: ['default', 'border', 'separator'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-marker>\n  ${check}\n  Task completed\n</art-marker>`, note: 'An icon in the `icon` slot and text in the default slot; the row is muted and reads as a note between messages.' },
    status: { title: 'Status', render: () => `<art-marker role="status">\n  <art-spinner slot="icon" size="sm" label="Thinking"></art-spinner>\n  Thinking…\n</art-marker>`, note: '`role="status"` on the host announces streaming updates politely.' },
    separator: { title: 'Separator', render: () => `<art-marker variant="separator">Today</art-marker>`, note: 'A centred label between two rules — dates and section breaks.' },
    border: { title: 'Border', render: () => `<art-marker variant="border">\n  ${check}\n  Sent · 2:14 PM\n</art-marker>` },
    link: { title: 'As a link', render: () => `<art-marker href="#">\n  ${check}\n  View the full report\n</art-marker>`, note: '`href` renders an `<a>` with hover and focus states.' },
  },
  render: ({ variant, state }) => `<art-marker variant="${variant}"${state === 'hover' || state === 'focus-visible' ? ' href="#"' : ''}>\n  ${check}\n  Marker text\n</art-marker>`,
  focusTarget: 'art-marker a',
  docs: {
    description: 'Displays inline conversation markers — status updates, system notes, bordered rows and labelled separators. shadcn/ui parity.',
    usage: 'Put an `art-icon` or `art-spinner` in the `icon` slot and the text in the default slot. `variant="separator"` centres the text between rules; `variant="border"` underlines the row; `href` makes it a link.',
    keyboard: [['Tab', 'Focus a linked marker (`href`)'], ['Enter', 'Follow the link']],
    roles: 'A plain row, or an `<a>` when `href` is set. The icon is decorative. Set `role="status"` on the host for live updates.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`hover` and `focus-visible` apply to linked markers; `active`, `disabled`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-color-fg-muted`, `--art-color-fg-default`', 'text and link hover'], ['`--art-font-size-sm`, `--art-space-2`, `--art-space-4`', 'text, gap, min height'], ['`--art-color-border-default`, `--art-border-width`', 'rules'], ['`--art-size-icon-md`', 'icon']],
    dos: [['Keep markers to one line', 'Put a paragraph in a marker'], ['Use `separator` for dates between messages', 'Use it as a heading']],
  },
};

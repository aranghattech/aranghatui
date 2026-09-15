import type { ComponentStories } from '@artui/stories';

const check = `<art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></art-icon>`;
const warn = `<art-icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-alert',
  tier: 'components',
  variants: ['default', 'destructive'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-alert>\n  ${check}\n  <h5 slot="title">Success! Your changes have been saved</h5>\n  <p slot="description">This is an alert with icon, title and description.</p>\n</art-alert>`, note: 'Icon, title and description each have a slot; any of them can be left out.' },
    destructive: { title: 'Destructive', render: () => `<art-alert variant="destructive">\n  ${warn}\n  <h5 slot="title">Unable to process your payment.</h5>\n  <p slot="description">Please verify your billing information and try again.</p>\n</art-alert>` },
    'title-only': { title: 'Title only', render: () => `<art-alert>\n  ${warn}\n  <h5 slot="title">This alert has a title and an icon. No description.</h5>\n</art-alert>` },
    'no-icon': { title: 'Without icon', render: () => `<art-alert>\n  <h5 slot="title">Heads up</h5>\n  <p slot="description">You can add components to your app using the CLI.</p>\n</art-alert>` },
  },
  render: ({ variant }) => `<art-alert variant="${variant}">\n  ${variant === 'destructive' ? warn : check}\n  <h5 slot="title">Alert title</h5>\n  <p slot="description">Alert description.</p>\n</art-alert>`,
  docs: {
    description: 'Displays a callout for user attention. shadcn/ui parity.',
    usage: 'Slot an icon as `icon`, a heading as `title` and text as `description`. `variant="destructive"` colours the whole callout for errors.',
    requires: ['base'],
    keyboard: [['None', 'Not focusable; links inside are']],
    roles: '`role="alert"` on the host: assistive tech announces the callout when it is inserted. For static, always-present notes use a Card instead.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/alert/',
    states: 'Not interactive — the two variants are the only states.',
    tokens: [['`--art-color-bg-surface`, `--art-color-border-default`, `--art-border-width`, `--art-radius-lg`', 'box'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'default text'], ['`--art-color-destructive-fg`', 'destructive text'], ['`--art-space-4`, `--art-space-3`, `--art-space-0-5`', 'padding and gaps'], ['`--art-font-weight-medium`, `--art-font-tracking-tight`, `--art-font-size-sm`', 'title and description'], ['`--art-size-icon-md`', 'icon']],
    dos: [['Use it for a message that needs attention now', 'Use it as a decorative info box everywhere'], ['One alert per situation', 'Stack alerts']],
  },
};

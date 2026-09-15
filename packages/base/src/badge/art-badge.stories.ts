import type { ComponentStories } from '@artui/stories';

const check = `<art-icon size="sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-badge',
  tier: 'base',
  variants: ['default', 'secondary', 'outline', 'destructive'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-badge>Badge</art-badge>` },
    variants: { title: 'Variants', render: () => `<art-badge>Default</art-badge>\n<art-badge variant="secondary">Secondary</art-badge>\n<art-badge variant="outline">Outline</art-badge>\n<art-badge variant="destructive">Destructive</art-badge>` },
    'with-icon': { title: 'With icon', render: () => `<art-badge variant="secondary">\n  ${check}\n  Verified\n</art-badge>`, note: 'Icons take the small icon size. Use `<art-icon size="sm">` with your icon data or a raw `<svg>`.' },
    link: { title: 'As a link', render: () => `<art-badge href="#" variant="outline">Link</art-badge>`, note: '`href` renders an `<a>` with hover and focus-ring states; the badge is otherwise static.' },
  },
  render: ({ variant, state }) => `<art-badge variant="${variant}"${state === 'hover' || state === 'focus-visible' ? ' href="#"' : ''}>Badge</art-badge>`,
  focusTarget: 'art-badge a',
  docs: {
    description: 'Displays a badge or a component that looks like a badge. shadcn/ui parity.',
    usage: 'Static by default. Set `href` for a linked badge (it becomes an `<a>` and gains hover and focus states).',
    keyboard: [['Tab', 'Focus a linked badge (`href`)'], ['Enter', 'Follow the link']],
    roles: 'A `<span>` with text, or a native `<a>` when `href` is set. No ARIA role of its own.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`hover` and `focus-visible` apply only to linked badges; `active`, `disabled`, `loading` and `invalid` do not apply to a label.',
    tokens: [['`--art-color-primary-solid`, `--art-color-fg-on-primary`', 'default'], ['`--art-color-secondary-solid`, `--art-color-secondary-fg`', 'secondary'], ['`--art-color-destructive-solid`, `--art-color-fg-on-destructive`', 'destructive'], ['`--art-color-border-default`, `--art-border-width`, `--art-color-fg-default`', 'outline'], ['`--art-radius-md`, `--art-space-2`, `--art-space-1`', 'shape'], ['`--art-font-size-xs`, `--art-font-weight-medium`', 'text'], ['`--art-size-icon-sm`', 'icon']],
    dos: [['Keep the text to one or two words', 'Put sentences in a badge'], ['Use `destructive` for errors and removals only', 'Use colour variants decoratively']],
  },
};

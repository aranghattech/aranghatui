import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-spinner',
  tier: 'base',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-spinner></art-spinner>` },
    sizes: { title: 'Sizes', render: () => `<art-spinner size="sm"></art-spinner>\n<art-spinner></art-spinner>\n<art-spinner size="lg"></art-spinner>` },
    'in-button': { title: 'In a button', render: () => `<art-button disabled>\n  <art-spinner slot="start"></art-spinner>\n  Please wait\n</art-button>`, note: 'Prefer `art-button loading` for a submit in flight; slot a spinner when you need to keep the button interactive.' },
    colour: { title: 'Colour', render: () => `<art-spinner style="color: var(--art-color-fg-muted)"></art-spinner>`, note: 'The spinner uses `currentColor` — set `color` on the host.' },
  },
  render: ({ size }) => `<art-spinner size="${size}"></art-spinner>`,
  docs: {
    description: 'An indicator that can be used to show a loading state. shadcn/ui parity.',
    usage: 'Drop it where content is loading. `label` sets the announced name; `size` follows the icon scale.',
    keyboard: [['None', 'Not focusable']],
    roles: '`role="status"` with `aria-label` on the host; the `<svg>` is decorative.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — the spinner is itself the loading state.',
    tokens: [['`--art-size-icon-{sm,md,lg}`', 'sizes'], ['`--art-duration-spin`', 'revolution']],
    dos: [['Give it a meaningful `label` (“Saving…”)', 'Show several spinners at once'], ['Use `art-button loading` for submits', 'Overlay a page-sized spinner for small updates']],
  },
};

import type { ComponentStories } from '@artui/stories';

const photo = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23737373'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%23f5f5f5'/%3E%3Cpath d='M6 38c2-9 8-13 14-13s12 4 14 13Z' fill='%23f5f5f5'/%3E%3C/svg%3E`;

export const stories: ComponentStories = {
  tag: 'art-avatar',
  tier: 'components',
  variants: ['default'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-avatar src="${photo}" alt="Colm Tuite">CT</art-avatar>`, note: 'The fallback (initials) shows until the image loads, and stays if it fails.' },
    fallback: { title: 'Fallback', render: () => `<art-avatar alt="">CN</art-avatar>`, note: 'No `src`: only the fallback renders.' },
    sizes: { title: 'Sizes', render: () => `<art-avatar size="sm" src="${photo}" alt="">CT</art-avatar>\n<art-avatar src="${photo}" alt="">CT</art-avatar>\n<art-avatar size="lg" src="${photo}" alt="">CT</art-avatar>` },
    'with-item': { title: 'In an item', frame: 'stack', render: () => `<art-item variant="outline">\n  <art-avatar slot="media" src="${photo}" alt="">CT</art-avatar>\n  <p slot="title">Colm Tuite</p>\n  <p slot="description">colm@example.com</p>\n</art-item>` },
  },
  render: ({ size }) => `<art-avatar size="${size}" alt="">CN</art-avatar>`,
  docs: {
    description: 'An image element with a fallback for representing the user. shadcn/ui parity.',
    usage: 'Give it `src`, `alt` and fallback text (initials) in the default slot. `size` follows the `sm | md | lg` scale.',
    requires: ['base'],
    keyboard: [['None', 'Not focusable']],
    roles: 'A native `<img>` with `alt`; when the avatar sits next to the person\'s name, leave `alt` empty so the name is not read twice. The fallback is hidden from assistive tech while an image is present.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — loading (fallback shown) and loaded are the only states.',
    tokens: [['`--art-space-6`, `--art-space-8`, `--art-space-10`', 'sizes'], ['`--art-radius-full`', 'shape'], ['`--art-color-bg-muted`, `--art-color-fg-default` (70 % mix), `--art-font-size-sm`, `--art-font-size-xs`', 'fallback']],
    dos: [['Use two-letter initials as the fallback', 'Leave the fallback empty'], ['Set `alt` when the avatar stands alone', 'Repeat the name in `alt` next to a visible name']],
  },
};

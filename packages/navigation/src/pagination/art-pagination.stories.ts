import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-pagination',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible', 'disabled'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-pagination page="2" total="3"></art-pagination>`, note: '`page` (1-based) and `total`; `page-change` reports the pick. Previous / next disable at the ends.' },
    'many-pages': { title: 'Many pages', render: () => `<art-pagination page="12" total="40"></art-pagination>`, note: '`siblings` pages on each side of the current one and `boundaries` at the ends; the rest collapses into ellipses.' },
    links: { title: 'Links', manual: true, render: () => `<art-pagination page="3" total="10" href-template="?page={page}"></art-pagination>`, note: '`href-template` renders real links (`{page}` is replaced) so pages are crawlable and open in new tabs; your router or server reads the page.' },
    disabled: { title: 'At the end', render: () => `<art-pagination page="10" total="10"></art-pagination>`, note: 'The next control is disabled on the last page (and previous on the first).' },
  },
  render: ({ state }) => (state === 'disabled' ? `<art-pagination page="1" total="1"></art-pagination>` : `<art-pagination page="2" total="5"></art-pagination>`),
  focusTarget: 'art-pagination [part="previous"]', // the first control in the tab order
  docs: {
    description: 'Pagination with page navigation, next and previous links. shadcn/ui parity.',
    usage: 'Bind `page` and `total`; listen to `page-change` (`detail.page`). React `onPageChange`, Vue `v-model:page`, Angular `[page]` / `(pageChange)`. For server-rendered pages use `href-template`.',
    requires: [],
    keyboard: [['Tab', 'Move through previous, the pages and next'], ['Enter / Space', 'Go to that page']],
    roles: 'A `<nav aria-label="pagination">` with a list of buttons (or links); the current page has `aria-current="page"`; controls are named "Go to page N", "Go to previous page", "Go to next page"; ellipses are hidden with a visually hidden "More pages".',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: '`hover`, `focus-visible` and `disabled` (previous / next at the ends) on the controls. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-control-height-md`, `--art-space-1`, `--art-space-2-5`', 'controls and gaps'], ['`--art-color-bg-accent`, `--art-color-bg-canvas`, `--art-color-border-default`, `--art-shadow-raised`, `--art-radius-md`', 'ghost and active (outline) controls'], ['`--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-default`', 'text'], ['`--art-size-icon-md`', 'arrows and ellipsis'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Keep the current page visible and marked', 'Reset to page 1 on every re-render'], ['Use links for public listings', 'Use buttons where the URL should change'], ['Show total pages honestly', 'Fake a total for infinite lists (use a load-more button)']],
  },
};

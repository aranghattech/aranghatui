import type { ComponentStories } from '@artui/stories';

const trail = `  <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>\n  <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>\n  <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>`;

export const stories: ComponentStories = {
  tag: 'art-breadcrumb',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', render: () => `<art-breadcrumb>\n${trail}\n</art-breadcrumb>`, note: 'Links go in the default slot of each item; the last item is `current` and is announced as the page. Separators are drawn by the items.' },
    slash: { title: 'Custom separator', render: () => `<art-breadcrumb separator="slash">\n${trail}\n</art-breadcrumb>`, note: '`separator="slash"` swaps the chevron for a slash.' },
    ellipsis: { title: 'Collapsed', render: () => `<art-breadcrumb>\n  <art-breadcrumb-item><a href="#">Home</a></art-breadcrumb-item>\n  <art-breadcrumb-item ellipsis></art-breadcrumb-item>\n  <art-breadcrumb-item><a href="#">Components</a></art-breadcrumb-item>\n  <art-breadcrumb-item current>Breadcrumb</art-breadcrumb-item>\n</art-breadcrumb>`, note: 'An `ellipsis` item stands for the collapsed middle of a long path; wrap it in a Dropdown Menu to list the hidden pages.' },
  },
  render: () => `<art-breadcrumb>\n${trail}\n</art-breadcrumb>`,
  focusTarget: 'art-breadcrumb-item a',
  docs: {
    description: 'Displays the path to the current resource using a hierarchy of links. shadcn/ui parity.',
    usage: 'Put `art-breadcrumb-item`s inside; each holds an `<a>` (or your router link), the last one is `current`. `separator="slash"` for a slash; an `ellipsis` item collapses the middle. React `<Breadcrumb>` / `<BreadcrumbItem>`, Vue and Angular likewise.',
    requires: [],
    keyboard: [['Tab', 'Move through the links'], ['Enter', 'Follow a link']],
    roles: 'A `<nav aria-label="breadcrumb">` with an `<ol>`; each item is `role="listitem"`, the current page carries `aria-current="page"`, separators and the ellipsis are `aria-hidden` (the ellipsis has a visually hidden "More").',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/',
    states: '`hover` and `focus-visible` on links. `active`, `disabled`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-font-size-sm`, `--art-color-fg-muted`, `--art-color-fg-default`', 'text, current page'], ['`--art-space-1-5`, `--art-space-2-5`', 'gaps'], ['`--art-size-icon-sm`, `--art-size-icon-md`, `--art-space-9`', 'separator and ellipsis'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`, `--art-radius-sm`', 'link focus ring']],
    dos: [['Keep the trail to the real hierarchy', 'Use it as a history of visited pages'], ['Mark the last item `current`', 'Link the current page to itself'], ['Collapse long paths with an ellipsis', 'Let a deep path wrap to three lines']],
  },
};

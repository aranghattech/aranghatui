import type { ComponentStories } from '@artui/stories';

const icon = (d: string) => `<svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const folder = icon('<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>');
const file = icon('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>');
const tree = (icons = false, extra = '') => `<art-tree-view label="Files" value="button"${extra}>\n  <art-tree-item value="src" label="src" expanded>${icons ? folder : ''}\n    <art-tree-item value="components" label="components" expanded>${icons ? folder : ''}\n      <art-tree-item value="button" label="button.tsx">${icons ? file : ''}</art-tree-item>\n      <art-tree-item value="input" label="input.tsx">${icons ? file : ''}</art-tree-item>\n    </art-tree-item>\n    <art-tree-item value="lib" label="lib">${icons ? folder : ''}\n      <art-tree-item value="utils" label="utils.ts">${icons ? file : ''}</art-tree-item>\n    </art-tree-item>\n    <art-tree-item value="index" label="index.ts">${icons ? file : ''}</art-tree-item>\n  </art-tree-item>\n  <art-tree-item value="package" label="package.json">${icons ? file : ''}</art-tree-item>\n  <art-tree-item value="readme" label="README.md" disabled>${icons ? file : ''}</art-tree-item>\n</art-tree-view>`;

export const stories: ComponentStories = {
  tag: 'art-tree-view',
  tier: 'navigation',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => tree(), note: 'Nest `art-tree-item`s (`value`, `label`, `expanded`, `disabled`). The tree\'s `value` is the selected item; clicking a parent toggles it and selects it, the chevron only toggles. Listen to `value-change` on the tree, `expand` / `collapse` / `select` on items.' },
    icons: { title: 'Icons', render: () => tree(true), note: 'An `icon` slot goes before the label.' },
  },
  render: () => tree(true),
  focusTarget: 'art-tree-item[tabindex="0"]',
  docs: {
    description: 'A hierarchical list of expandable nodes with single selection and full keyboard navigation (WAI-ARIA tree pattern).',
    usage: 'Put nested `art-tree-item`s inside; each has a `value` and a `label`, `expanded` shows its children. The tree\'s `value` follows the selection. React `<TreeView value onValueChange>`, Vue `v-model`, Angular `[value] (valueChange)`.',
    requires: [],
    keyboard: [['Tab', 'Into the tree (the selected or first item), then out'], ['↓ / ↑', 'Next / previous visible item'], ['→', 'Expand, or move to the first child'], ['←', 'Collapse, or move to the parent'], ['Home / End', 'First / last visible item'], ['Enter / Space', 'Select (and toggle a parent)'], ['*', 'Expand all siblings'], ['Type', 'Jump to the next item starting with the letters']],
    roles: 'A `role="tree"` named by `label`; each item host is `role="treeitem"` with `aria-level`, `aria-selected`, `aria-expanded` on parents and `aria-disabled`; children sit in a `role="group"`. One roving tab stop.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/treeview/',
    states: '`hover` and `focus-visible` on rows, selected and expanded items, `disabled` items. `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-7`, `--art-space-1`, `--art-space-4`, `--art-space-5`, `--art-space-2`', 'row height, indent per level, chevron'], ['`--art-color-bg-accent`', 'hover and selected rows'], ['`--art-color-fg-default`, `--art-color-fg-muted`', 'labels, chevrons, icons, disabled'], ['`--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`', 'rows'], ['`--art-ring-width`, `--art-color-ring`', 'focus ring'], ['`--art-duration-base`, `--art-duration-fast`, `--art-ease-out`', 'chevron and hover motion']],
    dos: [['Use it for real hierarchies (files, pages, org charts)', 'Nest a flat list one level deep for looks'], ['Start with the relevant branch expanded', 'Expand everything on load'], ['Give every node a short label', 'Put long sentences in nodes']],
  },
};

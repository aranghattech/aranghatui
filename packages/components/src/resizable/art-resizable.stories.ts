import type { ComponentStories } from '@artui/stories';

const pane = (label: string) => `<div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">${label}</div>`;

export const stories: ComponentStories = {
  tag: 'art-resizable',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n  <art-resizable-panel default-size="50">\n    ${pane('One')}\n  </art-resizable-panel>\n  <art-resizable-handle></art-resizable-handle>\n  <art-resizable-panel default-size="50">\n    ${pane('Two')}\n  </art-resizable-panel>\n</art-resizable>`, note: 'Drag the divider or focus it and use the arrow keys (Shift for 10 % steps, Home / End for the limits). Sizes are percentages; `layout-change` reports them.' },
    vertical: { title: 'Vertical', render: () => `<art-resizable direction="vertical" style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n  <art-resizable-panel default-size="25">\n    ${pane('Header')}\n  </art-resizable-panel>\n  <art-resizable-handle></art-resizable-handle>\n  <art-resizable-panel default-size="75">\n    ${pane('Content')}\n  </art-resizable-panel>\n</art-resizable>` },
    'with-handle': { title: 'With handle', render: () => `<art-resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n  <art-resizable-panel default-size="25" min-size="15">\n    ${pane('Sidebar')}\n  </art-resizable-panel>\n  <art-resizable-handle with-handle></art-resizable-handle>\n  <art-resizable-panel default-size="75">\n    ${pane('Content')}\n  </art-resizable-panel>\n</art-resizable>`, note: '`with-handle` shows a grip; `min-size` / `max-size` on a panel bound the drag.' },
  },
  render: () => `<art-resizable style="height: 8rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n  <art-resizable-panel default-size="50">\n    ${pane('One')}\n  </art-resizable-panel>\n  <art-resizable-handle with-handle></art-resizable-handle>\n  <art-resizable-panel default-size="50">\n    ${pane('Two')}\n  </art-resizable-panel>\n</art-resizable>`,
  focusTarget: 'art-resizable-handle',
  docs: {
    description: 'Accessible resizable panel groups and layouts with keyboard support. shadcn/ui parity.',
    usage: 'Alternate `art-resizable-panel`s and `art-resizable-handle`s inside `art-resizable`; give panels a `default-size` (percent) and optional `min-size` / `max-size`. Listen to `layout-change` for the sizes.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus a handle'], ['← / → (↑ / ↓ when vertical)', 'Move the divider by 1 %'], ['Shift + arrow', 'Move by 10 %'], ['Home / End', 'Collapse to the minimum / maximum']],
    roles: 'Each handle is `role="separator"` with `aria-orientation`, `aria-valuenow` (size of the panel before it), `aria-valuemin` and `aria-valuemax`; the group is `role="group"`.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/',
    states: '`focus-visible` (ring on the handle) and dragging are implemented; other states do not apply.',
    tokens: [['`--art-color-border-default`, `--art-border-width`', 'divider'], ['`--art-space-1`', 'hit area'], ['`--art-space-3`, `--art-space-4`, `--art-space-2-5`, `--art-radius-xs`, `--art-color-fg-muted`', 'grip'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Give panels sensible minimums', 'Let a pane collapse to nothing by accident'], ['Persist `layout-change` sizes per user', 'Reset the layout on every load']],
  },
};

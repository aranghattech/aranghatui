import type { ComponentStories } from '@artui/stories';

const icon = (d: string) => `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg></art-icon>`;
const calendar = icon('<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>');
const smile = icon('<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>');
const user = icon('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>');
const settings = icon('<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>');

const palette = `  <art-command-group label="Suggestions">\n    <art-command-item value="calendar">${calendar}Calendar</art-command-item>\n    <art-command-item value="emoji">${smile}Search Emoji</art-command-item>\n    <art-command-item value="calculator" disabled>Calculator</art-command-item>\n  </art-command-group>\n  <art-separator></art-separator>\n  <art-command-group label="Settings">\n    <art-command-item value="profile">${user}Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>\n    <art-command-item value="settings">${settings}Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>\n  </art-command-group>`;

export const stories: ComponentStories = {
  tag: 'art-command',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-command style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n${palette}\n</art-command>`, note: 'Type to filter; ↓ / ↑ move the highlight, Enter runs the item and `select` reports `{ value, item, element }`. Groups hide when none of their items match.' },
    filtered: { title: 'Filtered', render: () => `<art-command query="set" style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n${palette}\n</art-command>`, note: '`query` is the search text; the built-in filter is a case-insensitive match on the item text and `keywords`.' },
    empty: { title: 'Empty', render: () => `<art-command query="zzz" style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n${palette}\n  <span slot="empty">Nothing matches that.</span>\n</art-command>` },
  },
  render: () => `<art-command style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">\n${palette}\n</art-command>`,
  focusTarget: 'art-command input',
  docs: {
    description: 'Fast, composable, unstyled command menu. shadcn/ui parity: a search field over a filtered, keyboard-driven list.',
    usage: 'Put `art-command-item`s (in `art-command-group`s, with `art-separator`s between groups) inside. Listen to `select` for the run item (`detail.item` is the data object you bound to the item). For a ⌘K palette, put it inside a Dialog.',
    requires: ['base'],
    keyboard: [['Typing', 'Filters the list; the first match is highlighted'], ['↓ / ↑', 'Move the highlight (loops)'], ['Home / End', 'First / last item'], ['Enter', 'Run the highlighted item'], ['Escape', 'Left to the surrounding dialog']],
    roles: 'The search is `<input role="combobox">` with `aria-expanded`, `aria-controls` and `aria-activedescendant` on the highlighted `role="option"` (element reflection across the shadow boundary); the list is `role="listbox"`; groups are `role="group"` with their label.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
    states: '`focus-visible`: the search field takes focus without a ring — shadcn parity: the palette itself is the focused surface, the caret and the highlighted row show where you are. Highlighted and disabled items and the empty state are implemented. `hover`, `active`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-color-bg-popover`, `--art-color-fg-default`, `--art-radius-md`', 'panel'], ['`--art-color-border-default`, `--art-border-width`, `--art-space-9`, `--art-space-3`', 'search row'], ['`--art-color-bg-accent`, `--art-radius-sm`, `--art-space-2`, `--art-space-1-5`, `--art-space-1`', 'items and groups'], ['`--art-color-fg-muted`, `--art-font-size-xs`, `--art-font-tracking-wide`', 'placeholder, headings, shortcuts'], ['`--art-space-72`, `--art-space-6`', 'list height, empty state']],
    dos: [['Give items `keywords` for synonyms', 'Rely on exact spelling'], ['Group by intent (Navigation, Actions)', 'One long ungrouped list'], ['Bind data to `item` and read it back from `select`', 'Parse the value string']],
  },
};

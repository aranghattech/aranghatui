import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-kbd',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  examples: {
    basic: { title: 'Basic', render: () => `<art-kbd>⌘</art-kbd>\n<art-kbd>⇧</art-kbd>\n<art-kbd>⌥</art-kbd>\n<art-kbd>⌃</art-kbd>` },
    group: { title: 'Group', render: () => `<art-kbd-group>\n  <art-kbd>Ctrl</art-kbd>\n  <span>+</span>\n  <art-kbd>B</art-kbd>\n</art-kbd-group>`, note: '`art-kbd-group` lays out keys and separators in a row.' },
    'in-text': { title: 'In text', frame: 'stack', render: () => `<p>Press <art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>K</art-kbd></art-kbd-group> to open the command palette.</p>` },
    'in-button': { title: 'In a button', render: () => `<art-button variant="outline" size="sm">\n  Accept\n  <art-kbd slot="end">⏎</art-kbd>\n</art-button>\n<art-button variant="outline" size="sm">\n  Cancel\n  <art-kbd slot="end">Esc</art-kbd>\n</art-button>` },
  },
  render: () => `<art-kbd-group><art-kbd>⌘</art-kbd><art-kbd>K</art-kbd></art-kbd-group>`,
  docs: {
    description: 'Used to display textual user input from a keyboard. shadcn/ui parity, a native `<kbd>`.',
    usage: 'One key per `art-kbd`; wrap sequences in `art-kbd-group` with plain-text separators between keys.',
    keyboard: [['None', 'Not focusable']],
    roles: 'Native `<kbd>` semantics; screen readers read the key text as-is.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no hover, focus, active, disabled, loading or invalid state.',
    tokens: [['`--art-color-bg-muted`, `--art-color-fg-default`', 'key face and text'], ['`--art-radius-sm`, `--art-space-5`, `--art-space-1`', 'shape'], ['`--art-font-size-xs`, `--art-font-weight-medium`, `--art-font-family-sans`', 'text'], ['`--art-size-icon-sm`', 'icon keys']],
    dos: [['Show the platform\'s own symbols (⌘ on macOS, Ctrl elsewhere)', 'Hard-code one platform'], ['Keep one key per `art-kbd`', 'Put “Ctrl+B” in a single key']],
  },
};

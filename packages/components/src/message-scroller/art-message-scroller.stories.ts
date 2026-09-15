import type { ComponentStories } from '@artui/stories';

const turn = (i: number, mine: boolean, anchor = false) => `  <art-message-scroller-item message-id="m${i}"${anchor ? ' scroll-anchor' : ''}>\n    <art-message${mine ? ' align="end"' : ''}>\n      <art-avatar slot="avatar" size="sm" alt="">${mine ? 'ME' : 'AI'}</art-avatar>\n      <art-bubble${mine ? '' : ' variant="muted"'}>${mine ? `Question ${i}: could you expand on the previous point?` : `Answer ${i}: certainly. The main idea is that the reader's position is sacred, so the transcript only moves when they are already following the live edge.`}</art-bubble>\n    </art-message>\n  </art-message-scroller-item>`;
const thread = (n: number) => Array.from({ length: n }, (_, i) => turn(i + 1, i % 2 === 0, i % 2 === 0)).join('\n');
const box = `style="height: var(--art-space-24); height: calc(var(--art-space-20) * 4)"`;

export const stories: ComponentStories = {
  tag: 'art-message-scroller',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default', 'focus-visible'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-message-scroller aria-label="Chat" ${box}>\n${thread(8)}\n</art-message-scroller>`, note: 'Give the scroller a height. It opens on the latest message; scroll up (wheel, touch, keys or the scrollbar) and following stops and the jump button appears; press it (or `scrollToEnd()`) to follow again. Programmatic scrolls never change following.' },
    'open-at-start': { title: 'Opening at the start', render: () => `<art-message-scroller default-scroll-position="start" ${box}>\n${thread(6)}\n</art-message-scroller>`, note: '`default-scroll-position="start"` for reading a saved thread from the top; `"last-anchor"` opens on the last turn with context above it.' },
    streaming: { title: 'Following a stream', manual: true, render: () => `<art-message-scroller id="stream" ${box}>\n${thread(4)}\n</art-message-scroller>`, note: 'Append an `art-message-scroller-item` with `scroll-anchor` for each new turn: it lands near the top with a peek of the previous row, and the reply streaming below stays in view while the reader follows. Scrolling up stops following; the button brings them back.' },
    'load-earlier': { title: 'Loading earlier messages', manual: true, render: () => `<art-message-scroller id="history" ${box}>\n${thread(6)}\n</art-message-scroller>`, note: 'Rows inserted before the first one keep the visible row exactly where it was — no jump.' },
  },
  render: () => `<art-message-scroller aria-label="Chat" ${box}>\n${thread(6)}\n</art-message-scroller>`,
  focusTarget: 'art-message-scroller [part="viewport"]',
  docs: {
    description: 'A transcript scroller for streaming conversations that keeps the reader where they are. shadcn/ui parity: following, anchoring, prepend preservation and a jump-to-latest button.',
    usage: 'Wrap each turn in `art-message-scroller-item` (with `message-id`, and `scroll-anchor` on the rows that start a turn) and give the scroller a height. Append rows as they arrive; listen to `scroll-state-change` for `atEnd` / `following`; call `scrollToEnd()`, `scrollToStart()` or `scrollToMessage(id)`. React `onScrollStateChange`, Vue `@scroll-state-change`, Angular `(scrollStateChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Focus the viewport (then the jump button when it is shown)'], ['↑ / ↓, Page Up / Down, Home / End', 'Scroll the focused viewport; scrolling up stops following'], ['Enter / Space on the button', 'Jump to the latest message and follow again']],
    roles: 'The viewport is a focusable `role="region"` named by `label`; the transcript is `role="log"` with `aria-relevant="additions"` so new rows are announced; the jump button is inert and out of the tab order while hidden.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/feed/',
    states: '`focus-visible` on the viewport and the button; the button shows / hides with motion. `hover`, `active`, `disabled`, `loading` and `invalid` do not apply.',
    tokens: [['`--art-space-8`', 'gap between turns'], ['`--art-space-4`', 'button offset from the bottom'], ['`--art-color-border-default`', 'thin scrollbar'], ['`--art-control-height-sm`, `--art-color-secondary-solid`, `--art-color-secondary-fg`, `--art-color-secondary-hover`, `--art-shadow-raised`, `--art-radius-full`', 'jump button'], ['`--art-duration-base`, `--art-ease-out`', 'button motion'], ['`--art-ring-width`, `--art-ring-offset`, `--art-color-ring`', 'focus ring']],
    dos: [['Mark the row that starts a turn with `scroll-anchor`', 'Anchor every row'], ['Give rows a stable `message-id`', 'Re-create rows on every render'], ['Keep the scroller\'s height bounded by its parent', 'Let it grow with its content (nothing to scroll)']],
  },
};

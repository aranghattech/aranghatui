import type { ComponentStories } from '@artui/stories';

const avatar = (i: string) => `<art-avatar slot="avatar" size="sm" alt="">${i}</art-avatar>`;
const copy = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg></art-icon>`;
const retry = `<art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-message',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'thread',
  examples: {
    basic: { title: 'Basic', render: () => `<art-message>\n  ${avatar('AL')}\n  <art-bubble variant="muted">Hey! Are we still on for lunch tomorrow?</art-bubble>\n</art-message>\n<art-message align="end">\n  ${avatar('ME')}\n  <art-bubble>Yes — 12:30 at the usual place.</art-bubble>\n</art-message>`, note: 'The avatar hugs the bottom of the bubble; `align="end"` mirrors the row for the current user.' },
    group: { title: 'Grouped messages', render: () => `<art-message-group>\n  <art-message>\n    ${avatar('AL')}\n    <art-bubble-group>\n      <art-bubble variant="muted">I pushed the fix.</art-bubble>\n      <art-bubble variant="muted">CI is green.</art-bubble>\n      <art-bubble variant="muted">Ready for review whenever you are.</art-bubble>\n    </art-bubble-group>\n  </art-message>\n</art-message-group>`, note: 'One avatar for a run of bubbles: put an `art-bubble-group` inside the message.' },
    'header-footer': { title: 'Header and footer', render: () => `<art-message>\n  ${avatar('AL')}\n  <span slot="header">Ada Lovelace · 09:41</span>\n  <art-bubble variant="muted">The analytical engine has no pretensions to originate anything.</art-bubble>\n  <span slot="footer">Delivered</span>\n</art-message>\n<art-message align="end">\n  ${avatar('ME')}\n  <span slot="header">You · 09:42</span>\n  <art-bubble>It can do whatever we know how to order it to perform.</art-bubble>\n  <art-marker slot="footer" role="status">Sending…</art-marker>\n</art-message>`, note: 'Header and footer are muted small text aligned with the bubble\'s padding (and with the text for a ghost bubble). Use `art-marker` with `role="status"` for progress the screen reader should announce.' },
    actions: { title: 'Action buttons', render: () => `<art-message>\n  ${avatar('AI')}\n  <art-bubble variant="ghost">Here is a summary of the document you shared: it covers three quarters of results and ends with next year's targets.</art-bubble>\n  <art-button slot="footer" variant="ghost" size="sm" icon aria-label="Copy">${copy}</art-button>\n  <art-button slot="footer" variant="ghost" size="sm" icon aria-label="Retry">${retry}</art-button>\n</art-message>`, note: 'Footer buttons are icon-only ghost buttons with an `aria-label`. A `ghost` bubble suits assistant prose.' },
    attachments: { title: 'Attachments', render: () => `<art-message align="end">\n  ${avatar('ME')}\n  <art-bubble>Here are the files.</art-bubble>\n  <art-attachment name="q3-results.pdf" description="PDF · 1.2 MB"></art-attachment>\n</art-message>`, note: 'Anything in the default slot stacks under the bubble and follows the alignment.' },
  },
  render: () => `<art-message>\n  ${avatar('AL')}\n  <span slot="header">Ada Lovelace</span>\n  <art-bubble variant="muted">A message with a header, a bubble and a footer.</art-bubble>\n  <span slot="footer">09:41</span>\n</art-message>`,
  docs: {
    description: 'Displays a message in a conversation with avatar, header, bubble and footer. shadcn/ui parity: a layout wrapper around Bubble.',
    usage: 'Put an `art-avatar` in the `avatar` slot, text in `header` / `footer`, and an `art-bubble` (or `art-bubble-group`, attachments) in the default slot. `align="end"` for the current user. Wrap runs from one sender in `art-message-group`.',
    requires: ['base'],
    keyboard: [['Tab', 'Reaches buttons and links inside the message (footer actions, link bubbles)']],
    roles: 'A layout wrapper: the content decides the semantics. Icon-only footer buttons need `aria-label`; use `art-marker` with `role="status"` for in-progress states so they are announced.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/',
    states: 'None of the interactive states apply to the row itself; buttons and link bubbles inside carry their own.',
    tokens: [['`--art-space-2`, `--art-space-2-5`, `--art-space-3`, `--art-space-8`', 'row gap, column gap, header / footer inset, avatar lift'], ['`--art-font-size-sm`, `--art-font-size-xs`, `--art-font-weight-medium`, `--art-color-fg-muted`', 'text, header and footer']],
    dos: [['Show one avatar per run of messages (group them)', 'Repeat the avatar on every bubble'], ['Put timestamps and status in the header / footer', 'Put them inside the bubble text'], ['Label icon-only actions', 'Ship unlabeled icon buttons']],
  },
};

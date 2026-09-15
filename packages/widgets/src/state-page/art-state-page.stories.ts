import type { ComponentStories } from '@artui/stories';

const icon = (d: string) => `<art-icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg></art-icon>`;
const folder = icon('<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>');
const compass = icon('<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>');
const alert = icon('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>');

export const stories: ComponentStories = {
  tag: 'art-state-page',
  tier: 'widgets',
  variants: ['empty', 'not-found', 'error'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'shell',
  examples: {
    basic: { title: 'Empty', render: () => `<art-state-page>\n  ${folder}\n  <art-button slot="actions">Create project</art-button>\n</art-state-page>`, note: 'The default `kind="empty"` copy with a media icon and an action. Override `heading` and `description` for your own words.' },
    'not-found': { title: 'Not found (404)', render: () => `<art-state-page kind="not-found" code="404">\n  ${compass}\n  <art-button slot="actions" href="#">Go home</art-button>\n  <art-button slot="actions" variant="outline" href="#">Contact support</art-button>\n</art-state-page>`, note: '`kind="not-found"` with `code="404"`; the code sits above the heading.' },
    error: { title: 'Error (500)', render: () => `<art-state-page kind="error" code="500" description="Our servers had a hiccup. Try again in a moment — if it keeps happening, tell us.">\n  ${alert}\n  <art-button slot="actions">Try again</art-button>\n  <span style="font-size: var(--art-font-size-xs); color: var(--art-color-fg-muted)">Request id 8f3c-21ab</span>\n</art-state-page>`, note: '`kind="error"` with `code="500"`, a custom description and extra content (a request id) in the default slot.' },
  },
  render: ({ variant }) => `<art-state-page kind="${variant}"${variant === 'not-found' ? ' code="404"' : variant === 'error' ? ' code="500"' : ''}>\n  ${variant === 'not-found' ? compass : variant === 'error' ? alert : folder}\n  <art-button slot="actions">${variant === 'empty' ? 'Create project' : variant === 'not-found' ? 'Go home' : 'Try again'}</art-button>\n</art-state-page>`,
  docs: {
    description: 'Full-page empty, 404 and 500 states: a centred Empty with an optional status code, default copy per kind, media and actions. Compiled widget (ADR-0010).',
    usage: 'Place `<art-state-page kind="not-found" code="404">` where the page content would be; put an `art-icon` in `media`, buttons in `actions`, anything else in the default slot. `heading` and `description` override the default copy. React `<StatePage kind code>`, Vue and Angular likewise.',
    requires: ['base'],
    keyboard: [['Tab', 'The action buttons and any link in the content'], ['Enter / Space', 'Activate']],
    roles: 'Static content: the `art-empty` renders the heading and description; the code is plain text before the heading so it is read with it. Actions are the slotted buttons.',
    apg: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html',
    states: 'Three kinds (empty, not-found, error). Interactive states belong to the actions.',
    tokens: [['`--art-container-md`, `--art-space-6`, `--art-space-2`', 'width, padding, gaps'], ['`--art-font-size-4xl`, `--art-font-line-height-4xl`, `--art-font-tracking-tight`, `--art-font-weight-semibold`, `--art-color-fg-muted`', 'the status code'], ['(Empty tokens)', 'media box, heading, description']],
    dos: [['Say what happened and what to do next', 'Show a bare "404"'], ['Offer one primary way out', 'List every page of the app'], ['Keep the code for real HTTP states', 'Invent codes for empty lists']],
  },
};

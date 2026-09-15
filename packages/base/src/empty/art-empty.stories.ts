import type { ComponentStories } from '@artui/stories';

const folder = `<art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></art-icon>`;
const bell = `<art-icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg></art-icon>`;

export const stories: ComponentStories = {
  tag: 'art-empty',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: false,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-empty>\n  ${folder}\n  <h3 slot="title">No projects yet</h3>\n  <p slot="description">You haven't created any projects yet. Get started by creating your first project.</p>\n  <art-button>Create project</art-button>\n</art-empty>`, note: 'An `art-icon` in the `media` slot gets a muted rounded box; title, description and actions stack under it.' },
    'with-actions': { title: 'With actions', render: () => `<art-empty>\n  ${bell}\n  <h3 slot="title">No notifications</h3>\n  <p slot="description">You're all caught up. New notifications will appear here.</p>\n  <art-button-group>\n    <art-button variant="outline">Settings</art-button>\n    <art-button variant="outline">Learn more</art-button>\n  </art-button-group>\n</art-empty>` },
    'without-media': { title: 'Without media', render: () => `<art-empty>\n  <h3 slot="title">Nothing to show</h3>\n  <p slot="description">Try adjusting your filters.</p>\n  <art-button variant="link">Clear filters</art-button>\n</art-empty>` },
    'in-card': { title: 'In a card', render: () => `<art-card>\n  <art-empty>\n    ${folder}\n    <h3 slot="title">No files</h3>\n    <p slot="description">Upload a file to get started.</p>\n    <art-button variant="outline">Upload</art-button>\n  </art-empty>\n</art-card>` },
  },
  render: () => `<art-empty>\n  ${folder}\n  <h3 slot="title">No projects yet</h3>\n  <p slot="description">Create your first project to get started.</p>\n  <art-button>Create project</art-button>\n</art-empty>`,
  docs: {
    description: 'Use the Empty component to display a empty state. shadcn/ui parity.',
    usage: 'Slot an icon or image as `media`, a heading as `title`, text as `description`, and the actions in the default slot.',
    keyboard: [['None', 'The state itself is not focusable; its buttons are']],
    roles: 'No role. Use a real heading for the title; the icon is decorative (`art-icon` without `label` is `aria-hidden`).',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no states.',
    tokens: [['`--art-space-6`, `--art-space-12`, `--art-space-4`, `--art-space-2`', 'padding and gaps'], ['`--art-space-10`, `--art-radius-lg`, `--art-color-bg-muted`', 'icon box'], ['`--art-font-size-lg`, `--art-font-weight-medium`, `--art-font-tracking-tight`', 'title'], ['`--art-font-size-sm`, `--art-color-fg-muted`', 'description'], ['`--art-container-sm`', 'text measure']],
    dos: [['Say what to do next and offer the action', 'Show “No data” and nothing else'], ['Keep the description to one sentence', 'Explain the whole feature in the empty state']],
  },
};

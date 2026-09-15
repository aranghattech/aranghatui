import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-card',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'stack',
  examples: {
    basic: { title: 'Basic', render: () => `<art-card>\n  <h3 slot="title">Card title</h3>\n  <p slot="description">Card description</p>\n  <p>Card content</p>\n  <p slot="footer">Card footer</p>\n</art-card>`, note: 'Title, description, content and footer each go in their slot; a region that is not filled takes no space.' },
    'with-action': { title: 'With action', render: () => `<art-card>\n  <h3 slot="title">Notifications</h3>\n  <p slot="description">You have 3 unread messages.</p>\n  <art-button slot="action" variant="ghost" size="sm">Mark all read</art-button>\n  <p>Your inbox is quiet today.</p>\n</art-card>` },
    login: { title: 'Login form', render: () => `<art-card>\n  <h3 slot="title">Login to your account</h3>\n  <p slot="description">Enter your email below to login to your account</p>\n  <art-button slot="action" variant="link">Sign up</art-button>\n  <art-field-group>\n    <art-field>\n      <art-label slot="label">Email</art-label>\n      <art-input type="email" placeholder="m@example.com"></art-input>\n    </art-field>\n    <art-field>\n      <art-label slot="label">Password</art-label>\n      <art-input type="password"></art-input>\n    </art-field>\n  </art-field-group>\n  <art-button slot="footer">Login</art-button>\n  <art-button slot="footer" variant="outline">Login with Google</art-button>\n</art-card>`, note: 'Cards compose with Field, Input and Button; the footer lays its buttons out in a row.' },
    'content-only': { title: 'Content only', render: () => `<art-card>\n  <p>Just content — no header, no footer.</p>\n</art-card>` },
  },
  render: () => `<art-card>\n  <h3 slot="title">Card title</h3>\n  <p slot="description">Card description</p>\n  <p>Card content</p>\n  <p slot="footer">Card footer</p>\n</art-card>`,
  docs: {
    description: 'Displays a card with header, content, and footer. shadcn/ui parity.',
    usage: 'Slot a heading as `title`, text as `description`, a control as `action`, anything as content, and buttons as `footer`. Empty regions collapse.',
    keyboard: [['None', 'The card itself is not focusable; its controls are']],
    roles: 'No role — a card is a visual grouping. Use a real heading element for the title so the page outline stays meaningful.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no states.',
    tokens: [['`--art-color-bg-surface`, `--art-color-fg-default`', 'surface and text'], ['`--art-color-border-default`, `--art-border-width`, `--art-radius-xl`, `--art-shadow-raised`', 'frame'], ['`--art-space-6`, `--art-space-2`', 'padding and gaps'], ['`--art-font-weight-semibold`, `--art-font-size-sm`, `--art-color-fg-muted`', 'title and description']],
    dos: [['One topic per card', 'Nest cards inside cards'], ['Use a heading element for the title', 'Style a `<div>` to look like a heading'], ['Keep footer actions to two', 'Line up five buttons in a footer']],
  },
};

import type { ComponentStories } from '@artui/stories';

export const stories: ComponentStories = {
  tag: 'art-typography',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'stack',
  examples: {
    article: { title: 'Article', render: () => `<art-typography>\n  <h1>The Joke Tax Chronicles</h1>\n  <p class="lead">Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.</p>\n  <h2>The King's Plan</h2>\n  <p>The king thought long and hard, and finally came up with <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.</p>\n  <blockquote>"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."</blockquote>\n  <h3>The Joke Tax</h3>\n  <p>The king's subjects were not amused. They grumbled and complained, but the king was firm:</p>\n  <ul>\n    <li>1st level of puns: 5 gold coins</li>\n    <li>2nd level of jokes: 10 gold coins</li>\n    <li>3rd level of one-liners: 20 gold coins</li>\n  </ul>\n  <p>Run <code>joke --tax</code> to see the current rate.</p>\n</art-typography>`, note: 'Plain HTML inside `art-typography` — headings, paragraphs, lists, quotes, links and inline code pick up the scale.' },
    headings: { title: 'Headings', render: () => `<art-typography>\n  <h1>Heading one</h1>\n  <h2>Heading two</h2>\n  <h3>Heading three</h3>\n  <h4>Heading four</h4>\n</art-typography>` },
    'text-styles': { title: 'Text styles', render: () => `<art-typography>\n  <p class="lead">A modal dialog that interrupts the user with important content and expects a response.</p>\n  <p class="large">Are you absolutely sure?</p>\n  <p class="small">Email address</p>\n  <p class="muted">Enter your email address.</p>\n</art-typography>`, note: '`lead`, `large`, `small` and `muted` are the four text styles shadcn documents; use them on a `<p>` or `<span>`.' },
    list: { title: 'Lists', render: () => `<art-typography>\n  <ol>\n    <li>Install the package</li>\n    <li>Import the token sheet</li>\n    <li>Use the components</li>\n  </ol>\n  <hr>\n  <ul>\n    <li>HTML</li>\n    <li>React, Vue and Angular</li>\n  </ul>\n</art-typography>` },
  },
  render: () => `<art-typography>\n  <h2>Heading two</h2>\n  <p>A paragraph with <a href="#">a link</a> and <code>code</code>.</p>\n  <ul>\n    <li>One</li>\n    <li>Two</li>\n  </ul>\n</art-typography>`,
  docs: {
    description: 'Styles for headings, paragraphs, lists and other prose. shadcn/ui parity, applied to native HTML.',
    usage: 'Wrap prose in `art-typography` and write ordinary HTML. Add `class="lead|large|small|muted"` for the four text styles. Outside the wrapper nothing is styled, so app chrome keeps its own type.',
    keyboard: [['None', 'Links inside are focusable as usual']],
    roles: 'Native semantics — real headings, lists and quotes. Keep heading levels in order.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    states: 'Not interactive — no states.',
    tokens: [['`--art-font-size-{4xl,3xl,2xl,xl,lg,md,sm}`', 'scale'], ['`--art-font-weight-{bold,semibold,medium}`, `--art-font-tracking-tight`', 'headings'], ['`--art-font-line-height-{xs,md}`', 'leading'], ['`--art-space-{10,8,6,4,2,1,0-5}`', 'rhythm'], ['`--art-color-border-default`, `--art-border-width`', 'h2 rule, blockquote bar, hr'], ['`--art-color-bg-muted`, `--art-radius-xs`, `--art-font-family-mono`', 'inline code'], ['`--art-color-fg-link`', 'links'], ['`--art-color-fg-muted`', 'lead and muted']],
    dos: [['Use it for long-form content', 'Wrap app UI (forms, tables) in it'], ['Keep one `<h1>` per page', 'Skip heading levels for size']],
  },
};

# Mega Menu

A site navigation bar whose triggers open wide panels of named link groups, laid out in columns or rows, with an optional aside and footer. Built on the pattern of shadcn's full mega menu example.

## Preview

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Platform" layout="rows" max-rows="2">
      <art-mega-menu-group label="Core features">
        <art-mega-menu-link href="#ai-assistant"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>AI Assistant<span slot="description">Intelligent code suggestions</span></art-mega-menu-link>
        <art-mega-menu-link href="#code-editor"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Code Editor<span slot="description">Advanced syntax highlighting</span></art-mega-menu-link>
        <art-mega-menu-link href="#design-tools"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/></svg>Design Tools<span slot="description">Visual design system builder</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Advanced">
        <art-mega-menu-link href="#analytics"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>Analytics<span slot="description">Real-time performance insights</span></art-mega-menu-link>
        <art-mega-menu-link href="#security"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Security<span slot="description">Enterprise-grade protection</span></art-mega-menu-link>
        <art-mega-menu-link href="#automation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Automation<span slot="description">Workflow automation tools</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Resources">
        <art-mega-menu-link href="#documentation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>Documentation</art-mega-menu-link>
        <art-mega-menu-link href="#video-tutorials"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>Video Tutorials</art-mega-menu-link>
        <art-mega-menu-link href="#guides"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>Guides</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Company">
        <art-mega-menu-link href="#about">About</art-mega-menu-link>
        <art-mega-menu-link href="#blog">Blog</art-mega-menu-link>
        <art-mega-menu-link href="#careers">Careers</art-mega-menu-link>
      </art-mega-menu-group>
      <art-card slot="aside">
        <span slot="title">Getting started</span>
        <span slot="description">Learn the basics in five minutes.</span>
        <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
      </art-card>
      <art-card slot="aside">
        <span slot="title">Need help?</span>
        <span slot="description">Talk to our sales team.</span>
        <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
      </art-card>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

## Installation

Lives in `@aranghat/extended` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/basic.ts [Angular]
:::

Put `art-mega-menu-item`s in the bar: a `label` makes a trigger whose default slot is the panel, `href` makes a plain link. Fill a panel with `art-mega-menu-group`s (a `label` names each group) of `art-mega-menu-link`s (title, `description` slot, `icon` slot). Put your own trigger content — a burger icon, a logo — in the item's `trigger` slot (with `label` as its accessible name) and drop the chevron with `hide-chevron`. Choose the flow with `layout` and cap it with `max-columns` / `max-rows`; widen the panel with `full-width` and its content with `full-width-content`, on the bar for every panel or on one item. Listen to `open-change` on items: React `<MegaMenuItem onOpenChange>`, Vue `@open-change`, Angular `(openChange)`.

## Examples

### Basic

shadcn's full mega menu: four named groups, two to a column, beside an aside of two cards. Items with a `label` are triggers whose default slot is the panel; items with `href` are plain links. Hover, click, Enter / Space or ↓ opens a panel; ← / → move along the bar.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Platform" layout="rows" max-rows="2">
      <art-mega-menu-group label="Core features">
        <art-mega-menu-link href="#ai-assistant"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>AI Assistant<span slot="description">Intelligent code suggestions</span></art-mega-menu-link>
        <art-mega-menu-link href="#code-editor"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Code Editor<span slot="description">Advanced syntax highlighting</span></art-mega-menu-link>
        <art-mega-menu-link href="#design-tools"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/></svg>Design Tools<span slot="description">Visual design system builder</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Advanced">
        <art-mega-menu-link href="#analytics"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>Analytics<span slot="description">Real-time performance insights</span></art-mega-menu-link>
        <art-mega-menu-link href="#security"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Security<span slot="description">Enterprise-grade protection</span></art-mega-menu-link>
        <art-mega-menu-link href="#automation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Automation<span slot="description">Workflow automation tools</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Resources">
        <art-mega-menu-link href="#documentation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>Documentation</art-mega-menu-link>
        <art-mega-menu-link href="#video-tutorials"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>Video Tutorials</art-mega-menu-link>
        <art-mega-menu-link href="#guides"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>Guides</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Company">
        <art-mega-menu-link href="#about">About</art-mega-menu-link>
        <art-mega-menu-link href="#blog">Blog</art-mega-menu-link>
        <art-mega-menu-link href="#careers">Careers</art-mega-menu-link>
      </art-mega-menu-group>
      <art-card slot="aside">
        <span slot="title">Getting started</span>
        <span slot="description">Learn the basics in five minutes.</span>
        <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
      </art-card>
      <art-card slot="aside">
        <span slot="title">Need help?</span>
        <span slot="description">Talk to our sales team.</span>
        <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
      </art-card>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/basic.ts [Angular]
:::

### Groups in columns

`layout="columns"` (the default) sets the groups side by side and each group lists its links top to bottom. With no `max-columns`, every group gets a column.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres<span slot="description">Serverless SQL</span></art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value<span slot="description">Low-latency cache</span></art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob<span slot="description">Files at any size</span></art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/columns.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/columns.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/columns.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/columns.ts [Angular]
:::

### Maximum columns

`max-columns` caps how many groups sit side by side; the rest start a new line, filling left to right.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products" max-columns="3">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor</art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy</art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics</art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs</art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall</art-mega-menu-link>
        <art-mega-menu-link href="#access">Access</art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres</art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value</art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="AI">
        <art-mega-menu-link href="#models">Models</art-mega-menu-link>
        <art-mega-menu-link href="#agents">Agents</art-mega-menu-link>
        <art-mega-menu-link href="#evals">Evals</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Collaborate">
        <art-mega-menu-link href="#comments">Comments</art-mega-menu-link>
        <art-mega-menu-link href="#toolbar">Toolbar</art-mega-menu-link>
        <art-mega-menu-link href="#flags">Flags</art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/max-columns.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/max-columns.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/max-columns.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/max-columns.ts [Angular]
:::

### Groups in rows

`layout="rows"` stacks the groups. `columns` on a group spreads its own links across the row, so each group reads as a band.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products" layout="rows">
      <art-mega-menu-group label="Build" columns="3">
        <art-mega-menu-link href="#editor">Editor</art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy</art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe" columns="3">
        <art-mega-menu-link href="#analytics">Analytics</art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs</art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure" columns="3">
        <art-mega-menu-link href="#firewall">Firewall</art-mega-menu-link>
        <art-mega-menu-link href="#access">Access</art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log</art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/rows.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/rows.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/rows.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/rows.ts [Angular]
:::

### Maximum rows

`max-rows` caps how many groups stack in a column; the rest start a new column, filling top to bottom. The reference layout in Basic is `layout="rows" max-rows="2"`.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products" layout="rows" max-rows="2">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor</art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy</art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics</art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs</art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall</art-mega-menu-link>
        <art-mega-menu-link href="#access">Access</art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres</art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value</art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="AI">
        <art-mega-menu-link href="#models">Models</art-mega-menu-link>
        <art-mega-menu-link href="#agents">Agents</art-mega-menu-link>
        <art-mega-menu-link href="#evals">Evals</art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Collaborate">
        <art-mega-menu-link href="#comments">Comments</art-mega-menu-link>
        <art-mega-menu-link href="#toolbar">Toolbar</art-mega-menu-link>
        <art-mega-menu-link href="#flags">Flags</art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/max-rows.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/max-rows.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/max-rows.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/max-rows.ts [Angular]
:::

### Full-width panel

`full-width` makes the panel span the viewport, hanging from the bottom edge of the bar. Its content stays in a centred container, `--art-mega-menu-content-width` wide (72rem by default): set that to your page container so the panel lines up with the page. Set it on `art-mega-menu` for every panel, or on one item.

<Preview frame="inline">
  <art-mega-menu full-width>
    <art-mega-menu-item label="Products" max-columns="4">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres<span slot="description">Serverless SQL</span></art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value<span slot="description">Low-latency cache</span></art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob<span slot="description">Files at any size</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/full-width.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/full-width.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/full-width.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/full-width.ts [Angular]
:::

### Full-width content

`full-width-content` lets the content fill the panel instead of the centred container, and the groups share the whole width. It is independent of `full-width`, and like it can be set on the bar or on one item.

<Preview frame="inline">
  <art-mega-menu full-width full-width-content>
    <art-mega-menu-item label="Products" max-columns="4">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres<span slot="description">Serverless SQL</span></art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value<span slot="description">Low-latency cache</span></art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob<span slot="description">Files at any size</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/full-width-content.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/full-width-content.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/full-width-content.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/full-width-content.ts [Angular]
:::

### Widths per item

Width settings on an item apply to that panel alone: here Products spans the viewport while Company stays a small panel under its trigger.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products" full-width max-columns="3">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Company">
      <art-mega-menu-group label="Company">
        <art-mega-menu-link href="#about">About</art-mega-menu-link>
        <art-mega-menu-link href="#blog">Blog</art-mega-menu-link>
        <art-mega-menu-link href="#careers">Careers</art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/per-item.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/per-item.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/per-item.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/per-item.ts [Angular]
:::

### With an aside and a footer

The `aside` slot sits beside the groups (`--art-mega-menu-aside-width`, 16rem by default) and holds whatever you put there — here two `art-card`s. The `footer` slot is a strip under the groups for a "view all" link or a changelog note. Both disappear when empty.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products" max-columns="2">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-card slot="aside">
        <span slot="title">Getting started</span>
        <span slot="description">Learn the basics in five minutes.</span>
        <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
      </art-card>
      <art-card slot="aside">
        <span slot="title">Need help?</span>
        <span slot="description">Talk to our sales team.</span>
        <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
      </art-card>
      <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/aside-footer.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/aside-footer.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/aside-footer.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/aside-footer.ts [Angular]
:::

### Icon trigger

The `trigger` slot replaces the label with your own content — here a burger icon, with `hide-chevron` because the icon already says "menu". It sits inside the item's own button, so the keyboard, `aria-expanded` and the focus ring work as before, and an icon-only trigger becomes a square control. `label` is then the button's accessible name: always set it.

<Preview frame="inline">
  <art-mega-menu full-width>
    <art-mega-menu-item label="Menu" hide-chevron max-columns="4">
      <svg slot="trigger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Secure">
        <art-mega-menu-link href="#firewall">Firewall<span slot="description">Block bad traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#access">Access<span slot="description">Roles and SSO</span></art-mega-menu-link>
        <art-mega-menu-link href="#audit-log">Audit log<span slot="description">Who changed what</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Store">
        <art-mega-menu-link href="#postgres">Postgres<span slot="description">Serverless SQL</span></art-mega-menu-link>
        <art-mega-menu-link href="#key-value">Key-value<span slot="description">Low-latency cache</span></art-mega-menu-link>
        <art-mega-menu-link href="#blob">Blob<span slot="description">Files at any size</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</art-button>
    </art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/icon-trigger.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/icon-trigger.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/icon-trigger.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/icon-trigger.ts [Angular]
:::

### Logo trigger

A logo, or a logo and a name, can open the menu too. Several elements may share the `trigger` slot; an `<svg>` without a `width` takes the icon size, one with a `width` keeps it. The chevron stays unless `hide-chevron` is set. On an `href` item the slot works the same way, for a logo that links home.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Acme">
      <svg slot="trigger" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 22 20H2z"/></svg>
      <span slot="trigger">Acme</span>
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor">Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-mega-menu-group label="Observe">
        <art-mega-menu-link href="#analytics">Analytics<span slot="description">Real-time traffic</span></art-mega-menu-link>
        <art-mega-menu-link href="#logs">Logs<span slot="description">Search every request</span></art-mega-menu-link>
        <art-mega-menu-link href="#alerts">Alerts<span slot="description">Know before users do</span></art-mega-menu-link>
      </art-mega-menu-group>
      <art-card slot="aside">
        <span slot="title">Getting started</span>
        <span slot="description">Learn the basics in five minutes.</span>
        <art-button slot="footer" size="sm" full>Watch tutorial</art-button>
      </art-card>
      <art-card slot="aside">
        <span slot="title">Need help?</span>
        <span slot="description">Talk to our sales team.</span>
        <art-button slot="footer" size="sm" variant="outline" full>Contact sales</art-button>
      </art-card>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing"></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/logo-trigger.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/logo-trigger.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/logo-trigger.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/logo-trigger.ts [Angular]
:::

### Current page

`active` marks the current page with `aria-current="page"` and a tint — on a bar link or on a link inside a panel.

<Preview frame="inline">
  <art-mega-menu>
    <art-mega-menu-item label="Products">
      <art-mega-menu-group label="Build">
        <art-mega-menu-link href="#editor" active>Editor<span slot="description">Write and review together</span></art-mega-menu-link>
        <art-mega-menu-link href="#deploy">Deploy<span slot="description">Ship every commit</span></art-mega-menu-link>
        <art-mega-menu-link href="#functions">Functions<span slot="description">Run code at the edge</span></art-mega-menu-link>
      </art-mega-menu-group>
    </art-mega-menu-item>
    <art-mega-menu-item label="Pricing" href="#pricing" active></art-mega-menu-item>
    <art-mega-menu-item label="Docs" href="#docs"></art-mega-menu-item>
  </art-mega-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/mega-menu/active.html [HTML]
<<< ../../../sandbox/react/src/samples/mega-menu/active.tsx [React]
<<< ../../../sandbox/vue/src/samples/mega-menu/active.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/mega-menu/active.ts [Angular]
:::

## API Reference

<ApiReference tag="art-mega-menu" />

<ApiReference tag="art-mega-menu-item" nested />

<ApiReference tag="art-mega-menu-group" nested />

<ApiReference tag="art-mega-menu-link" nested />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Move along the bar, then into an open panel and through its links |
| `← / →` | Move between bar entries |
| `↓ / Enter / Space` | On a trigger: open the panel and focus its first link |
| `↓ / ↑` | In a panel: next / previous link (↑ from the first returns to the trigger) |
| `Home / End` | In a panel: first / last link |
| `Escape` | Close and return to the trigger |

A `<nav>` named by `label` holding a list of `listitem`s. Triggers are buttons with `aria-expanded` and `aria-controls`; bar links and panel links carry `aria-current="page"` when `active`. Each group is a `role="list"` named by its label (`aria-labelledby`), and each link is one of its `listitem`s. Panels hold links, not commands, so they carry no menu roles (the disclosure navigation pattern). Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/).

States: `hover` and `focus-visible` on triggers and links, open and closed panels with enter and exit motion, `active` links. `disabled`, `loading` and `invalid` do not apply to navigation.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-9`, `--art-space-4`, `--art-space-2`, `--art-radius-md`, `--art-font-size-sm`, `--art-font-weight-medium`` | bar entries |
| ``--art-control-height-md`, `--art-size-icon-md`` | icon-only triggers |
| ``--art-color-bg-canvas`, `--art-color-bg-accent`` | entry background, hover, open and active tints |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-border-width`, `--art-shadow-popover`` | panels |
| ``--art-space-6`, `--art-space-64`, `--art-container-6xl`` | panel padding, group gaps, column and aside width, content container |
| ``--art-color-fg-muted`, `--art-font-size-xs`, `--art-size-icon-md`` | group labels, link descriptions and icons |
| ``--art-color-bg-muted`, `--art-space-3`` | footer strip |
| ``--art-duration-base`, `--art-duration-fast`, `--art-ease-out`, `--art-duration-hover-open`, `--art-duration-hover-close`` | panel motion, chevron and hover delays |

## Do / Don't

| Do | Don't |
|---|---|
| Name every group — the name is the list's accessible name | Leave a group of links without a label |
| Give an icon or logo trigger a `label` — it becomes the button's name | Ship a burger button that a screen reader announces as "button" |
| Cap the flow with `max-columns` / `max-rows` so the panel keeps its shape | Let ten groups run across one row |
| Set `--art-mega-menu-content-width` to your page container with `full-width` | Let full-width content drift out of line with the page |
| Swap the bar for a Sheet with an Accordion on small screens | Squeeze a desktop bar into a phone header |

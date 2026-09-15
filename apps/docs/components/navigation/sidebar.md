# Sidebar

A composable, collapsible app sidebar. shadcn/ui parity: provider, sidebar, groups, menus, trigger, rail, inset; off-canvas below the md breakpoint.

## Preview

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

## Installation

Lives in `@aranghat/navigation` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/navigation @aranghat/base @aranghat/navigation-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/basic.ts [Angular]
:::

Wrap the page in `art-sidebar-provider`, put an `art-sidebar` (header / default / footer slots) and an `art-sidebar-inset` inside. Groups hold `art-sidebar-menu`s of `art-sidebar-menu-item`s, each with an `art-sidebar-menu-button` (`href`, `active`, `tooltip`) and optional `action` / `badge` slots or a nested `art-sidebar-menu-sub`. `art-sidebar-trigger` toggles from anywhere. Listen to `open-change` on the provider; React `<SidebarProvider open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`. Width: `--art-sidebar-width` on the provider.

## Examples

### Basic

An `art-sidebar-provider` holds the sidebar and the `art-sidebar-inset` (the page). Groups hold menus of items; a button with `href` is a link, `active` marks the current page, `badge` and `action` slots sit at the end of a row. `art-sidebar-trigger` (and ⌘ / Ctrl + B) toggles; below the md breakpoint the sidebar opens as a sheet.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/basic.ts [Angular]
:::

### Collapse to icons

`collapsible="icon"` keeps a rail of icons when collapsed; `tooltip` on a button names it there. `open="false"` on the provider starts collapsed.

<Preview frame="shell">
  <art-sidebar-provider open="false">
  <art-sidebar collapsible="icon">
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/icon.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/icon.ts [Angular]
:::

### Floating

`variant="floating"` renders the sidebar as a bordered card inset from the edge.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar variant="floating">
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/floating.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/floating.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/floating.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/floating.ts [Angular]
:::

### Inset

`variant="inset"` paints the frame in the sidebar colour and floats the page as a card.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar variant="inset">
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/inset.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/inset.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/inset.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/inset.ts [Angular]
:::

### Right side

`side="right"` (put the sidebar after the inset). Sides are logical: `left` is the inline start and mirrors in RTL.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  <art-sidebar side="right">
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/right.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/right.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/right.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/right.ts [Angular]
:::

### Collapsible groups

An item with a nested `art-sidebar-menu-sub` becomes a disclosure: its button toggles `open` (chevron, `aria-expanded`). Nested lists hide when the sidebar collapses to icons.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Documentation">
      <art-sidebar-menu>
        <art-sidebar-menu-item open>
          <art-sidebar-menu-button tooltip="Getting started"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Getting started</span></art-sidebar-menu-button>
          <art-sidebar-menu-sub>
            <art-sidebar-menu-item><art-sidebar-menu-button href="#" active><span>Installation</span></art-sidebar-menu-button></art-sidebar-menu-item>
            <art-sidebar-menu-item><art-sidebar-menu-button href="#"><span>Project structure</span></art-sidebar-menu-button></art-sidebar-menu-item>
          </art-sidebar-menu-sub>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button tooltip="Building"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Building your application</span></art-sidebar-menu-button>
          <art-sidebar-menu-sub>
            <art-sidebar-menu-item><art-sidebar-menu-button href="#"><span>Routing</span></art-sidebar-menu-button></art-sidebar-menu-item>
            <art-sidebar-menu-item><art-sidebar-menu-button href="#"><span>Data fetching</span></art-sidebar-menu-button></art-sidebar-menu-item>
          </art-sidebar-menu-sub>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/submenu.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/submenu.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/submenu.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/submenu.ts [Angular]
:::

### Rail

`rail` adds a thin strip on the outer edge that toggles the sidebar on click (the line shows on hover).

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar rail>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/rail.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/rail.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/rail.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/rail.ts [Angular]
:::

### With TopNav

An `art-top-nav` at the top of the inset with the trigger in its `brand` slot gives the classic app shell.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
          <span slot="badge">24</span>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg><span>Search</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-group label="Projects">
      <art-button slot="action" variant="ghost" icon size="sm" aria-label="Add project"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></art-button>
      <art-sidebar-menu>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Design Engineering"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Design Engineering</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item action-on-hover>
          <art-sidebar-menu-button href="#" tooltip="Sales &amp; Marketing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Sales &amp; Marketing</span></art-sidebar-menu-button>
          <art-button slot="action" variant="ghost" icon size="sm" aria-label="More"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></art-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <art-top-nav label="Page">
      <art-sidebar-trigger slot="brand"></art-sidebar-trigger>
      <a href="#" aria-current="page">Overview</a>
      <a href="#">Reports</a>
      <a href="#">Members</a>
      <art-button slot="end" variant="outline" size="sm">Share</art-button>
    </art-top-nav>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/app.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/app.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/app.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/app.ts [Angular]
:::

### Loading

While data loads, rows hold `art-skeleton`s instead of buttons (shadcn `SidebarMenuSkeleton`).

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-sidebar-menu slot="header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group label="Projects">
      <art-sidebar-menu>
        <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 60%"></art-skeleton></div></art-sidebar-menu-item>
        <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 75%"></art-skeleton></div></art-sidebar-menu-item>
        <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 50%"></art-skeleton></div></art-sidebar-menu-item>
        <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 65%"></art-skeleton></div></art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
  </art-sidebar>
  <art-sidebar-inset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <art-sidebar-trigger></art-sidebar-trigger>
      <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
      <art-breadcrumb>
        <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
        <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
      </art-breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      </div>
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/sidebar/loading.html [HTML]
<<< ../../../sandbox/react/src/samples/sidebar/loading.tsx [React]
<<< ../../../sandbox/vue/src/samples/sidebar/loading.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/sidebar/loading.ts [Angular]
:::

## API Reference

<ApiReference tag="art-sidebar" />

## Accessibility

| Key | Action |
|---|---|
| `⌘ / Ctrl + B` | Toggle the sidebar |
| `Tab` | Move through the sidebar controls, then the page |
| `Enter / Space` | Activate a button; toggle a nested list |
| `Escape` | Close the off-canvas sidebar (mobile) |

The sidebar is a `<nav>` named by `label`; menus are lists (`role="list"` / `listitem`); buttons are native `<button>`s or `<a>`s with `aria-current="page"` when `active` and `aria-expanded` on disclosure items. The trigger carries `aria-expanded`. On mobile the sidebar is a `role="dialog"` sheet with a focus trap and a scrim. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

States: `hover` and `focus-visible` on buttons, `active` (current page) and `disabled` on buttons, expanded / collapsed sidebar with motion, open / closed sheet on mobile. `loading` is composed with `art-skeleton`; `invalid` does not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-sidebar-width`, `--art-sidebar-width-icon`, `--art-sidebar-width-mobile`` | widths (expanded, icons, sheet) |
| ``--art-color-bg-sidebar`, `--art-color-bg-sidebar-accent`` | surface, hover / active rows |
| ``--art-color-fg-default`, `--art-color-fg-muted`, `--art-color-border-default`` | text, group labels, borders |
| ``--art-color-bg-overlay`, `--art-z-modal`, `--art-z-sticky`` | sheet scrim and stacking |
| ``--art-radius-md`, `--art-radius-lg`, `--art-radius-xl`, `--art-shadow-raised`` | rows, floating card, inset card |
| ``--art-space-2`, `--art-space-7`, `--art-space-8`, `--art-space-12`` | padding and row heights |
| ``--art-duration-base`, `--art-duration-slow`, `--art-ease-out`` | collapse and sheet motion |

## Do / Don't

| Do | Don't |
|---|---|
| Group destinations under short labels | Put thirty flat links in one menu |
| Give icon-mode buttons a `tooltip` | Collapse to icons nobody can name |
| Keep the trigger visible on every page | Hide the only way to reopen the sidebar |

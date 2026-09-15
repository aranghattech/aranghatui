# App Shell

The dashboard frame in one element: a collapsible sidebar, a header bar with the trigger, and the page. Composes the Sidebar family from `@aranghat/navigation`.

## Preview

<Preview frame="shell">
  <art-app-shell>
    <art-sidebar-menu slot="sidebar-header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group slot="sidebar" label="Platform">
      <art-sidebar-menu>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg><span>Settings</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="sidebar-footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-breadcrumb slot="header">
      <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
      <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
    </art-breadcrumb>
    <art-button slot="actions" variant="outline" size="sm">Share</art-button>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
    </div>
    <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
  </art-app-shell>
</Preview>

## Installation

Lives in `@aranghat/widgets` (requires `@aranghat/base`, `@aranghat/navigation`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/navigation
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/navigation @aranghat/widgets-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/navigation @aranghat/widgets-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/navigation @aranghat/widgets-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/app-shell/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/app-shell/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/app-shell/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/app-shell/basic.ts [Angular]
:::

Put `art-sidebar-group`s in `sidebar` (and menus in `sidebar-header` / `sidebar-footer`), a breadcrumb or title in `header`, buttons in `actions`, the page in the default slot. `open` / `open-change` mirror the sidebar: React `<AppShell open onOpenChange>`, Vue `v-model:open`, Angular `[open] (openChange)`. `side`, `variant` and `collapsible` pass through.

## Examples

### Basic

Sidebar content goes in `sidebar-header` / `sidebar` / `sidebar-footer`, the header bar takes `header` (after the built-in trigger) and `actions`, the page is the default slot. Everything from Sidebar applies: ⌘ / Ctrl + B, the off-canvas sheet below md.

<Preview frame="shell">
  <art-app-shell>
    <art-sidebar-menu slot="sidebar-header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group slot="sidebar" label="Platform">
      <art-sidebar-menu>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg><span>Settings</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="sidebar-footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-breadcrumb slot="header">
      <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
      <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
    </art-breadcrumb>
    <art-button slot="actions" variant="outline" size="sm">Share</art-button>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
    </div>
    <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
  </art-app-shell>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/app-shell/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/app-shell/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/app-shell/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/app-shell/basic.ts [Angular]
:::

### Collapse to icons

`collapsible="icon"` keeps a rail of icons; `open="false"` starts collapsed. `open` mirrors the sidebar and `open-change` reports the user's toggles.

<Preview frame="shell">
  <art-app-shell collapsible="icon" open="false">
    <art-sidebar-menu slot="sidebar-header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group slot="sidebar" label="Platform">
      <art-sidebar-menu>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg><span>Settings</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="sidebar-footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-breadcrumb slot="header">
      <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
      <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
    </art-breadcrumb>
    <art-button slot="actions" variant="outline" size="sm">Share</art-button>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
    </div>
    <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
  </art-app-shell>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/app-shell/icon.html [HTML]
<<< ../../../sandbox/react/src/samples/app-shell/icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/app-shell/icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/app-shell/icon.ts [Angular]
:::

### Inset

`variant` and `side` are passed through to the sidebar.

<Preview frame="shell">
  <art-app-shell variant="inset">
    <art-sidebar-menu slot="sidebar-header">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-sidebar-group slot="sidebar" label="Platform">
      <art-sidebar-menu>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Calendar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg><span>Calendar</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      <art-sidebar-menu-item>
        <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/></svg><span>Settings</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
    <art-sidebar-menu slot="sidebar-footer">
      <art-sidebar-menu-item>
        <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
      </art-sidebar-menu-item>
    </art-sidebar-menu>
    <art-breadcrumb slot="header">
      <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
      <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
    </art-breadcrumb>
    <art-button slot="actions" variant="outline" size="sm">Share</art-button>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
      <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
    </div>
    <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
  </art-app-shell>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/app-shell/inset.html [HTML]
<<< ../../../sandbox/react/src/samples/app-shell/inset.tsx [React]
<<< ../../../sandbox/vue/src/samples/app-shell/inset.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/app-shell/inset.ts [Angular]
:::

## API Reference

<ApiReference tag="art-app-shell" />

## Accessibility

| Key | Action |
|---|---|
| `⌘ / Ctrl + B` | Toggle the sidebar |
| `Tab` | Sidebar, then the header, then the page |
| `Escape` | Close the off-canvas sidebar (mobile) |

The sidebar is a `<nav>` named by `sidebar-label`, the page an `<main>` (from `art-sidebar-inset`), the bar a `<header>`; the trigger carries `aria-expanded`. Slotted sidebar groups and buttons find their sidebar through the flat tree, so icon mode and tooltips work as in a hand-built layout. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/).

States: Expanded / collapsed sidebar with motion, off-canvas sheet below md. Interactive states belong to the controls inside.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-14`, `--art-space-4`, `--art-space-2`` | header height, page padding, gaps |
| ``--art-color-border-default`` | header rule |
| `(the Sidebar tokens)` | sidebar surface, widths and motion |

## Do / Don't

| Do | Don't |
|---|---|
| Keep one App Shell per page, around the whole app | Nest shells or put one inside a card |
| Put page-level actions in `actions` | Hide the trigger |
| Use `art-sidebar-group`s for the navigation | Slot arbitrary divs into the sidebar |

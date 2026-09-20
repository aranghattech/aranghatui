# Workspace Switcher

The tenant control of a SaaS shell: the current workspace, and a menu to switch between them — in a top bar, in a sidebar, or collapsed to its logo.

## Preview

<Preview frame="inline">
  <art-workspace-switcher value="acme">
    <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
    <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
  </art-workspace-switcher>
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
<<< ../../../sandbox/html/src/samples/workspace-switcher/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/basic.ts [Angular]
:::

Put an `art-workspace-switcher` in the `brand` slot of an `art-top-nav` or the `header` slot of an `art-sidebar`, with one `art-workspace-switcher-item` per workspace (`value`, `name`, optional `plan` and `shortcut`, logo in the default slot). `value` names the active one and `value-change` reports a switch; `display` is `auto` (full, but icon-only inside a collapsed sidebar), `full` or `icon`. Rows in the `action` slot — an `art-menu-item` such as "Add workspace" — follow after a separator. React `<WorkspaceSwitcher value onValueChange>`, Vue `v-model:value`, Angular `[value] (valueChange)`.

## Examples

### Basic

Each workspace is an `art-workspace-switcher-item` carrying its `name`, its `plan` and its logo in the default slot; the trigger shows whichever one `value` names. An `art-menu-item` in the `action` slot follows the list after a separator. Listen to `value-change` for the switch.

<Preview frame="inline">
  <art-workspace-switcher value="acme">
    <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
    <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
  </art-workspace-switcher>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/basic.ts [Angular]
:::

### Without a plan line

Leave `plan` off and the trigger is a single line at the standard control height, so it lines up with the Buttons and Inputs beside it in a bar.

<Preview frame="inline">
  <art-workspace-switcher value="acme">
    <art-workspace-switcher-item value="acme" name="Acme Inc" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="monsters" name="Monsters Inc" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="evil" name="Evil Corp" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
    <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
  </art-workspace-switcher>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/compact.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/compact.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/compact.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/compact.ts [Angular]
:::

### Icon only

`display="icon"` clips the trigger to its logo square and names it with a tooltip on hover or focus — the form a permanent icon rail needs. The menu is unchanged.

<Preview frame="inline">
  <art-workspace-switcher value="acme" display="icon">
    <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
    <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
    <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
  </art-workspace-switcher>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/icon.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/icon.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/icon.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/icon.ts [Angular]
:::

### In a TopNav

In the `brand` slot of an `art-top-nav` the switcher replaces the logo-and-product-name block. Drop `plan` here: a 56px bar has room for one line.

<Preview frame="block">
  <art-top-nav>
    <art-workspace-switcher value="acme" slot="brand">
      <art-workspace-switcher-item value="acme" name="Acme Inc" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="monsters" name="Monsters Inc" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="evil" name="Evil Corp" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
      <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
    </art-workspace-switcher>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <art-button slot="end" variant="outline" size="sm">Share</art-button>
  </art-top-nav>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/top-nav.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/top-nav.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/top-nav.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/top-nav.ts [Angular]
:::

### In a Sidebar

In the `header` slot of an `art-sidebar` it is the shadcn team-switcher position. The two-line trigger wears the sidebar's own hover wash rather than the page's.

<Preview frame="shell">
  <art-sidebar-provider>
  <art-sidebar>
    <art-workspace-switcher value="acme" slot="header">
      <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
      <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
    </art-workspace-switcher>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
  </art-sidebar>
  <art-sidebar-inset>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/sidebar.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/sidebar.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/sidebar.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/sidebar.ts [Angular]
:::

### Collapsed to icons

With the default `display="auto"` nothing else is needed: inside a sidebar collapsed to icons the trigger becomes the same square as the rows below it, and the name moves to a tooltip. Expand the sidebar and it goes back.

<Preview frame="shell">
  <art-sidebar-provider open="false">
  <art-sidebar collapsible="icon">
    <art-workspace-switcher value="acme" slot="header">
      <art-workspace-switcher-item value="acme" name="Acme Inc" plan="Enterprise" shortcut="⌘1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="monsters" name="Monsters Inc" plan="Startup" shortcut="⌘2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg></art-workspace-switcher-item>
      <art-workspace-switcher-item value="evil" name="Evil Corp" plan="Free" shortcut="⌘3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-workspace-switcher-item>
      <art-menu-item slot="action" value="add"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>Add workspace</art-menu-item>
    </art-workspace-switcher>
    <art-sidebar-group label="Platform">
      <art-sidebar-menu>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Home" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><span>Home</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg><span>Inbox</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
        <art-sidebar-menu-item>
          <art-sidebar-menu-button href="#" tooltip="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg><span>Settings</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar-group>
  </art-sidebar>
  <art-sidebar-inset>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
    </div>
  </art-sidebar-inset>
  </art-sidebar-provider>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/workspace-switcher/collapsed.html [HTML]
<<< ../../../sandbox/react/src/samples/workspace-switcher/collapsed.tsx [React]
<<< ../../../sandbox/vue/src/samples/workspace-switcher/collapsed.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/workspace-switcher/collapsed.ts [Angular]
:::

## API Reference

<ApiReference tag="art-workspace-switcher" />

<ApiReference tag="art-workspace-switcher-item" nested />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space` | Open the menu from the trigger; choose the focused workspace |
| `↓ / ↑` | Open the menu, then move between workspaces and the action rows |
| `Home / End` | Jump to the first / last row |
| `A–Z` | Jump to the workspace whose name starts with the letter |
| `Escape` | Close the menu and return focus to the trigger |
| `Tab` | Close the menu and move on |

The trigger is a `<button>` with `aria-haspopup="menu"` and `aria-expanded`. The panel is a `role="menu"` named by `label`; each workspace is a `role="menuitemradio"` with `aria-checked`, so assistive tech announces which one is in use. Rows in `action` keep their own `role="menuitem"`. Collapsed to a logo square the trigger carries the workspace name as `aria-label` — the tooltip beside it is decoration. The keyboard shortcut shown on a row is decoration — bind the accelerator in your app. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

States: `hover` and `focus-visible` on the trigger and on every row, `disabled` on the switcher and on individual rows, open / closed with enter and exit motion, and the collapsed (icon-only) trigger. `active` is not styled separately — the menu opens on press — and `loading` and `invalid` do not apply: this is navigation, not a form field.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-md`, `--art-space-12`, `--art-space-8`, `--art-space-6`` | trigger height (one line / two), icon square, logo tile |
| ``--art-color-bg-accent`, `--art-color-bg-sidebar-accent`` | hover and open wash, in a page and in a sidebar |
| ``--art-color-bg-muted`, `--art-color-fg-default`, `--art-color-fg-muted`` | logo tile, name, plan / shortcut / chevron |
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-shadow-popover`` | the menu panel |
| ``--art-radius-md`, `--art-radius-sm`, `--art-border-width`` | trigger, logo tile and rows, the one border |
| ``--art-font-size-xs`, `--art-font-weight-medium`, `--art-font-tracking-wide`` | plan line, name, shortcut |
| ``--art-ring-width`, `--art-color-ring`` | focus ring |
| ``--art-duration-base`, `--art-ease-out`` | collapse and panel motion |

## Do / Don't

| Do | Don't |
|---|---|
| Show the plan or role under the name in a sidebar | Repeat the workspace name as its own plan line |
| Give every workspace a distinct logo | Ship three identical grey squares |
| Keep "Add workspace" in the `action` slot | Mix creation into the list of real workspaces |

# Menubar

A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands. shadcn/ui parity.

## Preview

<Preview frame="inline">
  <art-menubar aria-label="Application">
    <art-menubar-menu label="File">
      <art-menu-item value="new-tab">New tab<span slot="shortcut">⌘T</span></art-menu-item>
      <art-menu-item value="new-window">New window<span slot="shortcut">⌘N</span></art-menu-item>
      <art-menu-item value="incognito" disabled>New incognito window</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-sub>
        <art-menu-item slot="trigger">Share</art-menu-item>
        <art-menu-item value="email">Email link</art-menu-item>
        <art-menu-item value="messages">Messages</art-menu-item>
      </art-menu-sub>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="print">Print…<span slot="shortcut">⌘P</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Edit">
      <art-menu-item value="undo">Undo<span slot="shortcut">⌘Z</span></art-menu-item>
      <art-menu-item value="redo">Redo<span slot="shortcut">⇧⌘Z</span></art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="cut">Cut</art-menu-item>
      <art-menu-item value="copy">Copy</art-menu-item>
      <art-menu-item value="paste">Paste</art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="View">
      <art-menu-item type="checkbox" value="bookmarks">Always show bookmarks bar</art-menu-item>
      <art-menu-item type="checkbox" value="urls" checked>Always show full URLs</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="reload" inset>Reload<span slot="shortcut">⌘R</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Profiles">
      <art-menu-radio-group value="benoit">
        <art-menu-item type="radio" value="andy">Andy</art-menu-item>
        <art-menu-item type="radio" value="benoit">Benoit</art-menu-item>
        <art-menu-item type="radio" value="luis">Luis</art-menu-item>
      </art-menu-radio-group>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="edit" inset>Edit…</art-menu-item>
    </art-menubar-menu>
  </art-menubar>
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
<<< ../../../sandbox/html/src/samples/menubar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/menubar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/menubar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/menubar/basic.ts [Angular]
:::

Put `art-menubar-menu`s (with `label`) inside `art-menubar`, and the `art-menu-*` family inside each. Listen to `select` from items and `open-change` on a menu. React `onSelect`, Vue `@select`, Angular `(select)`.

## Examples

### Basic

Each `art-menubar-menu` has a `label` (its trigger) and the item family inside. One trigger is in the tab order; ← / → move between menus, ↓ or Enter opens, and while a menu is open pointing at another trigger switches to it.

<Preview frame="inline">
  <art-menubar aria-label="Application">
    <art-menubar-menu label="File">
      <art-menu-item value="new-tab">New tab<span slot="shortcut">⌘T</span></art-menu-item>
      <art-menu-item value="new-window">New window<span slot="shortcut">⌘N</span></art-menu-item>
      <art-menu-item value="incognito" disabled>New incognito window</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-sub>
        <art-menu-item slot="trigger">Share</art-menu-item>
        <art-menu-item value="email">Email link</art-menu-item>
        <art-menu-item value="messages">Messages</art-menu-item>
      </art-menu-sub>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="print">Print…<span slot="shortcut">⌘P</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Edit">
      <art-menu-item value="undo">Undo<span slot="shortcut">⌘Z</span></art-menu-item>
      <art-menu-item value="redo">Redo<span slot="shortcut">⇧⌘Z</span></art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="cut">Cut</art-menu-item>
      <art-menu-item value="copy">Copy</art-menu-item>
      <art-menu-item value="paste">Paste</art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="View">
      <art-menu-item type="checkbox" value="bookmarks">Always show bookmarks bar</art-menu-item>
      <art-menu-item type="checkbox" value="urls" checked>Always show full URLs</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="reload" inset>Reload<span slot="shortcut">⌘R</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Profiles">
      <art-menu-radio-group value="benoit">
        <art-menu-item type="radio" value="andy">Andy</art-menu-item>
        <art-menu-item type="radio" value="benoit">Benoit</art-menu-item>
        <art-menu-item type="radio" value="luis">Luis</art-menu-item>
      </art-menu-radio-group>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="edit" inset>Edit…</art-menu-item>
    </art-menubar-menu>
  </art-menubar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/menubar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/menubar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/menubar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/menubar/basic.ts [Angular]
:::

### Open

Controlled with `open` on a menu; opening one closes the others.

<Preview frame="inline">
  <art-menubar aria-label="Application">
    <art-menubar-menu label="File">
      <art-menu-item value="new-tab">New tab<span slot="shortcut">⌘T</span></art-menu-item>
      <art-menu-item value="new-window">New window<span slot="shortcut">⌘N</span></art-menu-item>
      <art-menu-item value="incognito" disabled>New incognito window</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-sub>
        <art-menu-item slot="trigger">Share</art-menu-item>
        <art-menu-item value="email">Email link</art-menu-item>
        <art-menu-item value="messages">Messages</art-menu-item>
      </art-menu-sub>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="print">Print…<span slot="shortcut">⌘P</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Edit" open>
      <art-menu-item value="undo">Undo<span slot="shortcut">⌘Z</span></art-menu-item>
      <art-menu-item value="redo">Redo<span slot="shortcut">⇧⌘Z</span></art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="cut">Cut</art-menu-item>
      <art-menu-item value="copy">Copy</art-menu-item>
      <art-menu-item value="paste">Paste</art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="View">
      <art-menu-item type="checkbox" value="bookmarks">Always show bookmarks bar</art-menu-item>
      <art-menu-item type="checkbox" value="urls" checked>Always show full URLs</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="reload" inset>Reload<span slot="shortcut">⌘R</span></art-menu-item>
    </art-menubar-menu>
    <art-menubar-menu label="Profiles">
      <art-menu-radio-group value="benoit">
        <art-menu-item type="radio" value="andy">Andy</art-menu-item>
        <art-menu-item type="radio" value="benoit">Benoit</art-menu-item>
        <art-menu-item type="radio" value="luis">Luis</art-menu-item>
      </art-menu-radio-group>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="edit" inset>Edit…</art-menu-item>
    </art-menubar-menu>
  </art-menubar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/menubar/open.html [HTML]
<<< ../../../sandbox/react/src/samples/menubar/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/menubar/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/menubar/open.ts [Angular]
:::

## API Reference

<ApiReference tag="art-menubar" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the active trigger |
| `← / →` | Move between menus (and switch the open one) |
| `↓ / Enter / Space` | Open the menu on its first item |
| `↓ / ↑, Home / End, typing` | Move inside the open menu |
| `→ / ← on a submenu trigger` | Open / close the submenu |
| `Enter / Space` | Activate the item |
| `Escape` | Close and return to the trigger |

The bar is `role="menubar"`; each trigger is a `menuitem` with `aria-haspopup="menu"` and `aria-expanded` (roving tabindex across triggers); panels are `role="menu"` named by their label; items carry the `menuitem*` roles. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).

States: `hover` and `focus-visible` on triggers (the open trigger keeps the accent), open / closed panels with enter and exit motion, `disabled` menus and items. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-9`, `--art-space-1`, `--art-color-bg-canvas`, `--art-color-border-default`, `--art-radius-md`, `--art-shadow-raised`` | bar |
| ``--art-space-2`, `--art-radius-sm`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-bg-accent`` | triggers |
| ``--art-color-bg-popover`, `--art-shadow-popover`, `--art-space-48`` | panels |
| `(items)` | see Dropdown Menu |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for application-wide commands | Use it as site navigation (use Navigation Menu) |
| Keep labels to one word | Put icons in the bar |
| Mirror OS menubar keyboard behaviour | Open menus on hover when none is open |

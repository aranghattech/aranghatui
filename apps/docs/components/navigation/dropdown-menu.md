# Dropdown Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button. shadcn/ui parity on the platform top layer.

## Preview

<Preview frame="inline">
  <art-dropdown-menu>
    <art-button slot="trigger" variant="outline">Open</art-button>
    <art-dropdown-menu-label>My Account</art-dropdown-menu-label>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-group>
      <art-dropdown-menu-item value="profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile<span slot="shortcut">⇧⌘P</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="billing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>Billing<span slot="shortcut">⌘B</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings<span slot="shortcut">⌘S</span></art-dropdown-menu-item>
    </art-dropdown-menu-group>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-item value="logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>Log out<span slot="shortcut">⇧⌘Q</span></art-dropdown-menu-item>
  </art-dropdown-menu>
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
<<< ../../../sandbox/html/src/samples/dropdown-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/basic.ts [Angular]
:::

Put a button in the `trigger` slot and items in the default slot. Listen to `select` (bubbling from items; `detail.value`), `change` on checkbox items, `value-change` on a radio group, `open-change` on the menu. React `onSelect` / `onOpenChange`, Vue `v-model:open`, Angular `(select)`.

## Examples

### Basic

A trigger in the `trigger` slot; items, labels, groups and separators in the default slot. Click or ↓ opens; arrows move, typing jumps, Enter activates, Escape closes. `select` on an item (bubbling) carries its `value`.

<Preview frame="inline">
  <art-dropdown-menu>
    <art-button slot="trigger" variant="outline">Open</art-button>
    <art-dropdown-menu-label>My Account</art-dropdown-menu-label>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-group>
      <art-dropdown-menu-item value="profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile<span slot="shortcut">⇧⌘P</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="billing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>Billing<span slot="shortcut">⌘B</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings<span slot="shortcut">⌘S</span></art-dropdown-menu-item>
    </art-dropdown-menu-group>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-item value="logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>Log out<span slot="shortcut">⇧⌘Q</span></art-dropdown-menu-item>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/basic.ts [Angular]
:::

### Open

Controlled with `open`; the panel sits below the trigger on the top layer.

<Preview frame="inline">
  <art-dropdown-menu open>
    <art-button slot="trigger" variant="outline">Open</art-button>
    <art-dropdown-menu-label>My Account</art-dropdown-menu-label>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-group>
      <art-dropdown-menu-item value="profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Profile<span slot="shortcut">⇧⌘P</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="billing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>Billing<span slot="shortcut">⌘B</span></art-dropdown-menu-item>
      <art-dropdown-menu-item value="settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>Settings<span slot="shortcut">⌘S</span></art-dropdown-menu-item>
    </art-dropdown-menu-group>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-item value="logout"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>Log out<span slot="shortcut">⇧⌘Q</span></art-dropdown-menu-item>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/open.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/open.ts [Angular]
:::

### Checkbox items

`type="checkbox"` items toggle `checked` and emit `change`; call `preventDefault()` on `select` to keep the menu open while toggling several.

<Preview frame="inline">
  <art-dropdown-menu open>
    <art-button slot="trigger" variant="outline">View</art-button>
    <art-dropdown-menu-label>Appearance</art-dropdown-menu-label>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-item type="checkbox" value="status" checked>Status bar</art-dropdown-menu-item>
    <art-dropdown-menu-item type="checkbox" value="activity" disabled>Activity bar</art-dropdown-menu-item>
    <art-dropdown-menu-item type="checkbox" value="panel">Panel</art-dropdown-menu-item>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/checkboxes.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/checkboxes.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/checkboxes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/checkboxes.ts [Angular]
:::

### Radio items

`art-dropdown-menu-radio-group` keeps one `type="radio"` item checked and emits `value-change`.

<Preview frame="inline">
  <art-dropdown-menu open>
    <art-button slot="trigger" variant="outline">Panel position</art-button>
    <art-dropdown-menu-label>Panel position</art-dropdown-menu-label>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-radio-group value="bottom">
      <art-dropdown-menu-item type="radio" value="top">Top</art-dropdown-menu-item>
      <art-dropdown-menu-item type="radio" value="bottom">Bottom</art-dropdown-menu-item>
      <art-dropdown-menu-item type="radio" value="right">Right</art-dropdown-menu-item>
    </art-dropdown-menu-radio-group>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/radios.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/radios.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/radios.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/radios.ts [Angular]
:::

### Submenu

An `art-dropdown-menu-sub` holds a trigger item and nested items; it opens on hover, → , Enter or Space and closes on ← or Escape. `variant="destructive"` marks a dangerous action.

<Preview frame="inline">
  <art-dropdown-menu open>
    <art-button slot="trigger" variant="outline">Open</art-button>
    <art-dropdown-menu-item value="new">New file</art-dropdown-menu-item>
    <art-dropdown-menu-sub open>
      <art-dropdown-menu-item slot="trigger">Share</art-dropdown-menu-item>
      <art-dropdown-menu-item value="email">Email</art-dropdown-menu-item>
      <art-dropdown-menu-item value="message">Message</art-dropdown-menu-item>
      <art-dropdown-menu-separator></art-dropdown-menu-separator>
      <art-dropdown-menu-item value="more">More…</art-dropdown-menu-item>
    </art-dropdown-menu-sub>
    <art-dropdown-menu-separator></art-dropdown-menu-separator>
    <art-dropdown-menu-item value="delete" variant="destructive">Delete</art-dropdown-menu-item>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/submenu.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/submenu.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/submenu.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/submenu.ts [Angular]
:::

### Links

An item with `href` is a real link (middle-click and new tabs work).

<Preview frame="inline">
  <art-dropdown-menu>
    <art-button slot="trigger" variant="outline">Go to</art-button>
    <art-dropdown-menu-item href="#dashboard">Dashboard</art-dropdown-menu-item>
    <art-dropdown-menu-item href="#reports">Reports</art-dropdown-menu-item>
    <art-dropdown-menu-item href="https://example.com" target="_blank">Docs ↗</art-dropdown-menu-item>
  </art-dropdown-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/dropdown-menu/links.html [HTML]
<<< ../../../sandbox/react/src/samples/dropdown-menu/links.tsx [React]
<<< ../../../sandbox/vue/src/samples/dropdown-menu/links.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/dropdown-menu/links.ts [Angular]
:::

## API Reference

<ApiReference tag="art-dropdown-menu" />

## Accessibility

| Key | Action |
|---|---|
| `Enter / Space / ↓` | Open (↓ / Enter focus the first item, ↑ the last) |
| `↓ / ↑` | Move between items (wraps) |
| `Home / End` | First / last item |
| `Typing` | Jump to a matching item |
| `→ / Enter / Space on a submenu trigger` | Open the submenu |
| `← / Escape in a submenu` | Close it and return to its trigger |
| `Enter / Space` | Activate the item |
| `Escape` | Close and return focus to the trigger |
| `Tab` | Close |

The trigger gets `aria-haspopup="menu"` and `aria-expanded` (no `aria-controls`: an idref cannot cross the shadow boundary); the panel is `role="menu"` named after the trigger; each `art-dropdown-menu-item` host is the `menuitem`, `menuitemcheckbox` (`aria-checked`) or `menuitemradio`; separators are `role="separator"`; a submenu trigger carries `aria-haspopup` and `aria-expanded` and its nested menu sits in a `group`. Focus is the highlight and follows the pointer. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

States: `focus-visible` on the trigger; items highlight on hover / focus, `disabled` items are dimmed and skipped, `checked` items show their indicator, open / closed with enter and exit motion. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-radius-md`, `--art-shadow-popover`, `--art-space-1`` | panel |
| ``--art-color-bg-accent`, `--art-radius-sm`, `--art-space-2`, `--art-space-1-5`, `--art-space-8`, `--art-font-size-sm`` | items |
| ``--art-color-fg-muted`, `--art-font-size-xs`, `--art-font-tracking-wide`, `--art-size-icon-md`, `--art-space-3-5`` | icons, shortcuts, indicators |
| ``--art-color-destructive-fg`, `--art-color-destructive-muted`` | destructive items |
| ``--art-font-weight-medium`` | labels |
| ``--art-duration-hover-open`, `--art-duration-hover-close`` | submenu hover delays |

## Do / Don't

| Do | Don't |
|---|---|
| Give every item a `value` | Parse the item text |
| Use `variant="destructive"` for irreversible actions | Colour random items red |
| Keep menus shallow (one submenu level) | Nest three levels of submenus |

# Context Menu

Displays a menu to the user — such as a set of actions or functions — triggered by a button. shadcn/ui parity: the same menu opened by right-click at the pointer.

## Preview

<Preview frame="inline">
  <art-context-menu>
    <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
    <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>
    <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>
    <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>
    <art-menu-sub slot="menu">
      <art-menu-item slot="trigger">More tools</art-menu-item>
      <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>
      <art-menu-item value="shortcut">Create shortcut…</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="devtools">Developer tools</art-menu-item>
    </art-menu-sub>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>
    <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-radio-group slot="menu" value="pedro">
      <art-menu-label inset>People</art-menu-label>
      <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>
      <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>
    </art-menu-radio-group>
  </art-context-menu>
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
<<< ../../../sandbox/html/src/samples/context-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/context-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/context-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/context-menu/basic.ts [Angular]
:::

Wrap the target content; put `art-menu-item`s (and labels, separators, groups, radio groups, submenus) in the `menu` slot. Listen to `select` from items, `open-change` on the menu. React `onSelect`, Vue `@select`, Angular `(select)`.

## Examples

### Basic

Right-click (or Shift+F10 / the Menu key with focus inside) the area to open the menu at the pointer. Items go in the `menu` slot and behave as in Dropdown Menu: `select`, checkbox `change`, radio `value-change`, submenus.

<Preview frame="inline">
  <art-context-menu>
    <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
    <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>
    <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>
    <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>
    <art-menu-sub slot="menu">
      <art-menu-item slot="trigger">More tools</art-menu-item>
      <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>
      <art-menu-item value="shortcut">Create shortcut…</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="devtools">Developer tools</art-menu-item>
    </art-menu-sub>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>
    <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-radio-group slot="menu" value="pedro">
      <art-menu-label inset>People</art-menu-label>
      <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>
      <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>
    </art-menu-radio-group>
  </art-context-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/context-menu/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/context-menu/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/context-menu/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/context-menu/basic.ts [Angular]
:::

### Open

Controlled with `open` (the menu then anchors to the area's corner until the next right-click).

<Preview frame="inline">
  <art-context-menu open>
    <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
    <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>
    <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>
    <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>
    <art-menu-sub slot="menu">
      <art-menu-item slot="trigger">More tools</art-menu-item>
      <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>
      <art-menu-item value="shortcut">Create shortcut…</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="devtools">Developer tools</art-menu-item>
    </art-menu-sub>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>
    <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-radio-group slot="menu" value="pedro">
      <art-menu-label inset>People</art-menu-label>
      <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>
      <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>
    </art-menu-radio-group>
  </art-context-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/context-menu/open.html [HTML]
<<< ../../../sandbox/react/src/samples/context-menu/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/context-menu/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/context-menu/open.ts [Angular]
:::

### Limited height

`visible-items` caps the menu at a number of rows rather than a pixel height: the row height is measured from a real item, so it follows the control size. Leave it unset and the menu is as tall as its items, scrolling only when the viewport has no room — set `--art-menu-max-height` instead if you would rather give a length.

<Preview frame="inline">
  <art-context-menu open visible-items="5">
    <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
    <art-menu-item slot="menu" value="back">Back<span slot="shortcut">⌘[</span></art-menu-item>
    <art-menu-item slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></art-menu-item>
    <art-menu-item slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></art-menu-item>
    <art-menu-sub slot="menu">
      <art-menu-item slot="trigger">More tools</art-menu-item>
      <art-menu-item value="save">Save page…<span slot="shortcut">⇧⌘S</span></art-menu-item>
      <art-menu-item value="shortcut">Create shortcut…</art-menu-item>
      <art-menu-separator></art-menu-separator>
      <art-menu-item value="devtools">Developer tools</art-menu-item>
    </art-menu-sub>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-item slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</art-menu-item>
    <art-menu-item slot="menu" type="checkbox" value="urls">Show full URLs</art-menu-item>
    <art-menu-separator slot="menu"></art-menu-separator>
    <art-menu-radio-group slot="menu" value="pedro">
      <art-menu-label inset>People</art-menu-label>
      <art-menu-item type="radio" value="pedro">Pedro Duarte</art-menu-item>
      <art-menu-item type="radio" value="colm">Colm Tuite</art-menu-item>
    </art-menu-radio-group>
  </art-context-menu>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/context-menu/visible-items.html [HTML]
<<< ../../../sandbox/react/src/samples/context-menu/visible-items.tsx [React]
<<< ../../../sandbox/vue/src/samples/context-menu/visible-items.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/context-menu/visible-items.ts [Angular]
:::

## API Reference

<ApiReference tag="art-context-menu" />

## Accessibility

| Key | Action |
|---|---|
| `Shift + F10 / Menu key` | Open at the focused element |
| `↓ / ↑` | Move between items (wraps) |
| `Home / End` | First / last item |
| `Typing` | Jump to a matching item |
| `→ / Enter / Space on a submenu trigger` | Open the submenu |
| `← / Escape in a submenu` | Close it |
| `Enter / Space` | Activate the item |
| `Escape` | Close and return focus |
| `Tab` | Close |

The panel is `role="menu"` named by `label`; the item family carries the `menuitem*` roles; a submenu is a `group` around a nested `menu`. Focus returns to where it was when the menu closes by keyboard. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

States: Open / closed with enter and exit motion; items highlight on hover / focus, `disabled` items are dimmed and skipped, `checked` items show their indicator. `hover`, `active`, `focus-visible`, `loading` and `invalid` do not apply to the area.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-popover`, `--art-color-border-default`, `--art-radius-md`, `--art-shadow-popover`, `--art-space-1`` | panel |
| `(items)` | see Dropdown Menu |

## Do / Don't

| Do | Don't |
|---|---|
| Offer the same actions elsewhere (a toolbar or menu) | Hide actions only in a context menu |
| Keep it short and specific to the target | List the whole app menu |
| Give the area a visible affordance | Expect users to discover a right-click |

# Command

Fast, composable, unstyled command menu. shadcn/ui parity: a search field over a filtered, keyboard-driven list.

## Preview

<Preview frame="stack">
  <art-command style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-command-group label="Suggestions">
      <art-command-item value="calendar"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></art-icon>Calendar</art-command-item>
      <art-command-item value="emoji"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></art-icon>Search Emoji</art-command-item>
      <art-command-item value="calculator" disabled>Calculator</art-command-item>
    </art-command-group>
    <art-separator></art-separator>
    <art-command-group label="Settings">
      <art-command-item value="profile"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-icon>Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>
      <art-command-item value="settings"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></art-icon>Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>
    </art-command-group>
  </art-command>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/components-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/command/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/command/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/command/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/command/basic.ts [Angular]
:::

Put `art-command-item`s (in `art-command-group`s, with `art-separator`s between groups) inside. Listen to `select` for the run item (`detail.item` is the data object you bound to the item). For a ⌘K palette, put it inside a Dialog.

## Examples

### Basic

Type to filter; ↓ / ↑ move the highlight, Enter runs the item and `select` reports `{ value, item, element }`. Groups hide when none of their items match.

<Preview frame="stack">
  <art-command style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-command-group label="Suggestions">
      <art-command-item value="calendar"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></art-icon>Calendar</art-command-item>
      <art-command-item value="emoji"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></art-icon>Search Emoji</art-command-item>
      <art-command-item value="calculator" disabled>Calculator</art-command-item>
    </art-command-group>
    <art-separator></art-separator>
    <art-command-group label="Settings">
      <art-command-item value="profile"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-icon>Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>
      <art-command-item value="settings"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></art-icon>Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>
    </art-command-group>
  </art-command>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/command/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/command/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/command/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/command/basic.ts [Angular]
:::

### Filtered

`query` is the search text; the built-in filter is a case-insensitive match on the item text and `keywords`.

<Preview frame="stack">
  <art-command query="set" style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-command-group label="Suggestions">
      <art-command-item value="calendar"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></art-icon>Calendar</art-command-item>
      <art-command-item value="emoji"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></art-icon>Search Emoji</art-command-item>
      <art-command-item value="calculator" disabled>Calculator</art-command-item>
    </art-command-group>
    <art-separator></art-separator>
    <art-command-group label="Settings">
      <art-command-item value="profile"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-icon>Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>
      <art-command-item value="settings"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></art-icon>Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>
    </art-command-group>
  </art-command>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/command/filtered.html [HTML]
<<< ../../../sandbox/react/src/samples/command/filtered.tsx [React]
<<< ../../../sandbox/vue/src/samples/command/filtered.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/command/filtered.ts [Angular]
:::

### Empty

<Preview frame="stack">
  <art-command query="zzz" style="border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <art-command-group label="Suggestions">
      <art-command-item value="calendar"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg></art-icon>Calendar</art-command-item>
      <art-command-item value="emoji"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></art-icon>Search Emoji</art-command-item>
      <art-command-item value="calculator" disabled>Calculator</art-command-item>
    </art-command-group>
    <art-separator></art-separator>
    <art-command-group label="Settings">
      <art-command-item value="profile"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-icon>Profile<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>P</art-kbd></art-kbd-group></art-command-item>
      <art-command-item value="settings"><art-icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></art-icon>Settings<art-kbd-group slot="shortcut"><art-kbd>⌘</art-kbd><art-kbd>S</art-kbd></art-kbd-group></art-command-item>
    </art-command-group>
    <span slot="empty">Nothing matches that.</span>
  </art-command>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/command/empty.html [HTML]
<<< ../../../sandbox/react/src/samples/command/empty.tsx [React]
<<< ../../../sandbox/vue/src/samples/command/empty.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/command/empty.ts [Angular]
:::

## API Reference

<ApiReference tag="art-command" />

## Accessibility

| Key | Action |
|---|---|
| `Typing` | Filters the list; the first match is highlighted |
| `↓ / ↑` | Move the highlight (loops) |
| `Home / End` | First / last item |
| `Enter` | Run the highlighted item |
| `Escape` | Left to the surrounding dialog |

The search is `<input role="combobox">` with `aria-expanded`, `aria-controls` and `aria-activedescendant` on the highlighted `role="option"` (element reflection across the shadow boundary); the list is `role="listbox"`; groups are `role="group"` with their label. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

States: `focus-visible`: the search field takes focus without a ring — shadcn parity: the palette itself is the focused surface, the caret and the highlighted row show where you are. Highlighted and disabled items and the empty state are implemented. `hover`, `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-popover`, `--art-color-fg-default`, `--art-radius-md`` | panel |
| ``--art-color-border-default`, `--art-border-width`, `--art-space-9`, `--art-space-3`` | search row |
| ``--art-color-bg-accent`, `--art-radius-sm`, `--art-space-2`, `--art-space-1-5`, `--art-space-1`` | items and groups |
| ``--art-color-fg-muted`, `--art-font-size-xs`, `--art-font-tracking-wide`` | placeholder, headings, shortcuts |
| ``--art-space-72`, `--art-space-6`` | list height, empty state |

## Do / Don't

| Do | Don't |
|---|---|
| Give items `keywords` for synonyms | Rely on exact spelling |
| Group by intent (Navigation, Actions) | One long ungrouped list |
| Bind data to `item` and read it back from `select` | Parse the value string |

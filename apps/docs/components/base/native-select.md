# Native Select

A native select element styled to match the system. Uses the platform picker — the right choice for forms and mobile. shadcn/ui parity, form-associated.

## Preview

<Preview frame="stack">
  <art-native-select aria-label="Status">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
</Preview>

## Installation

Lives in `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/basic.ts [Angular]
:::

Write plain `<option>` / `<optgroup>` children; they are mirrored into the control and kept in sync. `change` bubbles from the host with `detail.value`; `v-model` and `ngModel` work out of the box. For a custom listbox with search, use Select (Tier 3).

## Examples

### Basic

<Preview frame="stack">
  <art-native-select aria-label="Status">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/basic.ts [Angular]
:::

### With label

<Preview frame="stack">
  <art-label for="status">Status</art-label>
  <art-native-select id="status" value="in-progress">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/with-label.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/with-label.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/with-label.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/with-label.ts [Angular]
:::

### Option groups

<Preview frame="stack">
  <art-native-select aria-label="Country">
    <optgroup label="Europe">
      <option value="de">Germany</option>
      <option value="fr">France</option>
    </optgroup>
    <optgroup label="Asia">
      <option value="in">India</option>
      <option value="jp">Japan</option>
    </optgroup>
  </art-native-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/groups.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/groups.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/groups.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/groups.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-native-select size="sm" aria-label="Small">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
  <art-native-select aria-label="Medium">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
  <art-native-select size="lg" aria-label="Large">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/sizes.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-native-select aria-label="Status" disabled>
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/disabled.ts [Angular]
:::

### Invalid

<Preview frame="stack">
  <art-label for="status-2">Status</art-label>
  <art-native-select id="status-2" invalid required aria-describedby="status-2-error">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </art-native-select>
  <p id="status-2-error">Please choose a status.</p>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/native-select/invalid.html [HTML]
<<< ../../../sandbox/react/src/samples/native-select/invalid.tsx [React]
<<< ../../../sandbox/vue/src/samples/native-select/invalid.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/native-select/invalid.ts [Angular]
:::

## API Reference

<ApiReference tag="art-native-select" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the select |
| `Space / Enter / Alt+Down` | Open the native picker |
| `Arrow keys` | Change the selection (platform behaviour) |

Native `<select>` semantics; names and descriptions resolved across the shadow boundary from `aria-label`, `aria-labelledby` / `art-label` and `aria-describedby`.

States: `focus-visible`, `disabled` and `invalid` are implemented. `hover`, `active` and `loading` do not apply to a native select.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`, `--art-space-9`` | sizes, chevron inset |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`` | frame |
| ``--art-color-fg-default`, `--art-color-fg-muted`` | text, chevron |
| ``--art-size-icon-md`` | chevron |
| ``--art-color-destructive-solid`` | invalid ring |
| ``--art-ring-*`` | focus ring |
| ``--art-shadow-raised`` | elevation |

## Do / Don't

| Do | Don't |
|---|---|
| Use it for short lists in forms | Use it when the user must search or see rich options (use Select) |
| Give it a placeholder option with an empty value when nothing is preselected | Preselect the first real option silently |

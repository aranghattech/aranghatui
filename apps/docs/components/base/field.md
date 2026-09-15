# Field

Combines a label, a control, a description and an error into one accessible form field. shadcn/ui parity.

## Preview

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Username</art-label>
    <art-input placeholder="shadcn"></art-input>
    <p slot="description">Choose a unique username for your account.</p>
  </art-field>
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
<<< ../../../sandbox/html/src/samples/field/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/field/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/basic.ts [Angular]
:::

Slot an `art-label` as `label`, the control in the default slot, and `<p>`s as `description` / `error`. The field fills in `for`, `aria-describedby` and `invalid` for you. Wrap several in `art-field-group`; group related ones in `art-field-set`.

## Examples

### Basic

The label names the control and the description becomes its accessible description — no ids to wire by hand.

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Username</art-label>
    <art-input placeholder="shadcn"></art-input>
    <p slot="description">Choose a unique username for your account.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/field/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/basic.ts [Angular]
:::

### With error

Content in the `error` slot marks the control invalid and is announced as an alert.

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Email</art-label>
    <art-input type="email" value="not-an-email"></art-input>
    <p slot="error">Enter a valid email address.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/error.html [HTML]
<<< ../../../sandbox/react/src/samples/field/error.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/error.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/error.ts [Angular]
:::

### Horizontal

`horizontal` puts the control first with label and description beside it — checkboxes and switches.

<Preview frame="stack">
  <art-field orientation="horizontal">
    <art-checkbox></art-checkbox>
    <art-label slot="label">Accept terms and conditions</art-label>
    <p slot="description">You agree to our Terms of Service and Privacy Policy.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/horizontal.html [HTML]
<<< ../../../sandbox/react/src/samples/field/horizontal.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/horizontal.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/horizontal.ts [Angular]
:::

### Other controls

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Department</art-label>
    <art-native-select>
      <option value="eng">Engineering</option>
      <option value="design">Design</option>
    </art-native-select>
  </art-field>
  <art-field>
    <art-label slot="label">Feedback</art-label>
    <art-textarea placeholder="Your feedback…"></art-textarea>
    <p slot="description">Max 500 characters.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/select-and-textarea.html [HTML]
<<< ../../../sandbox/react/src/samples/field/select-and-textarea.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/select-and-textarea.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/select-and-textarea.ts [Angular]
:::

### Field set

`art-field-set` is a native `<fieldset>` with a legend; `disabled` disables every control inside.

<Preview frame="stack">
  <art-field-set>
    <span slot="legend">Address</span>
    <art-field>
      <art-label slot="label">Street</art-label>
      <art-input placeholder="123 Main St"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">City</art-label>
      <art-input placeholder="New York"></art-input>
    </art-field>
  </art-field-set>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/field-set.html [HTML]
<<< ../../../sandbox/react/src/samples/field/field-set.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/field-set.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/field-set.ts [Angular]
:::

### Field group

`art-field-group` stacks fields with form spacing.

<Preview frame="stack">
  <art-field-group>
    <art-field>
      <art-label slot="label">Name</art-label>
      <art-input placeholder="Ada Lovelace"></art-input>
    </art-field>
    <art-field>
      <art-label slot="label">Email</art-label>
      <art-input type="email" placeholder="ada@example.com"></art-input>
    </art-field>
    <art-field orientation="horizontal">
      <art-switch></art-switch>
      <art-label slot="label">Email me about product updates</art-label>
    </art-field>
  </art-field-group>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/field-group.html [HTML]
<<< ../../../sandbox/react/src/samples/field/field-group.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/field-group.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/field-group.ts [Angular]
:::

### Disabled

A disabled control dims its label (muted foreground, so the text stays readable).

<Preview frame="stack">
  <art-field>
    <art-label slot="label">Username</art-label>
    <art-input value="shadcn" disabled></art-input>
    <p slot="description">Contact support to change your username.</p>
  </art-field>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/field/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/field/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/field/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/field/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-field" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the control (the label is not a tab stop) |
| `Click on the label` | Focuses or toggles the control (native label behaviour, across the shadow boundary) |

No role of its own. The control keeps its native semantics; the label names it, description and error are its `aria-describedby`, and the error carries `role="alert"`. `art-field-set` is a native `<fieldset>`/`<legend>`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/).

States: `invalid` (from the prop or the error slot) and `disabled` (mirrored from the control) are implemented; the rest belong to the control.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-2`, `--art-space-3`, `--art-space-1`` | vertical and horizontal spacing |
| ``--art-space-6`` | field group and field set spacing |
| ``--art-font-size-sm`, `--art-font-line-height-sm`` | description and error text |
| ``--art-color-fg-muted`` | description |
| ``--art-color-destructive-fg`` | error |
| ``--art-font-size-md`, `--art-font-weight-medium`` | legend |

## Do / Don't

| Do | Don't |
|---|---|
| Write the error as the fix (“Enter a valid email”) | Write “Invalid input” |
| Keep descriptions to one line | Repeat the label in the description |
| Use `art-field-set` for a radio group with a question | Fake a legend with a bold label |

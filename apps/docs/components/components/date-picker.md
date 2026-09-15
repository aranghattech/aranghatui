# Date Picker

A date picker component with range and presets. shadcn/ui parity: a Calendar in a Popover behind a field-height trigger, form-associated.

## Preview

<Preview frame="stack">
  <art-date-picker aria-label="Date"></art-date-picker>
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
<<< ../../../sandbox/html/src/samples/date-picker/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/basic.ts [Angular]
:::

Bind `value` (`YYYY-MM-DD` or `start/end`) and listen to `change` (`detail.date`, `detail.start`, `detail.end` are `Date`s). Calendar options (`min`, `max`, `disabledDates`, `caption-layout`, `locale`) pass straight through. React `onChange`, Vue `v-model`, Angular `[(ngModel)]`.

## Examples

### Basic

Click (or ↓) opens the calendar; picking a day closes it and `change` reports the ISO `value` plus `date`. Escape closes and returns focus to the trigger.

<Preview frame="stack">
  <art-date-picker aria-label="Date"></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/basic.ts [Angular]
:::

### Open

Controlled with `open`.

<Preview frame="stack">
  <art-date-picker value="2026-09-15" aria-label="Date" open></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/open.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/open.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/open.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/open.ts [Angular]
:::

### Range

`mode="range"` shows two months and closes once both ends are picked; `value` is `start/end`.

<Preview frame="stack">
  <art-date-picker mode="range" value="2026-09-08/2026-09-17" placeholder="Pick a date range" aria-label="Dates" open></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/range.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/range.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/range.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/range.ts [Angular]
:::

### Date of birth

Dropdown caption and `min` / `max` for dates far from today.

<Preview frame="stack">
  <art-date-picker caption-layout="dropdown" min="1900-01-01" max="2026-12-31" placeholder="Select date" aria-label="Date of birth"></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/date-of-birth.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/date-of-birth.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/date-of-birth.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/date-of-birth.ts [Angular]
:::

### Sizes

<Preview frame="stack">
  <art-date-picker size="sm" aria-label="Small"></art-date-picker>
  <art-date-picker aria-label="Medium"></art-date-picker>
  <art-date-picker size="lg" aria-label="Large"></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/sizes.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/sizes.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/sizes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/sizes.ts [Angular]
:::

### Disabled

<Preview frame="stack">
  <art-date-picker value="2026-09-15" aria-label="Date" disabled></art-date-picker>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/disabled.ts [Angular]
:::

### In a form

Form-associated: the ISO value is submitted under `name`; `required` participates in validation.

<Preview frame="stack">
  <form onsubmit="event.preventDefault()">
    <art-label for="dob">Date of birth</art-label>
    <art-date-picker id="dob" name="dob" caption-layout="dropdown" min="1900-01-01" max="2026-12-31" required></art-date-picker>
    <art-button type="submit">Submit</art-button>
  </form>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/date-picker/form.html [HTML]
<<< ../../../sandbox/react/src/samples/date-picker/form.tsx [React]
<<< ../../../sandbox/vue/src/samples/date-picker/form.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/date-picker/form.ts [Angular]
:::

## API Reference

<ApiReference tag="art-date-picker" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Focus the trigger |
| `Enter / Space / ↓` | Open the calendar on the chosen day |
| `Arrows, Page Up / Down, Home / End` | Move in the calendar (see Calendar) |
| `Enter / Space` | Pick the focused day and close |
| `Escape` | Close and return to the trigger |

The trigger is a `<button aria-haspopup="dialog">` with `aria-expanded` and `aria-controls`; the popover is `role="dialog"` named after the field and holds the Calendar grid. Name the picker with `aria-label`, `aria-labelledby` or `art-label`. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/).

States: `focus-visible`, `disabled` and `invalid` on the trigger; open / closed with enter and exit motion. `hover`, `active` and `loading` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-control-height-{sm,md,lg}`, `--art-control-padding-x-field-{sm,md,lg}`` | trigger sizes |
| ``--art-color-border-default`, `--art-border-width`, `--art-radius-md`, `--art-shadow-raised`` | trigger frame |
| ``--art-color-fg-muted`, `--art-size-icon-md`` | placeholder and icon |
| ``--art-color-bg-popover`, `--art-shadow-popover`` | popover |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Show the format users will see (`format="medium"` for dense tables) | Show raw ISO strings |
| Use `mode="range"` for stays and reporting periods | Use two single pickers for one range |
| Bound with `min` / `max` | Accept dates the backend rejects |

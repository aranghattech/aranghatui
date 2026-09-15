# Calendar

A date field component that allows users to enter and edit date. shadcn/ui parity (react-day-picker look) on a token-only month grid.

## Preview

<Preview frame="inline">
  <art-calendar value="2026-09-15" month="2026-09" aria-label="Pick a date"></art-calendar>
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
<<< ../../../sandbox/html/src/samples/calendar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/basic.ts [Angular]
:::

Bind `value` (`YYYY-MM-DD`, comma-separated for `multiple`, `start/end` for `range`) and listen to `change`, whose detail also carries `date` / `dates` / `start` / `end` as `Date` objects. React `onChange`, Vue `v-model`, Angular `[(ngModel)]`.

## Examples

### Basic

A fixed `month` keeps the docs stable; leave it out and the calendar opens on the selected day, else today. Arrow keys move by day and week, Page Up / Down by month (Shift: year), Home / End to the ends of the week.

<Preview frame="inline">
  <art-calendar value="2026-09-15" month="2026-09" aria-label="Pick a date"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/basic.ts [Angular]
:::

### Range

`mode="range"`: the first click starts a range, the second ends it (an earlier day becomes the new start). `value` is `start/end`; `change` carries `start` and `end` as dates.

<Preview frame="inline">
  <art-calendar mode="range" value="2026-09-08/2026-09-17" month="2026-09" number-of-months="2" aria-label="Pick a date range"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/range.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/range.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/range.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/range.ts [Angular]
:::

### Multiple

Each click toggles a day; `value` is comma-separated.

<Preview frame="inline">
  <art-calendar mode="multiple" value="2026-09-03,2026-09-10,2026-09-17" month="2026-09" aria-label="Pick dates"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/multiple.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/multiple.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/multiple.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/multiple.ts [Angular]
:::

### Month and year dropdowns

`caption-layout="dropdown"` is for dates far from today (a date of birth). `min` / `max` bound the year list and disable days outside them.

<Preview frame="inline">
  <art-calendar caption-layout="dropdown" value="1990-06-15" month="1990-06" min="1900-01-01" max="2026-12-31" aria-label="Date of birth"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/dropdown.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/dropdown.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/dropdown.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/dropdown.ts [Angular]
:::

### Min and max

Days outside `min` / `max` are disabled and the arrows stop at the bounds.

<Preview frame="inline">
  <art-calendar value="2026-09-15" month="2026-09" min="2026-09-05" max="2026-09-25" aria-label="Pick a date"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/min-max.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/min-max.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/min-max.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/min-max.ts [Angular]
:::

### Disabled days

`disabledDates` is a function property: return true to disable a day (weekends here). Set it from a script or a framework binding.

<Preview frame="inline">
  <art-calendar id="weekdays" month="2026-09" aria-label="Pick a weekday"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/disabled-days.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/disabled-days.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/disabled-days.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/disabled-days.ts [Angular]
:::

### Week starts on Monday

The first day of the week follows the locale (`lang` / `locale`); `week-starts-on` overrides it.

<Preview frame="inline">
  <art-calendar value="2026-09-15" month="2026-09" week-starts-on="1" aria-label="Pick a date"></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/week-starts-monday.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/week-starts-monday.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/week-starts-monday.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/week-starts-monday.ts [Angular]
:::

### Disabled

<Preview frame="inline">
  <art-calendar value="2026-09-15" month="2026-09" aria-label="Pick a date" disabled></art-calendar>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/calendar/disabled.html [HTML]
<<< ../../../sandbox/react/src/samples/calendar/disabled.tsx [React]
<<< ../../../sandbox/vue/src/samples/calendar/disabled.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/calendar/disabled.ts [Angular]
:::

## API Reference

<ApiReference tag="art-calendar" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Previous / next month buttons, then the selected day (else today, else the 1st) — one day is in the tab order |
| `← / →` | Previous / next day |
| `↑ / ↓` | Same day the previous / next week |
| `Home / End` | First / last day of the week |
| `Page Up / Page Down` | Previous / next month (Shift: year) |
| `Enter / Space` | Select the focused day |

A `role="grid"` table named after its month, `columnheader`s with the long weekday name, `gridcell`s (carrying `aria-selected`) holding a day `<button>` with `aria-label` (full date) and `aria-current="date"` on today. One day is in the tab order (roving tabindex); the month heading is a polite live region. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/).

States: `hover`, `focus-visible` and `disabled` on days (and disabled days from `min` / `max` / `disabledDates`), plus selected, today, outside-month and range start / middle / end. `active`, `loading` and `invalid` do not apply.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-canvas`, `--art-space-3`, `--art-space-4`, `--art-radius-md`` | box |
| ``--art-space-8`, `--art-font-size-sm`, `--art-font-size-xs`, `--art-color-fg-muted`` | cells and weekday names |
| ``--art-color-primary-solid`, `--art-color-primary-hover`, `--art-color-fg-on-primary`` | selected days and range ends |
| ``--art-color-bg-accent`` | today, hover and the range band |
| ``--art-control-height-sm`` | nav buttons and dropdowns |
| ``--art-ring-width`, `--art-ring-offset`, `--art-color-ring`` | focus ring |

## Do / Don't

| Do | Don't |
|---|---|
| Bound the calendar with `min` / `max` when only some dates make sense | Let users pick dates the form will reject |
| Use `caption-layout="dropdown"` for dates far from today | Make users click through 30 years of months |
| Give it a name with `aria-label` or `aria-labelledby` | Leave the grid unnamed |

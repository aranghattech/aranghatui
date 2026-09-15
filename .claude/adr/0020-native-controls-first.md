# ADR-0020: Native controls first — wrap and style, never re-implement

**Status:** Accepted (2026-09-15, user decision). Replaces the withdrawn "Slider budget" ADR.

## Context
The first versions of Checkbox, Switch, Radio and Slider were custom re-implementations
(`<button role="checkbox">`, a hand-rolled range with pointer maths) modelled on Radix.
That duplicates behaviour the platform already provides — keyboard maps, screen-reader
announcements, touch gestures, form participation — and costs bytes (the custom slider
was 3.5 kB against a 3 kB budget).

## Decision
When HTML has an element for the job, the component **wraps that element and only styles
it**: `<input type="checkbox">`, `<input type="checkbox" role="switch">`, `<input
type="radio">`, `<input type="range">`, `<input>`, `<textarea>`, `<select>`, `<button>`,
`<a>`, `<label>`, `<progress>`, `<dialog>`, `<details>`. Styling uses `appearance: none`
plus pseudo-elements, on tokens. The public API (props, `change` / `input` from the host with
a typed `detail`) is unchanged, so framework bindings keep working.

Custom logic is written only where no native element exists (Toggle / Toggle Group as
`aria-pressed` buttons, Tabs, Combobox, Tooltip…) or to orchestrate natives across shadow
roots (Radio Group manages exclusivity and arrow keys because native radio grouping does not
cross shadow boundaries).

## Consequences
- Two-thumb range sliders are out of scope for `art-slider`; if needed later, a separate
  component built on two native inputs.
- Vertical sliders rely on `writing-mode` on the range input (current browsers).
- Cross-browser styling goes through vendor pseudo-elements (`::-webkit-slider-thumb`,
  `::-moz-range-thumb`); both are maintained in the component CSS.
- Slider drops back under the 3 kB atom budget; no per-component budget exception.

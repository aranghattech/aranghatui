# Table

A responsive table component. shadcn/ui parity — a styled native `<table>`.

## Preview

<Preview frame="inline">
  <art-table>
  <table>
    <caption>A list of your recent invoices.</caption>
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Status</th>
        <th>Method</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>INV001</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td>INV002</td>
        <td>Pending</td>
        <td>PayPal</td>
        <td data-align="end">$150.00</td>
      </tr>
      <tr>
        <td>INV003</td>
        <td>Unpaid</td>
        <td>Bank transfer</td>
        <td data-align="end">$350.00</td>
      </tr>
      <tr>
        <td>INV004</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$450.00</td>
      </tr>
    </tbody>
  </table>
  </art-table>
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
<<< ../../../sandbox/html/src/samples/table/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/table/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/table/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/table/basic.ts [Angular]
:::

Write a plain `<table>` (with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`) inside `art-table`. Rows get dividers and a hover tint, headers a medium weight, the footer a muted band; `data-align="end"` right-aligns a column. Data Table (Tier 3) adds sorting, selection and pagination on top.

## Examples

### Basic

The markup is a real `<table>`; `art-table` scrolls it horizontally and styles its parts. `data-align="end"` right-aligns numeric columns.

<Preview frame="inline">
  <art-table>
  <table>
    <caption>A list of your recent invoices.</caption>
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Status</th>
        <th>Method</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>INV001</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td>INV002</td>
        <td>Pending</td>
        <td>PayPal</td>
        <td data-align="end">$150.00</td>
      </tr>
      <tr>
        <td>INV003</td>
        <td>Unpaid</td>
        <td>Bank transfer</td>
        <td data-align="end">$350.00</td>
      </tr>
      <tr>
        <td>INV004</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$450.00</td>
      </tr>
    </tbody>
  </table>
  </art-table>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/table/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/table/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/table/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/table/basic.ts [Angular]
:::

### With footer

<Preview frame="inline">
  <art-table>
  <table>
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Status</th>
        <th>Method</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>INV001</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td>INV002</td>
        <td>Pending</td>
        <td>PayPal</td>
        <td data-align="end">$150.00</td>
      </tr>
      <tr>
        <td>INV003</td>
        <td>Unpaid</td>
        <td>Bank transfer</td>
        <td data-align="end">$350.00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td data-align="end">$750.00</td>
      </tr>
    </tfoot>
  </table>
  </art-table>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/table/with-footer.html [HTML]
<<< ../../../sandbox/react/src/samples/table/with-footer.tsx [React]
<<< ../../../sandbox/vue/src/samples/table/with-footer.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/table/with-footer.ts [Angular]
:::

### Selected row

`aria-selected="true"` on a row paints the selected state (Data Table drives it).

<Preview frame="inline">
  <art-table>
  <table>
    <thead>
      <tr>
        <th>Invoice</th>
        <th>Status</th>
        <th>Method</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr aria-selected="true">
        <td>INV001</td>
        <td>Paid</td>
        <td>Credit card</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td>INV002</td>
        <td>Pending</td>
        <td>PayPal</td>
        <td data-align="end">$150.00</td>
      </tr>
    </tbody>
  </table>
  </art-table>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/table/selected-row.html [HTML]
<<< ../../../sandbox/react/src/samples/table/selected-row.tsx [React]
<<< ../../../sandbox/vue/src/samples/table/selected-row.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/table/selected-row.ts [Angular]
:::

### With checkboxes

<Preview frame="inline">
  <art-table>
  <table>
    <thead>
      <tr>
        <th><art-checkbox aria-label="Select all"></art-checkbox><span class="sr-only">Select</span></th>
        <th>Invoice</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><art-checkbox aria-label="Select INV001"></art-checkbox></td>
        <td>INV001</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td><art-checkbox aria-label="Select INV002" checked></art-checkbox></td>
        <td>INV002</td>
        <td data-align="end">$150.00</td>
      </tr>
    </tbody>
  </table>
  </art-table>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/table/with-checkboxes.html [HTML]
<<< ../../../sandbox/react/src/samples/table/with-checkboxes.tsx [React]
<<< ../../../sandbox/vue/src/samples/table/with-checkboxes.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/table/with-checkboxes.ts [Angular]
:::

## API Reference

<ApiReference tag="art-table" />

## Accessibility

| Key | Action |
|---|---|
| `None` | A static table is not focusable; interactive cells (checkboxes, links) are |

Native table semantics — screen readers get row and column headers for free. Give it a `<caption>`. `aria-selected` on a row marks selection. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/table/).

States: `hover` tints the row under the pointer; `aria-selected` marks a row. Other states do not apply to a table.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-border-default`, `--art-border-width`` | row dividers |
| ``--art-color-bg-accent`` | row hover and selection |
| ``--art-color-bg-muted`, `--art-font-weight-medium`` | footer |
| ``--art-space-10`, `--art-space-2`, `--art-space-4`` | header height, cell padding, caption gap |
| ``--art-font-size-sm`, `--art-color-fg-muted`` | text and caption |
| ``--art-duration-fast`, `--art-ease-out`` | hover transition |

## Do / Don't

| Do | Don't |
|---|---|
| Use `<th>` for headers and a `<caption>` | Build tables from `<div>`s |
| Right-align numbers | Centre everything |
| Let long tables scroll horizontally | Shrink columns until text wraps mid-word |

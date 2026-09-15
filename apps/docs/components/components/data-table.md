<!-- hand-written -->
# Data Table

Powerful table and datagrids built on a headless table state and the Table component. shadcn/ui parity: a composition recipe (ADR-0006), not a packaged element.

## Preview

<Preview frame="inline">
  <art-input placeholder="Filter emails…" aria-label="Filter emails"></art-input>
  <art-table>
    <table>
      <thead>
        <tr>
          <th><art-checkbox aria-label="Select all"></art-checkbox></th>
          <th>Status</th>
          <th>Email <art-button variant="ghost" size="sm" icon aria-label="Sort by email">↕</art-button></th>
          <th data-align="end">Amount <art-button variant="ghost" size="sm" icon aria-label="Sort by amount">↕</art-button></th>
        </tr>
      </thead>
      <tbody>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>ken99@example.com</td><td data-align="end">$316.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>abe45@example.com</td><td data-align="end">$242.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>processing</td><td>monserrat44@example.com</td><td data-align="end">$837.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>silas22@example.com</td><td data-align="end">$874.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>failed</td><td>carmella@example.com</td><td data-align="end">$721.00</td></tr>
      </tbody>
    </table>
  </art-table>
  <span class="muted">0 of 5 row(s) selected.</span>
  <art-button variant="outline" size="sm" disabled>Previous</art-button>
  <art-button variant="outline" size="sm">Next</art-button>
</Preview>

## Installation

Lives in `@aranghat/components` (requires `@aranghat/base`). There is no `art-data-table` element: the recipe composes `createTableState` from `@aranghat/components` with `art-table`, `art-input`, `art-checkbox`, `art-native-select` and `art-button` from `@aranghat/base`.

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/base-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/base-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/components @aranghat/base @aranghat/base-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/data-table/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table/basic.ts [Angular]
:::

Create the state with `createTableState({ data, columns, pageSize })`, subscribe to its snapshot, render `art-table` from `snapshot.rows` and `snapshot.visibleColumns`, and wire `art-input` to `setFilter`, header buttons to `sortBy`, `art-checkbox` to `setSelected` / `setPageSelected`, `art-native-select` to `setColumnVisible`, and `art-button`s to `previousPage` / `nextPage`. The state is framework-agnostic: the same object drives a React render, a Vue template, an Angular component or plain DOM.

## Examples

### Basic

The preview is the rendered result. The samples are the recipe: `createTableState` holds the data, sort, filter, page and selection; you render `art-table` rows from its snapshot and wire the base controls to its methods. Sorting cycles ascending → descending → off; the filter is limited to the email column with `filterColumn`; three rows per page; selecting the header checkbox selects the page.

<Preview frame="inline">
  <art-input placeholder="Filter emails…" aria-label="Filter emails"></art-input>
  <art-table>
    <table>
      <thead>
        <tr>
          <th><art-checkbox aria-label="Select all"></art-checkbox></th>
          <th>Status</th>
          <th>Email <art-button variant="ghost" size="sm" icon aria-label="Sort by email">↕</art-button></th>
          <th data-align="end">Amount <art-button variant="ghost" size="sm" icon aria-label="Sort by amount">↕</art-button></th>
        </tr>
      </thead>
      <tbody>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>ken99@example.com</td><td data-align="end">$316.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>abe45@example.com</td><td data-align="end">$242.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>processing</td><td>monserrat44@example.com</td><td data-align="end">$837.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>success</td><td>silas22@example.com</td><td data-align="end">$874.00</td></tr>
        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>failed</td><td>carmella@example.com</td><td data-align="end">$721.00</td></tr>
      </tbody>
    </table>
  </art-table>
  <span class="muted">0 of 5 row(s) selected.</span>
  <art-button variant="outline" size="sm" disabled>Previous</art-button>
  <art-button variant="outline" size="sm">Next</art-button>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/data-table/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table/basic.ts [Angular]
:::

## API Reference

`import { createTableState } from '@aranghat/components'` — a headless, DOM-free store.

| Member | Description |
|---|---|
| `createTableState({ data, columns, pageSize?, sort?, filter?, filterColumn?, getRowId?, compare? })` | Creates the state. `columns` are `{ id, header?, accessor?, sortable?, filterable?, hidden?, fixed? }`. |
| `snapshot()` | `{ rows, matched, total, page, pageCount, pageSize, sort, filter, filterColumn, columns, visibleColumns, selected, pageSelection }` — `rows` is the current page, `matched` every filtered and sorted row, `pageSelection` is `all` / `some` / `none`. |
| `subscribe(listener)` | Called with a snapshot now and after every change; returns an unsubscribe function. |
| `setData(rows)` | Replace the rows (selection by id survives). |
| `sortBy(id, desc?)` | Header click behaviour: ascending, then descending, then off; `desc` forces a direction. |
| `setFilter(text, column?)` | Case-insensitive substring match over filterable columns (or one column); resets to page 1. |
| `setPage(n)` / `nextPage()` / `previousPage()` / `setPageSize(n)` | Pagination (clamped). |
| `isSelected(row)` / `setSelected(row, on)` / `toggleRow(row)` / `setPageSelected(on)` / `clearSelection()` / `selectedRows()` | Row selection by stable id (`row.id` by default). |
| `isColumnVisible(id)` / `setColumnVisible(id, on)` | Column visibility; `fixed` columns cannot be hidden. |

Limits: no virtualisation and no server-side paging in v1 — paginate long lists; for remote data, call `setData` with each page and drive the controls yourself.

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Filter field, sortable headers, row checkboxes, pagination buttons |
| `Enter / Space` | Sort a column, toggle a row, change page |

Native `<table>` semantics from `art-table`; sortable headers keep their text in the `<th>` (with `aria-sort` from `snapshot.sort`) next to an icon-only sort button named "Sort by …" — a header whose only content is a button reads as empty to assistive technology; selection checkboxes are labelled and a selected row carries `aria-selected="true"`; the selection summary is plain text next to the pagination. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/table/).

States: The recipe has no states of its own; the controls carry theirs. Sorting, filtering, pagination and selection are shown in the samples.

## Tokens used

| Token | Used for |
|---|---|
| (none) | the recipe adds no styling; `art-table`, `art-input`, `art-checkbox`, `art-native-select` and `art-button` bring their own |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the state in `createTableState` and render from its snapshot | Mirror sort / filter / page in separate variables |
| Paginate long lists (no virtualisation in v1) | Render ten thousand rows at once |
| Keep the header text in the `<th>` and give it `aria-sort` | Make the whole header a button with no other text |

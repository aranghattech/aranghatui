# Data Table Page

The chrome around a data table: heading, toolbar (filter, faceted filters, reset, view), the table and the pagination footer. shadcn/ui tasks example, compiled (ADR-0010) around the Data Table recipe.

## Preview

<Preview frame="block">
  <art-data-table-page filter-placeholder="Filter tasks…" total="100" page-count="20" page-size="5">
    <art-button slot="actions" variant="outline" size="sm">Export</art-button>
    <art-button slot="filters" variant="outline" size="sm">Status</art-button>
    <art-button slot="filters" variant="outline" size="sm">Priority</art-button>
    <art-button slot="view" variant="outline" size="sm">View</art-button>
    <art-table>
      <table>
        <thead>
          <tr>
            <th><art-checkbox aria-label="Select all"></art-checkbox></th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8782</td><td><art-badge variant="outline">Documentation</art-badge> You can't compress the program without quantifying the open-source SSD pixel!</td><td>In Progress</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7878</td><td><art-badge variant="outline">Documentation</art-badge> Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</td><td>Backlog</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7839</td><td><art-badge variant="outline">Bug</art-badge> We need to bypass the neural TCP card!</td><td>Todo</td><td>High</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-5562</td><td><art-badge variant="outline">Feature</art-badge> The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</td><td>Backlog</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8686</td><td><art-badge variant="outline">Feature</art-badge> I'll parse the wireless SSL protocol, that should driver the API panel!</td><td>Canceled</td><td>Medium</td></tr>
        </tbody>
      </table>
    </art-table>
  </art-data-table-page>
</Preview>

## Installation

Lives in `@aranghat/widgets` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/widgets @aranghat/base @aranghat/widgets-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/data-table-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table-page/basic.ts [Angular]
:::

Slot your `art-table` (rendered from `createTableState`) as the content, faceted filter buttons in `filters`, the columns menu in `view`, page buttons in `actions`. Mirror the snapshot into `filter`, `selected`, `total`, `page`, `page-count`, `page-size`; call `setFilter` / `setPage` / `setPageSize` from `filter-change` / `page-change` / `page-size-change`. React `<DataTablePage onFilterChange onPageChange>`, Vue `v-model:filter @page-change`, Angular `(filterChange) (pageChange)`.

## Examples

### Basic

Heading and `actions`, a toolbar with the filter field, `filters` and `view` slots, the `art-table` in the default slot, and the footer driven by `selected` / `total` / `page` / `page-count` / `page-size`. Wire the events to `createTableState` (Data Table recipe) — the page owns no data.

<Preview frame="block">
  <art-data-table-page filter-placeholder="Filter tasks…" total="100" page-count="20" page-size="5">
    <art-button slot="actions" variant="outline" size="sm">Export</art-button>
    <art-button slot="filters" variant="outline" size="sm">Status</art-button>
    <art-button slot="filters" variant="outline" size="sm">Priority</art-button>
    <art-button slot="view" variant="outline" size="sm">View</art-button>
    <art-table>
      <table>
        <thead>
          <tr>
            <th><art-checkbox aria-label="Select all"></art-checkbox></th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8782</td><td><art-badge variant="outline">Documentation</art-badge> You can't compress the program without quantifying the open-source SSD pixel!</td><td>In Progress</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7878</td><td><art-badge variant="outline">Documentation</art-badge> Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</td><td>Backlog</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7839</td><td><art-badge variant="outline">Bug</art-badge> We need to bypass the neural TCP card!</td><td>Todo</td><td>High</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-5562</td><td><art-badge variant="outline">Feature</art-badge> The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</td><td>Backlog</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8686</td><td><art-badge variant="outline">Feature</art-badge> I'll parse the wireless SSL protocol, that should driver the API panel!</td><td>Canceled</td><td>Medium</td></tr>
        </tbody>
      </table>
    </art-table>
  </art-data-table-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/data-table-page/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table-page/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table-page/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table-page/basic.ts [Angular]
:::

### Filtered

With `filter` text the Reset button appears; `selected` and `page` come from your state.

<Preview frame="block">
  <art-data-table-page filter-placeholder="Filter tasks…" total="100" page-count="20" page-size="5" filter="pixel" selected="2" page="3">
    <art-button slot="actions" variant="outline" size="sm">Export</art-button>
    <art-button slot="filters" variant="outline" size="sm">Status</art-button>
    <art-button slot="filters" variant="outline" size="sm">Priority</art-button>
    <art-button slot="view" variant="outline" size="sm">View</art-button>
    <art-table>
      <table>
        <thead>
          <tr>
            <th><art-checkbox aria-label="Select all"></art-checkbox></th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-8782</td><td><art-badge variant="outline">Documentation</art-badge> You can't compress the program without quantifying the open-source SSD pixel!</td><td>In Progress</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-7878</td><td><art-badge variant="outline">Documentation</art-badge> Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</td><td>Backlog</td><td>Medium</td></tr>
          <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>TASK-5562</td><td><art-badge variant="outline">Feature</art-badge> The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</td><td>Backlog</td><td>Medium</td></tr>
        </tbody>
      </table>
    </art-table>
  </art-data-table-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/data-table-page/filtered.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table-page/filtered.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table-page/filtered.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table-page/filtered.ts [Angular]
:::

### No results

Your table decides how to show an empty result; the footer reads 0 rows and one page.

<Preview frame="block">
  <art-data-table-page filter-placeholder="Filter tasks…" total="0" page-count="1" page-size="5" filter="zzz">
    <art-button slot="actions" variant="outline" size="sm">Export</art-button>
    <art-button slot="filters" variant="outline" size="sm">Status</art-button>
    <art-button slot="filters" variant="outline" size="sm">Priority</art-button>
    <art-button slot="view" variant="outline" size="sm">View</art-button>
    <art-table>
      <table>
        <thead>
          <tr>
            <th><art-checkbox aria-label="Select all"></art-checkbox></th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colspan="5" style="text-align: center; padding-block: var(--art-space-6)">No results.</td></tr>
        </tbody>
      </table>
    </art-table>
  </art-data-table-page>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/data-table-page/empty.html [HTML]
<<< ../../../sandbox/react/src/samples/data-table-page/empty.tsx [React]
<<< ../../../sandbox/vue/src/samples/data-table-page/empty.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/data-table-page/empty.ts [Angular]
:::

## API Reference

<ApiReference tag="art-data-table-page" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Actions, the filter field, filter buttons, the view menu, the table, rows-per-page, the page buttons |
| `Enter / Space` | Activate a button; change the rows-per-page select with the arrows |

The heading is an `<h2>`; the filter field has an accessible name from its placeholder; the page buttons are icon buttons named "Go to first / previous / next / last page" and disabled at the ends; rows-per-page is a labelled native select. The table keeps its own semantics. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/grid/).

States: Reset visible while a filter is set; first / previous and next / last disabled at the ends. Everything else belongs to the controls and the table.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-space-6`, `--art-space-4`, `--art-space-2`` | padding and gaps |
| ``--art-container-xs`` | filter field width |
| ``--art-font-size-2xl`, `--art-font-weight-bold`, `--art-font-tracking-tight`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`` | heading, description, footer text |
| `(Input, Button, Native Select and Table tokens)` | the parts |

## Do / Don't

| Do | Don't |
|---|---|
| Keep the filter field first in the toolbar | Hide filtering behind a menu |
| Show the selection count when rows can be selected | Select rows with no feedback |
| Disable the page buttons at the ends | Wrap from the last page to the first |

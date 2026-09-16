import type { ComponentStories } from '@artui/stories';

const rows = [
  ['TASK-8782', 'Documentation', "You can't compress the program without quantifying the open-source SSD pixel!", 'In Progress', 'Medium'],
  ['TASK-7878', 'Documentation', 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!', 'Backlog', 'Medium'],
  ['TASK-7839', 'Bug', 'We need to bypass the neural TCP card!', 'Todo', 'High'],
  ['TASK-5562', 'Feature', 'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!', 'Backlog', 'Medium'],
  ['TASK-8686', 'Feature', "I'll parse the wireless SSL protocol, that should driver the API panel!", 'Canceled', 'Medium'],
];
const table = (data = rows) => `  <art-table>\n    <table>\n      <thead>\n        <tr>\n          <th><art-checkbox aria-label="Select all"></art-checkbox><span class="sr-only">Select</span></th>\n          <th>Task</th>\n          <th>Title</th>\n          <th>Status</th>\n          <th>Priority</th>\n        </tr>\n      </thead>\n      <tbody>\n${data.length ? data.map(([id, label, title, status, priority]) => `        <tr><td><art-checkbox aria-label="Select row"></art-checkbox></td><td>${id}</td><td><art-badge variant="outline">${label}</art-badge> ${title}</td><td>${status}</td><td>${priority}</td></tr>`).join('\n') : '        <tr><td colspan="5" style="text-align: center; padding-block: var(--art-space-6)">No results.</td></tr>'}\n      </tbody>\n    </table>\n  </art-table>`;
const chrome = `  <art-button slot="actions" variant="outline" size="sm">Export</art-button>\n  <art-button slot="filters" variant="outline" size="sm">Status</art-button>\n  <art-button slot="filters" variant="outline" size="sm">Priority</art-button>\n  <art-button slot="view" variant="outline" size="sm">View</art-button>`;
const page = (attrs: Record<string, string> = {}, data = rows) => `<art-data-table-page${Object.entries({ 'filter-placeholder': 'Filter tasks…', total: '100', 'page-count': '10', 'page-size': '10', ...attrs }).map(([k, v]) => ` ${k}="${v}"`).join('')}>\n${chrome}\n${table(data)}\n</art-data-table-page>`;

export const stories: ComponentStories = {
  tag: 'art-data-table-page',
  tier: 'widgets',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'block',
  examples: {
    basic: { title: 'Basic', render: () => page(), note: 'Heading and `actions`, a toolbar with the filter field, `filters` and `view` slots, the `art-table` in the default slot, and the footer driven by `selected` / `total` / `page` / `page-count` / `page-size`. Wire the events to `createTableState` (Data Table recipe) — the page owns no data.' },
    filtered: { title: 'Filtered', render: () => page({ filter: 'pixel', selected: '2', page: '3' }, rows.filter((r) => r[2].includes('pixel'))), note: 'With `filter` text the Reset button appears; `selected` and `page` come from your state.' },
    empty: { title: 'No results', render: () => page({ filter: 'zzz', total: '0', 'page-count': '1' }, []), note: 'Your table decides how to show an empty result; the footer reads 0 rows and one page.' },
  },
  render: () => page(),
  docs: {
    description: 'The chrome around a data table: heading, toolbar (filter, faceted filters, reset, view), the table and the pagination footer. shadcn/ui tasks example, compiled (ADR-0010) around the Data Table recipe.',
    usage: 'Slot your `art-table` (rendered from `createTableState`) as the content, faceted filter buttons in `filters`, the columns menu in `view`, page buttons in `actions`. Mirror the snapshot into `filter`, `selected`, `total`, `page`, `page-count`, `page-size`; call `setFilter` / `setPage` / `setPageSize` from `filter-change` / `page-change` / `page-size-change`. React `<DataTablePage onFilterChange onPageChange>`, Vue `v-model:filter @page-change`, Angular `(filterChange) (pageChange)`.',
    requires: ['base'],
    keyboard: [['Tab', 'Actions, the filter field, filter buttons, the view menu, the table, rows-per-page, the page buttons'], ['Enter / Space', 'Activate a button; change the rows-per-page select with the arrows']],
    roles: 'The heading is an `<h2>`; the filter field has an accessible name from its placeholder; the page buttons are icon buttons named "Go to first / previous / next / last page" and disabled at the ends; rows-per-page is a labelled native select. The table keeps its own semantics.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/grid/',
    states: 'Reset visible while a filter is set; first / previous and next / last disabled at the ends. Everything else belongs to the controls and the table.',
    tokens: [['`--art-space-6`, `--art-space-4`, `--art-space-2`', 'padding and gaps'], ['`--art-container-xs`', 'filter field width'], ['`--art-font-size-2xl`, `--art-font-weight-bold`, `--art-font-tracking-tight`, `--art-font-size-sm`, `--art-font-weight-medium`, `--art-color-fg-muted`', 'heading, description, footer text'], ['(Input, Button, Native Select and Table tokens)', 'the parts']],
    dos: [['Keep the filter field first in the toolbar', 'Hide filtering behind a menu'], ['Show the selection count when rows can be selected', 'Select rows with no feedback'], ['Disable the page buttons at the ends', 'Wrap from the last page to the first']],
  },
};

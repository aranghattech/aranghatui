import type { ComponentStories } from '@artui/stories';

/**
 * Data Table is a recipe, not an element (ADR-0006): `createTableState` from `@aranghat/components`
 * drives `art-table` and the base controls. The preview is the recipe's rendered result; the
 * framework samples are the recipe.
 */
const rows = [
  ['success', 'ken99@example.com', '$316.00'],
  ['success', 'abe45@example.com', '$242.00'],
  ['processing', 'monserrat44@example.com', '$837.00'],
  ['success', 'silas22@example.com', '$874.00'],
  ['failed', 'carmella@example.com', '$721.00'],
];
const table = `<art-table>\n  <table>\n    <thead>\n      <tr>\n        <th><art-checkbox aria-label="Select all"></art-checkbox><span class="sr-only">Select</span></th>\n        <th>Status</th>\n        <th>Email <art-button variant="ghost" size="sm" icon aria-label="Sort by email">↕</art-button></th>\n        <th data-align="end">Amount <art-button variant="ghost" size="sm" icon aria-label="Sort by amount">↕</art-button></th>\n      </tr>\n    </thead>\n    <tbody>\n${rows.map(([s, e, a]) => `      <tr>\n        <td><art-checkbox aria-label="Select row"></art-checkbox></td>\n        <td>${s}</td>\n        <td>${e}</td>\n        <td data-align="end">${a}</td>\n      </tr>`).join('\n')}\n    </tbody>\n  </table>\n</art-table>`;

export const stories: ComponentStories = {
  tag: 'data-table',
  tier: 'components',
  variants: ['default'],
  sizes: [],
  states: ['default'],
  directional: true,
  frame: 'inline',
  examples: {
    basic: { title: 'Basic', manual: true, render: () => `<art-input placeholder="Filter emails…" aria-label="Filter emails"></art-input>\n${table}\n<span class="muted">0 of 5 row(s) selected.</span>\n<art-button variant="outline" size="sm" disabled>Previous</art-button>\n<art-button variant="outline" size="sm">Next</art-button>`, note: 'The preview is the rendered result. The samples are the recipe: `createTableState` holds the data, sort, filter, page and selection; you render `art-table` rows from its snapshot and wire the base controls to its methods.' },
  },
  render: () => `<art-input placeholder="Filter emails…" aria-label="Filter emails"></art-input>\n${table}`,
  docs: {
    description: 'Powerful table and datagrids built on a headless table state and the Table component. shadcn/ui parity: a composition recipe (ADR-0006), not a packaged element.',
    usage: 'Create the state with `createTableState({ data, columns, pageSize })`, subscribe to its snapshot, render `art-table` from `snapshot.rows` and `snapshot.visibleColumns`, and wire `art-input` to `setFilter`, header buttons to `sortBy`, `art-checkbox` to `toggleRow` / `setPageSelected`, `art-native-select` to `setColumnVisible`, and `art-button`s to `previousPage` / `nextPage`.',
    requires: ['base'],
    keyboard: [['Tab', 'Filter field, sortable headers, row checkboxes, pagination buttons'], ['Enter / Space', 'Sort a column, toggle a row, change page']],
    roles: 'Native `<table>` semantics from `art-table`; sortable headers keep their text in the `<th>` (with `aria-sort` from `snapshot.sort`) next to an icon-only sort button named "Sort by …"; selection checkboxes are labelled; the selection summary is plain text next to the pagination.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
    states: 'The recipe has no states of its own; the controls carry theirs. Sorting, filtering, pagination and selection are shown in the samples.',
    tokens: [['(none)', 'the recipe adds no styling; `art-table`, `art-input`, `art-checkbox` and `art-button` bring their own']],
    dos: [['Keep the state in `createTableState` and render from its snapshot', 'Mirror sort / filter / page in separate variables'], ['Paginate long lists (no virtualisation in v1)', 'Render ten thousand rows at once'], ['Give sortable headers `aria-sort`', 'Signal sort order with an arrow only']],
  },
};

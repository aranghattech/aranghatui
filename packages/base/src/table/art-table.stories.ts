import type { ComponentStories } from '@artui/stories';

const rows = [['INV001', 'Paid', 'Credit card', '$250.00'], ['INV002', 'Pending', 'PayPal', '$150.00'], ['INV003', 'Unpaid', 'Bank transfer', '$350.00'], ['INV004', 'Paid', 'Credit card', '$450.00']];
const body = (n = rows.length) => rows.slice(0, n).map(([id, s, m, a]) => `    <tr>\n      <td>${id}</td>\n      <td>${s}</td>\n      <td>${m}</td>\n      <td data-align="end">${a}</td>\n    </tr>`).join('\n');
const head = `  <thead>\n    <tr>\n      <th>Invoice</th>\n      <th>Status</th>\n      <th>Method</th>\n      <th data-align="end">Amount</th>\n    </tr>\n  </thead>`;

export const stories: ComponentStories = {
  tag: 'art-table',
  tier: 'base',
  variants: ['default'],
  sizes: [],
  states: ['default', 'hover'],
  directional: true,
  examples: {
    basic: { title: 'Basic', render: () => `<art-table>\n<table>\n  <caption>A list of your recent invoices.</caption>\n${head}\n  <tbody>\n${body()}\n  </tbody>\n</table>\n</art-table>`, note: 'The markup is a real `<table>`; `art-table` scrolls it horizontally and styles its parts. `data-align="end"` right-aligns numeric columns.' },
    'with-footer': { title: 'With footer', render: () => `<art-table>\n<table>\n${head}\n  <tbody>\n${body(3)}\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan="3">Total</td>\n      <td data-align="end">$750.00</td>\n    </tr>\n  </tfoot>\n</table>\n</art-table>` },
    'selected-row': { title: 'Selected row', render: () => `<art-table>\n<table>\n${head}\n  <tbody>\n    <tr aria-selected="true">\n      <td>INV001</td>\n      <td>Paid</td>\n      <td>Credit card</td>\n      <td data-align="end">$250.00</td>\n    </tr>\n    <tr>\n      <td>INV002</td>\n      <td>Pending</td>\n      <td>PayPal</td>\n      <td data-align="end">$150.00</td>\n    </tr>\n  </tbody>\n</table>\n</art-table>`, note: '`aria-selected="true"` on a row paints the selected state (Data Table drives it).' },
    'with-checkboxes': { title: 'With checkboxes', render: () => `<art-table>\n<table>\n  <thead>\n    <tr>\n      <th><art-checkbox aria-label="Select all"></art-checkbox><span class="sr-only">Select</span></th>\n      <th>Invoice</th>\n      <th data-align="end">Amount</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><art-checkbox aria-label="Select INV001"></art-checkbox></td>\n      <td>INV001</td>\n      <td data-align="end">$250.00</td>\n    </tr>\n    <tr>\n      <td><art-checkbox aria-label="Select INV002" checked></art-checkbox></td>\n      <td>INV002</td>\n      <td data-align="end">$150.00</td>\n    </tr>\n  </tbody>\n</table>\n</art-table>` },
  },
  render: () => `<art-table>\n<table>\n${head}\n  <tbody>\n${body(2)}\n  </tbody>\n</table>\n</art-table>`,
  focusTarget: 'art-table tbody tr',
  docs: {
    description: 'A responsive table component. shadcn/ui parity — a styled native `<table>`.',
    usage: 'Write a plain `<table>` (with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`) inside `art-table`. Rows get dividers and a hover tint, headers a medium weight, the footer a muted band; `data-align="end"` right-aligns a column. Data Table (Tier 3) adds sorting, selection and pagination on top.',
    keyboard: [['None', 'A static table is not focusable; interactive cells (checkboxes, links) are']],
    roles: 'Native table semantics — screen readers get row and column headers for free. Give it a `<caption>`. `aria-selected` on a row marks selection.',
    apg: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
    states: '`hover` tints the row under the pointer; `aria-selected` marks a row. Other states do not apply to a table.',
    tokens: [['`--art-color-border-default`, `--art-border-width`', 'row dividers'], ['`--art-color-bg-accent`', 'row hover and selection'], ['`--art-color-bg-muted`, `--art-font-weight-medium`', 'footer'], ['`--art-space-10`, `--art-space-2`, `--art-space-4`', 'header height, cell padding, caption gap'], ['`--art-font-size-sm`, `--art-color-fg-muted`', 'text and caption'], ['`--art-duration-fast`, `--art-ease-out`', 'hover transition']],
    dos: [['Use `<th>` for headers and a `<caption>`', 'Build tables from `<div>`s'], ['Right-align numbers', 'Centre everything'], ['Let long tables scroll horizontally', 'Shrink columns until text wraps mid-word']],
  },
};

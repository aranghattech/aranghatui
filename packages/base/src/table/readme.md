# art-table



<!-- Auto Generated Below -->


## Overview

Table — shadcn/ui parity. A scroll container that styles the native `<table>` inside it:
header, body, footer, rows, cells and caption. Light DOM on purpose (ADR-0021): a table is
deeply nested native markup that a shadow stylesheet could never reach, so the rules are
scoped to `art-table` and the markup stays a real, accessible table.

## Slots

| Slot | Description                                                                                   |
| ---- | --------------------------------------------------------------------------------------------- |
|      | A native `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

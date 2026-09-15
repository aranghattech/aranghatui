import { Component, Host, h } from '@stencil/core';

/**
 * Table — shadcn/ui parity. A scroll container that styles the native `<table>` inside it:
 * header, body, footer, rows, cells and caption. Light DOM on purpose (ADR-0021): a table is
 * deeply nested native markup that a shadow stylesheet could never reach, so the rules are
 * scoped to `art-table` and the markup stays a real, accessible table.
 *
 * @slot - A native `<table>` with `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`.
 */
@Component({ tag: 'art-table', styleUrl: 'art-table.css', shadow: false })
export class ArtTable {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}

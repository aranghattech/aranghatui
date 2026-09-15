import { Component, OnDestroy } from '@angular/core';
import { ArtButton, ArtCheckbox, ArtInput, ArtNativeSelect, ArtTable } from '@aranghat/base-angular';
import { createTableState, type ColumnDef, type TableSnapshot } from '@aranghat/components';

type Payment = { id: string; amount: number; status: 'pending' | 'processing' | 'success' | 'failed'; email: string };
const payments: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@example.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@example.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@example.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@example.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@example.com' },
];
const columns: ColumnDef<Payment>[] = [{ id: 'status', header: 'Status' }, { id: 'email', header: 'Email' }, { id: 'amount', header: 'Amount', filterable: false }];
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

@Component({
  selector: 'sample-data-table-basic',
  imports: [ArtButton, ArtCheckbox, ArtInput, ArtNativeSelect, ArtTable],
  template: `
    <art-input placeholder="Filter emails…" aria-label="Filter emails" [value]="s.filter" (input)="table.setFilter($any($event).detail.value)"></art-input>
    <art-native-select aria-label="Toggle a column" value="" (change)="toggleColumn($any($event).detail.value)">
      <option value="">Columns</option>
      @for (c of columns; track c.id) { <option [value]="c.id">{{ table.isColumnVisible(c.id) ? '✓ ' : '' }}{{ c.header }}</option> }
    </art-native-select>
    <art-table>
      <table>
        <thead>
          <tr>
            <th><art-checkbox aria-label="Select all" [checked]="s.pageSelection === 'all'" [indeterminate]="s.pageSelection === 'some'" (change)="table.setPageSelected($any($event).detail.checked)"></art-checkbox></th>
            @for (c of s.visibleColumns; track c.id) {
              <th [attr.aria-sort]="s.sort?.id === c.id ? (s.sort?.desc ? 'descending' : 'ascending') : null" [attr.data-align]="c.id === 'amount' ? 'end' : null">
                {{ c.header }} <art-button variant="ghost" size="sm" icon [attr.aria-label]="'Sort by ' + c.header!.toLowerCase()" (click)="table.sortBy(c.id)">{{ sortMark(c.id) }}</art-button>
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of s.rows; track row.id) {
            <tr [attr.aria-selected]="table.isSelected(row) ? 'true' : null">
              <td><art-checkbox aria-label="Select row" [checked]="table.isSelected(row)" (change)="table.setSelected(row, $any($event).detail.checked)"></art-checkbox></td>
              @for (c of s.visibleColumns; track c.id) { <td [attr.data-align]="c.id === 'amount' ? 'end' : null">{{ cell(row, c.id) }}</td> }
            </tr>
          }
          @if (!s.rows.length) { <tr><td [attr.colspan]="s.visibleColumns.length + 1">No results.</td></tr> }
        </tbody>
      </table>
    </art-table>
    <span class="muted">{{ s.selected.size }} of {{ s.total }} row(s) selected.</span>
    <art-button variant="outline" size="sm" [disabled]="s.page === 0" (click)="table.previousPage()">Previous</art-button>
    <art-button variant="outline" size="sm" [disabled]="s.page >= s.pageCount - 1" (click)="table.nextPage()">Next</art-button>
  `,
})
export class DataTableBasic implements OnDestroy {
  columns = columns;
  // the headless state owns data, sort, filter, page and selection; the template renders its snapshot
  table = createTableState({ data: payments, columns, pageSize: 3, filterColumn: 'email' });
  s: TableSnapshot<Payment> = this.table.snapshot();
  private off = this.table.subscribe((snap) => { this.s = snap; });
  cell(row: Payment, id: string) { return id === 'amount' ? money.format(row.amount) : String(row[id as keyof Payment]); }
  sortMark(id: string) { return this.s.sort?.id === id ? (this.s.sort.desc ? '↓' : '↑') : '↕'; }
  toggleColumn(id: string) { if (id) this.table.setColumnVisible(id, !this.table.isColumnVisible(id)); }
  ngOnDestroy() { this.off(); }
}

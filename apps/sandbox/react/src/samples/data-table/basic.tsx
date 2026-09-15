import { useEffect, useMemo, useState } from 'react';
import { Button, Checkbox, Input, NativeSelect, Table } from '@aranghat/base-react';
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

export default function Basic() {
  // the headless state owns data, sort, filter, page and selection; the component renders its snapshot
  const table = useMemo(() => createTableState({ data: payments, columns, pageSize: 3, filterColumn: 'email' }), []);
  const [s, setS] = useState<TableSnapshot<Payment>>(() => table.snapshot());
  useEffect(() => table.subscribe(setS), [table]);
  const sortMark = (id: string) => (s.sort?.id === id ? (s.sort.desc ? '↓' : '↑') : '↕');
  return (
    <>
      <Input placeholder="Filter emails…" aria-label="Filter emails" value={s.filter} onInput={(e) => table.setFilter(e.detail.value)} />
      <NativeSelect aria-label="Toggle a column" value="" onChange={(e) => e.detail.value && table.setColumnVisible(e.detail.value, !table.isColumnVisible(e.detail.value))}>
        <option value="">Columns</option>
        {columns.map((c) => <option key={c.id} value={c.id}>{table.isColumnVisible(c.id) ? '✓ ' : ''}{c.header}</option>)}
      </NativeSelect>
      <Table>
        <table>
          <thead>
            <tr>
              <th><Checkbox aria-label="Select all" checked={s.pageSelection === 'all'} indeterminate={s.pageSelection === 'some'} onChange={(e) => table.setPageSelected(e.detail.checked)} /></th>
              {s.visibleColumns.map((c) => (
                <th key={c.id} aria-sort={s.sort?.id === c.id ? (s.sort.desc ? 'descending' : 'ascending') : undefined} data-align={c.id === 'amount' ? 'end' : undefined}>
                  {c.header} <Button variant="ghost" size="sm" icon aria-label={`Sort by ${c.header!.toLowerCase()}`} onClick={() => table.sortBy(c.id)}>{sortMark(c.id)}</Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {s.rows.map((row) => (
              <tr key={row.id} aria-selected={table.isSelected(row) ? 'true' : undefined}>
                <td><Checkbox aria-label="Select row" checked={table.isSelected(row)} onChange={(e) => table.setSelected(row, e.detail.checked)} /></td>
                {s.visibleColumns.map((c) => <td key={c.id} data-align={c.id === 'amount' ? 'end' : undefined}>{c.id === 'amount' ? money.format(row.amount) : String(row[c.id as keyof Payment])}</td>)}
              </tr>
            ))}
            {!s.rows.length && <tr><td colSpan={s.visibleColumns.length + 1}>No results.</td></tr>}
          </tbody>
        </table>
      </Table>
      <span className="muted">{s.selected.size} of {s.total} row(s) selected.</span>
      <Button variant="outline" size="sm" disabled={s.page === 0} onClick={() => table.previousPage()}>Previous</Button>
      <Button variant="outline" size="sm" disabled={s.page >= s.pageCount - 1} onClick={() => table.nextPage()}>Next</Button>
    </>
  );
}

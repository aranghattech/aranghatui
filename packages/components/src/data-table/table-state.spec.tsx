import { describe, expect, it, vi } from 'vitest';
import { createTableState } from './table-state';

type Payment = { id: string; amount: number; status: string; email: string };
const data: Payment[] = [
  { id: 'a', amount: 316, status: 'success', email: 'ken99@example.com' },
  { id: 'b', amount: 242, status: 'success', email: 'abe45@example.com' },
  { id: 'c', amount: 837, status: 'processing', email: 'monserrat44@example.com' },
  { id: 'd', amount: 874, status: 'success', email: 'silas22@example.com' },
  { id: 'e', amount: 721, status: 'failed', email: 'carmella@example.com' },
];
const columns = [{ id: 'status', header: 'Status' }, { id: 'email', header: 'Email' }, { id: 'amount', header: 'Amount', filterable: false }, { id: 'notes', header: 'Notes', hidden: true }];

describe('createTableState', () => {
  it('sorts (asc → desc → off), filters, paginates and notifies', () => {
    const t = createTableState({ data, columns, pageSize: 2 });
    const seen = vi.fn();
    t.subscribe(seen);
    expect(t.snapshot().rows.map((r) => r.id)).toEqual(['a', 'b']);
    expect(t.snapshot().pageCount).toBe(3);
    t.sortBy('amount');
    expect(t.snapshot().matched.map((r) => r.amount)).toEqual([242, 316, 721, 837, 874]);
    t.sortBy('amount');
    expect(t.snapshot().sort).toEqual({ id: 'amount', desc: true });
    expect(t.snapshot().rows.map((r) => r.amount)).toEqual([874, 837]);
    t.sortBy('amount');
    expect(t.snapshot().sort).toBeUndefined();
    t.setFilter('success', 'status');
    expect(t.snapshot().total).toBe(3);
    t.setFilter('ken', 'email');
    expect(t.snapshot().rows.map((r) => r.id)).toEqual(['a']);
    t.setFilter('', 'email');
    t.nextPage(); t.nextPage(); t.nextPage();
    expect(t.snapshot().page).toBe(2); // clamped to the last page
    t.setPageSize(10);
    expect(t.snapshot().pageCount).toBe(1);
    expect(seen).toHaveBeenCalled();
  });
  it('selects rows by id and reports the page selection; hides columns except fixed ones', () => {
    const t = createTableState({ data, columns: [{ id: 'select', fixed: true }, ...columns], pageSize: 3 });
    expect(t.snapshot().pageSelection).toBe('none');
    t.toggleRow(data[0]!);
    expect(t.isSelected(data[0]!)).toBe(true);
    expect(t.snapshot().pageSelection).toBe('some');
    t.setPageSelected(true);
    expect(t.snapshot().pageSelection).toBe('all');
    expect(t.selectedRows().map((r) => r.id)).toEqual(['a', 'b', 'c']);
    t.setPageSelected(false);
    expect(t.snapshot().selected.size).toBe(0);
    expect(t.snapshot().visibleColumns.map((c) => c.id)).toEqual(['select', 'status', 'email', 'amount']);
    t.setColumnVisible('email', false);
    t.setColumnVisible('select', false); // fixed: ignored
    t.setColumnVisible('notes', true);
    expect(t.snapshot().visibleColumns.map((c) => c.id)).toEqual(['select', 'status', 'amount', 'notes']);
  });
});

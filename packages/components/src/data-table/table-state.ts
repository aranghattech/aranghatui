/**
 * Headless table state (ADR-0006): sorting, text filtering, pagination, row selection and
 * column visibility over a plain array, with no DOM. The Data Table docs recipe composes it
 * with `art-table` and the base controls; the Tier 6 Data Table page widget does the same.
 * Exported from `@aranghat/components` as `createTableState`.
 */
export interface ColumnDef<T> {
  /** Column key; also the default accessor (`row[id]`). */
  id: string;
  header?: string;
  accessor?: (row: T) => unknown;
  /** Sortable by clicking the header (default true). */
  sortable?: boolean;
  /** Included in the text filter (default true). */
  filterable?: boolean;
  /** Hidden by default. */
  hidden?: boolean;
  /** Cannot be hidden (a selection column). */
  fixed?: boolean;
}
export interface SortState {
  id: string;
  desc: boolean;
}
export interface TableSnapshot<T> {
  /** Rows of the current page. */
  rows: T[];
  /** All rows after filtering and sorting. */
  matched: T[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
  sort?: SortState;
  filter: string;
  filterColumn?: string;
  columns: ColumnDef<T>[];
  visibleColumns: ColumnDef<T>[];
  selected: ReadonlySet<string>;
  /** Selection state of the current page: every row / some rows / none. */
  pageSelection: 'all' | 'some' | 'none';
}
export interface TableStateOptions<T> {
  data: T[];
  columns: ColumnDef<T>[];
  /** Stable row id; defaults to `row.id`, then the index. */
  getRowId?: (row: T, index: number) => string;
  pageSize?: number;
  sort?: SortState;
  filter?: string;
  /** Limit the text filter to one column (default: every filterable column). */
  filterColumn?: string;
  /** Custom comparator for a column (default: numbers numerically, else locale string compare). */
  compare?: (a: unknown, b: unknown, column: ColumnDef<T>) => number;
}
export interface TableState<T> {
  /** The derived view; call after any change (or subscribe). */
  snapshot(): TableSnapshot<T>;
  subscribe(listener: (snapshot: TableSnapshot<T>) => void): () => void;
  setData(data: T[]): void;
  /** Click-a-header behaviour: ascending, then descending, then off. `desc` forces a direction. */
  sortBy(id: string, desc?: boolean): void;
  setFilter(text: string, column?: string): void;
  setPage(page: number): void;
  nextPage(): void;
  previousPage(): void;
  setPageSize(size: number): void;
  rowId(row: T): string;
  isSelected(row: T): boolean;
  setSelected(row: T, selected: boolean): void;
  toggleRow(row: T): void;
  /** Select or clear every row of the current page. */
  setPageSelected(selected: boolean): void;
  clearSelection(): void;
  selectedRows(): T[];
  isColumnVisible(id: string): boolean;
  setColumnVisible(id: string, visible: boolean): void;
}

const cell = <T,>(row: T, c: ColumnDef<T>) => (c.accessor ? c.accessor(row) : (row as Record<string, unknown>)[c.id]);
const defaultCompare = (a: unknown, b: unknown) =>
  typeof a === 'number' && typeof b === 'number' ? a - b : String(a ?? '').localeCompare(String(b ?? ''), undefined, { numeric: true, sensitivity: 'base' });

export function createTableState<T>(options: TableStateOptions<T>): TableState<T> {
  let data = options.data;
  const columns = options.columns;
  const getRowId = options.getRowId ?? ((row: T, i: number) => String((row as { id?: unknown }).id ?? i));
  const compare = options.compare ?? defaultCompare;
  let pageSize = options.pageSize ?? 10;
  let page = 0;
  let sort = options.sort;
  let filter = options.filter ?? '';
  let filterColumn = options.filterColumn;
  const hidden = new Set(columns.filter((c) => c.hidden).map((c) => c.id));
  const selected = new Set<string>();
  const listeners = new Set<(s: TableSnapshot<T>) => void>();
  const ids = new Map<T, string>();
  const rowId = (row: T) => { let id = ids.get(row); if (id === undefined) { id = getRowId(row, data.indexOf(row)); ids.set(row, id); } return id; };

  function matched(): T[] {
    const q = filter.trim().toLowerCase();
    let rows = data;
    if (q) {
      const cols = columns.filter((c) => c.filterable !== false && (!filterColumn || c.id === filterColumn));
      rows = rows.filter((row) => cols.some((c) => String(cell(row, c) ?? '').toLowerCase().includes(q)));
    }
    if (sort) {
      const c = columns.find((x) => x.id === sort!.id);
      if (c) {
        const dir = sort.desc ? -1 : 1;
        rows = [...rows].sort((a, b) => dir * compare(cell(a, c), cell(b, c), c));
      }
    }
    return rows;
  }
  function snapshot(): TableSnapshot<T> {
    const all = matched();
    const pageCount = Math.max(1, Math.ceil(all.length / pageSize));
    if (page > pageCount - 1) page = pageCount - 1;
    const rows = all.slice(page * pageSize, (page + 1) * pageSize);
    const onPage = rows.filter((r) => selected.has(rowId(r))).length;
    return {
      rows, matched: all, total: all.length, page, pageCount, pageSize, sort, filter, filterColumn, columns,
      visibleColumns: columns.filter((c) => !hidden.has(c.id)),
      selected,
      pageSelection: rows.length && onPage === rows.length ? 'all' : onPage ? 'some' : 'none',
    };
  }
  const notify = () => { if (listeners.size) { const s = snapshot(); for (const l of listeners) l(s); } };

  return {
    snapshot,
    subscribe(l) { listeners.add(l); l(snapshot()); return () => { listeners.delete(l); }; },
    setData(d) { data = d; ids.clear(); notify(); },
    sortBy(id, desc) {
      if (desc !== undefined) sort = { id, desc };
      else if (sort?.id !== id) sort = { id, desc: false };
      else if (!sort.desc) sort = { id, desc: true };
      else sort = undefined;
      notify();
    },
    setFilter(text, column) { filter = text; if (column !== undefined) filterColumn = column || undefined; page = 0; notify(); },
    setPage(p) { page = Math.max(0, p); notify(); },
    nextPage() { page++; notify(); },
    previousPage() { page = Math.max(0, page - 1); notify(); },
    setPageSize(n) { pageSize = Math.max(1, n); page = 0; notify(); },
    rowId,
    isSelected: (row) => selected.has(rowId(row)),
    setSelected(row, on) { if (on) selected.add(rowId(row)); else selected.delete(rowId(row)); notify(); },
    toggleRow(row) { const id = rowId(row); if (selected.has(id)) selected.delete(id); else selected.add(id); notify(); },
    setPageSelected(on) { for (const r of snapshot().rows) { if (on) selected.add(rowId(r)); else selected.delete(rowId(r)); } notify(); },
    clearSelection() { selected.clear(); notify(); },
    selectedRows: () => data.filter((r) => selected.has(rowId(r))),
    isColumnVisible: (id) => !hidden.has(id),
    setColumnVisible(id, visible) { const c = columns.find((x) => x.id === id); if (!c || c.fixed) return; if (visible) hidden.delete(id); else hidden.add(id); notify(); },
  };
}

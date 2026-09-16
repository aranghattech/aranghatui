<script setup lang="ts">
import { onUnmounted, shallowRef } from 'vue';
import { Button, Checkbox, Input, NativeSelect, Table } from '@aranghat/base-vue';
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
// the headless state owns data, sort, filter, page and selection; the template renders its snapshot
const table = createTableState({ data: payments, columns, pageSize: 3, filterColumn: 'email' });
const s = shallowRef<TableSnapshot<Payment>>(table.snapshot());
onUnmounted(table.subscribe((snap) => { s.value = snap; }));
const cell = (row: Payment, id: string) => (id === 'amount' ? money.format(row.amount) : String(row[id as keyof Payment]));
const sortMark = (id: string) => (s.value.sort?.id === id ? (s.value.sort.desc ? '↓' : '↑') : '↕');
const toggleColumn = (e: CustomEvent<{ value: string }>) => { if (e.detail.value) table.setColumnVisible(e.detail.value, !table.isColumnVisible(e.detail.value)); };
</script>

<template>
  <Input placeholder="Filter emails…" aria-label="Filter emails" :value="s.filter" @input="table.setFilter($event.detail.value)" />
  <NativeSelect aria-label="Toggle a column" value="" @change="toggleColumn">
    <option value="">Columns</option>
    <option v-for="c in columns" :key="c.id" :value="c.id">{{ table.isColumnVisible(c.id) ? '✓ ' : '' }}{{ c.header }}</option>
  </NativeSelect>
  <Table>
    <table>
      <thead>
        <tr>
          <th><Checkbox aria-label="Select all" :checked="s.pageSelection === 'all'" :indeterminate="s.pageSelection === 'some'" @change="table.setPageSelected($event.detail.checked)" /><span class="sr-only">Select</span></th>
          <th v-for="c in s.visibleColumns" :key="c.id" :aria-sort="s.sort?.id === c.id ? (s.sort.desc ? 'descending' : 'ascending') : undefined" :data-align="c.id === 'amount' ? 'end' : undefined">
            {{ c.header }} <Button variant="ghost" size="sm" icon :aria-label="`Sort by ${c.header!.toLowerCase()}`" @click="table.sortBy(c.id)">{{ sortMark(c.id) }}</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in s.rows" :key="row.id" :aria-selected="table.isSelected(row) ? 'true' : undefined">
          <td><Checkbox aria-label="Select row" :checked="table.isSelected(row)" @change="table.setSelected(row, $event.detail.checked)" /></td>
          <td v-for="c in s.visibleColumns" :key="c.id" :data-align="c.id === 'amount' ? 'end' : undefined">{{ cell(row, c.id) }}</td>
        </tr>
        <tr v-if="!s.rows.length"><td :colspan="s.visibleColumns.length + 1">No results.</td></tr>
      </tbody>
    </table>
  </Table>
  <span class="muted">{{ s.selected.size }} of {{ s.total }} row(s) selected.</span>
  <Button variant="outline" size="sm" :disabled="s.page === 0" @click="table.previousPage()">Previous</Button>
  <Button variant="outline" size="sm" :disabled="s.page >= s.pageCount - 1" @click="table.nextPage()">Next</Button>
</template>

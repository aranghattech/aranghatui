<script setup lang="ts">
import { DataTablePage } from '@aranghat/widgets-vue';
import { Button, Checkbox, Table } from '@aranghat/base-vue';
</script>

<template>
  <DataTablePage filter-placeholder="Filter tasks…" total="0" page-count="1" page-size="10" filter="zzz">
    <Button slot="actions" variant="outline" size="sm">Export</Button>
    <Button slot="filters" variant="outline" size="sm">Status</Button>
    <Button slot="filters" variant="outline" size="sm">Priority</Button>
    <Button slot="view" variant="outline" size="sm">View</Button>
    <Table>
      <table>
        <thead>
          <tr>
            <th><Checkbox aria-label="Select all" /><span class="sr-only">Select</span></th>
            <th>Task</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr><td colspan="5" style="text-align: center; padding-block: var(--art-space-6)">No results.</td></tr>
        </tbody>
      </table>
    </Table>
  </DataTablePage>
</template>

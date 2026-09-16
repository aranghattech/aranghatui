<script setup lang="ts">
import { Checkbox, Table } from '@aranghat/base-vue';
</script>

<template>
  <Table>
  <table>
    <thead>
      <tr>
        <th><Checkbox aria-label="Select all" /><span class="sr-only">Select</span></th>
        <th>Invoice</th>
        <th data-align="end">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><Checkbox aria-label="Select INV001" /></td>
        <td>INV001</td>
        <td data-align="end">$250.00</td>
      </tr>
      <tr>
        <td><Checkbox aria-label="Select INV002" checked /></td>
        <td>INV002</td>
        <td data-align="end">$150.00</td>
      </tr>
    </tbody>
  </table>
  </Table>
</template>

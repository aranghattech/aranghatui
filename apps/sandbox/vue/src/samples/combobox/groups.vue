<script setup lang="ts">
import { Combobox, ComboboxGroup, ComboboxItem } from '@aranghat/components-vue';
</script>

<template>
  <Combobox placeholder="Pick a fruit or a vegetable" aria-label="Produce">
    <ComboboxGroup label="Fruits">
      <ComboboxItem value="apple">Apple</ComboboxItem>
      <ComboboxItem value="banana">Banana</ComboboxItem>
    </ComboboxGroup>
    <ComboboxGroup label="Vegetables">
      <ComboboxItem value="carrot">Carrot</ComboboxItem>
      <ComboboxItem value="pea">Pea</ComboboxItem>
    </ComboboxGroup>
  </Combobox>
</template>

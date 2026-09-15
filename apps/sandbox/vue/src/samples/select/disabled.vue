<script setup lang="ts">
import { Select, SelectItem } from '@aranghat/components-vue';
</script>

<template>
  <Select placeholder="Select a fruit" aria-label="Fruit" disabled>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes" disabled>Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </Select>
</template>

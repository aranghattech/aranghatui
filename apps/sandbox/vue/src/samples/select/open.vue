<script setup lang="ts">
import { Select, SelectItem } from '@aranghat/components-vue';
</script>

<template>
  <Select value="banana" aria-label="Fruit" open>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes" disabled>Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </Select>
</template>

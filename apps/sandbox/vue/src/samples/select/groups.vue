<script setup lang="ts">
import { Select, SelectGroup, SelectItem } from '@aranghat/components-vue';
</script>

<template>
  <Select placeholder="Select a timezone" aria-label="Timezone">
    <SelectGroup label="North America">
      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
      <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    </SelectGroup>
    <SelectGroup label="Europe">
      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
      <SelectItem value="cet">Central European Time (CET)</SelectItem>
    </SelectGroup>
  </Select>
</template>

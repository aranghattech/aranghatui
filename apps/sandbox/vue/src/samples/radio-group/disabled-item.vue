<script setup lang="ts">
import { Radio, RadioGroup } from '@aranghat/base-vue';
</script>

<template>
  <RadioGroup value="default" aria-label="Density">
    <Radio value="default">Default</Radio>
    <Radio value="comfortable">Comfortable</Radio>
    <Radio value="compact" disabled>Compact</Radio>
  </RadioGroup>
</template>

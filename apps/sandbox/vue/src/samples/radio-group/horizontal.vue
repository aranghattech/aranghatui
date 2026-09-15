<script setup lang="ts">
import { Radio, RadioGroup } from '@aranghat/base-vue';
</script>

<template>
  <RadioGroup orientation="horizontal" value="default" aria-label="Density">
    <Radio value="default">Default</Radio>
    <Radio value="comfortable">Comfortable</Radio>
    <Radio value="compact">Compact</Radio>
  </RadioGroup>
</template>

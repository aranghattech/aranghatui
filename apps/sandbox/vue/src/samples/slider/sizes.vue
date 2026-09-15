<script setup lang="ts">
import { Slider } from '@aranghat/base-vue';
</script>

<template>
  <Slider size="sm" value="30" aria-label="Small" />
  <Slider value="50" aria-label="Medium" />
  <Slider size="lg" value="70" aria-label="Large" />
</template>

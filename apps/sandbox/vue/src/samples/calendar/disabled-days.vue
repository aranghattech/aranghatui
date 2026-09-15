<script setup lang="ts">
import { Calendar } from '@aranghat/components-vue';

// A function property: return true for a day that cannot be picked (weekends here).
const isWeekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6;
</script>

<template>
  <Calendar month="2026-09" aria-label="Pick a weekday" :disabled-dates="isWeekend" />
</template>

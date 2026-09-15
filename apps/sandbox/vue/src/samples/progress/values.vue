<script setup lang="ts">
import { Progress } from '@aranghat/base-vue';
</script>

<template>
  <Progress value="0" aria-label="Empty" />
  <Progress value="50" aria-label="Half" />
  <Progress value="100" aria-label="Complete" />
</template>

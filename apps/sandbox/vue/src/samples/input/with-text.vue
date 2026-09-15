<script setup lang="ts">
import { Input } from '@aranghat/base-vue';
</script>

<template>
  <Input placeholder="example" aria-label="Domain">
    <span slot="start">https://</span>
    <span slot="end">.com</span>
  </Input>
</template>

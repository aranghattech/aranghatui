<script setup lang="ts">
import { Input, InputGroup } from '@aranghat/base-vue';
</script>

<template>
  <InputGroup>
    <span slot="start">https://</span>
    <Input placeholder="example" aria-label="Domain" />
    <span slot="end">.com</span>
  </InputGroup>
</template>

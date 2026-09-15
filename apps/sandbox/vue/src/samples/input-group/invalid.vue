<script setup lang="ts">
import { Input, InputGroup } from '@aranghat/base-vue';
</script>

<template>
  <InputGroup>
    <span slot="start">https://</span>
    <Input value="not a domain" aria-label="Domain" invalid />
  </InputGroup>
</template>

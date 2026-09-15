<script setup lang="ts">
import { Input, InputGroup, Spinner } from '@aranghat/base-vue';
</script>

<template>
  <InputGroup>
    <Input placeholder="Searching…" aria-label="Search" value="design" />
    <span slot="end"><Spinner size="sm" label="Searching" /> Searching…</span>
  </InputGroup>
</template>

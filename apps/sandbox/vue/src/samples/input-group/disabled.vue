<script setup lang="ts">
import { Icon, Input, InputGroup } from '@aranghat/base-vue';
</script>

<template>
  <InputGroup>
    <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
    <Input placeholder="Search…" aria-label="Search" disabled />
  </InputGroup>
</template>

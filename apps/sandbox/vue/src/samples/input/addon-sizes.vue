<script setup lang="ts">
import { Icon, Input } from '@aranghat/base-vue';
</script>

<template>
  <Input size="sm" placeholder="Search" aria-label="Search small">
    <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
  </Input>
  <Input placeholder="Search" aria-label="Search medium">
    <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
  </Input>
  <Input size="lg" placeholder="Search" aria-label="Search large">
    <Icon slot="start"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></Icon>
  </Input>
</template>

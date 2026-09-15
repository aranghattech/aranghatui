<script setup lang="ts">
import { Icon, Toggle, ToggleGroup } from '@aranghat/base-vue';
</script>

<template>
  <ToggleGroup variant="outline" type="multiple" value="bold,italic" aria-label="Text formatting">
    <Toggle value="bold" aria-label="Toggle bold"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/></svg></Icon></Toggle>
    <Toggle value="italic" aria-label="Toggle italic"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/></svg></Icon></Toggle>
    <Toggle value="underline" aria-label="Toggle underline"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/></svg></Icon></Toggle>
  </ToggleGroup>
</template>

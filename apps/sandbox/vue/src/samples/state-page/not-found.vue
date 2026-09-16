<script setup lang="ts">
import { StatePage } from '@aranghat/widgets-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <StatePage kind="not-found" code="404">
    <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></Icon>
    <Button slot="actions" href="#">Go home</Button>
    <Button slot="actions" variant="outline" href="#">Contact support</Button>
  </StatePage>
</template>

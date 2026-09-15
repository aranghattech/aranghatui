<script setup lang="ts">
import { StatePage } from '@aranghat/widgets-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <StatePage>
    <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></Icon>
    <Button slot="actions">Create project</Button>
  </StatePage>
</template>

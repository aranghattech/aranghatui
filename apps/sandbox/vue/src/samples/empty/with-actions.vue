<script setup lang="ts">
import { Button, ButtonGroup, Empty, Icon } from '@aranghat/base-vue';
</script>

<template>
  <Empty>
    <Icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg></Icon>
    <h3 slot="title">No notifications</h3>
    <p slot="description">You're all caught up. New notifications will appear here.</p>
    <ButtonGroup>
      <Button variant="outline">Settings</Button>
      <Button variant="outline">Learn more</Button>
    </ButtonGroup>
  </Empty>
</template>

<script setup lang="ts">
import { Icon, Item } from '@aranghat/base-vue';
</script>

<template>
  <Item variant="outline" href="#">
    <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></Icon>
    <p slot="title">Open settings</p>
    <p slot="description">Manage your account, billing and teams.</p>
  </Item>
</template>

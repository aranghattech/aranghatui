<script setup lang="ts">
import { Icon, Item, ItemGroup, Separator } from '@aranghat/base-vue';
</script>

<template>
  <ItemGroup>
    <Item>
      <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></Icon>
      <p slot="title">Personal</p>
      <p slot="description">Your private workspace.</p>
    </Item>
    <Separator />
    <Item>
      <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/><path d="m9 12 2 2 4-4"/></svg></Icon>
      <p slot="title">Team</p>
      <p slot="description">Shared with 4 people.</p>
    </Item>
  </ItemGroup>
</template>

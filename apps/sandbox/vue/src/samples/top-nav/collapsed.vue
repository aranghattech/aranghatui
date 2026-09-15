<script setup lang="ts">
import { TopNav } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <TopNav collapse="always" open>
    <a slot="brand" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: var(--art-size-icon-lg); height: var(--art-size-icon-lg)"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>Acme</a>
    <a href="#" aria-current="page">Overview</a>
    <a href="#">Customers</a>
    <a href="#">Products</a>
    <a href="#">Settings</a>
    <Button slot="end" variant="ghost" size="sm">Sign in</Button>
    <Button slot="end" size="sm">Get started</Button>
  </TopNav>
</template>

<script setup lang="ts">
import { Input } from '@aranghat/base-vue';
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><Input size="sm" placeholder="Small" aria-label="Small"></Input><Input placeholder="Medium" aria-label="Medium"></Input><Input size="lg" placeholder="Large" aria-label="Large"></Input></div>
</template>

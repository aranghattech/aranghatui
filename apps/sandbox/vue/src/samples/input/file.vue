<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><Label for="picture">Picture</Label><Input id="picture" type="file"></Input></div>
</template>

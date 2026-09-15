<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><Label for="email-1">Email</Label><Input id="email-1" type="email" placeholder="Email"></Input></div>
</template>

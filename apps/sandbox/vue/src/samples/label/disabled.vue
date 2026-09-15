<script setup lang="ts">
import { Label } from '@aranghat/base-vue';
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2)"><Label for="email-off" disabled>Your email address</Label><input id="email-off" type="email" placeholder="you@example.com" disabled style="font:inherit;padding:var(--art-space-2);border:var(--art-border-width) solid var(--art-color-border-default);border-radius:var(--art-radius-md);background:transparent;color:inherit"></div>
</template>

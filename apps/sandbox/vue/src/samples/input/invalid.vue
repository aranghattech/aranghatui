<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <div style="display:flex;flex-direction:column;gap:var(--art-space-2);width:20rem;max-width:100%"><Label for="email-2">Email</Label><Input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error"></Input><p id="email-2-error" style="margin:0;font-size:var(--art-font-size-sm);color:var(--art-color-destructive-fg)">Enter a valid email address.</p></div>
</template>

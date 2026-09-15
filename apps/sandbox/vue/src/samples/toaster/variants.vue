<script setup lang="ts">
import { Toast, Toaster } from '@aranghat/components-vue';
</script>

<template>
  <Toaster inline>
    <Toast duration="0">Default</Toast>
    <Toast variant="success" duration="0">Success</Toast>
    <Toast variant="error" duration="0">Error</Toast>
    <Toast variant="warning" duration="0">Warning</Toast>
    <Toast variant="info" duration="0">Info</Toast>
    <Toast variant="loading" duration="0">Loading…</Toast>
  </Toaster>
</template>

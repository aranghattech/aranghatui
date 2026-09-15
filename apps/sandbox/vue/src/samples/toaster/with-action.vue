<script setup lang="ts">
import { Toast, Toaster } from '@aranghat/components-vue';
</script>

<template>
  <Toaster inline>
    <Toast duration="0" action-label="Undo" cancel-label="Dismiss">Message deleted<span slot="description">The message was moved to Trash.</span></Toast>
  </Toaster>
</template>

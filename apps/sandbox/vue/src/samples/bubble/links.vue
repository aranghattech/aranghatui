<script setup lang="ts">
import { Bubble } from '@aranghat/components-vue';
</script>

<template>
  <Bubble variant="outline" href="https://example.com" target="_blank" rel="noreferrer">Open the shared document ↗</Bubble>
  <Bubble variant="muted">Reply with <a href="#">a link</a> inside the text.</Bubble>
</template>

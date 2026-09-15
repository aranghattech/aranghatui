<script setup lang="ts">
import { Bubble } from '@aranghat/components-vue';
</script>

<template>
  <Bubble>Hey! Are we still on for lunch tomorrow?</Bubble>
  <Bubble variant="muted" align="end">Yes — 12:30 at the usual place.<span slot="reactions" role="img" aria-label="thumbs up">👍</span></Bubble>
</template>

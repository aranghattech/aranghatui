<script setup lang="ts">
import { Bubble, BubbleGroup } from '@aranghat/components-vue';
</script>

<template>
  <BubbleGroup>
    <Bubble variant="muted">First of three.</Bubble>
    <Bubble variant="muted">Second, from the same sender.</Bubble>
    <Bubble variant="muted">Third.</Bubble>
  </BubbleGroup>
</template>

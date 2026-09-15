<script setup lang="ts">
import { Button, Empty } from '@aranghat/base-vue';
</script>

<template>
  <Empty>
    <h3 slot="title">Nothing to show</h3>
    <p slot="description">Try adjusting your filters.</p>
    <Button variant="link">Clear filters</Button>
  </Empty>
</template>

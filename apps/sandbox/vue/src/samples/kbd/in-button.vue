<script setup lang="ts">
import { Button, Kbd } from '@aranghat/base-vue';
</script>

<template>
  <Button variant="outline" size="sm">
    Accept
    <Kbd slot="end">⏎</Kbd>
  </Button>
  <Button variant="outline" size="sm">
    Cancel
    <Kbd slot="end">Esc</Kbd>
  </Button>
</template>

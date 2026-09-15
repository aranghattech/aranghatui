<script setup lang="ts">
import { Collapsible } from '@aranghat/components-vue';
</script>

<template>
  <Collapsible open>
    <p slot="trigger">Show details</p>
    <p>These details start expanded because of the open attribute.</p>
  </Collapsible>
</template>

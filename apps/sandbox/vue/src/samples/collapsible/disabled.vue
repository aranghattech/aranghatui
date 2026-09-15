<script setup lang="ts">
import { Collapsible } from '@aranghat/components-vue';
</script>

<template>
  <Collapsible disabled>
    <p slot="trigger">Unavailable section</p>
    <p>Never shown.</p>
  </Collapsible>
</template>

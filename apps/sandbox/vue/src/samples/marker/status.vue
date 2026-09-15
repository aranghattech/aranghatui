<script setup lang="ts">
import { Marker, Spinner } from '@aranghat/base-vue';
</script>

<template>
  <Marker role="status">
    <Spinner slot="icon" size="sm" label="Thinking" />
    Thinking…
  </Marker>
</template>

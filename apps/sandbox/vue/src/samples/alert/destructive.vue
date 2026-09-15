<script setup lang="ts">
import { Alert } from '@aranghat/components-vue';
import { Icon } from '@aranghat/base-vue';
</script>

<template>
  <Alert variant="destructive">
    <Icon slot="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg></Icon>
    <h5 slot="title">Unable to process your payment.</h5>
    <p slot="description">Please verify your billing information and try again.</p>
  </Alert>
</template>

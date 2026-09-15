<script setup lang="ts">
import { Button, Spinner } from '@aranghat/base-vue';
</script>

<template>
  <Button disabled>
    <Spinner slot="start" />
    Please wait
  </Button>
</template>

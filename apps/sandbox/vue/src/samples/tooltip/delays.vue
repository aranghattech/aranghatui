<script setup lang="ts">
import { Tooltip } from '@aranghat/components-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Tooltip open-delay="0" close-delay="0">
    <Button slot="trigger" variant="outline">Instant</Button>
    No hover intent
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from '@aranghat/components-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Tooltip>
    <Button slot="trigger" variant="outline">Hover</Button>
    Add to library
  </Tooltip>
</template>

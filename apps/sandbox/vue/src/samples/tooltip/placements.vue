<script setup lang="ts">
import { Tooltip } from '@aranghat/components-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Tooltip placement="top">
    <Button slot="trigger" variant="outline">Top</Button>
    Tooltip on top
  </Tooltip>
  <Tooltip placement="right">
    <Button slot="trigger" variant="outline">Right</Button>
    Tooltip on the right
  </Tooltip>
  <Tooltip placement="bottom">
    <Button slot="trigger" variant="outline">Bottom</Button>
    Tooltip on the bottom
  </Tooltip>
  <Tooltip placement="left">
    <Button slot="trigger" variant="outline">Left</Button>
    Tooltip on the left
  </Tooltip>
</template>

<script setup lang="ts">
import { Popover } from '@aranghat/components-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Popover placement="top">
    <Button slot="trigger" variant="outline">Top</Button>
    <p>Popover on top</p>
  </Popover>
  <Popover placement="right">
    <Button slot="trigger" variant="outline">Right</Button>
    <p>Popover on the right</p>
  </Popover>
  <Popover placement="bottom">
    <Button slot="trigger" variant="outline">Bottom</Button>
    <p>Popover on bottom</p>
  </Popover>
  <Popover placement="left">
    <Button slot="trigger" variant="outline">Left</Button>
    <p>Popover on the left</p>
  </Popover>
</template>

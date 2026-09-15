<script setup lang="ts">
import { Drawer } from '@aranghat/modals-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Drawer>
    <Button slot="trigger" variant="outline">Open drawer</Button>
    <span slot="title">Move Goal</span>
    <span slot="description">Set your daily activity goal.</span>
    <div style="display: flex; align-items: center; justify-content: center; gap: var(--art-space-4)">
      <Button variant="outline" icon aria-label="Decrease">−</Button>
      <span style="font-size: var(--art-font-size-4xl); font-weight: var(--art-font-weight-bold); letter-spacing: var(--art-font-tracking-tight); font-variant-numeric: tabular-nums">350</span>
      <Button variant="outline" icon aria-label="Increase">+</Button>
    </div>
    <Button slot="footer">Submit</Button>
    <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
  </Drawer>
</template>

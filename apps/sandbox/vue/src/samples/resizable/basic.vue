<script setup lang="ts">
import { Resizable, ResizableHandle, ResizablePanel } from '@aranghat/components-vue';
</script>

<template>
  <Resizable style="height: 12rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg)">
    <ResizablePanel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">One</div>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel default-size="50">
      <div style="display: flex; height: 100%; align-items: center; justify-content: center; font-size: var(--art-font-size-sm); font-weight: var(--art-font-weight-semibold)">Two</div>
    </ResizablePanel>
  </Resizable>
</template>

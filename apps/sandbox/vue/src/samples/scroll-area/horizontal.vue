<script setup lang="ts">
import { ScrollArea } from '@aranghat/components-vue';
import { Skeleton } from '@aranghat/base-vue';
</script>

<template>
  <ScrollArea orientation="horizontal" style="width: 24rem; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-md); padding: var(--art-space-4); display: flex; gap: var(--art-space-4)">
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
    <Skeleton style="flex: none; width: 10rem; height: 6rem" />
  </ScrollArea>
</template>

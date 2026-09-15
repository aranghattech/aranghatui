<script setup lang="ts">
import { Tooltip } from '@aranghat/components-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <Tooltip>
    <Button slot="trigger" variant="outline" icon aria-label="Add">
      <Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></Icon>
    </Button>
    Add a new item
  </Tooltip>
</template>

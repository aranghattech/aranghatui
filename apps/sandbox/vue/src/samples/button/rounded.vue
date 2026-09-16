<script setup lang="ts">
import { Button, Icon } from '@aranghat/base-vue';
import { plus } from '@aranghat/icons/plus';
</script>

<template>
  <Button rounded>Button</Button>
  <Button rounded variant="outline">Outline</Button>
  <Button rounded icon aria-label="Add">
    <Icon :icon="plus" />
  </Button>
</template>

<script setup lang="ts">
import { Button, Icon } from '@aranghat/base-vue';
import { plus } from '@aranghat/icons/plus';
</script>

<template>
  <Button variant="outline" icon aria-label="Add">
    <Icon :icon="plus" />
  </Button>
</template>

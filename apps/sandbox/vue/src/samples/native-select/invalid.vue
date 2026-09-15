<script setup lang="ts">
import { Label, NativeSelect } from '@aranghat/base-vue';
</script>

<template>
  <Label for="status-2">Status</Label>
  <NativeSelect id="status-2" invalid required aria-describedby="status-2-error">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </NativeSelect>
  <p id="status-2-error">Please choose a status.</p>
</template>

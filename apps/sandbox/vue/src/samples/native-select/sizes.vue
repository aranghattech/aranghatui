<script setup lang="ts">
import { NativeSelect } from '@aranghat/base-vue';
</script>

<template>
  <NativeSelect size="sm" aria-label="Small">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </NativeSelect>
  <NativeSelect aria-label="Medium">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </NativeSelect>
  <NativeSelect size="lg" aria-label="Large">
    <option value="">Select status</option>
    <option value="todo">Todo</option>
    <option value="in-progress">In Progress</option>
    <option value="done">Done</option>
    <option value="cancelled">Cancelled</option>
  </NativeSelect>
</template>

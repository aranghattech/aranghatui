<script setup lang="ts">
import { ref } from 'vue';
import { HelloOverlay } from '@aranghat/modals-vue';

const open = ref(false);
</script>

<template>
  <button type="button" @click="open = true">Open overlay</button>
  <HelloOverlay name="artui" v-model:open="open" />
</template>

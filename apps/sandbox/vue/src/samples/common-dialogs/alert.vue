<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@aranghat/base-vue';
import { alert } from '@aranghat/modals';

const result = ref('');
// alert() mounts the dialog itself and resolves when it closes — no element to render
async function ask() {
  await alert({ title: 'Export finished', description: 'Your report is ready to download.' });
  result.value = 'Acknowledged.';
}
</script>

<template>
  <Button variant="outline" @click="ask">Show alert</Button>
  <p>{{ result }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@aranghat/base-vue';
import { prompt } from '@aranghat/modals';

const result = ref('');
// prompt() mounts the dialog itself and resolves when it closes — no element to render
async function ask() {
  const name = await prompt({ title: 'Rename project', description: 'Pick a short, memorable name.', label: 'Name', defaultValue: 'Design system', required: true });
  result.value = name === null ? 'Cancelled.' : `Renamed to ${name}.`;
}
</script>

<template>
  <Button variant="outline" @click="ask">Rename</Button>
  <p>{{ result }}</p>
</template>

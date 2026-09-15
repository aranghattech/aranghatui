<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@aranghat/base-vue';
import { confirm } from '@aranghat/modals';

const result = ref('');
// confirm() mounts the dialog itself and resolves when it closes — no element to render
async function ask() {
  result.value = (await confirm({ title: 'Delete account?', description: 'This permanently removes your account and all of its data.', actionLabel: 'Delete', destructive: true })) ? 'Deleted.' : 'Kept.';
}
</script>

<template>
  <Button variant="outline" @click="ask">Delete account</Button>
  <p>{{ result }}</p>
</template>

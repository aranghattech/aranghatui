<script setup lang="ts">
import { ref } from 'vue';
import { Button, Label } from '@aranghat/base-vue';
import { Combobox, ComboboxItem } from '@aranghat/components-vue';

const framework = ref('');
function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit="onSubmit">
    <Label for="framework">Framework</Label>
    <Combobox id="framework" name="framework" placeholder="Select a framework" required v-model="framework">
      <ComboboxItem value="next">Next.js</ComboboxItem>
      <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
      <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
      <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
      <ComboboxItem value="astro">Astro</ComboboxItem>
    </Combobox>
    <Button type="submit">Submit</Button>
  </form>
</template>

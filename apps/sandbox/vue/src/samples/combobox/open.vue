<script setup lang="ts">
import { Combobox, ComboboxItem } from '@aranghat/components-vue';
</script>

<template>
  <Combobox value="nuxt" aria-label="Framework" open>
    <ComboboxItem value="next">Next.js</ComboboxItem>
    <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
    <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
    <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
    <ComboboxItem value="astro">Astro</ComboboxItem>
  </Combobox>
</template>

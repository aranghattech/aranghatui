<script setup lang="ts">
import { Combobox, ComboboxItem } from '@aranghat/components-vue';
</script>

<template>
  <Combobox size="sm" placeholder="Small" aria-label="Small">
    <ComboboxItem value="next">Next.js</ComboboxItem>
    <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
    <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
    <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
    <ComboboxItem value="astro">Astro</ComboboxItem>
  </Combobox>
  <Combobox placeholder="Medium" aria-label="Medium">
    <ComboboxItem value="next">Next.js</ComboboxItem>
    <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
    <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
    <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
    <ComboboxItem value="astro">Astro</ComboboxItem>
  </Combobox>
  <Combobox size="lg" placeholder="Large" aria-label="Large">
    <ComboboxItem value="next">Next.js</ComboboxItem>
    <ComboboxItem value="sveltekit">SvelteKit</ComboboxItem>
    <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
    <ComboboxItem value="remix" disabled>Remix</ComboboxItem>
    <ComboboxItem value="astro">Astro</ComboboxItem>
  </Combobox>
</template>

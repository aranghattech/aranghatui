<script setup lang="ts">
import type { Component } from 'vue';

const modules = import.meta.glob('./samples/**/*.vue', { eager: true }) as Record<string, { default: Component }>;
const samples = Object.entries(modules)
  .sort()
  .map(([path, mod]) => ({ id: path.replace('./samples/', '').replace(/\.vue$/, ''), component: mod.default }));
</script>

<template>
  <section v-for="s in samples" :key="s.id" :data-sample="s.id">
    <h2>{{ s.id }}</h2>
    <component :is="s.component" />
  </section>
</template>

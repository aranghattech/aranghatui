<script setup lang="ts">
import { ref } from 'vue';
/** Live preview frame: light/dark + RTL toggles scoped to the frame (CLAUDE.md §10.2). */
const theme = ref<'light' | 'dark'>('light');
const dir = ref<'ltr' | 'rtl'>('ltr');
</script>

<template>
  <div class="artui-preview" :data-theme="theme" :dir="dir">
    <div class="artui-preview__bar">
      <button type="button" @click="theme = theme === 'light' ? 'dark' : 'light'">{{ theme === 'light' ? 'Dark' : 'Light' }}</button>
      <button type="button" @click="dir = dir === 'ltr' ? 'rtl' : 'ltr'">{{ dir === 'ltr' ? 'RTL' : 'LTR' }}</button>
    </div>
    <div class="artui-preview__stage"><slot /></div>
  </div>
</template>

<style>
.artui-preview { border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg); margin: 16px 0; background: var(--art-color-bg-canvas); color: var(--art-color-fg-default); color-scheme: light; }
.artui-preview[data-theme='dark'] { color-scheme: dark; }
.artui-preview__bar { display: flex; gap: 8px; justify-content: flex-end; padding: 8px; border-bottom: var(--art-border-width) solid var(--art-color-border-default); }
.artui-preview__bar button { font: inherit; font-size: 12px; padding: 2px 8px; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-sm); background: var(--art-color-bg-surface); color: var(--art-color-fg-muted); cursor: pointer; }
.artui-preview__stage { padding: 32px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; min-height: 120px; font-family: var(--art-font-family-sans); }
</style>

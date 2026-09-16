<script setup lang="ts">
import { ref } from 'vue';
/**
 * Live preview frame (CLAUDE.md §10.2). Follows the page's light/dark mode (VitePress `html.dark`
 * is mirrored onto `data-theme` by the theme). RTL and brand toggles are scoped to the frame.
 */
const props = defineProps<{ brands?: string[]; frame?: 'inline' | 'stack' | 'control-text' | 'thread' | 'block' | 'shell' }>();
const dir = ref<'ltr' | 'rtl'>('ltr');
const brand = ref<string>('');
</script>

<template>
  <div class="artui-preview" :dir="dir" :data-brand="brand || undefined">
    <div class="artui-preview__bar">
      <select v-if="props.brands?.length" v-model="brand" aria-label="Brand theme">
        <option value="">default</option>
        <option v-for="b in props.brands" :key="b" :value="b">{{ b }}</option>
      </select>
      <button type="button" @click="dir = dir === 'ltr' ? 'rtl' : 'ltr'">{{ dir === 'ltr' ? 'RTL' : 'LTR' }}</button>
    </div>
    <div class="artui-preview__stage vp-raw" :data-frame="props.frame ?? 'inline'"><slot /></div>
  </div>
</template>

<style>
.artui-preview { border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-lg); margin: 16px 0; background: var(--art-color-bg-canvas); color: var(--art-color-fg-default); }
.artui-preview__bar { display: flex; gap: 8px; justify-content: flex-end; padding: 8px; border-bottom: var(--art-border-width) solid var(--art-color-border-default); }
.artui-preview__bar button, .artui-preview__bar select { font: inherit; font-size: 12px; padding: 2px 8px; border: var(--art-border-width) solid var(--art-color-border-default); border-radius: var(--art-radius-sm); background: var(--art-color-bg-surface); color: var(--art-color-fg-muted); cursor: pointer; }
.artui-preview__stage { padding: 32px; display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: center; min-height: 120px; font-family: var(--art-font-family-sans); }
.artui-preview__stage[data-frame='stack'] { flex-direction: column; align-items: stretch; gap: 8px; }
.artui-preview__stage[data-frame='stack'] > * { width: 20rem; max-width: 100%; margin-inline: auto; }
.artui-preview__stage[data-frame='thread'] { flex-direction: column; align-items: stretch; gap: 8px; width: 20rem; max-width: 100%; margin-inline: auto; }
.artui-preview__stage[data-frame='control-text'] { display: grid; grid-template-columns: auto 1fr; align-items: start; column-gap: 12px; row-gap: 6px; width: 20rem; max-width: 100%; margin-inline: auto; justify-content: start; }
.artui-preview__stage[data-frame='control-text'] > :first-child { grid-row: span 2; }
.artui-preview__stage[data-frame='control-text'] p { width: auto; }
.artui-preview__stage[data-frame='block'] { display: block; padding: 0; }
.artui-preview__stage[data-frame='shell'] { display: block; padding: 0; height: 32rem; overflow: hidden; border-radius: 0 0 var(--art-radius-lg) var(--art-radius-lg); }
.artui-preview__stage[data-frame='shell'] > * { height: 100%; min-height: 0; }
.artui-preview__stage > p { margin: 0; font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted); width: 20rem; max-width: 100%; }
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { data } from '../tokens.data';

const props = defineProps<{ prefix: string; tier?: 'primitive' | 'semantic' }>();
const rows = computed(() => data.filter((t) => t.path.startsWith(props.prefix) && (!props.tier || t.tier === props.tier)));
const isColor = (t: { type: string }) => t.type === 'color';
</script>

<template>
  <table class="artui-tokens">
    <thead><tr><th>Token</th><th>Value</th><th>Reference</th><th>Description</th></tr></thead>
    <tbody>
      <tr v-for="t in rows" :key="t.name">
        <td><code>{{ t.name }}</code></td>
        <td>
          <span v-if="isColor(t)" class="artui-swatch" :style="{ background: `var(${t.name})` }"></span>
          <code>{{ t.value }}</code>
        </td>
        <td><code v-if="t.original !== t.value">{{ t.original }}</code></td>
        <td>{{ t.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.artui-swatch { display: inline-block; width: 14px; height: 14px; border-radius: 3px; border: 1px solid var(--art-color-border-default); vertical-align: middle; margin-inline-end: 6px; }
</style>

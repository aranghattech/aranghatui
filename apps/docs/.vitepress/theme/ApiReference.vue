<script setup lang="ts">
import { computed } from 'vue';
import { data } from '../api.data';

/**
 * `nested` documents another element of the same family below the main one (the Mega Menu's item,
 * group and link): a heading names the element and its section anchors are prefixed with the tag,
 * so the page's own `#props` … anchors keep pointing at the main element.
 */
const props = defineProps<{ tag: string; nested?: boolean }>();
const c = computed(() => data[props.tag]);
const h = computed(() => (props.nested ? 'h4' : 'h3'));
const id = (section: string) => (props.nested ? `${props.tag}-${section}` : section);
const clean = (s?: string) => (s ?? '').replace(/\s+/g, ' ').trim();
</script>

<template>
  <div v-if="!c">API data for <code>{{ tag }}</code> not found — run <code>pnpm build</code>.</div>
  <div v-else class="artui-api">
    <h3 v-if="nested" :id="tag"><code>&lt;{{ tag }}&gt;</code></h3>
    <component :is="h" :id="id('props')">Props</component>
    <table v-if="c.props.length"><thead><tr><th>Prop</th><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
      <tbody><tr v-for="p in c.props" :key="p.name"><td><code>{{ p.name }}</code></td><td><code>{{ p.attr ?? '—' }}</code></td><td><code>{{ p.type }}</code></td><td><code>{{ p.default ?? '—' }}</code></td><td>{{ clean(p.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <component :is="h" :id="id('events')">Events</component>
    <table v-if="c.events.length"><thead><tr><th>Event</th><th>Detail</th><th>Description</th></tr></thead>
      <tbody><tr v-for="e in c.events" :key="e.event"><td><code>{{ e.event }}</code></td><td><code>{{ e.detail }}</code></td><td>{{ clean(e.docs) }}</td></tr></tbody></table>
    <p v-else>None (native events only).</p>
    <component :is="h" :id="id('methods')">Methods</component>
    <table v-if="c.methods.length"><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead>
      <tbody><tr v-for="m in c.methods" :key="m.name"><td><code>{{ m.name }}</code></td><td><code>{{ m.signature }}</code></td><td>{{ clean(m.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <component :is="h" :id="id('slots')">Slots</component>
    <table v-if="c.slots.length"><thead><tr><th>Slot</th><th>Description</th></tr></thead>
      <tbody><tr v-for="s in c.slots" :key="s.name"><td><code>{{ s.name || '(default)' }}</code></td><td>{{ clean(s.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <component :is="h" :id="id('css-custom-properties')">CSS Custom Properties</component>
    <table v-if="c.styles.length"><thead><tr><th>Name</th><th>Description</th></tr></thead>
      <tbody><tr v-for="s in c.styles" :key="s.name"><td><code>{{ s.name }}</code></td><td>{{ clean(s.docs) }}</td></tr></tbody></table>
    <p v-else>None — theme through semantic tokens.</p>
    <component :is="h" :id="id('css-shadow-parts')">CSS Shadow Parts</component>
    <table v-if="c.parts.length"><thead><tr><th>Part</th><th>Description</th></tr></thead>
      <tbody><tr v-for="p in c.parts" :key="p.name"><td><code>{{ p.name }}</code></td><td>{{ clean(p.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
  </div>
</template>

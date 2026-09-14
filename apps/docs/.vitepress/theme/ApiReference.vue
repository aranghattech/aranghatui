<script setup lang="ts">
import { computed } from 'vue';
import { data } from '../api.data';

const props = defineProps<{ tag: string }>();
const c = computed(() => data[props.tag]);
const clean = (s?: string) => (s ?? '').replace(/\s+/g, ' ').trim();
</script>

<template>
  <div v-if="!c">API data for <code>{{ tag }}</code> not found — run <code>pnpm build</code>.</div>
  <div v-else class="artui-api">
    <h3 id="props">Props</h3>
    <table v-if="c.props.length"><thead><tr><th>Prop</th><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
      <tbody><tr v-for="p in c.props" :key="p.name"><td><code>{{ p.name }}</code></td><td><code>{{ p.attr ?? '—' }}</code></td><td><code>{{ p.type }}</code></td><td><code>{{ p.default ?? '—' }}</code></td><td>{{ clean(p.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <h3 id="events">Events</h3>
    <table v-if="c.events.length"><thead><tr><th>Event</th><th>Detail</th><th>Description</th></tr></thead>
      <tbody><tr v-for="e in c.events" :key="e.event"><td><code>{{ e.event }}</code></td><td><code>{{ e.detail }}</code></td><td>{{ clean(e.docs) }}</td></tr></tbody></table>
    <p v-else>None (native events only).</p>
    <h3 id="methods">Methods</h3>
    <table v-if="c.methods.length"><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead>
      <tbody><tr v-for="m in c.methods" :key="m.name"><td><code>{{ m.name }}</code></td><td><code>{{ m.signature }}</code></td><td>{{ clean(m.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <h3 id="slots">Slots</h3>
    <table v-if="c.slots.length"><thead><tr><th>Slot</th><th>Description</th></tr></thead>
      <tbody><tr v-for="s in c.slots" :key="s.name"><td><code>{{ s.name || '(default)' }}</code></td><td>{{ clean(s.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
    <h3 id="css-custom-properties">CSS Custom Properties</h3>
    <table v-if="c.styles.length"><thead><tr><th>Name</th><th>Description</th></tr></thead>
      <tbody><tr v-for="s in c.styles" :key="s.name"><td><code>{{ s.name }}</code></td><td>{{ clean(s.docs) }}</td></tr></tbody></table>
    <p v-else>None — theme through semantic tokens.</p>
    <h3 id="css-shadow-parts">CSS Shadow Parts</h3>
    <table v-if="c.parts.length"><thead><tr><th>Part</th><th>Description</th></tr></thead>
      <tbody><tr v-for="p in c.parts" :key="p.name"><td><code>{{ p.name }}</code></td><td>{{ clean(p.docs) }}</td></tr></tbody></table>
    <p v-else>None.</p>
  </div>
</template>

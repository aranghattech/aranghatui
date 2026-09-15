<script setup lang="ts">
import { ref } from 'vue';
import { Avatar, Combobox, ComboboxItem } from '@aranghat/components-vue';

interface Person { id: string; name: string; email: string }
const people: Person[] = [
  { id: 'ada', name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 'grace', name: 'Grace Hopper', email: 'grace@example.com' },
];
const initials = (p: Person) => p.name.split(' ').map((n) => n[0]).join('');
const assignee = ref<Person>();
// `item` carries the data object; `change` hands it back as `detail.item`; `keywords` lets the email match too
const onChange = (e: CustomEvent<{ item?: unknown }>) => { assignee.value = e.detail.item as Person | undefined; };
</script>

<template>
  <Combobox placeholder="Search people…" aria-label="Assignee" @change="onChange">
    <ComboboxItem v-for="p in people" :key="p.id" :value="p.id" :label="p.name" :keywords="p.email" :item="p">
      <Avatar size="sm" alt="">{{ initials(p) }}</Avatar>
      <span>{{ p.name }}</span>
      <span class="muted">{{ p.email }}</span>
    </ComboboxItem>
  </Combobox>
  <p>{{ assignee ? `Assigned to ${assignee.email}` : 'Nobody assigned' }}</p>
</template>

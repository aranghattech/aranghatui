<script setup lang="ts">
import { ref } from 'vue';
import { Button, Label } from '@aranghat/base-vue';
import { Select, SelectItem } from '@aranghat/components-vue';

const fruit = ref('');
function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit="onSubmit">
    <Label for="fruit">Fruit</Label>
    <Select id="fruit" name="fruit" placeholder="Select a fruit" required v-model="fruit">
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes" disabled>Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </Select>
    <Button type="submit">Submit</Button>
  </form>
</template>

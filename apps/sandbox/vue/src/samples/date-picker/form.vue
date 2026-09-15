<script setup lang="ts">
import { ref } from 'vue';
import { Button, Label } from '@aranghat/base-vue';
import { DatePicker } from '@aranghat/components-vue';

const dob = ref('');
function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit="onSubmit">
    <Label for="dob">Date of birth</Label>
    <DatePicker id="dob" name="dob" caption-layout="dropdown" min="1900-01-01" max="2026-12-31" required v-model="dob" />
    <Button type="submit">Submit</Button>
  </form>
</template>

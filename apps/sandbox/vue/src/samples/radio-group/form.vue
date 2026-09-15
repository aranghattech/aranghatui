<script setup lang="ts">
import { ref } from 'vue';
import { Button, Radio, RadioGroup } from '@aranghat/base-vue';

const notify = ref('');
function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)), notify.value);
}
</script>

<template>
  <form @submit="onSubmit">
    <RadioGroup name="notify" required aria-label="Notify me about" v-model="notify">
      <Radio value="all">All new messages</Radio>
      <Radio value="mentions">Direct messages and mentions</Radio>
      <Radio value="none">Nothing</Radio>
    </RadioGroup>
    <Button type="submit">Submit</Button>
  </form>
</template>

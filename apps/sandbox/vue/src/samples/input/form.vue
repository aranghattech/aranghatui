<script setup lang="ts">
import { ref } from 'vue';
import { Button, Input, Label } from '@aranghat/base-vue';

const username = ref('');
function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit="onSubmit">
    <Label for="username">Username</Label>
    <Input id="username" name="username" placeholder="shadcn" required :minlength="2" v-model="username" />
    <Button type="submit">Submit</Button>
    <Button type="reset" variant="ghost" @click="username = ''">Reset</Button>
  </form>
</template>

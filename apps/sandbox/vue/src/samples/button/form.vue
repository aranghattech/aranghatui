<script setup lang="ts">
import { Button } from '@aranghat/base-vue/button';

function onSubmit(e: Event) {
  e.preventDefault();
  console.log('submitted', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
}
</script>

<template>
  <form @submit="onSubmit">
    <input name="email" type="email" required placeholder="you@example.com" />
    <Button type="submit">Subscribe</Button>
    <Button type="reset" variant="ghost">Reset</Button>
  </form>
</template>

<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Label for="email">Your email address</Label>
  <Input id="email" type="email" placeholder="Email" />
</template>

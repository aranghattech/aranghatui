<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Label for="email-off" disabled>Your email address</Label>
  <Input id="email-off" type="email" placeholder="Email" disabled />
</template>

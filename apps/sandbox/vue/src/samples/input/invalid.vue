<script setup lang="ts">
import { Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Label for="email-2">Email</Label>
  <Input id="email-2" type="email" value="not-an-email" invalid aria-describedby="email-2-error" />
  <p id="email-2-error">Enter a valid email address.</p>
</template>

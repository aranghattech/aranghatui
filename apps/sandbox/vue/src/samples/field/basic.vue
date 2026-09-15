<script setup lang="ts">
import { Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Field>
    <Label slot="label">Username</Label>
    <Input placeholder="shadcn" />
    <p slot="description">Choose a unique username for your account.</p>
  </Field>
</template>

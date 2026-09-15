<script setup lang="ts">
import { Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Field>
    <Label slot="label">Username</Label>
    <Input value="shadcn" disabled />
    <p slot="description">Contact support to change your username.</p>
  </Field>
</template>

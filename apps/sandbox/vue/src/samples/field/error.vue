<script setup lang="ts">
import { Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Field>
    <Label slot="label">Email</Label>
    <Input type="email" value="not-an-email" />
    <p slot="error">Enter a valid email address.</p>
  </Field>
</template>

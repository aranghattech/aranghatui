<script setup lang="ts">
import { Field, FieldSet, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <FieldSet>
    <span slot="legend">Address</span>
    <Field>
      <Label slot="label">Street</Label>
      <Input placeholder="123 Main St" />
    </Field>
    <Field>
      <Label slot="label">City</Label>
      <Input placeholder="New York" />
    </Field>
  </FieldSet>
</template>

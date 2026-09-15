<script setup lang="ts">
import { Field, Label, NativeSelect, Textarea } from '@aranghat/base-vue';
</script>

<template>
  <Field>
    <Label slot="label">Department</Label>
    <NativeSelect>
      <option value="eng">Engineering</option>
      <option value="design">Design</option>
    </NativeSelect>
  </Field>
  <Field>
    <Label slot="label">Feedback</Label>
    <Textarea placeholder="Your feedback…" />
    <p slot="description">Max 500 characters.</p>
  </Field>
</template>

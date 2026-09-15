<script setup lang="ts">
import { Field, InputOtp, Label } from '@aranghat/base-vue';
</script>

<template>
  <Field>
    <Label slot="label">Verification code</Label>
    <InputOtp group-size="3" />
    <p slot="description">Enter the 6-digit code we sent to your phone.</p>
  </Field>
</template>

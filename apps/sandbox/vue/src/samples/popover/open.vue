<script setup lang="ts">
import { Popover } from '@aranghat/components-vue';
import { Button, Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Popover open>
    <Button slot="trigger" variant="outline">Open popover</Button>
    <h4>Dimensions</h4>
    <p class="muted">Set the dimensions for the layer.</p>
    <Field>
      <Label slot="label">Width</Label>
      <Input value="100%" size="sm" />
    </Field>
    <Field>
      <Label slot="label">Height</Label>
      <Input value="25px" size="sm" />
    </Field>
  </Popover>
</template>

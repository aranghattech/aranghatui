<script setup lang="ts">
import { Dialog } from '@aranghat/modals-vue';
import { Button, Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Dialog>
    <Button slot="trigger" variant="outline">Edit profile</Button>
    <span slot="title">Edit profile</span>
    <span slot="description">Make changes to your profile here. Click save when you're done.</span>
    <Field>
      <Label slot="label">Name</Label>
      <Input value="Pedro Duarte" />
    </Field>
    <Field>
      <Label slot="label">Username</Label>
      <Input value="@peduarte" />
    </Field>
    <Button slot="footer" variant="outline" dialog-close>Cancel</Button>
    <Button slot="footer">Save changes</Button>
  </Dialog>
</template>

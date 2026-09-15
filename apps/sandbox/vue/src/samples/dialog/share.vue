<script setup lang="ts">
import { Dialog } from '@aranghat/modals-vue';
import { Button, Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Dialog>
    <Button slot="trigger" variant="outline">Share</Button>
    <span slot="title">Share link</span>
    <span slot="description">Anyone who has this link will be able to view this.</span>
    <Field>
      <Label slot="label">Link</Label>
      <Input value="https://ui.shadcn.com/docs/installation" readonly />
    </Field>
    <Button slot="footer" variant="secondary" dialog-close>Close</Button>
  </Dialog>
</template>

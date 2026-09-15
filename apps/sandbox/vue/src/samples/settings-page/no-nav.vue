<script setup lang="ts">
import { SettingsPage } from '@aranghat/widgets-vue';
import { Button, Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <SettingsPage heading="Workspace" description="Settings for this workspace." section-heading="General">
    <Button slot="actions" variant="outline">Invite members</Button>
    <Field>
      <Label slot="label">Workspace name</Label>
      <Input value="Acme" />
    </Field>
    <div>
      <Button>Save</Button>
    </div>
  </SettingsPage>
</template>

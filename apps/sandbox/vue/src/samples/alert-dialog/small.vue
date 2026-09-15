<script setup lang="ts">
import { AlertDialog } from '@aranghat/modals-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <AlertDialog size="sm">
    <Button slot="trigger" variant="outline">Show dialog</Button>
    <span slot="title">Are you absolutely sure?</span>
    <span slot="description">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</span>
    <Button slot="cancel" variant="outline">Cancel</Button>
    <Button slot="action">Continue</Button>
  </AlertDialog>
</template>

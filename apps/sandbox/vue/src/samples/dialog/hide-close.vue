<script setup lang="ts">
import { Dialog } from '@aranghat/modals-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Dialog hide-close>
    <Button slot="trigger" variant="outline">Terms</Button>
    <span slot="title">Terms of service</span>
    <span slot="description">Read the terms before you continue.</span>
    <p style="margin: 0; font-size: var(--art-font-size-sm)">By continuing you agree to the terms of service and the privacy policy.</p>
    <Button slot="footer" variant="outline" dialog-close>Decline</Button>
    <Button slot="footer" dialog-close>Accept</Button>
  </Dialog>
</template>

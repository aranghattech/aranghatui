<script setup lang="ts">
import { Attachment } from '@aranghat/components-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <Attachment size="sm" name="notes.txt" description="TXT · 2 KB">
    <Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button>
  </Attachment>
  <Attachment name="notes.txt" description="TXT · 2 KB">
    <Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button>
  </Attachment>
</template>

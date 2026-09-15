<script setup lang="ts">
import { Attachment, AttachmentGroup } from '@aranghat/components-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <AttachmentGroup label="Files to send">
    <Attachment size="sm" name="a.pdf" description="12 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
    <Attachment size="sm" name="b.pdf" description="80 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
    <Attachment size="sm" name="c.pdf" description="1.4 MB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
    <Attachment size="sm" name="d.pdf" description="220 KB"><Button slot="actions" variant="ghost" size="sm" icon aria-label="Remove"><Icon><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></Icon></Button></Attachment>
  </AttachmentGroup>
</template>

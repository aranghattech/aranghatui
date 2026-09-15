<script setup lang="ts">
import { Attachment, Avatar, Bubble, Message } from '@aranghat/components-vue';
</script>

<template>
  <Message align="end">
    <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
    <Bubble>Here are the files.</Bubble>
    <Attachment name="q3-results.pdf" description="PDF · 1.2 MB" />
  </Message>
</template>

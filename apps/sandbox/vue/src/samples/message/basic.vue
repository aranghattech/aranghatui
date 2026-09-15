<script setup lang="ts">
import { Avatar, Bubble, Message } from '@aranghat/components-vue';
</script>

<template>
  <Message>
    <Avatar slot="avatar" size="sm" alt="">AL</Avatar>
    <Bubble variant="muted">Hey! Are we still on for lunch tomorrow?</Bubble>
  </Message>
  <Message align="end">
    <Avatar slot="avatar" size="sm" alt="">ME</Avatar>
    <Bubble>Yes — 12:30 at the usual place.</Bubble>
  </Message>
</template>

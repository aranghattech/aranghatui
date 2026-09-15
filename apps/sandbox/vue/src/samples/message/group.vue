<script setup lang="ts">
import { Avatar, Bubble, BubbleGroup, Message, MessageGroup } from '@aranghat/components-vue';
</script>

<template>
  <MessageGroup>
    <Message>
      <Avatar slot="avatar" size="sm" alt="">AL</Avatar>
      <BubbleGroup>
        <Bubble variant="muted">I pushed the fix.</Bubble>
        <Bubble variant="muted">CI is green.</Bubble>
        <Bubble variant="muted">Ready for review whenever you are.</Bubble>
      </BubbleGroup>
    </Message>
  </MessageGroup>
</template>

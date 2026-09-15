<script setup lang="ts">
import { Label, Textarea } from '@aranghat/base-vue';
</script>

<template>
  <Label for="message-2">Your message</Label>
  <Textarea id="message-2" placeholder="Type your message here." aria-describedby="message-2-help" />
  <p id="message-2-help">Your message will be copied to the support team.</p>
</template>

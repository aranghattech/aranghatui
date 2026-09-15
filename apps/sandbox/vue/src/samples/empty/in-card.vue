<script setup lang="ts">
import { Button, Card, Empty, Icon } from '@aranghat/base-vue';
</script>

<template>
  <Card>
    <Empty>
      <Icon slot="media" size="lg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg></Icon>
      <h3 slot="title">No files</h3>
      <p slot="description">Upload a file to get started.</p>
      <Button variant="outline">Upload</Button>
    </Empty>
  </Card>
</template>

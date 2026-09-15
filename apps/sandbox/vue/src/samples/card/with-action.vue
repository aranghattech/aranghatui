<script setup lang="ts">
import { Button, Card } from '@aranghat/base-vue';
</script>

<template>
  <Card>
    <h3 slot="title">Notifications</h3>
    <p slot="description">You have 3 unread messages.</p>
    <Button slot="action" variant="ghost" size="sm">Mark all read</Button>
    <p>Your inbox is quiet today.</p>
  </Card>
</template>

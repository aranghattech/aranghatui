<script setup lang="ts">
import { Card } from '@aranghat/base-vue';
</script>

<template>
  <Card>
    <h3 slot="title">Card title</h3>
    <p slot="description">Card description</p>
    <p>Card content</p>
    <p slot="footer">Card footer</p>
  </Card>
</template>

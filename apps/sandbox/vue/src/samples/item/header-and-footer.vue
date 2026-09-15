<script setup lang="ts">
import { Badge, Button, Item } from '@aranghat/base-vue';
</script>

<template>
  <Item variant="outline">
    <span slot="header">Release notes<Badge variant="secondary">New</Badge></span>
    <p slot="title">v1.2.0</p>
    <p slot="description">Field, Input OTP and Button Group land in base.</p>
    <span slot="footer">Published today<Button variant="link" size="sm">Read more</Button></span>
  </Item>
</template>

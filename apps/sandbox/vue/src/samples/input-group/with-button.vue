<script setup lang="ts">
import { Button, Input, InputGroup } from '@aranghat/base-vue';
</script>

<template>
  <InputGroup>
    <Input type="email" placeholder="Email" aria-label="Email" />
    <Button slot="end" size="sm" variant="secondary">Subscribe</Button>
  </InputGroup>
</template>

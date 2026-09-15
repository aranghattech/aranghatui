<script setup lang="ts">
import { ButtonGroup, ButtonGroupText, Input } from '@aranghat/base-vue';
</script>

<template>
  <ButtonGroup>
    <ButtonGroupText>$</ButtonGroupText>
    <Input placeholder="0.00" aria-label="Amount" />
    <ButtonGroupText>USD</ButtonGroupText>
  </ButtonGroup>
</template>

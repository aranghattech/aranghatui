<script setup lang="ts">
import { Hello } from '@aranghat/base-vue';
</script>

<template>
  <Hello name="artui" @greet="(e) => console.log('greet', e.detail)" />
</template>

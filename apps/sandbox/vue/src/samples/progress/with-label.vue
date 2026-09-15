<script setup lang="ts">
import { Label, Progress } from '@aranghat/base-vue';
</script>

<template>
  <Label id="upload-label">Uploading photo…</Label>
  <Progress value="66" aria-labelledby="upload-label" />
</template>

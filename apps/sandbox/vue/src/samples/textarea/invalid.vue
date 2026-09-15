<script setup lang="ts">
import { Label, Textarea } from '@aranghat/base-vue';
</script>

<template>
  <Label for="bio">Bio</Label>
  <Textarea id="bio" value="Too short" invalid aria-describedby="bio-error" />
  <p id="bio-error">Bio must be at least 10 characters.</p>
</template>

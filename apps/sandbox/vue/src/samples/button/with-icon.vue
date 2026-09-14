<script setup lang="ts">
import { Button, Icon } from '@aranghat/base-vue';
import { mail } from '@aranghat/icons/mail';
</script>

<template>
  <Button variant="outline">
    <Icon slot="start" :icon="mail" />
    Login with Email
  </Button>
</template>

<script setup lang="ts">
import { Signup } from '@aranghat/widgets-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <Signup login-href="#login">
    <Button slot="social" variant="outline">Sign up with Google</Button>
  </Signup>
</template>

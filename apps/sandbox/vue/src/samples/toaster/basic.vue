<script setup lang="ts">
import { Button } from '@aranghat/base-vue';
import { Toaster } from '@aranghat/components-vue';
import { toast } from '@aranghat/components';

// one Toaster per app, usually at the root
const notify = () =>
  toast('Event has been created', {
    description: 'Sunday, December 03, 2023 at 9:00 AM',
    action: { label: 'Undo', onClick: () => console.log('Undo') },
  });
</script>

<template>
  <Toaster />
  <Button variant="outline" @click="notify">Show toast</Button>
</template>

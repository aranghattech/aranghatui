<script setup lang="ts">
import { Button } from '@aranghat/base-vue';
import { Toaster } from '@aranghat/components-vue';
import { toast } from '@aranghat/components';

const save = () => new Promise<{ name: string }>((resolve) => setTimeout(() => resolve({ name: 'Report' }), 2000));
const run = () =>
  toast.promise(save(), {
    loading: 'Saving…',
    success: (data) => `${data.name} has been saved`,
    error: 'Something went wrong',
  });
</script>

<template>
  <Toaster />
  <Button variant="outline" @click="run">Save</Button>
</template>

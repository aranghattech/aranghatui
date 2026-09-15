<script setup lang="ts">
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <DropdownMenu open>
    <Button slot="trigger" variant="outline">View</Button>
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem type="checkbox" value="status" checked>Status bar</DropdownMenuItem>
    <DropdownMenuItem type="checkbox" value="activity" disabled>Activity bar</DropdownMenuItem>
    <DropdownMenuItem type="checkbox" value="panel">Panel</DropdownMenuItem>
  </DropdownMenu>
</template>

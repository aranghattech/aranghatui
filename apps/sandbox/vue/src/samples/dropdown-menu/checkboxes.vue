<script setup lang="ts">
import { DropdownMenu, MenuItem, MenuLabel, MenuSeparator } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <DropdownMenu open>
    <Button slot="trigger" variant="outline">View</Button>
    <MenuLabel>Appearance</MenuLabel>
    <MenuSeparator />
    <MenuItem type="checkbox" value="status" checked>Status bar</MenuItem>
    <MenuItem type="checkbox" value="activity" disabled>Activity bar</MenuItem>
    <MenuItem type="checkbox" value="panel">Panel</MenuItem>
  </DropdownMenu>
</template>

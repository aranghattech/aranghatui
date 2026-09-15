<script setup lang="ts">
import { DropdownMenu, MenuItem } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <DropdownMenu>
    <Button slot="trigger" variant="outline">Go to</Button>
    <MenuItem href="#dashboard">Dashboard</MenuItem>
    <MenuItem href="#reports">Reports</MenuItem>
    <MenuItem href="https://example.com" target="_blank">Docs ↗</MenuItem>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { DropdownMenu, DropdownMenuItem } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <DropdownMenu>
    <Button slot="trigger" variant="outline">Go to</Button>
    <DropdownMenuItem href="#dashboard">Dashboard</DropdownMenuItem>
    <DropdownMenuItem href="#reports">Reports</DropdownMenuItem>
    <DropdownMenuItem href="https://example.com" target="_blank">Docs ↗</DropdownMenuItem>
  </DropdownMenu>
</template>

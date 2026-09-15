<script setup lang="ts">
import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub } from '@aranghat/navigation-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <DropdownMenu open>
    <Button slot="trigger" variant="outline">Open</Button>
    <DropdownMenuItem value="new">New file</DropdownMenuItem>
    <DropdownMenuSub open>
      <DropdownMenuItem slot="trigger">Share</DropdownMenuItem>
      <DropdownMenuItem value="email">Email</DropdownMenuItem>
      <DropdownMenuItem value="message">Message</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem value="more">More…</DropdownMenuItem>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem value="delete" variant="destructive">Delete</DropdownMenuItem>
  </DropdownMenu>
</template>

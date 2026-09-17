<script setup lang="ts">
import { ContextMenu, MenuItem, MenuLabel, MenuRadioGroup, MenuSeparator, MenuSub } from '@aranghat/navigation-vue';
</script>

<template>
  <ContextMenu open visible-items="5">
    <div style="display: flex; align-items: center; justify-content: center; height: calc(var(--art-space-20) * 2); width: var(--art-container-xs); border: var(--art-border-width) dashed var(--art-color-border-default); border-radius: var(--art-radius-md); font-size: var(--art-font-size-sm); color: var(--art-color-fg-muted)">Right click here</div>
    <MenuItem slot="menu" value="back">Back<span slot="shortcut">⌘[</span></MenuItem>
    <MenuItem slot="menu" value="forward" disabled>Forward<span slot="shortcut">⌘]</span></MenuItem>
    <MenuItem slot="menu" value="reload">Reload<span slot="shortcut">⌘R</span></MenuItem>
    <MenuSub slot="menu">
      <MenuItem slot="trigger">More tools</MenuItem>
      <MenuItem value="save">Save page…<span slot="shortcut">⇧⌘S</span></MenuItem>
      <MenuItem value="shortcut">Create shortcut…</MenuItem>
      <MenuSeparator />
      <MenuItem value="devtools">Developer tools</MenuItem>
    </MenuSub>
    <MenuSeparator slot="menu" />
    <MenuItem slot="menu" type="checkbox" value="bookmarks" checked>Show bookmarks</MenuItem>
    <MenuItem slot="menu" type="checkbox" value="urls">Show full URLs</MenuItem>
    <MenuSeparator slot="menu" />
    <MenuRadioGroup slot="menu" value="pedro">
      <MenuLabel inset>People</MenuLabel>
      <MenuItem type="radio" value="pedro">Pedro Duarte</MenuItem>
      <MenuItem type="radio" value="colm">Colm Tuite</MenuItem>
    </MenuRadioGroup>
  </ContextMenu>
</template>

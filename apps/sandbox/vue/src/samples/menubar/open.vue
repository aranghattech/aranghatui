<script setup lang="ts">
import { MenuItem, MenuRadioGroup, MenuSeparator, MenuSub, Menubar, MenubarMenu } from '@aranghat/navigation-vue';
</script>

<template>
  <Menubar aria-label="Application">
    <MenubarMenu label="File">
      <MenuItem value="new-tab">New tab<span slot="shortcut">⌘T</span></MenuItem>
      <MenuItem value="new-window">New window<span slot="shortcut">⌘N</span></MenuItem>
      <MenuItem value="incognito" disabled>New incognito window</MenuItem>
      <MenuSeparator />
      <MenuSub>
        <MenuItem slot="trigger">Share</MenuItem>
        <MenuItem value="email">Email link</MenuItem>
        <MenuItem value="messages">Messages</MenuItem>
      </MenuSub>
      <MenuSeparator />
      <MenuItem value="print">Print…<span slot="shortcut">⌘P</span></MenuItem>
    </MenubarMenu>
    <MenubarMenu label="Edit" open>
      <MenuItem value="undo">Undo<span slot="shortcut">⌘Z</span></MenuItem>
      <MenuItem value="redo">Redo<span slot="shortcut">⇧⌘Z</span></MenuItem>
      <MenuSeparator />
      <MenuItem value="cut">Cut</MenuItem>
      <MenuItem value="copy">Copy</MenuItem>
      <MenuItem value="paste">Paste</MenuItem>
    </MenubarMenu>
    <MenubarMenu label="View">
      <MenuItem type="checkbox" value="bookmarks">Always show bookmarks bar</MenuItem>
      <MenuItem type="checkbox" value="urls" checked>Always show full URLs</MenuItem>
      <MenuSeparator />
      <MenuItem value="reload" inset>Reload<span slot="shortcut">⌘R</span></MenuItem>
    </MenubarMenu>
    <MenubarMenu label="Profiles">
      <MenuRadioGroup value="benoit">
        <MenuItem type="radio" value="andy">Andy</MenuItem>
        <MenuItem type="radio" value="benoit">Benoit</MenuItem>
        <MenuItem type="radio" value="luis">Luis</MenuItem>
      </MenuRadioGroup>
      <MenuSeparator />
      <MenuItem value="edit" inset>Edit…</MenuItem>
    </MenubarMenu>
  </Menubar>
</template>

<script setup lang="ts">
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@aranghat/navigation-vue';
</script>

<template>
  <NavigationMenu>
    <NavigationMenuItem label="Getting started">
      <ul style="display: grid; gap: var(--art-space-1); width: var(--art-container-xs); margin: 0; padding: 0; list-style: none">
        <li><NavigationMenuLink href="#">Introduction<span slot="description">Re-usable components built with Stencil and Tailwind.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Installation<span slot="description">How to install dependencies and structure your app.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Typography<span slot="description">Styles for headings, paragraphs, lists…</span></NavigationMenuLink></li>
      </ul>
    </NavigationMenuItem>
    <NavigationMenuItem label="Components">
      <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--art-space-1); width: var(--art-container-lg); margin: 0; padding: 0; list-style: none">
        <li><NavigationMenuLink href="#">Alert Dialog<span slot="description">A modal dialog that interrupts the user with important content.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Hover Card<span slot="description">For sighted users to preview content available behind a link.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Progress<span slot="description">Displays an indicator showing the completion progress of a task.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Scroll Area<span slot="description">Visually or semantically separates content.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Tabs<span slot="description">A set of layered sections of content displayed one at a time.</span></NavigationMenuLink></li>
        <li><NavigationMenuLink href="#">Tooltip<span slot="description">A popup that displays information related to an element.</span></NavigationMenuLink></li>
      </ul>
    </NavigationMenuItem>
    <NavigationMenuItem label="Docs" href="#docs" />
  </NavigationMenu>
</template>

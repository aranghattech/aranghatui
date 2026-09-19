<script setup lang="ts">
import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-vue';
import { Button, Card } from '@aranghat/base-vue';
</script>

<template>
  <MegaMenu>
    <MegaMenuItem label="Products" :max-columns="2">
      <MegaMenuGroup label="Build">
        <MegaMenuLink href="#editor">Editor<span slot="description">Write and review together</span></MegaMenuLink>
        <MegaMenuLink href="#deploy">Deploy<span slot="description">Ship every commit</span></MegaMenuLink>
        <MegaMenuLink href="#functions">Functions<span slot="description">Run code at the edge</span></MegaMenuLink>
      </MegaMenuGroup>
      <MegaMenuGroup label="Observe">
        <MegaMenuLink href="#analytics">Analytics<span slot="description">Real-time traffic</span></MegaMenuLink>
        <MegaMenuLink href="#logs">Logs<span slot="description">Search every request</span></MegaMenuLink>
        <MegaMenuLink href="#alerts">Alerts<span slot="description">Know before users do</span></MegaMenuLink>
      </MegaMenuGroup>
      <Card slot="aside">
        <span slot="title">Getting started</span>
        <span slot="description">Learn the basics in five minutes.</span>
        <Button slot="footer" size="sm" full>Watch tutorial</Button>
      </Card>
      <Card slot="aside">
        <span slot="title">Need help?</span>
        <span slot="description">Talk to our sales team.</span>
        <Button slot="footer" size="sm" variant="outline" full>Contact sales</Button>
      </Card>
      <Button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</Button>
    </MegaMenuItem>
    <MegaMenuItem label="Pricing" href="#pricing" />
    <MegaMenuItem label="Docs" href="#docs" />
  </MegaMenu>
</template>

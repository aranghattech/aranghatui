<script setup lang="ts">
import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-vue';
import { Button } from '@aranghat/base-vue';
</script>

<template>
  <MegaMenu full-width full-width-content>
    <MegaMenuItem label="Products" :max-columns="4">
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
      <MegaMenuGroup label="Secure">
        <MegaMenuLink href="#firewall">Firewall<span slot="description">Block bad traffic</span></MegaMenuLink>
        <MegaMenuLink href="#access">Access<span slot="description">Roles and SSO</span></MegaMenuLink>
        <MegaMenuLink href="#audit-log">Audit log<span slot="description">Who changed what</span></MegaMenuLink>
      </MegaMenuGroup>
      <MegaMenuGroup label="Store">
        <MegaMenuLink href="#postgres">Postgres<span slot="description">Serverless SQL</span></MegaMenuLink>
        <MegaMenuLink href="#key-value">Key-value<span slot="description">Low-latency cache</span></MegaMenuLink>
        <MegaMenuLink href="#blob">Blob<span slot="description">Files at any size</span></MegaMenuLink>
      </MegaMenuGroup>
      <Button slot="footer" variant="link" size="sm" href="#all-products">Browse all products</Button>
    </MegaMenuItem>
    <MegaMenuItem label="Pricing" href="#pricing" />
    <MegaMenuItem label="Docs" href="#docs" />
  </MegaMenu>
</template>

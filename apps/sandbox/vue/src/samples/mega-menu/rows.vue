<script setup lang="ts">
import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-vue';
</script>

<template>
  <MegaMenu>
    <MegaMenuItem label="Products" layout="rows">
      <MegaMenuGroup label="Build" :columns="3">
        <MegaMenuLink href="#editor">Editor</MegaMenuLink>
        <MegaMenuLink href="#deploy">Deploy</MegaMenuLink>
        <MegaMenuLink href="#functions">Functions</MegaMenuLink>
      </MegaMenuGroup>
      <MegaMenuGroup label="Observe" :columns="3">
        <MegaMenuLink href="#analytics">Analytics</MegaMenuLink>
        <MegaMenuLink href="#logs">Logs</MegaMenuLink>
        <MegaMenuLink href="#alerts">Alerts</MegaMenuLink>
      </MegaMenuGroup>
      <MegaMenuGroup label="Secure" :columns="3">
        <MegaMenuLink href="#firewall">Firewall</MegaMenuLink>
        <MegaMenuLink href="#access">Access</MegaMenuLink>
        <MegaMenuLink href="#audit-log">Audit log</MegaMenuLink>
      </MegaMenuGroup>
    </MegaMenuItem>
    <MegaMenuItem label="Pricing" href="#pricing" />
    <MegaMenuItem label="Docs" href="#docs" />
  </MegaMenu>
</template>

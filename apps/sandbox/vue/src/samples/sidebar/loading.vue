<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, Sidebar, SidebarGroup, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@aranghat/navigation-vue';
import { Separator, Skeleton } from '@aranghat/base-vue';
</script>

<template>
  <SidebarProvider>
  <Sidebar>
    <SidebarMenu slot="header">
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
    <SidebarGroup label="Projects">
      <SidebarMenu>
        <SidebarMenuItem><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><Skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)" /><Skeleton style="height: var(--art-space-4); flex: 1; max-width: 60%" /></div></SidebarMenuItem>
        <SidebarMenuItem><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><Skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)" /><Skeleton style="height: var(--art-space-4); flex: 1; max-width: 75%" /></div></SidebarMenuItem>
        <SidebarMenuItem><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><Skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)" /><Skeleton style="height: var(--art-space-4); flex: 1; max-width: 50%" /></div></SidebarMenuItem>
        <SidebarMenuItem><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><Skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)" /><Skeleton style="height: var(--art-space-4); flex: 1; max-width: 65%" /></div></SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
    <SidebarMenu slot="footer">
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </Sidebar>
  <SidebarInset>
    <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
      <SidebarTrigger />
      <Separator orientation="vertical" style="height: var(--art-space-4)" />
      <Breadcrumb>
        <BreadcrumbItem><a href="#">Building your application</a></BreadcrumbItem>
        <BreadcrumbItem current>Data fetching</BreadcrumbItem>
      </Breadcrumb>
    </header>
    <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
        <Skeleton style="aspect-ratio: 16 / 9" />
        <Skeleton style="aspect-ratio: 16 / 9" />
        <Skeleton style="aspect-ratio: 16 / 9" />
      </div>
      <Skeleton style="height: var(--art-space-24)" />
    </div>
  </SidebarInset>
  </SidebarProvider>
</template>

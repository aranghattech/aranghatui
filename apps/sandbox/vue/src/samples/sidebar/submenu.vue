<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, Sidebar, SidebarGroup, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarProvider, SidebarTrigger } from '@aranghat/navigation-vue';
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
    <SidebarGroup label="Documentation">
      <SidebarMenu>
        <SidebarMenuItem open>
          <SidebarMenuButton tooltip="Getting started"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Getting started</span></SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuItem><SidebarMenuButton href="#" active><span>Installation</span></SidebarMenuButton></SidebarMenuItem>
            <SidebarMenuItem><SidebarMenuButton href="#"><span>Project structure</span></SidebarMenuButton></SidebarMenuItem>
          </SidebarMenuSub>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Building"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg><span>Building your application</span></SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuItem><SidebarMenuButton href="#"><span>Routing</span></SidebarMenuButton></SidebarMenuItem>
            <SidebarMenuItem><SidebarMenuButton href="#"><span>Data fetching</span></SidebarMenuButton></SidebarMenuItem>
          </SidebarMenuSub>
        </SidebarMenuItem>
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

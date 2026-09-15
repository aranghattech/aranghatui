import { Component } from '@angular/core';
import { ArtBreadcrumb, ArtBreadcrumbItem, ArtSidebar, ArtSidebarGroup, ArtSidebarInset, ArtSidebarMenu, ArtSidebarMenuButton, ArtSidebarMenuItem, ArtSidebarProvider, ArtSidebarTrigger } from '@aranghat/navigation-angular';
import { ArtSeparator, ArtSkeleton } from '@aranghat/base-angular';

@Component({
  selector: 'sample-sidebar-loading',
  imports: [ArtBreadcrumb, ArtBreadcrumbItem, ArtSeparator, ArtSidebar, ArtSidebarGroup, ArtSidebarInset, ArtSidebarMenu, ArtSidebarMenuButton, ArtSidebarMenuItem, ArtSidebarProvider, ArtSidebarTrigger, ArtSkeleton],
  template: `
    <art-sidebar-provider>
    <art-sidebar>
      <art-sidebar-menu slot="header">
        <art-sidebar-menu-item>
          <art-sidebar-menu-button size="lg" tooltip="Acme Inc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg><span>Acme Inc</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
      <art-sidebar-group label="Projects">
        <art-sidebar-menu>
          <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 60%"></art-skeleton></div></art-sidebar-menu-item>
          <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 75%"></art-skeleton></div></art-sidebar-menu-item>
          <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 50%"></art-skeleton></div></art-sidebar-menu-item>
          <art-sidebar-menu-item><div style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-8); padding-inline: var(--art-space-2)"><art-skeleton style="width: var(--art-space-4); height: var(--art-space-4); border-radius: var(--art-radius-md)"></art-skeleton><art-skeleton style="height: var(--art-space-4); flex: 1; max-width: 65%"></art-skeleton></div></art-sidebar-menu-item>
        </art-sidebar-menu>
      </art-sidebar-group>
      <art-sidebar-menu slot="footer">
        <art-sidebar-menu-item>
          <art-sidebar-menu-button size="lg" tooltip="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>shadcn</span></art-sidebar-menu-button>
        </art-sidebar-menu-item>
      </art-sidebar-menu>
    </art-sidebar>
    <art-sidebar-inset>
      <header style="display: flex; align-items: center; gap: var(--art-space-2); height: var(--art-space-14); padding-inline: var(--art-space-4)">
        <art-sidebar-trigger></art-sidebar-trigger>
        <art-separator orientation="vertical" style="height: var(--art-space-4)"></art-separator>
        <art-breadcrumb>
          <art-breadcrumb-item><a href="#">Building your application</a></art-breadcrumb-item>
          <art-breadcrumb-item current>Data fetching</art-breadcrumb-item>
        </art-breadcrumb>
      </header>
      <div style="display: grid; gap: var(--art-space-4); padding: var(--art-space-4)">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--art-space-4)">
          <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
          <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
          <art-skeleton style="aspect-ratio: 16 / 9"></art-skeleton>
        </div>
        <art-skeleton style="height: var(--art-space-24)"></art-skeleton>
      </div>
    </art-sidebar-inset>
    </art-sidebar-provider>
  `,
})
export class SidebarLoading {}

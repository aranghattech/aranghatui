<script setup lang="ts">
import { NavLink, NavRail, NavRailItem, NavSection } from '@aranghat/extended-vue';
import { Button, Card } from '@aranghat/base-vue';
import { Avatar } from '@aranghat/components-vue';
</script>

<template>
  <NavRail>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <NavRailItem slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></NavRailItem>
    <NavRailItem slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></NavRailItem>
    <NavRailItem slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></NavRailItem>
    <NavRailItem slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></NavRailItem>
    <NavRailItem slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></NavRailItem>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <NavSection label="Portfolio">
      <NavLink href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</NavLink>
      <NavLink href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</NavLink>
      <NavLink href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</NavLink>
      <NavLink href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</NavLink>
      <NavLink disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</NavLink>
    </NavSection>
    <NavSection label="Operations">
      <NavLink href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</NavLink>
      <NavLink href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</NavLink>
      <NavLink disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</NavLink>
    </NavSection>
    <NavSection label="Execution queue">
      <NavLink href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</NavLink>
    </NavSection>
    <Card slot="footer">
      <span slot="title" style="font-size:var(--art-font-size-sm)">AI Rebalancer</span>
      <p style="margin:0;font-size:var(--art-font-size-xs);color:var(--art-color-fg-muted)">Your target allocation for fixed income has drifted by 4.2%.</p>
      <Button slot="footer" size="sm" full>Review</Button>
    </Card>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <Avatar size="sm" alt="">JM</Avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </NavRail>
</template>

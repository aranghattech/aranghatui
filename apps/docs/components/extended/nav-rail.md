# Nav Rail

A two-level application sidebar: a permanent icon rail that switches context, beside a secondary panel that lists the sections of the context you are in.

## Preview

<Preview frame="shell">
  <art-nav-rail>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <art-nav-rail-item slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-nav-rail-item>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <art-nav-section label="Portfolio">
      <art-nav-link href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</art-nav-link>
      <art-nav-link href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</art-nav-link>
      <art-nav-link href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</art-nav-link>
      <art-nav-link href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Operations">
      <art-nav-link href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</art-nav-link>
      <art-nav-link href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Execution queue">
      <art-nav-link href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</art-nav-link>
    </art-nav-section>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <art-avatar size="sm" alt="">JM</art-avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </art-nav-rail>
</Preview>

## Installation

Lives in `@aranghat/extended` (requires `@aranghat/base`).

::: code-group
```bash [HTML]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base
```
```bash [React]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-react
```
```bash [Vue]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-vue
```
```bash [Angular]
pnpm add @aranghat/tokens @aranghat/extended @aranghat/base @aranghat/extended-angular
```
:::

## Usage

::: code-group
<<< ../../../sandbox/html/src/samples/nav-rail/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/nav-rail/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/nav-rail/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/nav-rail/basic.ts [Angular]
:::

Put the contexts in `rail` and the account-level ones in `rail-end`, then the current context's navigation as `art-nav-section`s in the default slot. Mark the current context and page with `active`. Bind `collapsed` and listen to `collapsed-change`: React `<NavRail collapsed onCollapsedChange>`, Vue `v-model:collapsed`, Angular `[collapsed] (collapsedChange)`.

## Examples

### Basic

The rail switches context, the panel lists the sections of the context you are in. `art-nav-rail-item`s go in `rail` and `rail-end`; `art-nav-section`s of `art-nav-link`s go in the default slot. The brand mark, the workspace switcher, the promo card and the user row are slots, because they belong to the product.

<Preview frame="shell">
  <art-nav-rail>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <art-nav-rail-item slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-nav-rail-item>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <art-nav-section label="Portfolio">
      <art-nav-link href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</art-nav-link>
      <art-nav-link href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</art-nav-link>
      <art-nav-link href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</art-nav-link>
      <art-nav-link href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Operations">
      <art-nav-link href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</art-nav-link>
      <art-nav-link href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Execution queue">
      <art-nav-link href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</art-nav-link>
    </art-nav-section>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <art-avatar size="sm" alt="">JM</art-avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </art-nav-rail>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/nav-rail/basic.html [HTML]
<<< ../../../sandbox/react/src/samples/nav-rail/basic.tsx [React]
<<< ../../../sandbox/vue/src/samples/nav-rail/basic.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/nav-rail/basic.ts [Angular]
:::

### Collapsed

`collapsed` narrows the panel to its icons and hides the section labels, leaving a rule in their place. Each link then shows its text in a tooltip, the way the rail's items always do. The toggle stays visible; `collapsed-change` reports the user's choice, so you can remember it.

<Preview frame="shell">
  <art-nav-rail collapsed>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <art-nav-rail-item slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-nav-rail-item>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <art-nav-section label="Portfolio">
      <art-nav-link href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</art-nav-link>
      <art-nav-link href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</art-nav-link>
      <art-nav-link href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</art-nav-link>
      <art-nav-link href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Operations">
      <art-nav-link href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</art-nav-link>
      <art-nav-link href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Execution queue">
      <art-nav-link href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</art-nav-link>
    </art-nav-section>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <art-avatar size="sm" alt="">JM</art-avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </art-nav-rail>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/nav-rail/collapsed.html [HTML]
<<< ../../../sandbox/react/src/samples/nav-rail/collapsed.tsx [React]
<<< ../../../sandbox/vue/src/samples/nav-rail/collapsed.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/nav-rail/collapsed.ts [Angular]
:::

### With a footer card

The `footer` slot sits above the user row — an assistant prompt, an upgrade nudge, a drift alert. It is your markup, so it can be anything; here it is an `art-card` with a full-width `art-button`.

<Preview frame="shell">
  <art-nav-rail>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <art-nav-rail-item slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-nav-rail-item>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <art-nav-section label="Portfolio">
      <art-nav-link href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</art-nav-link>
      <art-nav-link href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</art-nav-link>
      <art-nav-link href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</art-nav-link>
      <art-nav-link href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Operations">
      <art-nav-link href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</art-nav-link>
      <art-nav-link href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Execution queue">
      <art-nav-link href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</art-nav-link>
    </art-nav-section>
    <art-card slot="footer">
      <span slot="title" style="font-size:var(--art-font-size-sm)">AI Rebalancer</span>
      <p style="margin:0;font-size:var(--art-font-size-xs);color:var(--art-color-fg-muted)">Your target allocation for fixed income has drifted by 4.2%.</p>
      <art-button slot="footer" size="sm" full>Review</art-button>
    </art-card>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <art-avatar size="sm" alt="">JM</art-avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </art-nav-rail>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/nav-rail/footer.html [HTML]
<<< ../../../sandbox/react/src/samples/nav-rail/footer.tsx [React]
<<< ../../../sandbox/vue/src/samples/nav-rail/footer.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/nav-rail/footer.ts [Angular]
:::

### Without the toggle

`hide-toggle` removes the button when the panel is driven from elsewhere — a keyboard shortcut of your own, or a layout that decides by viewport.

<Preview frame="shell">
  <art-nav-rail hide-toggle>
    <span slot="brand" style="display:block;width:var(--art-space-6);height:var(--art-space-6);border-radius:var(--art-radius-full);background:var(--art-color-primary-solid)"></span>
    <art-nav-rail-item slot="rail" label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Overview" href="#overview"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Inbox" href="#inbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Threads" href="#threads"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0-6.9-3.9L4 20l3.9-1.1A8 8 0 0 0 12 20z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Portfolio" href="#portfolio" active><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Reports" href="#reports"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Markets" href="#markets"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail" label="Compliance" href="#compliance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Apps"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Appearance"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/></svg></art-nav-rail-item>
    <art-nav-rail-item slot="rail-end" label="Account"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></art-nav-rail-item>
    <button slot="header" type="button" style="display:flex;width:100%;align-items:center;gap:var(--art-space-2);border-radius:var(--art-radius-md);padding:var(--art-space-1);font:inherit;color:inherit;background:none;border:0;text-align:start;cursor:pointer">
      <span style="display:block;width:var(--art-space-5);height:var(--art-space-5);border-radius:var(--art-radius-sm);background:var(--art-color-primary-solid)"></span>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm);font-weight:var(--art-font-weight-medium)">Locally inc.</span>
    </button>
    <art-nav-section label="Portfolio">
      <art-nav-link href="#dashboard"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Dashboard</art-nav-link>
      <art-nav-link href="#companies" active><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>Companies</art-nav-link>
      <art-nav-link href="#performance"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Performance</art-nav-link>
      <art-nav-link href="#allocation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>Asset Allocation</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Forecast</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Operations">
      <art-nav-link href="#tax"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Tax Harvesting</art-nav-link>
      <art-nav-link href="#reporting"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>Reporting</art-nav-link>
      <art-nav-link disabled badge="Soon"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>Rebalancer</art-nav-link>
    </art-nav-section>
    <art-nav-section label="Execution queue">
      <art-nav-link href="#blotter"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Order Blotter</art-nav-link>
    </art-nav-section>
    <div slot="user" style="display:flex;align-items:center;gap:var(--art-space-2);padding:var(--art-space-1)">
      <art-avatar size="sm" alt="">JM</art-avatar>
      <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--art-font-size-sm)">Jane Moore</span>
    </div>
  </art-nav-rail>
</Preview>

::: code-group
<<< ../../../sandbox/html/src/samples/nav-rail/no-toggle.html [HTML]
<<< ../../../sandbox/react/src/samples/nav-rail/no-toggle.tsx [React]
<<< ../../../sandbox/vue/src/samples/nav-rail/no-toggle.vue [Vue]
<<< ../../../sandbox/angular/src/app/samples/nav-rail/no-toggle.ts [Angular]
:::

## API Reference

<ApiReference tag="art-nav-rail" />

## Accessibility

| Key | Action |
|---|---|
| `Tab` | Rail items, then the panel header, then the links |
| `Enter / Space` | Follow the item or link |
| `Shift + Tab` | Back out of the panel to the rail |

Two `<nav>` landmarks, named by `rail-label` and `label`, so a screen reader can tell the context switcher from the page navigation. A rail item is a `<button>`, or an `<a>` with `href`; the current one carries `aria-current="page"`. A section is a heading over a `role="list"`, and each link is its `listitem`. The toggle reports `aria-expanded`. Icon-only rows carry their name as the accessible name and repeat it in a tooltip. Pattern: [APG](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/).

States: Hover and focus-visible on every row; `active` marks the current context and page; `disabled` pairs with a `badge` that says why. The panel animates between its two widths unless reduced motion is set.

## Tokens used

| Token | Used for |
|---|---|
| ``--art-color-bg-sidebar`, `--art-color-bg-sidebar-accent`` | rail and panel surface, hover wash |
| ``--art-sidebar-width`, `--art-sidebar-width-icon`` | panel width, expanded and collapsed |
| ``--art-space-14`` | rail width (`--art-nav-rail-width`) |
| ``--art-color-border-default`` | column rules and the active outline |
| ``--art-duration-base`, `--art-ease-out`` | collapse motion |

## Do / Don't

| Do | Don't |
|---|---|
| Give every rail item a `label` — it is the accessible name | Ship an icon with no name |
| Say why a link is disabled with `badge="Soon"` | Disable a link with no explanation |
| Remember the user's `collapsed` choice | Reset the panel on every navigation |
| Keep the rail to one row of icons per context | Put page-level navigation in the rail |

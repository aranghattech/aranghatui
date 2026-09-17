/**
 * Framework binding metadata per tier (CLAUDE.md §3a), shared by the tier builds (Angular value
 * accessors) and the hydrate build that generates the React and Vue wrappers (ADR-0023).
 */
export const TIERS = ['base', 'components', 'navigation', 'modals', 'widgets', 'extended'];

/** Vue `v-model` (`v-model:open`, …); React derives `onOpenChange` / `onValueChange` from the kebab-case event names. */
export const componentModels = {
  base: [
    { elements: ['art-input', 'art-textarea', 'art-native-select', 'art-radio-group', 'art-toggle-group'], targetAttr: 'value', event: 'change' },
    { elements: ['art-checkbox', 'art-switch'], targetAttr: 'checked', event: 'change' },
    { elements: ['art-toggle'], targetAttr: 'pressed', event: 'change' },
    { elements: ['art-slider', 'art-input-otp'], targetAttr: 'value', event: 'input' },
  ],
  components: [
    { elements: ['art-tooltip', 'art-popover', 'art-hover-card', 'art-collapsible'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-accordion', 'art-tabs'], targetAttr: 'value', event: 'value-change' },
    { elements: ['art-select', 'art-combobox', 'art-calendar', 'art-date-picker'], targetAttr: 'value', event: 'change' },
  ],
  navigation: [
    { elements: ['art-dropdown-menu', 'art-context-menu', 'art-menubar-menu', 'art-navigation-menu-item', 'art-sidebar-provider', 'art-sidebar-menu-item', 'art-top-nav'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-pagination'], targetAttr: 'page', event: 'page-change' },
    { elements: ['art-tree-view'], targetAttr: 'value', event: 'value-change' },
  ],
  modals: [{ elements: ['art-dialog', 'art-alert-dialog', 'art-sheet', 'art-drawer'], targetAttr: 'open', event: 'open-change' }],
  extended: [{ elements: ['art-nav-rail'], targetAttr: 'collapsed', event: 'collapsed-change' }],
  widgets: [
    { elements: ['art-app-shell'], targetAttr: 'open', event: 'open-change' },
    { elements: ['art-data-table-page'], targetAttr: 'filter', event: 'filter-change' },
    { elements: ['art-onboarding-wizard'], targetAttr: 'step', event: 'step-change' },
    { elements: ['art-notification-centre'], targetAttr: 'open', event: 'open-change' },
  ],
};

/** Angular `ngModel` / reactive forms (one config per accessor type; Toggle binds `[pressed]` + `(change)` instead). */
export const valueAccessorConfigs = {
  base: [
    { elementSelectors: ['art-input', 'art-textarea', 'art-input-otp'], event: 'input', targetAttr: 'value', type: 'text' },
    { elementSelectors: ['art-native-select', 'art-radio-group', 'art-toggle-group'], event: 'change', targetAttr: 'value', type: 'select' },
    { elementSelectors: ['art-checkbox', 'art-switch'], event: 'change', targetAttr: 'checked', type: 'boolean' },
    { elementSelectors: ['art-slider'], event: 'input', targetAttr: 'value', type: 'number' },
  ],
  components: [
    { elementSelectors: ['art-select', 'art-combobox', 'art-calendar', 'art-date-picker'], event: 'change', targetAttr: 'value', type: 'select' },
  ],
  navigation: [],
  modals: [],
  widgets: [],
  extended: [],
};

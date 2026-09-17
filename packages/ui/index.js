// @aranghat/ui — every tier in one import (CLAUDE.md §2). Each tier's runtime and components are
// tree-shaken by what you import; `defineAll()` registers everything, which is the opposite of that.
import * as base from '@aranghat/base';
import * as components from '@aranghat/components';
import * as navigation from '@aranghat/navigation';
import * as modals from '@aranghat/modals';
import * as widgets from '@aranghat/widgets';
import * as extended from '@aranghat/extended';

export * from '@aranghat/base';
export * from '@aranghat/components';
export * from '@aranghat/navigation';
export * from '@aranghat/modals';
export * from '@aranghat/widgets';
export * from '@aranghat/extended';

/** Registers every artui element (idempotent). Costs every tier's bundle; import per component instead when size matters. */
export function defineAll() {
  for (const tier of [base, components, navigation, modals, widgets, extended]) {
    for (const [name, fn] of Object.entries(tier)) if (name.startsWith('defineCustomElement') && typeof fn === 'function') fn();
  }
}

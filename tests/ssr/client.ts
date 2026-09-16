// The browser side of the SSR suite: every element of every tier, resolved through the `artui-ssr`
// export condition (ADR-0023) so the runtime adopts the server-rendered shadow roots.
import * as base from '@aranghat/base';
import * as components from '@aranghat/components';
import * as navigation from '@aranghat/navigation';
import * as modals from '@aranghat/modals';
import * as widgets from '@aranghat/widgets';

for (const mod of [base, components, navigation, modals, widgets]) {
  for (const [name, fn] of Object.entries(mod)) if (name.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
}
document.documentElement.setAttribute('data-artui-client', 'ready');

import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import '@aranghat/tokens/aranghat.css';
import '@aranghat/tokens/themes/example.css'; // brand sheets are scoped to [data-brand]; importing is inert until activated
import './custom.css';
import Preview from './Preview.vue';
import ApiReference from './ApiReference.vue';
import TokenTable from './TokenTable.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Preview', Preview);
    app.component('ApiReference', ApiReference);
    app.component('TokenTable', TokenTable);
    // Web components are client-only: register every tier after hydration.
    if (!import.meta.env.SSR) {
      Promise.all([import('@aranghat/base'), import('@aranghat/modals')]).then((tiers) => {
        for (const tier of tiers) for (const [k, fn] of Object.entries(tier)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
      });
    }
  },
} satisfies Theme;

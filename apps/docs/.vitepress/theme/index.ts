import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import '@aranghat/tokens/aranghat.css';
import './custom.css';
import Preview from './Preview.vue';
import ApiReference from './ApiReference.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Preview', Preview);
    app.component('ApiReference', ApiReference);
    // Web components are client-only: register every tier after hydration.
    if (!import.meta.env.SSR) {
      Promise.all([import('@aranghat/base'), import('@aranghat/modals')]).then((tiers) => {
        for (const tier of tiers) for (const [k, fn] of Object.entries(tier)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
      });
    }
  },
} satisfies Theme;

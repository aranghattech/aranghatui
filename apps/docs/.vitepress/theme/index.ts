import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { onMounted } from 'vue';
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
  },
  setup() {
    // Client only, and only AFTER hydration: registering the elements earlier lets them reflect
    // attributes into the SSR markup and Vue reports a hydration mismatch (and re-renders the page).
    onMounted(() => {
      // Previews follow the page theme: mirror VitePress's `html.dark` onto artui's `data-theme`.
      const root = document.documentElement;
      const sync = () => root.setAttribute('data-theme', root.classList.contains('dark') ? 'dark' : 'light');
      sync();
      new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['class'] });
      Promise.all([import('@aranghat/base'), import('@aranghat/modals')]).then((tiers) => {
        for (const tier of tiers) for (const [k, fn] of Object.entries(tier)) if (k.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
      });
    });
  },
} satisfies Theme;

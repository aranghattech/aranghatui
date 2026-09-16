import '@aranghat/tokens/aranghat.css';
import './gallery.css';
import type { ComponentStories, StoryContext, StoryState } from '@artui/stories';
import * as base from '@aranghat/base';
import * as components from '@aranghat/components';
import * as navigation from '@aranghat/navigation';
import * as modals from '@aranghat/modals';
import * as widgets from '@aranghat/widgets';

// Register every element of every tier (the gallery is allowed to pay for everything).
for (const tier of [base, components, navigation, modals, widgets]) {
  for (const [name, fn] of Object.entries(tier)) {
    if (name.startsWith('defineCustomElement') && typeof fn === 'function') (fn as () => void)();
  }
}

// Stories are the single source for VRT, a11y and docs (CLAUDE.md §10).
const modules = import.meta.glob('../../../packages/*/src/**/*.stories.ts', { eager: true }) as Record<string, { stories: ComponentStories }>;
export const stories: Record<string, ComponentStories> = {};
for (const mod of Object.values(modules)) stories[mod.stories.tag] = mod.stories;
(window as any).__artui = { stories };

const params = new URLSearchParams(location.search);
const stage = document.getElementById('stage')!;
const root = document.documentElement;

const theme = params.get('theme') === 'dark' ? 'dark' : 'light';
root.dataset.theme = theme;
root.dir = params.get('dir') === 'rtl' ? 'rtl' : 'ltr';

const tag = params.get('story');
if (!tag) {
  const nav = document.getElementById('index')!;
  nav.hidden = false;
  nav.innerHTML =
    '<h1>artui gallery</h1><ul>' +
    Object.values(stories)
      .map((s) => `<li><a href="?story=${s.tag}&example=${Object.keys(s.examples)[0]}">${s.tag}</a> — ${Object.keys(s.examples).map((e) => `<a href="?story=${s.tag}&example=${e}">${e}</a>`).join(' · ')}</li>`)
      .join('') +
    '</ul>';
} else {
  const s = stories[tag];
  if (!s) {
    stage.textContent = `unknown story: ${tag}`;
  } else if (params.get('example')) {
    const ex = s.examples[params.get('example')!];
    stage.dataset.frame = ex?.frame ?? s.frame ?? 'inline';
    stage.innerHTML = ex?.render() ?? `unknown example`;
  } else {
    stage.dataset.frame = s.frame ?? 'inline';
    const ctx: StoryContext = {
      variant: params.get('variant') ?? s.variants[0] ?? 'default',
      size: (params.get('size') as StoryContext['size']) ?? (s.sizes[0] ?? ''),
      state: (params.get('state') as StoryState) ?? 'default',
      theme,
      dir: root.dir as 'ltr' | 'rtl',
    };
    stage.innerHTML = s.render(ctx);
  }
  stage.dataset.ready = 'true';
}

// Node-side access to every stories file, so specs can enumerate the matrix.
import type { ComponentStories } from '@artui/stories';
import { readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const packages = resolve(import.meta.dirname, '../packages');

function* walk(dir: string): Generator<string> {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { if (name !== 'node_modules' && name !== 'dist') yield* walk(p); }
    else if (name.endsWith('.stories.ts')) yield p;
  }
}

export async function loadStories(): Promise<ComponentStories[]> {
  const out: ComponentStories[] = [];
  for (const tier of ['base', 'components', 'navigation', 'modals', 'widgets', 'extended']) {
    const src = join(packages, tier, 'src');
    try { statSync(src); } catch { continue; }
    for (const file of walk(src)) out.push((await import(file)).stories as ComponentStories);
  }
  return out.sort((a, b) => a.tag.localeCompare(b.tag));
}

export const THEMES = ['light', 'dark'] as const;
export const VIEWPORTS = [390, 768, 1280] as const;

export function storyUrl(s: ComponentStories, q: Record<string, string>): string {
  const p = new URLSearchParams({ story: s.tag, ...q });
  return `/?${p}`;
}

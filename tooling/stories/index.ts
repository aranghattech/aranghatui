/** Interactive states every component must cover (CLAUDE.md §8, §9). */
export type StoryState = 'default' | 'hover' | 'focus-visible' | 'active' | 'disabled' | 'loading' | 'invalid';
export type StorySize = 'sm' | 'md' | 'lg';
export type Theme = 'light' | 'dark';

export interface StoryContext {
  variant: string;
  size: StorySize | '';
  state: StoryState;
  theme: Theme;
  dir: 'ltr' | 'rtl';
}

export interface StoryExample {
  /** Heading used on the docs page (must match the Examples section, enforced by verify:docs-parity). */
  title: string;
  /** Returns an HTML string rendered inside the gallery frame. */
  render: () => string;
}

export interface ComponentStories {
  tag: string;
  tier: 'base' | 'components' | 'navigation' | 'modals' | 'widgets';
  /** Documented variants; each becomes a VRT axis. Use ['default'] when the component has none. */
  variants: string[];
  /** Documented sizes; [] when the component has no size prop. */
  sizes: StorySize[];
  /** States implemented by the component. Missing states must be justified on the docs page. */
  states: StoryState[];
  /** Whether an RTL pass is required. */
  directional: boolean;
  /** Named examples: every documented variation appears here. */
  examples: Record<string, StoryExample>;
  /** Matrix renderer used for variant × size × state screenshots. */
  render: (ctx: StoryContext) => string;
  /** Playwright selector (plain CSS pierces shadow roots; never use `>>>`) that receives hover/focus/active for state shots. */
  focusTarget?: string;
  /**
   * What to screenshot. `stage` (default) shoots the #stage element; `viewport` shoots the whole
   * viewport — required for fixed/portaled components (dialogs, sheets, toasts, overlays).
   */
  screenshot?: 'stage' | 'viewport';
}

/** Interactive states every component must cover (CLAUDE.md §8, §9). */
export type StoryState = 'default' | 'hover' | 'focus-visible' | 'active' | 'disabled' | 'loading' | 'invalid';
export type StorySize = 'sm' | 'md' | 'lg';
export type Theme = 'light' | 'dark';

/**
 * How the gallery / docs preview lays out an example. Layout lives in the frame so that
 * sample code shows only the component(s) — never wrapper divs developers would copy.
 * inline: row, wrapping, centred. stack: column at field width (label + control + text).
 * control-text: a control in the first column with label + text stacked beside it (checkbox / radio / switch with description).
 * thread: a 20rem conversation column where each child keeps its own width (bubbles align start / end).
 * block: full width, natural height (a top nav, a table).
 * shell: a full-width, 32rem-tall app frame (sidebar layouts); an `art-sidebar-provider` fills it.
 */
export type StoryFrame = 'inline' | 'stack' | 'control-text' | 'thread' | 'block' | 'shell';

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
  /** Paragraph shown under the example heading on the docs page. */
  note?: string;
  /** Preview layout for this example (overrides the story-level frame). Samples never contain layout markup. */
  frame?: StoryFrame;
  /** Framework samples are hand-written (events, v-model, scripts); the generator only emits the HTML sample. */
  manual?: boolean;
  /**
   * Playwright selector clicked after load, before the example is screenshot and audited. For an
   * overlay the docs page shows closed — several open top-layer panels would cover the page — but
   * whose open state is what the visual and axe passes must see (a Mega Menu's panel).
   */
  click?: string;
}

/** Content for the generated nine-section docs page (apps/docs/scripts/gen-page.mjs). */
export interface StoryDocs {
  /** One-line description under the title. */
  description: string;
  /** Paragraph after the Usage code group. */
  usage?: string;
  /** Extra packages the tier needs (e.g. modals → base). */
  requires?: string[];
  keyboard: Array<[key: string, action: string]>;
  /** Roles / ARIA sentence, then the APG pattern URL. */
  roles: string;
  apg?: string;
  /** Which states are implemented and why any are missing (CLAUDE.md §8). */
  states: string;
  tokens: Array<[token: string, usedFor: string]>;
  dos: Array<[doThis: string, notThat: string]>;
  /** The family's other elements whose API the page documents after the main one (an item, a group, a link). */
  api?: string[];
}

export interface ComponentStories {
  tag: string;
  tier: 'base' | 'components' | 'navigation' | 'modals' | 'widgets' | 'extended';
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
  /** Default preview layout for the matrix and examples. @default 'inline' */
  frame?: StoryFrame;
  docs?: StoryDocs;
}

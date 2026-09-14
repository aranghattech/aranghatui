/**
 * Idempotent custom-element registration (CLAUDE.md §2).
 *
 * Two tiers, or two versions of one tier, may be present on the same page.
 * `customElements.define` throws on a second registration, so every artui
 * `define()` goes through this helper. Returns `true` when the element was
 * registered by this call, `false` when a definition already existed.
 */
export function defineIdempotent(tag: string, ctor: CustomElementConstructor, options?: ElementDefinitionOptions): boolean {
  if (typeof customElements === 'undefined') return false; // SSR / non-DOM
  if (customElements.get(tag)) return false;
  customElements.define(tag, ctor, options);
  return true;
}

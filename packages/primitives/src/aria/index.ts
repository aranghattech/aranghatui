/**
 * Cross-shadow ARIA naming. IDREF attributes (`aria-labelledby`, `aria-describedby`) cannot
 * reference nodes across a shadow boundary, so a shadow-root control resolves the referenced
 * text itself and applies `aria-label` / `aria-description` to its native element.
 */
export interface HostAria {
  label?: string | null;
  labelledby?: string | null;
  describedby?: string | null;
}

export interface ResolvedAria {
  label?: string;
  description?: string;
}

/** Joins the text content of every id in `ids`, looked up in the host's tree, then the document. */
export function textFromIds(host: Element, ids?: string | null): string | undefined {
  if (!ids) return undefined;
  const root = host.getRootNode() as Document | ShadowRoot;
  const parts = ids
    .split(/\s+/)
    .map((id) => (root.getElementById?.(id) ?? document.getElementById(id))?.textContent?.trim())
    .filter(Boolean);
  return parts.length ? parts.join(' ') : undefined;
}

/**
 * Resolves what the inner control should carry. `directLabel` is the last `aria-label` seen
 * on the host (callers remove it from the host, since a generic element must not keep it).
 */
export function resolveAria(host: Element, aria: HostAria, directLabel?: string): ResolvedAria {
  return {
    label: directLabel ?? aria.label ?? textFromIds(host, aria.labelledby),
    description: textFromIds(host, aria.describedby),
  };
}

import { closestAcrossShadow } from '../dom/index.js';

export type Layer = 'dropdown' | 'sticky' | 'overlay' | 'modal' | 'toast';

export interface PortalOptions {
  /** Stacking layer → `z-index: var(--art-z-<layer>)`. @default 'overlay' */
  layer?: Layer;
  /** Copy `data-theme`, `data-brand` and `dir` from the original location so tokens keep resolving. @default true */
  inherit?: boolean;
}

export interface Portal {
  /** The `display: contents` wrapper that carries inherited theme attributes. */
  wrapper: HTMLElement;
  /** Move the element back to where it came from. */
  restore(): void;
}

const ROOT_ATTR = 'data-art-portal';

/** The single shared overlay host at the end of `<body>` (created on first use). */
export function getPortalRoot(): HTMLElement {
  let root = document.body.querySelector<HTMLElement>(`[${ROOT_ATTR}]`);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute(ROOT_ATTR, '');
    document.body.append(root);
  }
  return root;
}

/**
 * Moves `el` into the shared overlay host so it escapes `overflow: hidden` and stacking
 * contexts. Later portals stack above earlier ones within the same layer; layers order
 * by the z-index tokens. Theme attributes are inherited from the original position.
 */
export function portal(el: HTMLElement, options: PortalOptions = {}): Portal {
  const { layer = 'overlay', inherit = true } = options;
  const placeholder = document.createComment('art-portal');
  const wrapper = document.createElement('div');
  wrapper.style.display = 'contents';
  wrapper.setAttribute('data-art-layer', layer);
  if (inherit) {
    for (const attr of ['data-theme', 'data-brand', 'dir']) {
      const value = closestAcrossShadow(el, `[${attr}]`)?.getAttribute(attr);
      if (value != null) wrapper.setAttribute(attr, value);
    }
  }
  el.replaceWith(placeholder);
  const previousZ = el.style.zIndex;
  el.style.zIndex = `var(--art-z-${layer})`;
  wrapper.append(el);
  getPortalRoot().append(wrapper);
  return {
    wrapper,
    restore() {
      el.style.zIndex = previousZ;
      placeholder.replaceWith(el);
      wrapper.remove();
    },
  };
}

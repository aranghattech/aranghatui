// Server-side rendering entry (ADR-0023): Stencil's hydrate app for every tier, with the gaps in
// its mock document that components rely on in the browser filled before each render.
import * as app from './dist/hydrate/index.mjs';

export { createWindowFromHtml, serializeDocumentToString, transformTag, setTagTransformer, serializeProperty, deserializeProperty } from './dist/hydrate/index.mjs';

function polyfill(doc) {
  const el = doc.createElement('div');
  const owner = (name) => {
    let p = Object.getPrototypeOf(el);
    while (p && !Object.prototype.hasOwnProperty.call(p, name)) p = Object.getPrototypeOf(p);
    return p;
  };
  const element = owner('setAttribute');
  if (element && typeof element.toggleAttribute !== 'function') {
    element.toggleAttribute = function (name, force) {
      const has = this.hasAttribute(name);
      const next = force ?? !has;
      if (next && !has) this.setAttribute(name, '');
      else if (!next && has) this.removeAttribute(name);
      return next;
    };
  }
  const node = owner('appendChild');
  if (node && typeof node.replaceChildren !== 'function') {
    node.replaceChildren = function (...nodes) {
      while (this.firstChild) this.removeChild(this.firstChild);
      for (const n of nodes) this.appendChild(typeof n === 'string' ? doc.createTextNode(n) : n);
    };
  }
}

const prepared = (options = {}) => ({
  ...options,
  beforeHydrate: async (doc) => { polyfill(doc); await options.beforeHydrate?.(doc); },
});

/** Render `html` — a fragment or a whole document — with every artui element as declarative shadow DOM. */
export const renderToString = (html, options, asStream) => app.renderToString(html, prepared(options), asStream);
/** Hydrate an existing document object (or an HTML string) in place, without serializing. */
export const hydrateDocument = (doc, options, asStream) => app.hydrateDocument(doc, prepared(options), asStream);
export const streamToString = (html, options) => app.streamToString(html, prepared(options));

// Server-side rendering entry (ADR-0023): Stencil's hydrate app for every tier, with the gaps in
// its mock document that components rely on in the browser filled before each render.
import { Readable } from 'node:stream';
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

/**
 * Stencil leaves its content-reference (`<!--r.N-->`) and slot-position (`<!--s.N.…-->`) comments in
 * the light DOM of every server-rendered host, ahead of the markup the app wrote. A framework that
 * hydrates the light DOM by position (Angular) expects that markup first. A shadow host needs neither
 * comment on the client (the content reference only serves the slot polyfill of light-DOM hosts), so
 * they go; a light-DOM host (ADR-0021) does need them, so they move to the end where nothing is
 * expected.
 */
function settleContentRefs(doc) {
  for (const el of Array.from(doc.querySelectorAll('[s-id]'))) {
    for (const node of Array.from(el.childNodes)) {
      if (node.nodeType !== 8 || !/^[rso]\.\d+/.test(node.nodeValue ?? '')) continue; // content ref, slot position, original location
      if (el.shadowRoot) el.removeChild(node);
      else el.appendChild(node);
    }
  }
}

const prepared = (options = {}) => ({
  ...options,
  beforeHydrate: async (doc) => { polyfill(doc); await options.beforeHydrate?.(doc); },
  afterHydrate: async (doc) => { settleContentRefs(doc); await options.afterHydrate?.(doc); },
});

/**
 * Stencil's serializer writes a newline before a host's content-reference comment and a space after
 * it, so the first light-DOM child of every host is a whitespace text node. A framework that
 * hydrates by position (Angular) expects the app's own first node there; the whitespace is the
 * serializer's, never the app's (only whitespace followed by a tag is removed), so it goes.
 */
const tidy = (html) => html.replace(/<\/template>\s+(?=<!--r\.\d+-->)/g, '</template>').replace(/(<!--r\.\d+-->)\s+(?=<)/g, '$1');
const tidied = async (results) => { if (results && typeof results.html === 'string') results.html = tidy(results.html); return results; };

/** Render `html` — a fragment or a whole document — with every artui element as declarative shadow DOM. */
export const renderToString = (html, options, asStream) => (asStream ? streamToString(html, options) : app.renderToString(html, prepared(options)).then(tidied));
/** Hydrate an existing document object (or an HTML string) in place, without serializing. */
export const hydrateDocument = (doc, options, asStream) => app.hydrateDocument(doc, prepared(options), asStream);
/** `renderToString` as a one-chunk readable stream. */
export const streamToString = (html, options) => Readable.from((async function* () { yield (await renderToString(html, options)).html ?? ''; })());

#!/usr/bin/env node
/**
 * A Stencil component class in the custom-elements build IS the host element: every class field
 * and method becomes an own property of `<art-*>`. A member named like a DOM property or method
 * shadows the real one for everyone who touches the element — `firstChild` returned a private
 * field to Angular's hydration, `remove()` would swallow the DOM call that removes the element.
 * Names below are the own members of EventTarget / Node / Element / HTMLElement in Chromium.
 * Stencil props may deliberately reflect a DOM name (`hidden`, `title`, `id`) — they are checked too;
 * add such a prop to ALLOW with a reason.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DOM = new Set(["accessKey", "activeViewTransition", "addEventListener", "after", "animate", "append", "appendChild", "ariaActionsElements", "ariaActiveDescendantElement", "ariaAtomic", "ariaAutoComplete", "ariaBrailleLabel", "ariaBrailleRoleDescription", "ariaBusy", "ariaChecked", "ariaColCount", "ariaColIndex", "ariaColIndexText", "ariaColSpan", "ariaControlsElements", "ariaCurrent", "ariaDescribedByElements", "ariaDescription", "ariaDetailsElements", "ariaDisabled", "ariaErrorMessageElements", "ariaExpanded", "ariaFlowToElements", "ariaHasPopup", "ariaHidden", "ariaInvalid", "ariaKeyShortcuts", "ariaLabel", "ariaLabelledByElements", "ariaLevel", "ariaLive", "ariaModal", "ariaMultiLine", "ariaMultiSelectable", "ariaNotify", "ariaOrientation", "ariaPlaceholder", "ariaPosInSet", "ariaPressed", "ariaReadOnly", "ariaRelevant", "ariaRequired", "ariaRoleDescription", "ariaRowCount", "ariaRowIndex", "ariaRowIndexText", "ariaRowSpan", "ariaSelected", "ariaSetSize", "ariaSort", "ariaValueMax", "ariaValueMin", "ariaValueNow", "ariaValueText", "assignedSlot", "attachInternals", "attachShadow", "attributeStyleMap", "attributes", "autocapitalize", "autocorrect", "autofocus", "baseURI", "before", "blur", "checkVisibility", "childElementCount", "childNodes", "children", "classList", "className", "click", "clientHeight", "clientLeft", "clientTop", "clientWidth", "cloneNode", "closest", "compareDocumentPosition", "computedStyleMap", "contains", "contentEditable", "currentCSSZoom", "customElementRegistry", "dataset", "dir", "dispatchEvent", "draggable", "editContext", "elementTiming", "enterKeyHint", "firstChild", "firstElementChild", "focus", "focusGroup", "focusGroupStart", "getAnimations", "getAttribute", "getAttributeNS", "getAttributeNames", "getAttributeNode", "getAttributeNodeNS", "getBoundingClientRect", "getClientRects", "getElementsByClassName", "getElementsByTagName", "getElementsByTagNameNS", "getHTML", "getRootNode", "hasAttribute", "hasAttributeNS", "hasAttributes", "hasChildNodes", "hasPointerCapture", "hidden", "hidePopover", "id", "inert", "innerHTML", "innerText", "inputMode", "insertAdjacentElement", "insertAdjacentHTML", "insertAdjacentText", "insertBefore", "isConnected", "isContentEditable", "isDefaultNamespace", "isEqualNode", "isSameNode", "lang", "lastChild", "lastElementChild", "localName", "lookupNamespaceURI", "lookupPrefix", "matches", "moveBefore", "namespaceURI", "nextElementSibling", "nextSibling", "nodeName", "nodeType", "nodeValue", "nonce", "normalize", "offsetHeight", "offsetLeft", "offsetParent", "offsetTop", "offsetWidth", "onabort", "onanimationcancel", "onanimationend", "onanimationiteration", "onanimationstart", "onauxclick", "onbeforecopy", "onbeforecut", "onbeforeinput", "onbeforematch", "onbeforepaste", "onbeforetoggle", "onbeforexrselect", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncommand", "oncontentvisibilityautostatechange", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onfullscreenchange", "onfullscreenerror", "ongotpointercapture", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpaste", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onscrollend", "onscrollsnapchange", "onscrollsnapchanging", "onsearch", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onselectionchange", "onselectstart", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontransitioncancel", "ontransitionend", "ontransitionrun", "ontransitionstart", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkitfullscreenchange", "onwebkitfullscreenerror", "onwebkittransitionend", "onwheel", "outerHTML", "outerText", "ownerDocument", "parentElement", "parentNode", "part", "popover", "prefix", "prepend", "previousElementSibling", "previousSibling", "pseudo", "querySelector", "querySelectorAll", "releasePointerCapture", "remove", "removeAttribute", "removeAttributeNS", "removeAttributeNode", "removeChild", "removeEventListener", "replaceChild", "replaceChildren", "replaceWith", "requestFullscreen", "requestPointerLock", "role", "scroll", "scrollBy", "scrollHeight", "scrollIntoView", "scrollIntoViewIfNeeded", "scrollLeft", "scrollTo", "scrollTop", "scrollWidth", "setAttribute", "setAttributeNS", "setAttributeNode", "setAttributeNodeNS", "setHTML", "setHTMLUnsafe", "setPointerCapture", "shadowRoot", "showPopover", "slot", "spellcheck", "startViewTransition", "style", "tabIndex", "tagName", "textContent", "title", "toggleAttribute", "togglePopover", "translate", "virtualKeyboardPolicy", "webkitMatchesSelector", "webkitRequestFullScreen", "webkitRequestFullscreen", "when", "writingSuggestions"]);
/** Members that intentionally shadow a host property. */
const ALLOW = new Set([]);
const tiers = ['base', 'components', 'navigation', 'modals', 'widgets'];
const files = [];
const walk = (d) => { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (n.endsWith('.tsx') && !/\.(spec|e2e)\.tsx$/.test(n)) files.push(p); } };
for (const t of tiers) walk(join('packages', t, 'src'));

const member = /^  (?:(?:private|protected|public|readonly|static|async|override)\s+)*(?:@(?:Prop|State|Element|Event|Method)\([^)]*\)\s+)?(?:(?:private|protected|public|readonly)\s+)*([A-Za-z_$][\w$]*)\s*(?:[?!]?\s*[:=]|\()/;
const problems = [];
for (const file of files) {
  const src = readFileSync(file, 'utf8');
  if (!/@Component\(/.test(src)) continue;
  let inClass = false;
  for (const [i, line] of src.split('\n').entries()) {
    if (/^export class /.test(line)) { inClass = true; continue; }
    if (!inClass) continue;
    if (/^}/.test(line)) break;
    const m = member.exec(line);
    if (!m) continue;
    const name = m[1];
    if (['render', 'connectedCallback', 'disconnectedCallback', 'componentWillLoad', 'componentDidLoad', 'componentWillUpdate', 'componentDidUpdate', 'componentDidRender', 'componentWillRender', 'componentShouldUpdate', 'formResetCallback', 'formDisabledCallback', 'formStateRestoreCallback', 'formAssociatedCallback', 'host'].includes(name)) continue;
    if (DOM.has(name) && !ALLOW.has(`${file}#${name}`)) problems.push(`${file}:${i + 1} — \`${name}\` shadows the host element's ${name}`);
  }
}
if (problems.length) { console.error('✖ component members shadow host DOM members:\n  ' + problems.join('\n  ')); process.exit(1); }
console.log(`✔ dom-shadowing: ${files.length} components, no member shadows a host DOM property`);

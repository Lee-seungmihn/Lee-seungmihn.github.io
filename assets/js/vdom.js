/**
 * vdom.js — Minimal virtual DOM
 * Benefits: declarative UI, efficient in-place updates, component functions
 *
 * API:
 *   h(tag, props, ...children)  → vnode
 *   render(vnode)               → DOM node
 *   mount(container, vnode)     → clear + render into container
 *   patch(container, newVNode)  → diff and update in place
 */

export const h = (tag, props, ...children) => ({
  tag,
  props: props || {},
  children: children.flat(Infinity).filter(c => c != null && c !== false)
});

export function render(vnode) {
  if (vnode == null) return document.createTextNode('');
  if (typeof vnode !== 'object') return document.createTextNode(String(vnode));

  const el = document.createElement(vnode.tag);
  _applyProps(el, vnode.props);
  vnode.children.forEach(c => el.appendChild(render(c)));
  return el;
}

export function mount(container, vnode) {
  container.innerHTML = '';
  container.__vdom = null;
  if (vnode != null) {
    container.appendChild(render(vnode));
    container.__vdom = vnode;
  }
}

export function patch(container, newVNode) {
  if (!container.__vdom || !container.firstChild) {
    mount(container, newVNode);
    return;
  }
  _diff(container.firstChild, container.__vdom, newVNode);
  container.__vdom = newVNode;
}

// ─── internals ───────────────────────────────────────────────────────────────

function _applyProps(el, props) {
  for (const [k, v] of Object.entries(props)) {
    if (v == null) continue;
    if (k === 'class')                            el.className = v;
    else if (k === 'html')                        el.innerHTML = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k[0] === '@')                        el.addEventListener(k.slice(1), v);
    else                                          el.setAttribute(k, v);
  }
}

function _diff(el, oldV, newV) {
  // Primitive (text/number) nodes
  if (typeof newV !== 'object' || newV == null) {
    const t = newV == null ? '' : String(newV);
    if (el.nodeType === 3) { if (el.nodeValue !== t) el.nodeValue = t; }
    else el.replaceWith(document.createTextNode(t));
    return;
  }

  // Different tag → full replace
  if (el.nodeType !== 1 || el.tagName.toLowerCase() !== newV.tag) {
    el.replaceWith(render(newV));
    return;
  }

  // Same tag → diff props + children
  _diffProps(el, oldV?.props || {}, newV.props || {});

  const oc = oldV?.children || [];
  const nc = newV.children || [];

  // Remove extra children from end first (live NodeList is forward-stable)
  while (el.childNodes.length > nc.length) el.lastChild.remove();

  nc.forEach((child, i) => {
    if (el.childNodes[i]) _diff(el.childNodes[i], oc[i], child);
    else                  el.appendChild(render(child));
  });
}

function _diffProps(el, op, np) {
  // Remove deleted props
  for (const k of Object.keys(op)) {
    if (k in np) continue;
    if (k === 'class') el.className = '';
    else if (k !== 'html' && k[0] !== '@') el.removeAttribute(k);
  }
  // Set new / changed props
  for (const [k, v] of Object.entries(np)) {
    if (v == null) continue;
    if (k === 'class')                            { if (el.className !== v) el.className = v; }
    else if (k === 'html')                        { if (el.innerHTML !== v) el.innerHTML = v; }
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k[0] === '@')                        { /* event refs are stable per mount */ }
    else if (el.getAttribute(k) !== String(v))    el.setAttribute(k, v);
  }
}

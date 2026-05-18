export function createElement(vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }
  const $el = document.createElement(vnode.tag);
  setProps($el, vnode.props);
  vnode.children.forEach(child => $el.appendChild(createElement(child)));
  return $el;
}

export function setProps($el, props = {}) {
  for (const [k, v] of Object.entries(props)) {
    if (v === null || v === undefined) continue;
    if (k === 'className')                        $el.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign($el.style, v);
    else if (k.startsWith('on') && typeof v === 'function') $el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'ref'  && typeof v === 'function') v($el);
    else if (v !== false) $el.setAttribute(k, String(v));
  }
}

export function patchProps($el, oldP = {}, newP = {}) {
  const keys = new Set([...Object.keys(oldP), ...Object.keys(newP)]);
  for (const k of keys) {
    if (k.startsWith('on')) continue; // event handlers: keep initial binding
    const ov = oldP[k], nv = newP[k];
    if (ov === nv) continue;
    if (k === 'className')                          $el.className = nv ?? '';
    else if (k === 'style' && typeof nv === 'object') Object.assign($el.style, nv);
    else if (nv === false || nv === null || nv === undefined) $el.removeAttribute(k);
    else $el.setAttribute(k, String(nv));
  }
}

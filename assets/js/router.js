/**
 * router.js — History API client-side router
 *
 * Works with GitHub Pages via 404.html redirect trick:
 *   1. User visits /blog → GitHub serves 404.html
 *   2. 404.html saves path to sessionStorage → redirects to /
 *   3. router.start() restores the path via replaceState
 *
 * Usage:
 *   import { router } from './router.js';
 *   router.on('/blog', () => { ... })
 *         .on('/blog/:slug', ({ slug }) => { ... })
 *         .start();
 */

class Router {
  constructor() {
    this._routes = [];
    window.addEventListener('popstate', () => this._dispatch());
  }

  on(pattern, fn) {
    const keys = [];
    const re = new RegExp(
      '^' + pattern.replace(/:([\w]+)/g, (_, k) => (keys.push(k), '([^/]+)')) + '/?$'
    );
    this._routes.push({ re, keys, fn });
    return this;
  }

  push(path) {
    history.pushState({}, '', path);
    this._dispatch();
  }

  replace(path) {
    history.replaceState({}, '', path);
    this._dispatch();
  }

  start() {
    const saved = sessionStorage.getItem('__spa_path');
    if (saved) {
      sessionStorage.removeItem('__spa_path');
      history.replaceState({}, '', saved);
    }
    this._dispatch();
  }

  _dispatch() {
    const path = location.pathname;
    for (const { re, keys, fn } of this._routes) {
      const m = path.match(re);
      if (m) {
        fn(Object.fromEntries(keys.map((k, i) => [k, m[i + 1]])));
        return;
      }
    }
  }
}

export const router = new Router();

import { h } from '../vdom.js';
import { router } from '../router.js';

const ITEMS = [
  {
    icon: 'fas fa-book-open',
    title: 'Materials',
    sub: 'Notion 학습 자료',
    external: 'https://whispering-uncle-c7d.notion.site/363d35a51172804e8011e3f1e46bb2bb'
  },
  {
    icon: 'fas fa-pen-nib',
    title: 'Blog',
    sub: '회귀록',
    path: '/blog'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Study',
    sub: '공부 정리',
    path: '/study'
  }
];

export function LearnMore() {
  return h('div', { class: 'lm-root' },
    ...ITEMS.map(item =>
      h('div', {
        class: 'lm-panel',
        '@click': () => item.external
          ? window.open(item.external, '_blank')
          : router.push(item.path)
      },
        h('div', { class: 'lm-panel-inner' },
          h('i', { class: item.icon + ' lm-panel-icon' }),
          h('div', { class: 'lm-panel-text' },
            h('h2', { class: 'lm-panel-title' }, item.title),
            h('p', { class: 'lm-panel-sub' }, item.sub)
          ),
          h('i', { class: 'fas fa-arrow-right lm-panel-arrow' })
        )
      )
    )
  );
}

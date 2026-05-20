import { h } from '../vdom.js';
import { router } from '../router.js';

const ITEMS = [
  {
    icon: 'fas fa-book-open',
    title: 'Materials',
    label: 'Notion 학습 자료',
    external: 'https://whispering-uncle-c7d.notion.site/363d35a51172804e8011e3f1e46bb2bb'
  },
  {
    icon: 'fas fa-pen-nib',
    title: 'Blog',
    label: '회귀록',
    path: '/blog'
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Study',
    label: '공부 정리',
    path: '/study'
  }
];

export function LearnMore() {
  return h('div', { class: 'spa-page' },
    h('header', { class: 'spa-page-header' },
      h('h1', { class: 'spa-page-title' }, 'Learn More'),
      h('p', { class: 'spa-page-subtitle' }, '학습 자료, 회귀록, 공부 노트 모음')
    ),
    h('div', { class: 'lm-grid' },
      ...ITEMS.map(item =>
        h('article', {
          class: 'lm-card',
          '@click': () => item.external
            ? window.open(item.external, '_blank')
            : router.push(item.path)
        },
          h('div', { class: 'lm-icon' }, h('i', { class: item.icon })),
          h('div', { class: 'lm-body' },
            h('h2', { class: 'lm-title' }, item.title),
            h('p', { class: 'lm-label' }, item.label)
          ),
          h('i', { class: 'fas fa-arrow-right lm-arrow' })
        )
      )
    )
  );
}

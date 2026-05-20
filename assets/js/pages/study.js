import { h } from '../vdom.js';
import { router } from '../router.js';
import { studies } from '../data/studies.js';

// ─── Study Home (category grid) ───────────────────────────────────────────────

export function StudyHome() {
  return h('div', { class: 'spa-page' },

    h('header', { class: 'spa-page-header' },
      h('h1', { class: 'spa-page-title' }, 'Study'),
      h('p', { class: 'spa-page-subtitle' }, '학습 자료 모음')
    ),

    h('div', { class: 'spa-study-grid' },
      ...Object.entries(studies).map(([key, cat]) =>
        h('article', {
          class: 'spa-study-card',
          '@click': () => router.push(`/study/${key}`)
        },
          h('div', { class: 'spa-study-icon' },
            h('i', { class: cat.icon })
          ),
          h('h3', { class: 'spa-study-title' }, cat.title),
          h('p', { class: 'spa-study-count' },
            cat.entries.length > 0
              ? `${cat.entries.length}개 항목`
              : '준비 중'
          )
        )
      )
    )
  );
}

// ─── Study Category ───────────────────────────────────────────────────────────

export function StudyCat(catKey) {
  const cat  = studies[catKey];
  const back = () => router.push('/study');

  if (!cat) return h('div', { class: 'spa-page' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← Study'),
    h('div', { class: 'spa-empty-state' },
      h('i', { class: 'fas fa-folder-open' }),
      h('p', {}, '카테고리를 찾을 수 없습니다.')
    )
  );

  return h('div', { class: 'spa-page' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← Study'),

    h('header', { class: 'spa-page-header spa-cat-header' },
      h('i', { class: cat.icon + ' spa-cat-icon' }),
      h('div', {},
        h('h1', { class: 'spa-page-title' }, cat.title),
        h('p', { class: 'spa-page-subtitle' },
          cat.entries.length > 0
            ? `${cat.entries.length}개 항목`
            : '곧 내용이 추가됩니다'
        )
      )
    ),

    cat.entries.length > 0
      ? h('div', { class: 'spa-study-list' },
          ...cat.entries.map(entry =>
            h('article', { class: 'spa-study-entry' },
              h('div', { class: 'spa-study-entry-header' },
                h('h3', { class: 'spa-study-entry-title' }, entry.title),
                h('time', {}, entry.date)
              ),
              h('div', { class: 'spa-post-content', html: window.marked.parse(entry.content) })
            )
          )
        )
      : h('div', { class: 'spa-empty-state' },
          h('i', { class: 'fas fa-folder-open' }),
          h('p', {}, '집에서 내용을 추가해 주세요 👀'),
          h('small', {}, 'assets/js/data/studies.js 파일을 수정하세요')
        )
  );
}

import { h, mount } from '../vdom.js';
import { router } from '../router.js';
import { posts } from '../data/posts.js';

const CATS = ['전체', '회귀록', '학습', '일상'];
let _filter = '전체';

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard(post) {
  return h('article', { class: 'spa-card', '@click': () => router.push(`/blog/${post.slug}`) },
    h('div', { class: 'spa-card-meta' },
      h('span', { class: 'spa-tag' }, post.category),
      h('time', {}, post.date)
    ),
    h('h3', { class: 'spa-card-title' }, post.title),
    h('p', { class: 'spa-card-excerpt' }, post.excerpt),
    h('div', { class: 'spa-chips' },
      ...post.tags.map(t => h('span', { class: 'spa-chip' }, t))
    )
  );
}

// ─── Blog List ────────────────────────────────────────────────────────────────

export function BlogList() {
  const filtered = _filter === '전체'
    ? posts
    : posts.filter(p => p.category === _filter);

  const setFilter = cat => {
    _filter = cat;
    mount(document.getElementById('spa-root'), BlogList());
  };

  return h('div', { class: 'spa-page' },

    h('header', { class: 'spa-page-header' },
      h('h1', { class: 'spa-page-title' }, '회귀록'),
      h('p', { class: 'spa-page-subtitle' }, '배움과 성장의 기록')
    ),

    h('nav', { class: 'spa-filter-bar' },
      ...CATS.map(c => h('button', {
        class: 'spa-filter-btn' + (_filter === c ? ' active' : ''),
        '@click': () => setFilter(c)
      }, c))
    ),

    filtered.length > 0
      ? h('div', { class: 'spa-grid' }, ...filtered.map(PostCard))
      : h('div', { class: 'spa-empty-state' },
          h('i', { class: 'fas fa-pen-nib' }),
          h('p', {}, '아직 작성된 글이 없습니다.')
        )
  );
}

// ─── Blog Post (Detail) ───────────────────────────────────────────────────────

export function BlogPost(slug) {
  const post = posts.find(p => p.slug === slug);
  const back  = () => router.push('/blog');

  if (!post) return h('div', { class: 'spa-page' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← 목록으로'),
    h('div', { class: 'spa-empty-state' },
      h('i', { class: 'fas fa-file-slash' }),
      h('p', {}, '게시글을 찾을 수 없습니다.')
    )
  );

  return h('div', { class: 'spa-page' },
    h('button', { class: 'spa-back-btn', '@click': back }, '← 목록으로'),

    h('article', { class: 'spa-post' },
      h('header', { class: 'spa-post-header' },
        h('div', { class: 'spa-card-meta' },
          h('span', { class: 'spa-tag' }, post.category),
          h('time', {}, post.date)
        ),
        h('h1', { class: 'spa-post-title' }, post.title),
        h('div', { class: 'spa-chips' },
          ...post.tags.map(t => h('span', { class: 'spa-chip' }, t))
        )
      ),
      h('div', { class: 'spa-post-content', html: window.marked.parse(post.content) })
    )
  );
}

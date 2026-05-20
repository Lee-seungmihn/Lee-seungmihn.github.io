import { mount }              from './vdom.js';
import { router }              from './router.js';
import { BlogList, BlogPost }  from './pages/blog.js';
import { StudyHome, StudyCat } from './pages/study.js';

const spaRoot  = document.getElementById('spa-root');
const main     = document.getElementById('main');
const navLinks = [...document.querySelectorAll('.nav-menu a')];

function showSPA(title) {
  main.style.display    = 'none';
  spaRoot.style.display = 'block';
  document.title        = `${title} | Lee-seungmihn`;
  _updateNav(location.pathname);
  window.scrollTo(0, 0);
}

function showPortfolio() {
  main.style.display    = '';
  spaRoot.style.display = 'none';
  document.title        = 'Lee-seungmihn | Portfolio';
  _updateNav('/');
}

function _updateNav(path) {
  navLinks.forEach(a => {
    const href = a.getAttribute('href') || '';
    const isSpa = href.startsWith('/') && href !== '/';
    const active = isSpa
      ? path.startsWith(href)
      : path === '/' && href === '/';
    a.classList.toggle('active', active);
  });
}

router
  .on('/',           ()        => showPortfolio())
  .on('/blog',       ()        => { showSPA('Blog');  mount(spaRoot, BlogList()); })
  .on('/blog/:slug', ({slug})  => { showSPA('Blog');  mount(spaRoot, BlogPost(slug)); })
  .on('/study',      ()        => { showSPA('Study'); mount(spaRoot, StudyHome()); })
  .on('/study/:cat', ({cat})   => { showSPA('Study'); mount(spaRoot, StudyCat(cat)); });

document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if ('link' in a.dataset) {
    if (!href.startsWith('http') && !href.startsWith('//') && !href.startsWith('mailto:')) {
      e.preventDefault();
      router.push(href);
    }
    return;
  }
  if (href.startsWith('#') && location.pathname !== '/') {
    e.preventDefault();
    router.push('/');
  }
}, true);

window.addEventListener('scroll', () => {
  if (location.pathname === '/') return;
  const btn = document.querySelector('.back-to-top');
  if (btn) btn.classList.toggle('active', window.scrollY > 300);
});

router.start();

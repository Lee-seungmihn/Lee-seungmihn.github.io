/**
 * layout.js — Navigation & Mobile controls
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = (el, all = false) => {
        el = el.trim();
        return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    };

    const navLinks  = select('.nav-menu a', true);
    const backToTop = select('.back-to-top');

    // ─── 스크롤 시 Home 활성 유지 ──────────────────────────────────
    // 홈 페이지의 모든 섹션(hero/about/resume/contact)은 Home 항목에 속함
    const updateActiveNav = () => {
        if (location.pathname !== '/') return;
        navLinks.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '/');
        });
    };

    window.addEventListener('scroll', () => {
        updateActiveNav();
        if (backToTop) backToTop.classList.toggle('active', window.scrollY > 300);
    });

    // ─── 앵커 클릭 → 부드러운 스크롤 ────────────────────────────────
    document.addEventListener('click', e => {
        const link = e.target.closest('a');
        if (!link || !link.hash || link.dataset.link !== undefined) return;
        const href = link.getAttribute('href') || '';
        if (!href.startsWith('#')) return;
        const target = document.getElementById(href.replace('#', ''));
        if (target && target.closest('#main')) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 1199) select('body').classList.remove('mobile-nav-active');
        }
    });

    // ─── 모바일 네비 토글 ───────────────────────────────────────────
    const controlToggle = () => {
        const btn = select('.mobile-nav-toggle');
        if (!btn) return;
        if (window.innerWidth <= 1199) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
            select('body').classList.remove('mobile-nav-active');
            btn.classList.remove('fa-xmark');
            btn.classList.add('fa-bars');
        }
    };

    window.addEventListener('resize', controlToggle);
    window.addEventListener('load', () => { controlToggle(); updateActiveNav(); });

    const toggle = select('.mobile-nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', function () {
            select('body').classList.toggle('mobile-nav-active');
            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-xmark');
        });
    }
});

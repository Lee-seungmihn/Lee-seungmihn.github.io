/**
 * layout.js — Navigation & Mobile controls (full-page 제거)
 */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = (el, all = false) => {
        el = el.trim();
        return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
    };

    const sections  = select('main#main > section', true);
    const navLinks  = select('.nav-menu a', true);
    const backToTop = select('.back-to-top');

    // ─── 스크롤 기반 활성 네비 ─────────────────────────────────────
    const updateActiveNav = () => {
        if (location.pathname !== '/') return;
        const mid = window.scrollY + window.innerHeight * 0.4;
        sections.forEach(sec => {
            if (mid >= sec.offsetTop && mid < sec.offsetTop + sec.offsetHeight) {
                navLinks.forEach(a => {
                    const id = (a.getAttribute('href') || '').replace('#', '');
                    a.classList.toggle('active', id === sec.id);
                });
            }
        });
    };

    window.addEventListener('scroll', () => {
        updateActiveNav();
        if (backToTop) backToTop.classList.toggle('active', window.scrollY > 300);
    });

    // ─── 앵커 클릭 → 스스 스크롤 ─────────────────────────────
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

    // ─── 모바일 네비 토글 ───────────────────────────────────────
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

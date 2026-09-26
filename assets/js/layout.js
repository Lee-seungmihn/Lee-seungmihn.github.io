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
    const moreMenu  = select('.nav-more');
    const moreToggle = select('.nav-more-toggle');

    // ─── Learn more 하위 메뉴 ─────────────────────────────────────
    const setMoreMenu = (open) => {
        if (!moreMenu || !moreToggle) return;
        moreMenu.classList.toggle('is-open', open);
        moreToggle.setAttribute('aria-expanded', String(open));
    };

    if (moreToggle) {
        moreToggle.addEventListener('click', () => {
            setMoreMenu(!moreMenu.classList.contains('is-open'));
        });
    }

    // Blog/Study 페이지에서는 현재 위치를 알 수 있도록 메뉴를 펼친다.
    if (location.pathname.startsWith('/blog') || location.pathname.startsWith('/study')) {
        setMoreMenu(true);
    }

    const closeMobileNav = () => {
        const body = select('body');
        const btn = select('.mobile-nav-toggle');
        body.classList.remove('mobile-nav-active');
        if (btn) {
            btn.classList.remove('fa-xmark');
            btn.classList.add('fa-bars');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', '메뉴 열기');
        }
    };

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
            closeMobileNav();
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
            closeMobileNav();
        }
    };

    window.addEventListener('resize', controlToggle);
    window.addEventListener('load', () => { controlToggle(); updateActiveNav(); });

    const toggle = select('.mobile-nav-toggle');
    if (toggle) {
        toggle.setAttribute('role', 'button');
        toggle.setAttribute('aria-label', '메뉴 열기');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', function () {
            const isOpen = select('body').classList.toggle('mobile-nav-active');
            this.classList.toggle('fa-bars');
            this.classList.toggle('fa-xmark');
            this.setAttribute('aria-expanded', String(isOpen));
            this.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMobileNav();
    });
});

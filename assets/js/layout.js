/**
 * Layout.js - Golden Dew Style FullPage Controller (Resize Animation Fixed)
 */
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const select = (el, all = false) => {
        el = el.trim();
        if (all) return [...document.querySelectorAll(el)];
        return document.querySelector(el);
    };

    const mainContent = select('#main');
    const sections = select('main#main > section', true);
    const footer = select('#footer');
    const navLinks = select('.nav-menu a', true);
    const indicator = select('.nav-indicator');
    
    let currentIdx = 0;
    let isScrolling = false;
    let isFooterVisible = false;

    /**
     * 1. Core Scroll Logic
     */
    const moveToIndex = (index, toFooter = false, immediate = false) => {
        if (!document.documentElement.classList.contains('full-page-active')) return;
        if (isScrolling && !immediate) return;

        if (toFooter) {
            const lastSection = sections[sections.length - 1];
            const footerHeight = footer.offsetHeight;
            const targetPos = lastSection.offsetTop + footerHeight;
            
            if (!immediate) mainContent.style.transition = 'transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), margin-left 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
            else mainContent.style.transition = 'margin-left 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)'; // 가로 애니메이션은 유지
            
            mainContent.style.transform = `translateY(-${targetPos}px)`;
            isFooterVisible = true;
        } else {
            if (index < 0 || index >= sections.length) return;
            currentIdx = index;
            const targetSection = sections[currentIdx];
            
            if (!immediate) mainContent.style.transition = 'transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1), margin-left 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
            else mainContent.style.transition = 'margin-left 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
            
            mainContent.style.transform = `translateY(-${targetSection.offsetTop}px)`;
            isFooterVisible = false;
            updateActiveMenu();
        }

        if (!immediate) {
            isScrolling = true;
            setTimeout(() => { isScrolling = false; }, 1000);
        }
    };

    /**
     * 2. Active Menu & Indicator Update
     */
    const updateActiveMenu = () => {
        const currentSection = sections[currentIdx];
        if (!currentSection) return;
        const currentId = currentSection.id;

        navLinks.forEach(link => {
            const linkId = link.hash.replace('#', '');
            if (linkId === currentId) {
                link.classList.add('active');
                updateIndicator(link);
            } else {
                link.classList.remove('active');
            }
        });
    };

    const updateIndicator = (activeLink) => {
        if (!indicator || !activeLink) return;
        const navMenu = select('.nav-menu');
        const linkRect = activeLink.getBoundingClientRect();
        const menuRect = navMenu.getBoundingClientRect();
        
        indicator.style.display = 'block';
        indicator.style.top = (linkRect.top - menuRect.top) + "px";
        indicator.style.height = linkRect.height + "px";
    };

    /**
     * 3. Event Listeners
     */
    
    window.addEventListener('wheel', (e) => {
        if (!document.documentElement.classList.contains('full-page-active')) return;
        e.preventDefault();
        if (isScrolling) return;
        
        if (e.deltaY > 0) {
            if (currentIdx === sections.length - 1 && !isFooterVisible) moveToIndex(currentIdx, true);
            else if (!isFooterVisible) moveToIndex(currentIdx + 1);
        } else {
            if (isFooterVisible) moveToIndex(sections.length - 1, false);
            else moveToIndex(currentIdx - 1);
        }
    }, { passive: false });

    const controlToggleBtn = () => {
        const toggleBtn = select('.mobile-nav-toggle');
        if (!toggleBtn) return;
        if (window.innerWidth <= 1199) {
            toggleBtn.classList.add('visible');
        } else {
            toggleBtn.classList.remove('visible');
            select('body').classList.remove('mobile-nav-active');
        }
    };

    window.addEventListener('resize', () => {
        const currentSection = sections[currentIdx];
        controlToggleBtn();
        
        if (window.innerWidth > 1199) {
            document.documentElement.classList.add('full-page-active');
            moveToIndex(currentIdx, isFooterVisible, true); // transform은 즉시, margin-left는 애니메이션
            window.scrollTo(0, 0);
        } else {
            document.documentElement.classList.remove('full-page-active');
            mainContent.style.transform = 'none';
            if (currentSection) window.scrollTo(0, currentSection.offsetTop);
        }
    });

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link || !link.hash || link.getAttribute('href').includes('.html')) return;

        const targetId = link.hash.replace('#', '');
        const targetIdx = sections.findIndex(s => s.id === targetId);
        
        if (targetIdx !== -1) {
            e.preventDefault();
            moveToIndex(targetIdx, false);
            if (window.innerWidth <= 1199) select('body').classList.remove('mobile-nav-active');
        }
    });

    window.addEventListener('load', () => {
        controlToggleBtn();
        if (window.innerWidth > 1199) updateActiveMenu();
    });

    const mobileToggle = select('.mobile-nav-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            select('body').classList.toggle('mobile-nav-active');
            const icon = this.querySelector('i') || this;
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }
});

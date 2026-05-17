/**
 * Event.js - 타이핑 효과 및 Swiper 고도화
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Irregular Typing Effect
     */
    const typed = document.querySelector('.typed');
    if (typed) {
        let items = typed.getAttribute('data-typed-items').split(',');
        let itemIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function type() {
            const currentItem = items[itemIdx];
            let typeSpeed = isDeleting ? 30 : 60;
            typeSpeed += Math.random() * 50;

            if (isDeleting) {
                typed.textContent = currentItem.substring(0, charIdx - 1);
                charIdx--;
            } else {
                typed.textContent = currentItem.substring(0, charIdx + 1);
                charIdx++;
            }

            if (!isDeleting && charIdx === currentItem.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                itemIdx = (itemIdx + 1) % items.length;
                typeSpeed = 200;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    /**
     * Swiper.js Initialization (Wheel, Grab, Left-aligned)
     */
    const swiper = new Swiper('.materials-swiper', {
        loop: false,
        centeredSlides: false,
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        freeMode: true,
    });

    /**
     * Contact Form
     */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>SENT!</span> <i class="fas fa-check"></i>';
            btn.style.background = 'var(--accent-color)';
            btn.style.color = 'var(--primary-bg)';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.color = '';
                contactForm.reset();
            }, 3000);
        });
    }

    /**
     * Materials Search Filter
     */
    const searchInput = document.querySelector('.input-text');
    const materialCards = document.querySelectorAll('.materials-grid .card');

    if (searchInput && materialCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            materialCards.forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(term) || desc.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

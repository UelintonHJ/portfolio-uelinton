function handleHeaderShrink(header) {
    let isShrunk = false;
    const shrinkThreshold = 60;
    const expandThreshold = 20;

    let ticking = false;

    function update() {
        const scroll = window.scrollY;

        if (!isShrunk && scroll > shrinkThreshold) {
            header.classList.add('shrink');
            isShrunk = true;
        } else if (isShrunk && scroll < expandThreshold) {
            header.classList.remove('shrink');
            isShrunk = false;
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    });
}

const header = document.querySelector('header');
if (header) handleHeaderShrink(header);

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
import { qs } from '../utils/dom.js';

export function initHeader() {
    const header = qs('header');
    if (!header) return;

    let isShrunk = false;
    let ticking = false;

    const SHRINK_THRESHOLD = 60;
    const EXPAND_THRESHOLD = 20;

    function updateHeader() {
        const scrollPosition = window.scrollY;

        if (!isShrunk && scrollPosition > SHRINK_THRESHOLD) {
            header.classList.add('shrink');
            isShrunk = true;
        } else if (isShrunk && scrollPosition < EXPAND_THRESHOLD) {
            header.classList.remove('shrink');
            isShrunk = false;
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
}
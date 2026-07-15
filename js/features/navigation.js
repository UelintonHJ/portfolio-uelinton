import { qs } from '../utils/dom.js';

export function initNavigation() {
    const navToggle = qs('.nav-toggle');
    const navList = qs('.nav-list');

    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', () => onNavToogle(navToggle, navList));
}

function onNavToogle (navToggle, navList) {
    const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
}
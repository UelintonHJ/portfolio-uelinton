import { qsa } from '../utils/dom.js';

export function initObservers() {
    const cards = qsa('.card');

    if (!cards.length) return;

    const VISIBILITY_THRESHOLD = 0.2;

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: VISIBILITY_THRESHOLD
    });

    cards.forEach(card => observer.observe(card));

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }
}
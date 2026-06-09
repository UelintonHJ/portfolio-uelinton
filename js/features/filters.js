function setupFilter(buttonsSelector, cardsSelector) {
    const buttons = document.querySelectorAll(buttonsSelector);
    const cards = document.querySelectorAll(cardsSelector);

    if (!buttons.length || !cards.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });

            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            const category = btn.dataset.category;

            cards.forEach(card => {
                const categories = (card.dataset.category || '').split(' ');
                const shouldShow = category === 'all' || categories.includes(category);

                card.classList.toggle('is-hidden', !shouldShow);
            });
        });
    });
}

export function initFilters() {
    setupFilter('.project-filters .filter-btn', '.projects .card');
}
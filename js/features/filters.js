import { shouldShowCard } from '../utils/filter-utils.js';

function initializeFilterGroup(buttonsSelector, cardsSelector) {
    const buttons = document.querySelectorAll(buttonsSelector);
    const cards = document.querySelectorAll(cardsSelector);

    if (!buttons.length || !cards.length) return;

    function onFilterClick(event, buttons, cards) {
        const activeButton = event.currentTarget;

        updateActiveButtons(buttons, activeButton);

        const selectedCategory = activeButton.dataset.category;

        updateVisibleCards(cards, selectedCategory);
    }

    function updateActiveButtons(buttons, activeButton) {
        buttons.forEach(button => {
            button.classList.remove('active');
            button.setAttribute('aria-pressed', 'false');
        });

        activeButton.classList.add('active');
        activeButton.setAttribute('aria-pressed', 'true');
    }

    function updateVisibleCards(cards, selectedCategory) {
        cards.forEach(card => {
            const shouldShow = shouldShowCard(
                card.dataset.category || '', selectedCategory
            );

            card.classList.toggle('is-hidden', !shouldShow);
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', event =>
            onFilterClick(event, buttons, cards)
        );
    });
}

export function initFilters() {
    initializeFilterGroup('.project-filters .filter-btn', '.projects .card');
}
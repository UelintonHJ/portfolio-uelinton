const ALL_CATEGORY = 'all';

export function shouldShowCard(cardCategories, selectedCategory) {
    const categories = cardCategories.split(' ');

    return (
        selectedCategory === ALL_CATEGORY ||
        categories.includes(selectedCategory)
    );
}
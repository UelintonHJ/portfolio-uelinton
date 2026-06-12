export function shouldShowCard(cardCategories, selectedCategory) {
    const categories = cardCategories.split(' ')

    return (
        selectedCategory === 'all' ||
        categories.includes(selectedCategory)
    )
}
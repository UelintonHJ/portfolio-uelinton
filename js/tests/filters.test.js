import { assert } from './assertions.js'
import { shouldShowCard } from '../utils/filter-utils.js'

export function runFilterTests() {
    console.group('Filter Tests')

    assert(
        'Mostrar tudo quando categoria é all',
        shouldShowCard('frontend javascript', 'all')
    )

    assert(
        'Mostrar categoria existente',
        shouldShowCard('frontend javascript', 'frontend')
    )

    assert(
        'Oculta categoria inexistente',
        !shouldShowCard('frontend javascript', 'backend')
    )

    console.groupEnd()
}
export function assert(description, condition) {
    if (condition) {
        console.log(`✅ ${description}`)
    } else {
        console.error(`❌ ${description}`)
    }
}
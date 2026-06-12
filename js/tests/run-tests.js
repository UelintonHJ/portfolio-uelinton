import { runFilterTests } from "./filters.test.js";

export function runTests() {
    console.group('Portfolio Self Checks')

    runFilterTests()

    console.groupEnd()
}
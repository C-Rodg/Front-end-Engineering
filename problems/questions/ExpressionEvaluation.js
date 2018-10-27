// Difficulty: Hard
// Topic: Stack, Math

// Given a string arithmetic expression,
// calculate its result.

// Runtime: O(n)
// Memory: O(n)

// HINT: Postfix Notation & Stacks
// using infix (human readable): 3 + 6 * 5 - 1 / 2.5 can be written
// using postfix as 3 6 5 * + 1 2.5 / -
// operators stack puts highest precedence operators on top (*/) and
// when a lower precedence operator is about to be placed on top, clear stack and
// push to completed notation string

// Solution #2:
// Can be done in 2 passes..
// Handle * and / first, + and - second

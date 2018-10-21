// Difficulty: Easy
// Topic: Probability

// Write a function for doing an in-place shuffle
// of an array.  It must be 'uniform' meaning
// each item in the original array must have the same
// probability of ending up in each spot in the final array.

// Runtime: O(n)
// Space: O(1)

// Also known as the Fisher-Yates (Knuth) shuffle

// The naive approach to this is -
// for an array of length = 3, make 3 calls to 'random'
// each with 3 possibilities.
// That means 3 * 3 * 3 = 27 possible outcomes.
// The proper amount of outcomes is 3! = 6.

// In a row of trees, the 'i'-th tree produces fruit with type tree[i]
// You can start at any tree index of your choice, then repeatedly perform
// the following steps:

// 1.) Add one piece of fruit from this tree to your basket. If you cannot, stop.
// 2.) Move to the next tree to the right of the current tree. If there is no tree, stop.

// Note: There is no choice after you choose the initial tree, you must go step 1 -> step 2 -> step 1 and repeat until stopped.

// You have two baskets and each basket can carry any quantity of fruit,
// but each basket can only carry one type of fruit.

// What is the total amount of fruit you can collect?

// Input: [1, 2, 1]
// Output: 3, we can collect two '1' and one '2'.

// Input: [0, 1, 2, 2]
// Output: 3, we can start at idx = 1, and collect [1, 2, 2]

// Input: [1, 2, 3, 2, 2]
// Output: 4, we can collect [2, 3, 2, 2]

// Hint 1: Sliding window

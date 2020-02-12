// Given a tree, find a way to serialize the tree into a string and
// then deserialize it back into a tree.

// Hint 1: DFS

// Hint 2: Preorder

// Solution #1: Recursive
// Runtime: O(n)
// Space: O(log n) -> based on tree height log n = balanced,
//  n^ in worse case

// Solution #2: Comparing Preorder to Inorder
// Runtime: O(n log n) - O(n^2) in worst case
// Memory: O(log n)

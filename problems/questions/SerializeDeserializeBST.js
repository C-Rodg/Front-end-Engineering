// Difficulty: Medium
// Topic: Recursion, DFS - inorder, preorder, BSTs

// Serialize binary tree to a stream and then deserialize it
// back to an in-memory tree such that original and
// deserialized trees are identical.

//Serialize: write the tree in a file.
//Deserialize: read from a file and reconstruct the tree in memory.

// Solution #1: Recursive
// Runtime: O(n)
// Space: O(log n) -> based on tree height log n = balanced,
//  n^ in worse case

// Solution #2: Comparing Preorder to Inorder
// Runtime: O(n log n) - O(n^2) in worst case
// Memory: O(log n)

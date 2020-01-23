// Difficulty: Medium
// Topic: BSTs

// Given a BST and a value 'd' find the inorder successor (number after) of d

// Variation of this question is given a node, find it's inorder successor.  Nodes have a .parent pointer.

// Runtime: O(log n)
// Space: O(1)

// Hint:
// if going left, mark as successor
// if going right, update root (current node)
// if found, check for right child and find minimum there

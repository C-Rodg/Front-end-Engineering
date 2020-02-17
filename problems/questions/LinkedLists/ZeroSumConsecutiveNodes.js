// Given the head of a linked list,
// we repeatedly delete consecutive sequences of nodes
// that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.
// You may return any such answer.

// Medium

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]

// Input: head = [1,2,3,-3,-2]
// Output: [1]

// HINT 1:
// Prefix sums...

// HINT 2:
// Dummy head

// HINT 3:
// Create a hashmap where the keys = the prefix sum and the
// value = the node.

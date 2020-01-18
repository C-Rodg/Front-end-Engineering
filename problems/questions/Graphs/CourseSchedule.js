// There are a total of n courses you have to take
// Some courses may have prerequisites, for example to take course 0
// you have to first take course 1, which is expressed as a pair [0,1].

// Given the total number of courses and a list of pre-req pairs, is it possible to finish all courses?

// Input: 2, [[1,0]]
// Output: true
// There are two courses to take. To take course 1, you should
// have finished course 0. So it is possible.

// Input: 2, [[1,0], [0,1]]
// Output: false
// There are two courses to take. To take course 1
// you should have finished course 0, and to take course 0
// you should have finished course 1. So it is impossible.

// Hint 1:
// Cycles in a directed graph...

// Hint 2:
// Create a graph in the format of an adjacency list...

// Hint 3:
// DFS

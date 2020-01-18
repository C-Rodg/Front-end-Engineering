// There are N dominos in a line and we place each vertically upright.
// We then push certain dominos to either the left or right.
// Given a string 'S' representing the initial state,
// a '.' means not pushed, a 'L' means pushed left, and a 'R' means pushed right.
// Please return a string representing the final state.

// Input:
// .L.R...LR..L..
// Output:
// LL.RR.LLRRLL..

// Hint 1:
// Determine what are the two cases where a domino is being pushed from both sides.

// Hint 2:
// Prefix sums

// Hint 3:
// Two passes, calculate the difference.

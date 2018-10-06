// Bit Manipulation

// Two's Complement:
// Method for representing negative numbers
// The left most digit is negative, while the rest are positive.  So...
// 101 -> -4 + zero 2's + one 1's = -4 + 0 + 1 = -3
// 0101 -> negative zero 8's + one 4's + zero 2's + one 1's = 5

// Bitwise AND
// Will only = 1 if BOTH equal 1
// 5 & 6 can be broken down to:
// 0101 (5)
// 0110 (6)
// 0100 (4) =

// Bitwise OR
// Will = 1 if EITHER are a 1
// 5 | 6:
// 0101 (5)
// 0110 (6)
// 0111 (7) =

// Bitwise XOR (exclusive or)
// Will = 1 if only ONE is a 1
// 5 ^ 6
// 0101 (5)
// 0110 (6)
// 0011 (3) =

// Bitwise NOT
// Takes one set of bits and will return 1 for 0's and 0's for 1's
// ~ 5
// 0000 0101 (5)
// 1111 1010 (-6) [using two's complement to result in negative]

// Bit Shifting
// Moves each digit in binary representation to the
// left or right by a given amount.
// 1 left shift multiplies by 2
// 2 left shifts multiplies by 4
// 3 left shifts multiples by 8...
// 0010 << 1 = 0100
// 1011 >> 1 = 0101

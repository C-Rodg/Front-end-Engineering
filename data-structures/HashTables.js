// Runtime to get typically O(1)

// Collisions:
// Two Methods-
// 1.) Insert a linked list at collision spot and append elements that way
// 2.) Insert at the next available slot, but this requires if item isn't found to iterate to end of table

// Hash function should map keys evenly to prevent collisions
// Impacted by hash function and load factor (slots used / slots available)
// A bad load factor is over 0.7

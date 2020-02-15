// Given an array of jobs and a cooldown,
// find the maximum time that the list of jobs will take.

function multitask(arr, cooldown) {
	return Number;
}

// Input: [1,1,2,1], cooldown = 2
// Output: 7
// First job 1 starts at time 0, Second job 1 starts at time 3
// Job 2 starts at time 4, and last job 1 starts at time 6.
// Zero-indexed so 6 + 1 = 7

// Job:  1 - - 1 2 - 1 - - (don't count end cooldown)
// Time: 0 1 2 3 4 5 6

// Hint 1: Hashmap

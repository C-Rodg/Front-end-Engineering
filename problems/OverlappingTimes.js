// Given an array of time intervals in any order
// merge all overlapping intervals into one output
// and return an array of merged intervals

// Simple approach: O(n^2)
// Take first interval and compare
// it with all other intervals for overlapping.
// If it overlaps, then remove the other interval
// from the list, merge it, and continue comparisons

// Better approach: O (n log n)
// Sort intervals by start time.
// If interval 'i' doesn't overlap with interval 'i-1'
// then interval 'i+1' doesn't overlap with 'i-1'.

function mergeTimes(arr) {
	// Do sorting of times - log n
	const sortedTimes = quickSort(arr);

	const results = [sortedTimes[0]];
	for (let i = 1; i < sortedTimes.length; i++) {
		// Get last item from the stack of merged times
		const mergedInterval = results[results.length - 1];
		const currentInterval = sortedTimes[i];
		if (mergedInterval.end < currentInterval.start) {
			results.push(currentInterval);
		} else if (mergedInterval.end < currentInterval.end) {
			mergedInterval.end = currentInterval.end;
		}
	}
	return results;
}

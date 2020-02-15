function frequentSubtreeSum(root) {
	const counts = {};

	function getTotals(node) {
		if (!node) {
			return 0;
		}

		// Get left and right totals
		const leftTotal = getTotals(node.left);
		const rightTotal = getTotals(node.right);
		const subtreeTotal = leftTotal + rightTotal + node.val;

		// Track the times we've seen this subtree total
		if (!counts[subtreeTotal]) {
			counts[subtreeTotal] = 0;
		}
		counts[subtreeTotal] += 1;

		// Return the total
		return subtreeTotal;
	}

	// Populate the 'counts' map with the totals
	getTotals(root);

	// Determine what total we've seen the most
	let highestCount = Number.MIN_SAFE_INTEGER;
	let highestCountTotal = null;
	for (let k of Object.keys(counts)) {
		const currCount = counts[k];
		if (currCount > highestCount) {
			highestCountTotal = k;
			highestCount = currCount;
		}
	}

	return highestCountTotal;
}

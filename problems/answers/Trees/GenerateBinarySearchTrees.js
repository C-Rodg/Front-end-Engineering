// Driver function
function generateTrees(n) {
	return generateHelper(0, n);
}

// Recursive helper function
function generateHelper(start, end) {
	if (start > end) {
		return [null];
	}

	// Track the results
	const bsts = [];
	for (let i = start; i <= end; i++) {
		// Get the left and right trees
		const leftTrees = generateHelper(start, i);
		const rightTrees = generateHelper(i + 1, end + 1);

		// Loop through all left trees and right trees and generate the root and push to results
		for (let leftTree of leftTrees) {
			for (let rightTree of rightTrees) {
				const root = new Node(i);
				root.left = leftTree;
				root.right = rightTree;
				bsts.push(root);
			}
		}
	}
	return bsts;
}

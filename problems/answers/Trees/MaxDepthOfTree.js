function maxDepthOfTree(node) {
	// A null node has a height of 0
	if (!node) {
		return 0;
	}

	// Get left and right depths
	const leftDepth = maxDepthOfTree(node.left);
	const rightDepth = maxDepthOfTree(node.right);

	// Return the maximum left or right height + 1 for this node
	return Math.max(leftDepth, rightDepth) + 1;
}

function maxDepthIterative(root) {
	const stack = [];

	// Track the biggest depth
	let depth = 0;

	// Use a tuple that contains the node and the tree depth
	stack.push([1, root]);

	// While there is nodes to process
	while (stack.length) {
		const [currentDepth, currentNode] = stack.pop();
		if (currentNode) {
			// Determine if this depth is greater than the previous max depth
			depth = Math.max(depth, currentDepth);

			// Add the children to the stack
			stack.push([currentDepth + 1, currentNode.left]);
			stack.push([currentDepth + 1, currentNode.right]);
		}
	}

	return depth;
}

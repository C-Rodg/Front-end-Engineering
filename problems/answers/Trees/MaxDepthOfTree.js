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

function depthOfBinaryTree(node) {
	if (!node) {
		return 0;
	}

	const leftDepth = depthOfBinaryTree(node.left);
	const rightDepth = depthOfBinaryTree(node.right);

	return 1 + Math.max(leftDepth, rightDepth);
}

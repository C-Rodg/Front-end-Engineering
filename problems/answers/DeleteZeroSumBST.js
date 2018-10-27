function deleteZeroSum(node) {
	if (!node) {
		return 0;
	}

	const leftSum = deleteZeroSum(node.left);
	const rightSum = deleteZeroSum(node.right);

	if (leftSum === 0) {
		node.left = null;
	}

	if (rightSum === 0) {
		node.right = null;
	}

	return leftSum + rightSum + node.data;
}

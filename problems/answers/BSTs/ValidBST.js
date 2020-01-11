function isValidBST(root) {
	function isValid(node, min, max) {
		if (!node) {
			return true;
		}

		const isLeftTreeValid = isValid(node.left, min, node.val);
		const isRightTreeValid = isValid(node.right, node.val, max);
		if (
			node.val <= min ||
			node.val >= max ||
			!isLeftTreeValid ||
			!isRightTreeValid
		) {
			return false;
		}

		return true;
	}

	return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

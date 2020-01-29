function findFloor(node, k) {
	if (!node) {
		return Number.MAX_SAFE_INTEGER;
	}

	// we have found the floor
	if (node.val === k) {
		return node.val;
	}

	// if node's value is greater than the key
	if (node.val > k) {
		return findFloor(node.left, k);
	}

	// otherwise the floor may be in the subtree or equal to the node's value
	let floorValue = findFloor(node.right, k);
	if (floorValue <= k) {
		return floorValue;
	} else {
		return node.val;
	}
}

function findCeil(node, k) {
	if (!node) {
		return null;
	}

	// If our key is greater than or equal to the current node, it must be in the right subtree
	if (node.val <= k) {
		return findCeil(node.right, k);
	}

	// Check the left subtree, if it isn't found, return the current nodes value
	let ceilValue = findCeil(node.left, k);
	if (!ceilValue) {
		return node.val;
	}
	return ceilValue;
}

function findCeilIterative(root, k) {
	const stack = [];
	let curr = root;
	// Note we're only tracking nodes that are greater than our key
	while (curr) {
		// If the current value is greater than the key, add it to the stack
		// and set the current to left
		if (curr.val > k) {
			stack.push(curr);
			curr = curr.left;
		}
		// If the current value is less than or equal to the key, move right
		if (curr.val <= k) {
			curr = curr.right;
		}
	}

	return stack.pop();
}

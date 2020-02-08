function convertNTreeToBT(ntree) {
	// The idea here is to choose a direction (left/right)
	// and continue adding nodes in that direction for all
	// nodes that are at the same level.
	// When you go to the next level, you would switch directions.
	function convert(node, isLeft) {
		if (!node) {
			return;
		}

		// Create the current node and set it to the last seen
		const newNode = new Node(node.data);
		let lastNode = newNode;

		// For all of it's children, continue adding them
		// in that direction. If those children have children,
		// then have them split to the opposite direction.
		for (let c in node.children) {
			if (isLeft) {
				lastNode.left = convert(node.children[c], false);
				lastNode = lastNode.left;
			} else {
				lastNode.right = convert(node.children[c], true);
				lastNode = lastNode.right;
			}
		}

		// Return the node
		return node;
	}

	// Call the recursive function to convert n-ary tree to binary tree
	return convert(ntree, true);
}

function convertBTToNTree(root) {
	function convert(node, isLeft) {
		if (!node) {
			return;
		}

		// Create the new node and set it as our temp
		const newNode = new TreeNode(node.data);
		let temp = newNode;

		// Determine the direction we're currently going
		if (isLeft) {
			// While we still have nodes to process in the left direction
			while (temp.left) {
				let child = convert(temp.left, false);
				node.children.push(child);
				temp = temp.left;
			}
		} else {
			// While we still have nodes to process in the right direction
			while (temp.right) {
				let child = convert(temp.right, true);
				node.children.push(child);
				temp = temp.right;
			}
		}
		return node;
	}

	// Call the recursive function to convert binary tree to n-ary
	return convert(root, true);
}

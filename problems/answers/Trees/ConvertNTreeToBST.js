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
		for (let c of node.children) {
			if (isLeft) {
				lastNode.left = convert(c, false);
				lastNode = lastNode.left;
			} else {
				lastNode.right = convert(c, true);
				lastNode = lastNode.right;
			}
		}

		// Return the node
		return newNode;
	}

	// Call the recursive function to convert n-ary tree to binary tree
	return convert(ntree, true);
}

function convertBTToNTree(root) {
	function convert(node, isLeft) {
		if (!node) {
			return;
		}

		// Create the new node to return at the end
		const newNode = new TreeNode(node.data);

		// Assign a temp node so that we can continually go left or right
		let temp = node;

		// Determine the direction we're currently going
		if (isLeft) {
			// While we still have nodes to process in the left direction
			while (temp.left) {
				let child = convert(temp.left, false);
				newNode.children.push(child);
				temp = temp.left;
			}
		} else {
			// While we still have nodes to process in the right direction
			while (temp.right) {
				let child = convert(temp.right, true);
				newNode.children.push(child);
				temp = temp.right;
			}
		}
		return newNode;
	}

	// Call the recursive function to convert binary tree to n-ary
	return convert(root, true);
}

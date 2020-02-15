function printZigZag(root) {
	// Use two stacks - one for this level and another for the next
	let currentLevel = [root];
	let nextLevel = [];
	let leftToRight = false;

	while (currentLevel.length) {
		// Keep processing nodes from the current level
		const currentNode = currentLevel.pop();
		console.log(currentNode.val);
		// add the new nodes to the next level in the proper order
		if (leftToRight) {
			if (currentNode.left) {
				nextLevel.push(currentNode.left);
			}
			if (currentNode.right) {
				nextLevel.push(currentNode.right);
			}
		} else {
			if (currentNode.right) {
				nextLevel.push(currentNode.right);
			}
			if (currentNode.left) {
				nextLevel.push(currentNode.left);
			}
		}

		// If we've reached the end of this level, move to the next
		if (currentLevel.length === 0) {
			// reset the levels
			currentLevel = nextLevel;
			nextLevel = [];
			// switch the left to right
			leftToRight = !leftToRight;
			console.log('\n');
		}
	}
}

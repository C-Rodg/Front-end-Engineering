// Main function - checks if one tree is a subtree of the other
function isSubtree(T, S) {
	// No subtree IS a subtree
	if (!S) {
		return true;
	}

	// No tree means can't have subtree
	if (!T) {
		return false;
	}

	// Check if the current tree matches the subtree
	if (isIdentical(T, S)) {
		return true;
	}

	// Recursively explore left and right subtrees, checking if they are valid instead
	return isSubtree(T.left, S) || isSubtree(T.right, S);
}

// Helper - checks if two trees are identical
function isIdentical(a, b) {
	// if neither has a value, considered identical
	if (!a && !b) {
		return true;
	}

	// If one is missing a value while the other isn't, they are different
	if (!a || !b) {
		return false;
	}

	// Verify current nodes are identical and their subtrees
	return (
		a.val === b.val &&
		isIdentical(a.left, b.left) &&
		isIdentical(a.right, b.right)
	);
}

// -----------------------------
// Serialization solution
// -----------------------------
// Another possible solution would be to serialize the two trees and then
// Check if the subtree string can be found.

function isSubtree(T, S) {
	const treeSerialized = [];
	serialize(T, treeSerialized);
	const subtreeSerialized = [];
	serialize(S, subtreeSerialized);

	return treeSerialized.indexOf(subtreeSerialized) > -1;
}

// Helper - serialize the tree
function serialize(node, arr) {
	if (!node) {
		arr.push(null);
		return;
	}
	arr.push(node.val);
	serialize(node.left, arr);
	serialize(node.right, arr);
}

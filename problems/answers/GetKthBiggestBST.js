// Runtime O(n) where 'n' is the size of the tree
// Space: O(k) - we can use a queue to track last 'k' elements

function getKthBiggest(root, k) {
	const queue = [];
	function traverse(node) {
		// TODO:
	}
	traverse(root);
	return queue[queue.length - k];
}

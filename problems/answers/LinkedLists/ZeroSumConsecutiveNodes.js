class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function removeZeroSum(head) {
	const MARK = 'A'; // this is used to make sure 'keys()' returns in order added and not numerical order
	const dummyHead = new Node(0);
	dummyHead.next = head;
	let prefix = 0;
	const seen = {};

	let curr = dummyHead;
	while (curr) {
		prefix += curr.val;
		if (!seen.hasOwnProperty(MARK + prefix)) {
			seen[MARK + prefix] = curr;
		} else {
			let node = seen[MARK + prefix];
			node.next = curr.next;

			const keys = Object.keys(seen);
			while (keys[keys.length - 1] !== MARK + prefix) {
				const lastKey = keys.pop();
				delete seen[lastKey];
			}
		}
		curr = curr.next;
	}
	return dummyHead.next;
}

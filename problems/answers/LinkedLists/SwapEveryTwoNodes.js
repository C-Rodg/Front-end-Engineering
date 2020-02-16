// Solution #1
// This solution simply just switches the values of the nodes.
// In cases where copying the data is expensive, this probably won't work.
function swapEveryTwoNodes(list) {
	const head = list;

	// Loop through the list
	let curr = head;
	while (curr && curr.next) {
		// Swap the two values
		let tempVal = curr.val;
		curr.val = curr.next.val;
		curr.next.val = tempVal;

		// iterate the pointer
		curr = curr.next.next;
	}

	// return the head
	return head;
}

// Solution #2
// This solution switches the node pointers
function swapTwoNodes(list) {
	// Edge case
	if (!list || !list.next) {
		return list;
	}

	// Assign the new head for returning it
	const newHead = list.next;

	// Track nodes
	let prev = list;
	let curr = list.next;
	while (true) {
		// Get reference to node in position 3
		let next = curr.next;

		// Assign the current nodes next to the previous node,
		// thus creating a loop
		curr.next = prev;

		if (!next || !next.next) {
			// There are not any remaining nodes to swap,
			// so just reattach previous and break
			prev.next = next;
			break;
		}

		// Assign previous' next to node at position 4 because this
		// is eventually how it will be attached
		prev.next = next.next;

		// Increment the node trackers
		prev = next;
		curr = prev.next;
	}

	return newHead;
}

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

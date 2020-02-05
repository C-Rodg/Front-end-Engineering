function rotateLinkedList(list, k) {
	// Count the nodes in the list to normalize k
	let length = 0;
	let temp = list;
	while (temp) {
		length += 1;
		temp = temp.next;
	}

	// Normalize k
	k = k % length;

	let oldHead = list;
	let newHead = null;
	let slow = list;
	let fast = list;

	// Properly position the fast pointer
	while (k > 0) {
		fast = fast.next;
		k--;
	}

	// Iterate through and properly position both pointers
	while (fast.next) {
		fast = fast.next;
		slow = slow.next;
	}

	// Set the pointers to correctly point at needed nodes
	fast.next = oldHead; // creates a cyclical list
	newHead = slow.next; // save reference to the new head
	slow.next = null; // remove the cycle from the list

	return newHead;
}

function queueReconstruction(arr) {
	// Sort it from max height to min height and secondarily from 0 people infront to most people infront
	arr.sort((a, b) => {
		if (a[0] > b[0]) {
			return -1;
		} else if (a[0] < b[0]) {
			return 1;
		} else if (a[1] > b[1]) {
			return 1;
		} else if (a[1] < b[1]) {
			return -1;
		}
		return 0;
	});

	const q = [];
	// Insert each person.  Since we know it's tallest -> smallest,
	// we know that inserting a new person will not mess up our order.
	for (let person of arr) {
		const position = person[1];
		q.splice(position, 0, person);
	}
	return q;
}

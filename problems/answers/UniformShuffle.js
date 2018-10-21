// Helper to get random integer between 2 numbers
function getRandom(floor, ceiling) {
	return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(arr) {
	if (arr.length < 1) {
		return null;
	}

	// Loop until there is one element left
	for (let setIndex = 0; setIndex < arr.length - 1; setIndex++) {
		// Get a random index from non-set values -> setIndex-end of array
		let randomChoiceIndex = getRandom(setIndex, arr.length - 1);

		if (randomChoiceIndex !== setIndex) {
			// swap values
			let valueAtSetIndex = arr[setIndex];
			arr[setIndex] = arr[randomChoiceIndex];
			arr[randomChoiceIndex] = valueAtSetIndex;
		}
	}
	return arr;
}

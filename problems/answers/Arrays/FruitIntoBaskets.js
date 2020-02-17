// The main idea of this solution is to have two trackers - fruitOne & fruitTwo.
// With each iteration we compare the currentCount to the max to be able to find the longest streak.
// If we encounter a third fruit, we then shift fruit two back to fruit one and set fruit two as the new fruit.
// We must then reset currentCount, but don't forget to count all previous in a row versions for what is now fruitOne.
function fruitIntoBaskets(trees) {
	let currentCount = 0;
	let max = 0;
	let fruitOne = trees[0];
	let fruitTwo = null;

	// Loop over the different starting positions
	for (let i = 0; i < trees.length; i++) {
		const currentFruit = trees[i];

		if (currentFruit === fruitOne || currentFruit === fruitTwo) {
			// This is still a valid fruit, so add it
			currentCount += 1;
		} else if (fruitTwo === null) {
			// We haven't yet set fruit two, so add it
			fruitTwo = currentFruit;
			currentCount += 1;
		} else if (
			fruitOne !== null &&
			fruitTwo !== null &&
			currentFruit !== fruitOne &&
			currentFruit !== fruitTwo
		) {
			// We have now reached a third fruit.

			// Set the new fruit one to the fruit we picked before this one
			let previousFruit = trees[i - 1];
			fruitOne = previousFruit;
			fruitTwo = fruit;

			// We must also set our count to this fruit we just picked
			// plus the number of times in a row the previous fruit appeared
			currentCount = 1;
			let j = i - 1;
			while (j >= 0 && trees[j] === fruitOne) {
				currentCount += 1;
				j--;
			}
		}

		// Check our current count against the max
		max = Math.max(currentCount, max);
	}

	return max;
}

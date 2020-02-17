// 1.) Create a matrix to find all combinations
// of optimal values for each weight.
// In this case it would be val/weight by 0->total weight

// 2.) Initialize the matrix for where bagSize = 0, and also
// for where there is only 1 item

// 3.) Once matrix is complete, you have the max value
// in the bottom right corner.  To determine the items chosen
// you must see if [currentRow][currentCol] is === [currentRow-1][currentCol]
// *If it is, then the item in this row was not picked so move up.
// *If it is not, then the item in this row was picked.  Mark it down, and then
// decrement currentRow, and decrement currentColumn by item weight

// values = [1, 4, 5, 7];  weights = [1, 3, 4, 5]; bagSize = 7
const solveKnapsack = (values, weights, bagSize) => {
	// Our 2D matrix
	const table = [];

	// Initialize for bagSize = 0 vertically
	weights.forEach(val => {
		table.push([0]);
	});

	// Initialize for only 1 item possible
	for (let col = 1; col < bagSize + 1; col++) {
		if (col >= weights[0]) {
			table[0][col] = values[0];
		} else {
			table[0][col] = 0;
		}
	}

	// Generate remainder of matrix
	for (let row = 1; row < weights.length; row++) {
		const currentItemWeight = weights[row];
		for (let col = 1; col < bagSize + 1; col++) {
			if (col < currentItemWeight) {
				table[row][col] = table[row - 1][col];
			} else {
				const selectThisItemValue =
					values[row] + table[row - 1][col - currentItemWeight];
				const notSelectedValue = table[row - 1][col];
				table[row][col] = Math.max(selectThisItemValue, notSelectedValue);
			}
		}
	}

	// Find the items that were picked
	const itemsPicked = [];
	let col = bagSize;
	for (let row = weights.length - 1; row > 0; row--) {
		let currentValue = table[row][col];
		if (currentValue === table[row - 1][col]) {
			// item from this row was not picked
			continue;
		} else {
			itemsPicked.push([weights[row], values[row]]);
			col -= weights[row];
		}
	}

	return itemsPicked;
};

const getMostWater = heights => {
	let left = 0;
	let right = heights.length - 1;
	let max = 0;

	while (left < right) {
		let currentX = right - left;
		let currentY = Math.min(heights[left], heights[right]);

		max = Math.max(max, currentX * currentY);

		if (heights[left] < heights[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max;
};

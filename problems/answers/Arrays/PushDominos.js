function pushDominos(str) {
	const arr = str.split('');
	const maxForce = arr.length;

	// Calculate the force going right
	const rightForce = [];
	let prev = 0;
	for (let i = 0; i < arr.length; i++) {
		const val = arr[i];
		switch (val) {
			case 'R':
				rightForce[i] = maxForce;
				prev = maxForce;
				break;
			case 'L':
				rightForce[i] = 0;
				prev = 0;
				break;
			case '.':
				if (prev) {
					prev -= 1;
				}
				rightForce[i] = prev;
				break;
		}
	}

	// Calculate the force going left
	prev = 0;
	const leftForce = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		const val = arr[i];
		switch (val) {
			case 'L':
				leftForce[i] = maxForce;
				prev = maxForce;
				break;
			case 'R':
				prev = 0;
				leftForce[i] = 0;
				break;
			case '.':
				if (prev) {
					prev -= 1;
				}
				leftForce[i] = prev;
				break;
		}
	}

	// Take the difference to calculate the result
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const leftForceVal = leftForce[i];
		const rightForceVal = rightForce[i];

		if (leftForceVal > rightForceVal) {
			result.push('L');
		} else if (leftForceVal < rightForceVal) {
			result.push('R');
		} else {
			result.push('.');
		}
	}

	return result.join('');
}

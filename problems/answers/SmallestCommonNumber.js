function smallestCommonNumber(arrA, arrB, arrC) {
	let ptA = 0,
		ptB = 0,
		ptC = 0;

	while (ptA < arrA.length && ptB < arrB.length && ptC < arrC.length) {
		if (arrA[ptA] === arrB[ptB] && arrB[ptB] === arrC[ptC]) {
			return arrA[ptA];
		}

		if (arrA[ptA] <= arrB[ptB] && arrA[ptA] <= arrC[ptC]) {
			ptA++;
		} else if (arrB[ptB] <= arrA[ptA] && arrB[ptB] <= arrC[ptC]) {
			ptB++;
		} else {
			ptC++;
		}
	}

	return -1;
}

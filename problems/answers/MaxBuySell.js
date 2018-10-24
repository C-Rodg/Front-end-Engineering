function maxBuySell(arr) {
	let currentProfit = 0;
	let currentBuy = arr[0];
	let globalSell = arr[1];
	let globalProfit = globalSell - currentBuy;

	// Loop through from 1 to end
	for (let i = 1; i < arr.length; i++) {
		currentProfit = arr[i] - currentBuy;
		if (currentProfit > globalProfit) {
			globalSell = arr[i];
			globalProfit = currentProfit;
		}

		if (currentBuy > arr[i]) {
			currentBuy = arr[i];
		}
	}

	return [globalProfit - globalSell, globalSell];
}

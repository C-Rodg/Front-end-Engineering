// Just return the max profit
function maxBuySell(arr) {
	// Track the global max profit and the minimum price seen
	let maxProfit = 0;
	let minSeen = arr[0];
	// Loop through the prices
	for (let price of arr) {
		// If the current price is less than the minimum price seen
		// we should update it because from this point forward, that is the
		// best buy price.
		if (price < minSeen) {
			minSeen = price;
		}
		// Determine if profit from the smallest we've seen + this sale price
		// is greater than the global maxProfit
		maxProfit = Math.max(maxProfit, price - minSeen);
	}
	return maxProfit;
}

// Note: the solutions below still use the algorithm above,
// - but just track more information to be returned.

function maxBuySellMoreInfo(arr) {
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

// Simpler solution:
// we must track 4 things ->
// currentBuyPrice (we keep around and always want lowest)
// currentSellPrice (we increment)
// currentProfit
// maxProfit

const maxBuySellMoreInfo2 = prices => {
	let currentBuy = prices[0] || 0;
	let currentSell = prices[1] || 0;
	let maxProfit = Math.max(currentSell - currentBuy, 0);

	// Loop through and find max profit
	for (let i = 1; i < prices.length; i++) {
		currentSell = prices[i];
		const currentProfit = currentSell - currentBuy;
		maxProfit = Math.max(maxProfit, currentProfit);
		currentBuy = Math.min(currentBuy, currentSell);
	}

	return maxProfit;
};

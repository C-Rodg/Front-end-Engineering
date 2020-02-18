function multitask(arr, cooldown) {
	let currentTime = 0;
	const lastRunTimes = {};
	for (let job of arr) {
		if (lastRunTimes.hasOwnProperty(job)) {
			// We have ran this job before,
			// decide if we need a cooldown
			if (cooldown >= currentTime - lastRunTimes[job]) {
				// We must wait extra time before running this job
				currentTime = lastRunTimes[job] + cooldown + 1;
			}
		}

		// Record the last run time for this job
		lastRunTimes[job] = currentTime;

		// Increment time by a tick
		currentTime += 1;
	}

	// Return the time taken
	return currentTime;
}

function anglesOfAClock(hr, m) {
	// Calculate the rate at which the hands move
	const degreesPerMinute = 360 / 60;
	const degreesPerHour = 360 / (60 * 12);

	// Find the angle for each position
	const minuteAngle = m * degreesPerMinute;
	const hourAngle = (hr * 60 + m) * degreesPerHour;

	// Subtract the two angles and get the absolute value
	const angle = Math.abs(hourAngle - minuteAngle);

	// If we are calculating the outer angle, that is not correct,
	// so we should get the inner angle by doing 360 - angle.
	return Math.min(angle, 360 - angle);
}

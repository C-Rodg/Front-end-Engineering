function rectangleIntersection(r1, r2) {
	// You want to get the last minX and the first maxX because that is where the overlap lies on the x-axis
	const startX = Math.max(r1.minX, r2.minX);
	const endX = Math.min(r1.maxX, r2.maxX);
	// You want to get the last minY and the first maxY because that is where the overlap lies on the y-axis
	const startY = Math.max(r1.minY, r2.minY);
	const endY = Math.min(r1.maxY, r2.maxY);

	// Verify we have a valid overlap
	if (startX < endX && startY < endY) {
		return (endX - startX) * (endY - startY);
	}

	// No overlap
	return 0;
}

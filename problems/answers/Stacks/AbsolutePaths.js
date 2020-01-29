function absolutePath(dir) {
	// Split the string
	const dirArray = dir.split('/');

	// Manage the directory using a stack
	const stack = [];

	// Loop through the folders
	for (let folder of dirArray) {
		if (!folder || folder === '.') {
			// No folder or a dot just means from the current directory, so continue
			continue;
		} else if (folder === '..') {
			// This means go up a directory, so pop
			stack.pop();
		} else {
			// Otherwise we must be drilling deeper into the directory
			stack.push(folder);
		}
	}

	return stack.join('/');
}

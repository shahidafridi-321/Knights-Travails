// Makes it sure that the move stays inside the boundries of the cheese board
function isValid(x, y) {
	return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Returns shortest path from current position to destination
function knightMoves(start, destination) {
	// Basic moves a knight can take to move to next position
	let basicMoves = [
		[-2, -1],
		[-2, 1],
		[2, -1],
		[2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
	];
	// Use BFS algorithm to find the shortest path and returns it
	function bfs(start, destination) {
		// Initializes a queue with current position
		// And path to the current position
		let queue = [[start, [start]]];

		// Create instance of Set object to store visited nodes to make it sure we do not visite it again
		let visitedNodes = new Set();

		// Add current position of the knights visited
		visitedNodes.add(start.toString());

		// Repeat until queue is empty
		while (queue.length > 0) {
			let [currentPosition, path] = queue.shift(); // Removes and returns first element in the array Further use destructuring to get currentPosition and path separated

			// Destructure the currentPosition in x and y coordinates
			let [x, y] = currentPosition;

			// If the knights reached the destination return the path
			if (x === destination[0] && y === destination[1]) {
				return path;
			}

			//For every basic move
			for (let basicMove of basicMoves) {
				let [dx, dy] = basicMove;
				let newX = x + dx;
				let newY = y + dy;

				// If the move is inside the boundries and the Node is not visited then
				if (isValid(newX, newY) && !visitedNodes.has([newX,newY])) {
					visitedNodes.add([newX, newY].toString()); // Add the node as visited
					queue.push([
						[newX, newY],
						[...path, [newX, newY]],
					]); // Push the new Position and path to that position to the queue
				}
			}
		}
	}

	let path = bfs(start, destination);
	return path;
}

let path = knightMoves([3, 3], [4, 3]);
console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
path.forEach((element) => {
	console.log(element);
});

// Makes it sure that the move stays inside the boundries of the cheese board
function isValid(x, y) {
	return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightMoves(start, destination) {
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

	function bfs(start, destination) {
		let queue = [[start, [start]]];

		let visitedNodes = new Set();

		visitedNodes.add(start.toString());

		while (queue.length > 0) {
			let [current, path] = queue.shift();
			let [x, y] = current;

			if (x === destination[0] && y === destination[1]) {
				return path;
			}

			for (let basicMove of basicMoves) {
				let [dx, dy] = basicMove;
				let newX = x + dx;
				let newY = y + dy;

				if (isValid(newX, newY) && !visitedNodes.has([newX.newY])) {
					visitedNodes.add([newX, newY].toString());
					queue.push([
						[newX, newY],
						[...path, [newX, newY]],
					]);
				}
			}
		}
	}

	let path = bfs(start, destination);
	console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);

	path.forEach((element) => {
		console.log(element);
	});
}

knightMoves([3, 3], [4, 3]);

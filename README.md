# Knight Moves

This project implements a function to determine the shortest path for a knight on a chessboard from a starting position to a destination. The function uses the Breadth-First Search (BFS) algorithm to explore all possible moves the knight can make while ensuring that it stays within the boundaries of an 8x8 chessboard.

## Functions

### `isValid(x, y)`

Checks if the given coordinates (x, y) are within the boundaries of the chessboard (0 to 7 for both x and y).

### `knightMoves(start, destination)`

Calculates the shortest path from the knight's starting position to the destination. It utilizes BFS to explore possible knight moves and returns an array representing the path taken.

## Usage

Call the `knightMoves` function with the starting and destination coordinates as arguments. The output will indicate the number of moves made and the path taken by the knight.

import type { Board, Position } from "../types"
export default function makeMove(
	board: Board,
	selected: Position | null,
	to: Position,
): Board {
	if (!selected) return board

	const [row, col] = selected
	const [toRow, toCol] = to

	// Проверяем границы доски полностью
	if (
		row < 0 ||
		row > 7 ||
		col < 0 ||
		col > 7 ||
		toRow < 0 ||
		toRow > 7 ||
		toCol < 0 ||
		toCol > 7 ||
		!board[row] ||
		!board[toRow] ||
		board[row][col] === undefined ||
		board[toRow][toCol] === undefined
	) {
		return board
	}

	// Глубокое копирование доски
	const newBoard: Board = board.map(r => [...r])

	const piece = newBoard[row][col]

	if (!piece) return board

	newBoard[row][col] = null
	newBoard[toRow][toCol] = piece

	return newBoard
}

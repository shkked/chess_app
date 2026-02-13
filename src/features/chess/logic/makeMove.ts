import type { Board, Move } from "../types"
export default function makeMove(
	board: Board,
	selected: Move | null,
	to: Move,
): Board {
	console.log("Making move from", selected, "to", to)
	if (!selected) return board

	const newBoard = board.map(row => row.map(piece => piece))
	const [row, col] = selected
	const [toRow, toCol] = to
	const piece = newBoard[row][col]
	newBoard[row][col] = null
	newBoard[toRow][toCol] = piece

	return newBoard
}

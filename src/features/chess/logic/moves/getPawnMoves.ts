import type { Board, Move, PieceColor } from "../../types"
import { isInsideBoard } from "../board"

export default function getPawnMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): Move[] {
	const moves: Move[] = []
	const direction = color === "white" ? -1 : 1

	const forwardRow = row + direction

	// Ход вперед на одну клетку
	if (isInsideBoard(forwardRow, col) && !board[forwardRow][col]) {
		moves.push([forwardRow, col])

		// Ход вперед на две клетки с начальной позиции
		const startRow = color === "white" ? 6 : 1
		const doubleForwardRow = row + 2 * direction
		if (
			row === startRow &&
			isInsideBoard(doubleForwardRow, col) &&
			!board[doubleForwardRow][col]
		) {
			moves.push([doubleForwardRow, col])
		}
	}

	// Взятие по диагонали
	for (const dc of [-1, 1]) {
		const attackCol = col + dc
		if (isInsideBoard(forwardRow, attackCol)) {
			const target = board[forwardRow][attackCol]
			if (target && target.color !== color) {
				moves.push([forwardRow, attackCol])
			}
		}
	}

	return moves
}

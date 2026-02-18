import type { Board, Position, PieceColor } from "../../types"
export default function getKnightMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): Position[] {
	const moves: Position[] = []

	const directions = [
		[1, 2],
		[2, 1],
		[2, -1],
		[1, -2],
		[-1, -2],
		[-2, -1],
		[-2, 1],
		[-1, 2],
	]

	directions.forEach(([dr, dc]) => {
		const r = row + dr
		const c = col + dc

		// Проверка на возможность хода
		if (board[r]?.[c] === null) {
			moves.push([r, c])
		}

		// Проверка на взятие фигуры
		if (board[r]?.[c]?.color !== color) {
			moves.push([r, c])
		}
	})
	return moves
}

import type { Board, Position, PieceColor } from "../../types"
export default function getKingMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): Position[] {
	const moves: Position[] = []

	const directions = [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
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

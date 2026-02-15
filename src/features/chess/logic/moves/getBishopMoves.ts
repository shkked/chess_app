import type { Board, Move, PieceColor } from "../../types"
export default function getBishopMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): Move[] {
	const moves: Move[] = []

	const directions = [
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	]

	directions.forEach(([dr, dc]) => {
		let r = row + dr
		let c = col + dc
		
		// Проверка на возможность хода
		while (board[r]?.[c] === null) {
			moves.push([r, c])
			r += dr
			c += dc
		}
		// Проверка на взятие фигуры
		if (board[r]?.[c]?.color !== color) {
			moves.push([r, c])
		}
	})
	return moves
}

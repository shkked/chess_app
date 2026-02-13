import type { Board, Move, PieceColor } from "../../types"
export default function getPawnMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): Move[] {
	const moves: Move[] = []

	const direction = color === "white" ? -1 : 1

	// Ход вперед на одну клетку
	if (!board[row + direction][col]) {
		moves.push([row + direction, col])
	}
	// Ход вперед на две клетки
	if (!board[row + direction][col] && (row === 1 || row === 6)) {
		moves.push([row + 2 * direction, col])
	}

	// Проверка на возможность съесть фигуру справа
	if (board[row + direction][col + 1]) {
		moves.push([row + direction, col + 1])
	}
	// Проверка на возможность съесть фигуру слева
	if (board[row + direction][col - 1]) {
		moves.push([row + direction, col - 1])
	}
	return moves
}

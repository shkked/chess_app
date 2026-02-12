import type { Board, PieceColor } from "../../types"
export default function getPawnMoves(
	board: Board,
	row: number,
	col: number,
	color: PieceColor,
): void {
	// TODO доделать функцию
	console.log("Calculating pawn moves for", { row, col, color, board })

	const moves: [number, number][] = []
}

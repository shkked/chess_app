import type { Board, Piece } from "../types"
export default function makeMove(
	$event: React.DragEvent<HTMLImageElement>,
	board: Board,
	row: number,
	col: number,
	piece: Piece,
) {
	// TODO доделать функцию
	console.log("Making move for piece at", { $event, board, row, col, piece })
}

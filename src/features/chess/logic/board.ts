import type { Board, PieceType } from "../types"

const backRow: PieceType[] = [
	"rook",
	"knight",
	"bishop",
	"queen",
	"king",
	"bishop",
	"knight",
	"rook",
]

export function createInitialBoard(): Board {
	const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null))

	backRow.forEach((type, col) => {
		board[0][col] = { type, color: "black" }
		board[1][col] = { type: "pawn", color: "black" }

		board[7][col] = { type, color: "white" }
		board[6][col] = { type: "pawn", color: "white" }
	})
	console.log(board)
	return board
}

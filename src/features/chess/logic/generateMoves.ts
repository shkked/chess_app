import type { Board } from "../types"
import getPawnMoves from "./moves/getPawnMoves"
import getRookMoves from "./moves/getRookMoves"
import getBishopMoves from "./moves/getBishopMoves"
import getKnightMoves from "./moves/getKnightMoves"
import getQueenMoves from "./moves/getQueenMoves"
import getKingMoves from "./moves/getKingMoves"

export default function generateMoves(
	board: Board,
	selected: [number, number],
) {
	const selectedPiece = board[selected[0]][selected[1]]
	const PieceType = selectedPiece.type
	const PieceColor = selectedPiece.color

	if (!selectedPiece) return []

	switch (PieceType) {
		case "pawn":
			return getPawnMoves(board, selected[0], selected[1], PieceColor)
			break
		case "rook":
			return getRookMoves(board, selected[0], selected[1], PieceColor)
			break
		case "bishop":
			return getBishopMoves(board, selected[0], selected[1], PieceColor)
			break
		case "knight":
			return getKnightMoves(board, selected[0], selected[1], PieceColor)
			break
		case "queen":
			return getQueenMoves(board, selected[0], selected[1], PieceColor)
			break
		case "king":
			return getKingMoves(board, selected[0], selected[1], PieceColor)
			break
		default:
			break
	}
}

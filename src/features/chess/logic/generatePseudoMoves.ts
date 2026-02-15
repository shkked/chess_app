import type { Board } from "../types"
import getBishopMoves from "./moves/getBishopMoves"
import getKingMoves from "./moves/getKingMoves"
import getKnightMoves from "./moves/getKnightMoves"
import getPawnMoves from "./moves/getPawnMoves"
import getQueenMoves from "./moves/getQueenMoves"
import getRookMoves from "./moves/getRookMoves"

export default function generatePseudoMoves(
	board: Board,
	selected: [number, number],
) {
	const selectedPiece = board[selected[0]][selected[1]]
	if (!selectedPiece) return []

	const PieceType = selectedPiece.type
	const PieceColor = selectedPiece.color

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
	}
}

import type { PieceColor, PieceType } from "../types"

export function PieceMapper(index: number) {
	let PieceType: PieceType = "pawn"
	let PieceColor: PieceColor = "white"

	if (index < 16) {
		PieceColor = "white"
		if (index >= 8) {
			PieceType = "pawn"
		}
		if (index === 0 || index === 7) {
			PieceType = "rook"
		}
		if (index === 1 || index === 6) {
			PieceType = "knight"
		}
		if (index === 2 || index === 5) {
			PieceType = "bishop"
		}
		if (index === 3) {
			PieceType = "queen"
		}
		if (index === 4) {
			PieceType = "king"
		}
	} else if (index >= 48) {
		PieceColor = "black"
		if (index < 56) {
			PieceType = "pawn"
		}
		if (index === 56 || index === 63) {
			PieceType = "rook"
		}
		if (index === 57 || index === 62) {
			PieceType = "knight"
		}
		if (index === 58 || index === 61) {
			PieceType = "bishop"
		}
		if (index === 59) {
			PieceType = "queen"
		}
		if (index === 60) {
			PieceType = "king"
		}
	} else {
		return
	}

	return { PieceType, PieceColor }
}

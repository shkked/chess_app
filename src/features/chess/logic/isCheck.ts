import type { Board, Move, PieceColor } from "../types"
import generateLegalMoves from "./generateLegalMoves"
import generatePseudoMoves from "./generatePseudoMoves"

export function isCheck(board: Board, currentPlayer: string): boolean {
	let kingPosition: Move | null = null

	// Находим позицию короля
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i][j]?.type === "king" && board[i][j]?.color === currentPlayer)
				kingPosition = [i, j]
		}
	}

	if (!kingPosition) return false

	// Проверяем, атакует ли кто-то короля?
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i][j]?.color !== currentPlayer) {
				const moves = generatePseudoMoves(board, [i, j])
				if (
					moves.some(
						move => move[0] === kingPosition[0] && move[1] === kingPosition[1],
					)
				) {
					return true
				}
			}
		}
	}

	return false
}

export function isCheckmate(board: Board, currentPlayer: PieceColor): boolean {
	// Находим все фигуры игрока
	for (let row = 0; row < 8; row++) {
		for (let col = 0; col < 8; col++) {
			const piece = board[row][col]
			if (piece && piece.color === currentPlayer) {
				const legalMoves = generateLegalMoves(board, [row, col], currentPlayer)
				if (legalMoves.length > 0) {
					// Есть хотя бы один легальный ход → нет мата
					return false
				}
			}
		}
	}
	// Ни одной фигуры нельзя сходить, король под шахом → мат
	return isCheck(board, currentPlayer)
}

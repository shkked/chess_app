import type { Board, Move } from "../types"
import generatePseudoMoves from "./generatePseudoMoves"
import { isCheck } from "./isCheck"
import makeMove from "./makeMove"

export default function generateLegalMoves(board: Board, from: Move, player: string) {
	const pseudoMoves = generatePseudoMoves(board, from)

	return pseudoMoves.filter(move => {
		const newBoard = makeMove(board, from, move)

		return !isCheck(newBoard, player)
	})
}

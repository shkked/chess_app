import { useEffect, useMemo, useState } from "react"
import { createInitialBoard } from "../../features/chess/logic/board"
import generateLegalMoves from "../../features/chess/logic/generateLegalMoves"
import { isCheck } from "../../features/chess/logic/isCheck"
import type { Move, PieceColor } from "../../features/chess/types"
import ModalGameOver from "../ui/ModalGameOver"
import Square from "./Square"

export default function Board() {
	const [board, setBoard] = useState(createInitialBoard())
	const [selected, setSelected] = useState<Move | null>(null)
	const [currentPlayer, setCurrentPlayer] = useState<PieceColor>("white")
	const [availableMoves, setAvailableMoves] = useState<Move[]>([])
	const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
		if (!selected) return

		const moves = generateLegalMoves(board, selected, currentPlayer)
		setAvailableMoves(moves)
	}, [board, selected, currentPlayer])

	const isChecked = useMemo(() => {
		return isCheck(board, currentPlayer)
	}, [board, currentPlayer])

	const restartGame = () => {
		setOpenModal(false)
		setBoard(createInitialBoard())
		setSelected(null)
		setCurrentPlayer("white")
	}
	return (
		<div className="board_container w-125 h-125 bg-gray-800 m-auto my-10 rounded-lg shadow-lg">
			<ModalGameOver
				openModal={openModal}
				setOpenModal={() => setOpenModal(!openModal)}
				restartGame={restartGame}
			/>

			<Square
				board={board}
				setBoard={setBoard}
				selected={selected}
				setSelected={setSelected}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				availableMoves={availableMoves}
				setAvailableMoves={setAvailableMoves}
				isChecked={isChecked}
				setOpenModal={setOpenModal}
			/>
		</div>
	)
}

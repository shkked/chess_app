import { useEffect, useState } from "react"
import { createInitialBoard } from "../../features/chess/logic/board"
import generateLegalMoves from "../../features/chess/logic/generateLegalMoves"
import type { Board, Move, PieceColor } from "../../features/chess/types"
import ModalGameOver from "../ui/ModalGameOver"
import Square from "./Square"

interface IBoardProps {
	existingBoard: Board | null
	existingPlayer: PieceColor | null
	existingClass: any
}
export default function Board({
	existingClass = "",
	existingBoard = null ,
	existingPlayer = null,
}: IBoardProps) {
	const [board, setBoard] = useState(
		existingBoard ? existingBoard : createInitialBoard(),
	)
	const [selected, setSelected] = useState<Move | null>(null)
	const [currentPlayer, setCurrentPlayer] = useState<PieceColor>(
		existingPlayer ? existingPlayer : "white",
	)
	const [availableMoves, setAvailableMoves] = useState<Move[]>([])
	const [openModal, setOpenModal] = useState(false)
	const [isGameOver, setIsGameOver] = useState(false)

	useEffect(() => {
		if (!selected) return

		const moves = generateLegalMoves(board, selected, currentPlayer)
		setAvailableMoves(moves)
	}, [board, selected, currentPlayer])

	useEffect(() => {
		if (!isGameOver) return

		// TODO добавить сохранение истории в localStorage
		setOpenModal(true)
		// localStorage.getItem('history')
	}, [isGameOver])

	const restartGame = () => {
		setOpenModal(false)
		setBoard(createInitialBoard())
		setSelected(null)
		setCurrentPlayer("white")
	}
	return (
		<div
			className={`board_container ${existingClass} sm:w-125 sm:h-125 bg-gray-800 m-auto my-10 rounded-lg shadow-lg`}
		>
			<ModalGameOver
				currentPlayer={currentPlayer}
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
				setOpenModal={setOpenModal}
				isGameOver={isGameOver}
				setIsGameOver={setIsGameOver}
			/>
		</div>
	)
}

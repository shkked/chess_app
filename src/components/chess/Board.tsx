import { memo, useEffect, useMemo, useState } from "react"
import { createInitialBoard } from "../../features/chess/logic/board"
import generateLegalMoves from "../../features/chess/logic/generateLegalMoves"
import type { Board, PieceColor, Position } from "../../features/chess/types"
import ModalEndGame from "../ui/ModalEndGame"
import Square from "./Square"

interface IBoardProps {
	existingBoard?: Board | null
	existingPlayer?: PieceColor | null
	classNameBoard?: string
	sizesBoard?: string
}
export default memo(function Board({
	existingBoard = null,
	existingPlayer = null,
	classNameBoard = "",
	sizesBoard = "w-125 h-125",
}: IBoardProps) {
	const [board, setBoard] = useState(
		existingBoard ? existingBoard : createInitialBoard(),
	)
	const [selected, setSelected] = useState<Position | null>(null)
	const [currentPlayer, setCurrentPlayer] = useState<PieceColor>(
		existingPlayer ? existingPlayer : "white",
	)
	const [openModal, setOpenModal] = useState(false)
	const [isGameOver, setIsGameOver] = useState(false)

	const legalMoves = useMemo(() => {
		if (!selected) return []

		return generateLegalMoves(board, selected, currentPlayer)
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
		<div>
			<div
				className={`${classNameBoard} ${
					existingBoard ? "pointer-events-none" : ""
				} sm:${sizesBoard} sm:${sizesBoard} bg-gray-800  rounded-lg shadow-lg`}
			>
				<ModalEndGame
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
					availableMoves={legalMoves}
					setOpenModal={setOpenModal}
					isGameOver={isGameOver}
					setIsGameOver={setIsGameOver}
				/>
			</div>
			{/* TODO добавить никнейм игрока */}
			{/* <div className="flex items-center">

				<p>Current player: {currentPlayer}</p>
			</div> */}
		</div>
	)
})

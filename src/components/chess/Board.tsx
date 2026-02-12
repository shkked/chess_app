import { useEffect, useState } from "react"
import { createInitialBoard } from "../../features/chess/logic/board"
import generateMoves from "../../features/chess/logic/generateMoves"
import type { PieceColor } from "../../features/chess/types"
import Square from "./Square"

export default function Board() {
	const [board, setBoard] = useState(createInitialBoard())
	const [selected, setSelected] = useState<[number, number] | null>(null)
	const [currentPlayer, setCurrentPlayer] = useState<PieceColor>("white")
	const [availableMoves, setAvailableMoves] = useState([])

	useEffect(() => {
		if (!selected) return

		const moves = generateMoves(board, selected)
		setAvailableMoves(moves)
	}, [board, selected])
	// const [history, setHistory] = useState<Board[]>([])
	return (
		<div className="board_container w-125 h-125 bg-gray-800 m-auto my-10 rounded-lg shadow-lg">
			{/* {selected} */}
			<Square
				board={board}
				setBoard={setBoard}
				selected={selected}
				setSelected={setSelected}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
			/>
		</div>
	)
}

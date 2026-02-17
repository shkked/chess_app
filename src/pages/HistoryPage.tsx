import { useState } from "react"
import Board from "../components/chess/Board"
import { createInitialBoard } from "../features/chess/logic/board"
import type { Board as IBoard, PieceColor } from "../features/chess/types"

interface IHistory {
	id: number
	board: IBoard
	currentPlayer: PieceColor
}
export default function HistoryPage() {
	const [history] = useState<IHistory[]>([
		{
			id: 1,
			board: createInitialBoard(),
			currentPlayer: "white",
		},
		{
			id: 2,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
	])

	return (
		<div className="flex flex-col items-center p-4">
			<h1 className="text-2xl font-bold dark:text-white text-black">History</h1>
			<div className="flex items-center flex-wrap gap-5">
				{history.map((item: IHistory) => (
					<Board
						existingClass={"pointer-events-none"}
						key={item.id}
						existingBoard={item.board}
						existingPlayer={item.currentPlayer}
					/>
				))}
			</div>
		</div>
	)
}

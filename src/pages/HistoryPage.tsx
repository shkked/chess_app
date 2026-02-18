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
		{
			id: 3,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
		{
			id: 4,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
		{
			id: 5,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
		{
			id: 6,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
		{
			id: 7,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
		{
			id: 8,
			board: createInitialBoard(),
			currentPlayer: "black",
		},
	])

	return (
		<div className="flex flex-col p-4">
			<h1 className="text-xl text-center font-bold dark:text-white text-blackm mb-5">
				Last games
			</h1>
			<div className="flex items-center flex-wrap gap-5 gap-y-25">
				{history.map((item: IHistory) => (
					<Board
						sizesBoard="w-64 h-64"
						key={item.id}
						existingBoard={item.board}
						existingPlayer={item.currentPlayer}
					/>
				))}
			</div>
		</div>
	)
}

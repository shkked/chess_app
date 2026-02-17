import { isCheck, isCheckmate } from "../../features/chess/logic/isCheck"
import makeMove from "../../features/chess/logic/makeMove"
import {
	playCheckSound,
	playMoveSound,
} from "../../features/chess/logic/playSounds"
import type {
	Board,
	Piece as IPiece,
	Move,
	PieceColor,
} from "../../features/chess/types"
import Piece from "./Piece"

interface SquareProps {
	selected: Move | null
	board: Board
	setBoard: React.Dispatch<React.SetStateAction<Board>>
	setSelected: React.Dispatch<React.SetStateAction<Move | null>>
	currentPlayer: PieceColor
	setCurrentPlayer: React.Dispatch<React.SetStateAction<PieceColor>>
	availableMoves: Move[]
	setAvailableMoves: React.Dispatch<React.SetStateAction<Move[]>>
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
	isGameOver: boolean
	setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Square({
	setSelected,
	board,
	setBoard,
	selected,
	currentPlayer,
	setCurrentPlayer,
	availableMoves,
	setAvailableMoves,
	setIsGameOver,
}: SquareProps) {
	const startSelecting = (row: number, col: number, piece: IPiece) => {
		if (board[row][col] === null) return
		if (piece.color === currentPlayer) setSelected([row, col])
	}

	const tryMove = (row: number, col: number) => {
		if (!selected) return

		if (availableMoves.some(([r, c]) => r == row && c == col)) {
			const newBoard = makeMove(board, selected, [row, col])

			setBoard(newBoard)
			setSelected(null)
			setAvailableMoves([])

			const nextPlayer = currentPlayer === "white" ? "black" : "white"

			setCurrentPlayer(nextPlayer)

			if (isCheckmate(newBoard, nextPlayer)) {
				setIsGameOver(true)
			} else if (isCheck(newBoard, nextPlayer)) {
				playCheckSound()
			} else {
				playMoveSound()
			}
		}
	}

	return (
		<div className="board w-full h-full grid grid-cols-8 grid-rows-8">
			{board.map((item, row) =>
				item.map((piece, col) => {
					return (
						<div
							key={`${row}-${col}`}
							className="w-full h-full border border-gray-700"
							onDragOver={e => e.preventDefault()}
							onDrop={() => tryMove(row, col)}
						>
							<div
								onClick={() => tryMove(row, col)}
								className={`w-full h-full ${
									(row + col) % 2 === 0 ? "bg-gray-500" : "bg-gray-700"
								}
								${
									availableMoves.some(([r, c]) => r == row && c == col) &&
									"bg-red-500 cursor-pointer"
								}`}
							>
								{piece && (
									<Piece
										onClick={() => startSelecting(row, col, piece)}
										onDragStart={() => startSelecting(row, col, piece)}
										imgPiece={`/chess-pieces/${piece.color}/${piece.type}.png`}
										isDragging={false}
									/>
								)}
							</div>
						</div>
					)
				}),
			)}
		</div>
	)
}

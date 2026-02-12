import { PiecePainter } from "../../features/chess/logic/board"
import moveValidator from "../../features/chess/logic/moveValidator"
import type {
	Board,
	Piece as IPiece,
	PieceColor,
} from "../../features/chess/types"
import Piece from "./Piece"

interface SquareProps {
	selected: [number, number] | null
	board: Board
	setBoard: React.Dispatch<React.SetStateAction<Board>>
	setSelected: React.Dispatch<React.SetStateAction<[number, number] | null>>
	currentPlayer: PieceColor
	setCurrentPlayer: React.Dispatch<React.SetStateAction<PieceColor>>
}
export default function Square({
	setSelected,
	board,
	setBoard,
	selected,
	currentPlayer,
	setCurrentPlayer,
}: SquareProps) {
	
	const onDragStart = (row: number, col: number, piece: IPiece) => {
		if (board[row][col] === null) return
		if (piece.color === currentPlayer) setSelected([row, col])
	}
	const tryMove = (row: number, col: number, piece: IPiece) => {
		if (board[row][col] === null) return
		moveValidator(board, from, to)
	}

	return (
		<div className="board w-full h-full grid grid-cols-8 grid-rows-8">
			{Array.from({ length: 8 }, (_, row) =>
				Array.from({ length: 8 }, (_, col) => {
					const piece = PiecePainter(row, col)

					return (
						<div
							key={`${row}-${col}`}
							className="w-full h-full border border-gray-700"
						>
							<div
								className={`w-full h-full ${
									(row + col) % 2 === 0 ? "bg-gray-500" : "bg-gray-700"
								}`}
							>
								{piece && (
									<Piece
										onDragStart={$event => onDragStart(row, col, piece)}
										onDrop={$event => tryMove(row, col, piece)}
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

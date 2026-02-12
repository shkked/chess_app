import { PieceMapper } from "../../features/chess/logic/board"
import Piece from "./Piece"

export default function Square() {
	return (
		<>
			<div className="board w-full h-full grid grid-cols-8 grid-rows-8">
				{Array.from({ length: 64 }, (_, index) => {
					const piece = PieceMapper(index)
					return (
						<div key={index} className="w-full h-full border border-gray-700">
							<div
								className={`w-full h-full ${
									(Math.floor(index / 8) + index) % 2 === 0
										? "bg-gray-500"
										: "bg-gray-700"
								}`}
							>
								{piece && (
									<Piece
										imgPiece={`/chess-pieces/${piece.PieceColor}/${piece.PieceType}.png`}
										isDragging={false}
									/>
								)}
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

import type React from "react"

interface IPropsPiece {
	imgPiece: string
	isDragging: boolean
	onDragStart: React.DragEventHandler<HTMLImageElement> | undefined
	onDrop: React.DragEventHandler<HTMLImageElement> | undefined
}

export default function Piece({
	imgPiece,
	isDragging,
	onDrop,
	onDragStart,
}: IPropsPiece) {
	return (
		<>
			{imgPiece && (
				<img
					onDragStart={onDragStart}
					onDrop={onDrop}
					src={imgPiece}
					alt={imgPiece}
					className={`w-full h-full ${
						isDragging ? "opacity-50" : "opacity-100"
					}`}
				/>
			)}
		</>
	)
}

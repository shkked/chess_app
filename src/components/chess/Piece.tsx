import type React from "react"

interface IPropsPiece {
	imgPiece: string
	isDragging: boolean
	onDragStart: React.DragEventHandler<HTMLImageElement> | undefined
	onClick: React.MouseEventHandler<HTMLImageElement>
}

export default function Piece({
	imgPiece,
	isDragging,
	onClick,
	onDragStart,
}: IPropsPiece) {
	return (
		<>
			{imgPiece && (
				<img
					onClick={onClick}
					onDragStart={onDragStart}
					src={imgPiece}
					alt={imgPiece}
					draggable
					className={`w-full h-full cursor-pointer ${
						isDragging ? "opacity-50" : "opacity-100"
					}`}
				/>
			)}
		</>
	)
}

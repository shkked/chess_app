interface IPropsPiece {
	imgPiece: string
	isDragging: boolean
}

export default function Piece({ imgPiece, isDragging }: IPropsPiece) {
	return (
		<>
			{imgPiece && (
				<img
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

export type PieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king"

export type PieceColor = "white" | "black"

export interface IPiece {
	img: string
}

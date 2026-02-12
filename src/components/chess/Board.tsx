import Square from "./Square"
export default function Board() {
	return (
		<div className="board_container w-[500px] h-[500px] bg-gray-800 m-auto my-10 rounded-lg shadow-lg">
			<Square />
		</div>
	)
}

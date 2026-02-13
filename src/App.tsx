import { redirect } from "react-router-dom"
import Board from "./components/chess/Board"

export default function App() {
	return (
		<>
			<div className="min-h-screen w-full bg-gray-900 flex flex-col">
				<header className="flex items-center justify-between text-white p-4 text-center">
					<div className="flex items-center gap-2">
						<img className="w-6 h-6" src="logo.svg" alt="chess logo" />
						<h1
							onClick={() => redirect("/")}
							className="text-xl font-bold cursor-pointer"
						>
							Space Chess
						</h1>
					</div>
					<div className="buttons_right">
						<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
							History
						</button>
						<button className="text-white py-2 px-4 rounded cursor-pointer">
							Light
						</button>
					</div>
				</header>

				<div className="main">
					<Board />
				</div>
			</div>
		</>
	)
}

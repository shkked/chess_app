import { redirect } from "react-router-dom"
import Board from "./components/chess/Board"
import { useTheme } from "./hooks/useTheme"

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<div className="min-h-screen w-full dark:bg-gray-800 dark:text-black bg-gray-100 text-white flex flex-col">
				<header className="flex items-center justify-between text-white p-4 text-center">
					<div className="flex items-center gap-2">
						<img className="w-6 h-6" src="logo.svg" alt="chess logo" />
						<h1
							onClick={() => redirect("/")}
							className="text-xl font-bold cursor-pointer text-black"
						>
							Space Chess
						</h1>
					</div>
					<div className="buttons_right">
						<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
							History
						</button>
						<button
							onClick={() => toggleTheme()}
							className="dark:text-white text-black py-2 px-4 rounded cursor-pointer"
						>
							{theme === "light" ? "🌞 Light" : " 🌜 Dark"}
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

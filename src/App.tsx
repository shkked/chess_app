import Board from "./components/chess/Board"

function App() {
	const redirectToMain = () => {
		window.location.href = "/"
	}
  
	return (
		<>
			<div className="min-h-screen w-full bg-gray-900 flex flex-col">
				<header className="flex items-center justify-between text-white p-4 text-center">
					<h1
						onClick={redirectToMain}
						className="text-xl font-bold relative left-1/2 cursor-pointer"
					>
						Chess
					</h1>
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

export default App

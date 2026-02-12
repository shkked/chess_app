import { useState } from "react"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="min-h-screen w-full bg-gray-900 flex flex-col">
				<header className="text-white p-4 text-center">
					<h1 className="text-xl font-bold">Chess App</h1>
				</header>

				<div className="main"></div>
			</div>
		</>
	)
}

export default App

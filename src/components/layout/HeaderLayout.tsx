import { Link } from "react-router-dom"

interface IHeaderLayoutProps {
	theme: string
	toggleTheme: () => void
}
export default function HeaderLayout({
	theme,
	toggleTheme,
}: IHeaderLayoutProps) {
	return (
		<>
			<header className="flex items-center justify-between text-white p-4 text-center">
				<div className="flex items-center gap-2">
					<img className="w-6 h-6" src="logo.svg" alt="chess logo" />

					<Link to="/">
						<h1 className="text-xl font-bold cursor-pointer dark:text-white text-black">
							Space Chess
						</h1>
					</Link>
				</div>
				<div className="buttons_right">
					<Link to="/">
						<button className="border border-black dark:border-white bg-emerald-700 hover:bg-emerald-400 dark:text-white py-2 px-4 rounded-3xl cursor-pointer mr-2">
							New game
						</button>
					</Link>
					<Link to="/history">
						<button className="border border-black dark:border-white hover:bg-gray-100/50 dark:text-white text-black py-2 px-4 rounded-3xl cursor-pointer">
							History
						</button>
					</Link>
					<button
						onClick={() => toggleTheme()}
						className="border border-black dark:border-white dark:text-white text-black py-2 ml-2 px-4 rounded-3xl cursor-pointer"
					>
						{theme === "light" ? "🌞 Light" : " 🌜 Dark"}
					</button>
				</div>
			</header>
		</>
	)
}

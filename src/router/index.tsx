import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import HistoryPage from "../pages/HistoryPage"
import HomePage from "../pages/HomePage"
import NewGame from "../pages/NewGame"

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/new-game",
				element: <NewGame />,
			},
			{
				path: "/history",
				element: <HistoryPage />,
			},
		],
	},
])

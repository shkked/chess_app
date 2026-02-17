import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import HistoryPage from "../pages/HistoryPage"
import HomePage from "../pages/HomePage"

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/history",
				element: <HistoryPage />,
			},
		],
	},
])

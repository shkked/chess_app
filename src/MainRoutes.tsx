import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "./App"

export function MainRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={App} />
				<Route path="/history" />
			</Routes>
		</Router>
	)
}

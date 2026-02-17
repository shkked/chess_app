import { Outlet } from "react-router-dom"
import DefaultLayout from "./components/layout/DefaultLayout"
import { useTheme } from "./hooks/useTheme"

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<DefaultLayout theme={theme} toggleTheme={toggleTheme}>
				<Outlet />
			</DefaultLayout>
		</>
	)
}

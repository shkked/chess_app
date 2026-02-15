import { useContext } from "react"
import { ThemeContext, type IThemeContext } from "../theme.context"

export function useTheme(): IThemeContext {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error()
	}

	return context
}

import { createContext } from "react"

export interface IThemeContext {
	theme: string
	toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)

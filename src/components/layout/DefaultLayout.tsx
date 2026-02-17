import HeaderLayout from "./HeaderLayout"
interface DefaultLayoutProps {
	children: React.ReactNode
	theme: string
	toggleTheme: () => void
}
export default function DefaultLayout({
	children,
	theme,
	toggleTheme,
}: DefaultLayoutProps) {
	return (
		<>
			<div className="min-h-screen w-full dark:bg-gray-800 dark:text-black bg-gray-100 text-white flex flex-col">
				<HeaderLayout theme={theme} toggleTheme={toggleTheme} />

				<div className="main">{children}</div>
			</div>
		</>
	)
}

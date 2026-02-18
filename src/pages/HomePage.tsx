export default function HomePage() {
	return (
		// TODO добавить статистику и аватарку
		<div className="mx-auto flex flex-col w-full max-w-7xl justify-center p-40">
			<h1 className="text-2xl font-bold dark:text-white text-black mb-5">
				{/* <img src="" alt="" /> */}
				Cyrus
			</h1>
			<div className="flex">
				<ul className="ml-5 text-lg dark:text-white text-black list-none">
					<li>Games played: 0</li>
					<li>Games won: 0</li>
					<li>Games lost: 0</li>
				</ul>
			</div>
		</div>
	)
}

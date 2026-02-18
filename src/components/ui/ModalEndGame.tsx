import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react"

interface ModalProps {
	openModal: boolean
	setOpenModal: (value: boolean) => void
	restartGame: () => void
	currentPlayer: string
}

export default function ModalEndGame({
	openModal,
	setOpenModal,
	restartGame,
	currentPlayer,
}: ModalProps) {
	return (
		<div>
			<Dialog open={openModal} onClose={setOpenModal} className="relative z-10">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
				/>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
						>
							<div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div className="sm:flex sm:items-start">
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<DialogTitle
											as="h3"
											className="text-base font-semibold text-white"
										>
											{currentPlayer === "white"
												? "Черные выиграли"
												: "Белые выиграли"}
										</DialogTitle>
										<div className="mt-2">
											<p className="text-sm text-gray-400">
												Хотите начать заново?
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
								<button
									type="button"
									onClick={() => restartGame()}
									className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
								>
									Да
								</button>
								<button
									type="button"
									data-autofocus
									onClick={() => setOpenModal(false)}
									className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
								>
									Нет
								</button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	)
}

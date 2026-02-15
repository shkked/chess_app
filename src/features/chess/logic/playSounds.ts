const moveSound = new Audio("/sounds/move-self.mp3")
const checkSound = new Audio("/sounds/move-check.mp3")
const gameStartSound = new Audio("/sounds/game-start.mp3")
const gameEndSound = new Audio("/sounds/game-end.mp3")
const illegalMoveSound = new Audio("/sounds/illegal.mp3")

export function playMoveSound(){
	moveSound.currentTime = 0
	moveSound.play()
}
export function playCheckSound(){
	checkSound.currentTime = 0
	checkSound.play()
}
export function playGameStartSound(){
	gameStartSound.currentTime = 0
	gameStartSound.play()
}
export function playGameEndSound(){
	gameEndSound.currentTime = 0
	gameEndSound.play()
}
export function playIllegalMoveSound(){
	illegalMoveSound.currentTime = 0
	illegalMoveSound.play()
}
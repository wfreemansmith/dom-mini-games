let turn = 4
// 'turn' or 'round' - amount of images displayed each turn. increments by one each turn, or by two later in the game

let timer = 1
// how long the image stays on screen for. decrement with each turn

const cards = []
// array of the images or glyphs used. Randomised once when the page loads / when the turn starts

// use a for loop to cycle through the /cards/ for /turn/ number of times, showing each by /timer/ amount of seconds. Use delay function (async)
// user input is 9 or 12 images in a grid the player must pick in chronological order
// chosen images are shown above in the 'player' area
const playerGuess = []

// if playerGuess deeply equals cards then go to next round
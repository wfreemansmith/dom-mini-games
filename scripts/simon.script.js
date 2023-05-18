import {
  changeHue,
  darkMode,
  getQuery,
  navigate,
  handleKeyDown,
  randomItem,
} from "./utils.script.js";
import { setGlyphs } from "../assets/glyphs.js";
import { buttonGrid, startButton, simonSays } from "../assets/simon.js";

let heading = document.getElementById("heading");
let toggle = document.getElementById("dark-toggle");
let left = document.getElementById("left");
let right = document.getElementById("right");
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let grid = document.getElementById("simon-grid");
let player = document.getElementById("player");
let guesses = document.getElementById("guesses");

let { mode, hue } = getQuery();

if (mode === "dark") {
  darkMode();
} else if (hue) {
  hue = changeHue(hue);
}

let round = 3;
// 'turn' or 'round' - amount of images displayed each turn. increments by one each turn, or by two later in the glyph

let timer = 1000;
// how long the image stays on screen for. decrement with each turn

// use a for loop to cycle through the /buttons/ for /turn/ number of times, showing each by /timer/ amount of seconds. Use delay function (async)
// user input is 9 or 12 images in a grid the player must pick in chronological order
// chosen images are shown above in the 'player' area

const playerGuess = [];
// if playerGuess deeply equals buttons then go to next round

let set = "pics";
const glyphs = setGlyphs(set);
const sequence = [];

function setSequence() {
  let i = 0;
  while (i <= 10) {
    const newGlyph = randomItem(glyphs);
    newGlyph !== sequence[i - 1] ? sequence.push(newGlyph) : i--;
    i++;
  }
}

function displayButtons() {
  grid.innerHTML = buttonGrid;
  let buttons = document.querySelectorAll(".glyph-button");

  for (let i = 0; i < glyphs.length; i++) {
    buttons[i].innerText = glyphs[i];
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (checkInput()) {
        playerGuess.push(button.innerText);
        guesses.innerText += ` ${button.innerText} `;
        if (playerGuess.length >= round) wonRound();
      } else {
        // Do something with the wrong answer!
      }
    });
  });
}

function displaySequence() {
  grid.innerHTML = simonSays;
  guesses.innerText = "";

  let glyph = document.getElementById("simon-says");

  const id = setInterval(runSequence, timer);

  let i = 0;
  function runSequence() {
    if (i >= round) {
      clearInterval(id);
      displayButtons();
    } else {
      glyph.innerText = sequence[i];
      i++;
    }
  }
  runSequence();
}

function checkInput() {
  return true;
}

function wonRound() {
  guesses.innerText = " That's right! ";
  playerGuess.length = 0;
  round++;
  timer -= 100;
  console.log(timer);
  setTimeout(displaySequence, 3000);
}

setSequence();

start.addEventListener("click", () => {
  displaySequence();
});

reset.addEventListener("click", () => {
  resetButton();
});

reset.addEventListener("dblclick", () => {
  hue = changeHue();
});

heading.addEventListener("click", () => {
  hue = darkMode(hue);
});

toggle.addEventListener("click", () => {
  hue = darkMode(hue);
});

left.addEventListener("click", () => {
  navigate(-1, hue);
});

right.addEventListener("click", () => {
  navigate(1, hue);
});

addEventListener("keydown", (event) => {
  handleKeyDown(event.keyCode);
});

window.addEventListener("wheel", (event) => {
  let colour = !hue ? 48 : hue;
  hue = event.deltaY < 0 ? changeHue(colour, 10) : changeHue(colour, -10);
});

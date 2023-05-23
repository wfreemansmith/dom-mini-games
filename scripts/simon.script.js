import {
  changeHue,
  darkMode,
  getQuery,
  navigate,
  handleKeyDown,
  randomItem,
} from "./utils.script.js";
import { setGlyphs } from "../assets/glyphs.js";
import {
  buttonGrid,
  startButton,
  simonSays,
  guessesPanel,
  gameOver,
} from "../assets/simon.js";

let heading = document.getElementById("heading");
let toggle = document.getElementById("dark-toggle");
let left = document.getElementById("left");
let right = document.getElementById("right");
let reset = document.getElementById("reset");
let grid = document.getElementById("simon-grid");
let player = document.getElementById("player");
let tally = document.getElementById("tally");
let setToggle = document.getElementById("set-toggle");

let { mode, hue } = getQuery();

if (mode === "dark") {
  darkMode();
} else if (hue) {
  hue = changeHue(hue);
}

let pause = false;
let round = 3;
let timer = 1000;
let lives = 3;
const playerGuess = [];

let setIndex = 0;
let set = "🍽";
let glyphs = setGlyphs(set);
const sequence = [];

function setSequence() {
  let i = 0;
  while (i <= 10) {
    const newGlyph = randomItem(glyphs);
    newGlyph !== sequence[i - 1] ? sequence.push(newGlyph) : i--;
    i++;
  }
}

function displayStart() {
  player.innerText = `Repeat the symbols in order`;
  grid.innerHTML = startButton;
  checkDark();

  let start = document.getElementById("start");

  start.addEventListener("click", () => {
    player.innerText = `Get ready...`;
    setTimeout(displaySequence, 1000);
  });
}

function displaySequence() {
  pause = false;
  grid.innerHTML = simonSays;
  player.innerText = `Round ${round - 2}!`;
  tally.innerText = `Lives: ${lives}`;
  checkDark();

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

function displayButtons() {
  grid.innerHTML = buttonGrid;
  player.innerHTML = guessesPanel;
  checkDark();

  let guesses = document.getElementById("guesses");
  let buttons = document.querySelectorAll(".glyph-button");

  for (let i = 0; i < glyphs.length; i++) {
    console.log("buttons", buttons[0])
    buttons[i].innerText = glyphs[i];
  }

  const minusLife = () => {
    lives--;
    tally.innerText = `Lives: ${lives}`;
    if (!lives) displayGameOver();
  };

  const guessCorrect = (glyph) => {
    playerGuess.push(glyph);
    guesses.innerText += ` ${glyph} `;
    if (playerGuess.length >= round) wonRound();
  };

  const guessIncorrect = (button) => {
    minusLife();
    button.classList.add("wrong");
    setTimeout(() => button.classList.remove("wrong"), 500);
  };

  buttons.forEach((button) => {
    const handleClick = () => {
      const glyph = button.innerText;
      if (pause) return;
      glyph === sequence[playerGuess.length]
        ? guessCorrect(glyph)
        : guessIncorrect(button);
    };

    button.addEventListener("click", handleClick);
  });
}

function wonRound() {
  player.innerText = `That's right!`;

  changeHue(122);
  playerGuess.length = 0;
  round++;
  timer -= 100;
  pause = true;
  lives = 3;
  setTimeout(() => {
    // Need to sort this out
    hue = checkDark() ? darkMode(hue) : changeHue(hue);
    player.innerText = `Get ready...`;
  }, 2000);
  setTimeout(displaySequence, 3250);
}

function displayGameOver() {
  grid.innerHTML = gameOver;
  player.innerHTML = `Game over!`;
  checkDark();
}

function checkDark() {
  let toggle = document.getElementById("dark-toggle");
  if (toggle.classList.contains("dark")) {
    let elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      element.classList.add("dark");
    });
    return true;
  }
}

function handleSet() {
  setIndex = setIndex < 3 ? setIndex + 1 : 0;
  const sets = ["🍽", "🬗", "🭫", "●"];
  set = sets[setIndex];
  glyphs = setGlyphs(set);
  setToggle.innerText = set;
  sequence.length = 0;
  setSequence();
}

function resetButton() {
  pause = false;
  round = 3;
  timer = 1000;
  lives = 3;
  playerGuess.length = 0;

  sequence.length = 0;
  tally.innerText = `Lives: ${lives}`;

  setSequence();
  displayStart();
}

setSequence();
displayStart();

setToggle.addEventListener("click", () => {
  handleSet();
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

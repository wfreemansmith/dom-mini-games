import { randomMessage, navigate, handleKeyDown, getQuery, darkMode, changeHue } from "./utils.script.js";
import { getImages } from "../assets/images.js";
import {
  noMatchMessages,
  foundMatchMessages,
} from "../assets/messages.js";

let { mode, hue } = getQuery();

if (mode === "dark") {
  darkMode();
} else if (hue) {
  hue = changeHue(hue);
}

let heading = document.getElementById("heading");
let toggle = document.getElementById("dark-toggle")
let left = document.getElementById("left")
let right = document.getElementById("right")
let player = document.getElementById("player");
let cards = document.querySelectorAll(".card");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");

let choiceA = null;
let choiceB = null;
let winner = false;
let turns = 0;

tally.innerText = `Turns: ${turns}`;

const imgs = getImages();

for (let i = 0; i < imgs.length; i++) {
  cards[i].src = imgs[i];
}

function chooseCard(card) {
  if (card.classList.contains("show") || winner) return;

  !choiceA
    ? (choiceA = card.id)
    : !choiceB
    ? (choiceB = card.id)
    : newTurn(card);

  card.classList.add("show");
  if (choiceB) checkMatch();
}

function checkMatch() {
  if (checkWinner()) {
    player.innerHTML = "You win!";
    winner = true;
    showGithub()
  } else if (imgs[choiceA] === imgs[choiceB]) {
    player.innerHTML = randomMessage(foundMatchMessages);
    choiceA = null;
    choiceB = null;
  } else {
    player.innerHTML = randomMessage(noMatchMessages);
  }
  tally.innerText = `Turns: ${++turns}`;
}

function checkWinner() {
  let result = true;
  cards.forEach((card) => {
    if (!card.classList.contains("show")) result = false;
  });

  return result;
}

function newTurn(card) {
  cards[choiceA].classList.remove("show");
  cards[choiceB].classList.remove("show");
  choiceA = null;
  choiceB = null;

  chooseCard(card);
}

function resetButton() {
  choiceA = null;
  choiceB = null;
  winner = false;
  turns = 0;
  tally.innerText = `Turns: ${Math.floor(turns)}`;

  cards.forEach((card) => {
    card.classList.remove("show");
    card.classList.remove("show");
  });
  player.innerHTML = "Solo player";
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    chooseCard(card);
  });
});

reset.addEventListener("click", () => {
  resetButton();
});

reset.addEventListener("dblclick", () => {
  hue = changeHue()
})

heading.addEventListener("click", () => {
  hue = darkMode(hue)
})

toggle.addEventListener("click", () => {
  hue = darkMode(hue)
})

left.addEventListener("click", () => {
  navigate(-1, hue)
})

right.addEventListener("click", () => {
  navigate(1, hue)
})

addEventListener("keydown", (event) => {
  handleKeyDown(event.keyCode)
});

window.addEventListener("wheel", (event) => {
  let colour = !hue ? 48 : hue;
  hue = event.deltaY < 0 ? changeHue(colour, 10) : changeHue(colour, -10)
})
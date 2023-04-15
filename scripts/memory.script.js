import { randomMessage, navigate, handleKeyDown } from "./utils.script.js";
import { getImages } from "../assets/images.js";
import {
  noMatchMessages,
  nextTurnMessages,
  foundMatchMessages,
} from "../assets/messages.js";

let heading = document.getElementById("heading");
let message = document.getElementById("player");
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
    message.innerHTML = "You win!";
    winner = true;
  } else if (imgs[choiceA] === imgs[choiceB]) {
    console.log(checkWinner());
    message.innerHTML = randomMessage(foundMatchMessages);
    choiceA = null;
    choiceB = null;
  } else {
    message.innerHTML = randomMessage(noMatchMessages);
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
  message.innerHTML = randomMessage(nextTurnMessages);

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
  message.innerHTML = "Solo player";
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    chooseCard(card);
  });
});

reset.addEventListener("click", () => {
  resetButton();
});

heading.addEventListener("click", () => {
  darkMode(document)
  // navigate("index.html")
  // navigate("memory.html", 39)
})

addEventListener("keydown", (event) => {
  handleKeyDown("memory.html", event.keyCode)
});
import { randomMessage, navigate } from "./utils.script.js";
import { getImages } from "../assets/images.js";
import {
  noMatchMessages,
  nextTurnMessages,
  foundMatchMessages,
} from "../assets/messages.js";

let cards = document.querySelectorAll(".card");
let reset = document.getElementById("reset");
let message = document.getElementById("player");
let tally = document.getElementById("tally");

let choiceA = null;
let choiceB = null;
let won = false;
let turns = 0;

tally.innerText = `Turns: ${turns}`;

const imgs = getImages();

for (let i = 0; i < imgs.length; i++) {
  cards[i].src = imgs[i];
}

function chooseCard(card) {
  if (card.classList.contains("show") || won) return;
  tally.innerText = `Turns: ${++turns}`;

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
    won = true;
  } else if (imgs[choiceA] === imgs[choiceB]) {
    console.log(checkWinner());
    message.innerHTML = randomMessage(foundMatchMessages);
    choiceA = null;
    choiceB = null;
  } else {
    message.innerHTML = randomMessage(noMatchMessages);
  }
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
  won = false;
  turns = 0;
  tally.innerText = `Turns: ${turns}`;

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

addEventListener("keydown", (event) => {
  navigate("memory.html", event.keyCode);
});

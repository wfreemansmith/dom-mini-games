import { randomMessage, navigate } from "./functions.js";

let cards = document.querySelectorAll(".card");
let reset = document.getElementById("reset");
let message = document.getElementById("player");
let tally = document.getElementById("tally")


let choiceA = null;
let choiceB = null;
let won = false;
let turns = 0;

tally.innerText = `Turns: ${turns}`

const imgs = [
  "https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg",
  "https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/square/72dd92-20180309-rick-astley.jpg",
  "https://www.xfire.com/wp-content/uploads/2022/08/Rickroll-Rick-Astley-Never-Gonna-Give-You-Up-Ad-stories1.jpg.webp",
  "https://www.xfire.com/wp-content/uploads/2022/08/Rickroll-Rick-Astley-Never-Gonna-Give-You-Up-Ad-stories1.jpg.webp",
  "https://phantom-marca.unidadeditorial.es/7d1c17a3272bc250d19d565326182a2c/crop/0x0/1064x709/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/01/16725816922461.png",
  "https://phantom-marca.unidadeditorial.es/7d1c17a3272bc250d19d565326182a2c/crop/0x0/1064x709/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/01/16725816922461.png",
  "https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_1782/tgbusmgh5uqvupkbwcqb",
  "https://resources.mynewsdesk.com/image/upload/ar_16:9,c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_1782/tgbusmgh5uqvupkbwcqb",
  "https://www.geo.tv/assets/uploads/updates/2023-04-08/480922_9405538_updates.jpg",
  "https://www.geo.tv/assets/uploads/updates/2023-04-08/480922_9405538_updates.jpg",
  "https://www.gbnews.com/media-library/prince-harry.jpg?id=33446178&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C0",
  "https://www.gbnews.com/media-library/prince-harry.jpg?id=33446178&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C0",
  "https://www.royal.uk/sites/default/files/styles/grid_2x2/public/images/biography/prince-harry-1.jpg?itok=VYHjEMgW&anti-cache=8912ccf12ebef",
  "https://www.royal.uk/sites/default/files/styles/grid_2x2/public/images/biography/prince-harry-1.jpg?itok=VYHjEMgW&anti-cache=8912ccf12ebef",
].sort((a, b) => 0.5 - Math.random());

const noMatchMessages = [
  "No luck...",
  "Try again...",
  "Damn, give it another go.",
  "We believe in you!",
  "Oh.",
  "Hmm...",
  "Not a match.",
  "Whoops...",
  "Oh dear...",
  ":'(",
];

const nextTurn = [
  "Pick a card, any card.",
  "Now card #2...",
  "...and another",
  "Keep going bro.",
  "You're doing great!",
  "Woo that's the first card!",
  "Got a good feeling...",
];

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
    message.innerHTML = "You've found match!";
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
  message.innerHTML = randomMessage(nextTurn);

  chooseCard(card);
}

function resetButton() {
  choiceA = null;
  choiceB = null;
  won = false;
  turns = 0
  tally.innerText = `Turns: ${turns}`

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
  navigate("memory.html", event.keyCode)
});

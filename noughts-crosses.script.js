import { randomMessage, navigate } from "./functions.js";

let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");
let player = document.getElementById("player");

let playerTurn = "O";
const totals = { O: 0, X: 0 };
let winner = false;

tally.innerText = `O: ${totals.O} X: ${totals.X}`;

function changeButton(square) {
  if (square.innerText === "_" && !winner) {
    square.innerText = playerTurn;
    square.classList.add(playerTurn);

    checkWinner();
    if (winner) return;

    playerTurn === "O" ? (playerTurn = "X") : (playerTurn = "O");
    player.innerText = `Player ${playerTurn}'s turn`;
  }
}

function checkWinner() {
  const winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winners.length; i++) {
    if (
      squares[winners[i][0]].innerText === playerTurn &&
      squares[winners[i][1]].innerText === playerTurn &&
      squares[winners[i][2]].innerText === playerTurn
    ) {
      winner = true;
      player.innerText = `Victory for Player ${playerTurn}!`;
      totals[playerTurn]++;
      tally.innerText = `O: ${totals.O} X: ${totals.X}`;
    }
  }
}

function resetButton() {
  winner = false;
  squares.forEach((square) => {
    square.innerText = "_";
    square.classList.remove("O");
    square.classList.remove("X");
  });
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    changeButton(square);
  });
  // square.addEventListener("mouseover", () => {
  //   square.innerText = playerTurn;
  //   square.classList.add("hover");
  // });
  // square.addEventListener("mouseout", () => {
  //   square.innerText = "_";
  //   square.classList.remove("hover");
  // });
});

reset.addEventListener("click", () => {
  resetButton();
});

addEventListener("keydown", (event) => {
  navigate("noughts-crosses.html", event.keyCode)
});

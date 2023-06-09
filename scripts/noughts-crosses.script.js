import {
  navigate,
  handleKeyDown,
  darkMode,
  getQuery,
  changeHue,
  showGithub,
} from "./utils.script.js";

let heading = document.getElementById("heading");
let toggle = document.getElementById("dark-toggle");
let left = document.getElementById("left");
let right = document.getElementById("right");
let player = document.getElementById("player");
let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");

let { mode, hue } = getQuery();

if (mode === "dark") {
  darkMode();
} else if (hue) {
  hue = changeHue(hue);
}

let playerTurn = "O";
const totals = { O: 0, X: 0 };
let winner = false;

tally.innerText = `O: ${totals.O} X: ${totals.X}`;

function changeButton(square) {
  if (
    !square.classList.contains("O") &&
    !square.classList.contains("X") &&
    !winner
  ) {
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
      squares[winners[i][0]].classList.contains(playerTurn) &&
      squares[winners[i][1]].classList.contains(playerTurn) &&
      squares[winners[i][2]].classList.contains(playerTurn)
    ) {
      winner = true;
      player.innerText = `Victory for Player ${playerTurn}!`;
      totals[playerTurn]++;
      if (totals.O + totals.X === 2) showGithub()
      tally.innerText = `O: ${totals.O} X: ${totals.X}`;
    }
  }
}

function resetButton() {
  winner = false;
  squares.forEach((square) => {
    square.classList.remove("O");
    square.classList.remove("X");
    square.classList.remove("hover");
  });
}

function hover(square) {
  if (
    !square.classList.contains("O") &&
    !square.classList.contains("X") &&
    !winner
  ) {
    square.innerText = playerTurn;
    square.classList.toggle("hover");
  }
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    changeButton(square);
  });
  square.addEventListener("mouseover", () => {
    hover(square);
  });
  square.addEventListener("mouseout", () => {
    hover(square);
  });
});

reset.addEventListener("click", () => {
  resetButton();
});

reset.addEventListener("dblclick", () => {
  hue = changeHue()
})

heading.addEventListener("click", () => {
  hue = darkMode();
});

toggle.addEventListener("click", () => {
  hue = darkMode();
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
  hue = event.deltaY < 0 ? changeHue(colour, 10) : changeHue(colour, -10)
})
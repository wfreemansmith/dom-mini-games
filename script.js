let playerTurn = "O";
const totals = { O: 0, X: 0 };

let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");
let player = document.getElementById("player")

function changeButton(square) {
  if (square.innerText === "_") {
    square.innerText = playerTurn;
  }

  checkWinner();

  if (playerTurn === "O") {
    playerTurn = "X";
  } else {
    playerTurn = "O";
  }
  player.innerText = `Player ${playerTurn}'s turn`
}

checkWinner = () => {
  //horizontal
  if (
    squares[0].innerText === playerTurn &&
    squares[1].innerText === playerTurn &&
    squares[2].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  if (
    squares[3].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[5].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  if (
    squares[6].innerText === playerTurn &&
    squares[7].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  //diagonal
  if (
    squares[0].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  if (
    squares[2].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[6].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  //vertical
  if (
    squares[0].innerText === playerTurn &&
    squares[3].innerText === playerTurn &&
    squares[6].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  if (
    squares[1].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[7].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }

  if (
    squares[2].innerText === playerTurn &&
    squares[5].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.O} X: ${totals.X}`;
  }
};

function resetButton() {
  squares.forEach((square) => {
    square.innerText = "_";
  });
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    changeButton(square);
  });
});

reset.addEventListener("click", () => {
  resetButton();
});

// function changePet() {
//   if (paragraph.innerText === "catEmoji") {
//     pet.innerText = "dog";
//   } else if (pet.innerText === "dogEmoji") {
//     pet.innerText = "cat";
//   }
// }

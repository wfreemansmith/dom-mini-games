let playerTurn = "o";
const totals = { o: 0, x: 0 };

let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");
let player = document.getElementById("player")

function changeButton(square) {
  if (square.innerText === "_") {
    square.innerText = playerTurn;
  }

  checkWinner();

  if (playerTurn === "o") {
    playerTurn = "x";
  } else {
    playerTurn = "o";
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
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  if (
    squares[3].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[5].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  if (
    squares[6].innerText === playerTurn &&
    squares[7].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  //diagonal
  if (
    squares[0].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  if (
    squares[2].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[6].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  //vertical
  if (
    squares[0].innerText === playerTurn &&
    squares[3].innerText === playerTurn &&
    squares[6].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  if (
    squares[1].innerText === playerTurn &&
    squares[4].innerText === playerTurn &&
    squares[7].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
  }

  if (
    squares[2].innerText === playerTurn &&
    squares[5].innerText === playerTurn &&
    squares[8].innerText === playerTurn
  ) {
    alert(`victory for player ${playerTurn}!!`);
    totals[playerTurn]++;
    tally.innerText = `O: ${totals.o} X: ${totals.x}`;
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

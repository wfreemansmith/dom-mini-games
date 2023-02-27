let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");
let tally = document.getElementById("tally");
let player = document.getElementById("player");

let playerTurn = "O";
const totals = { O: 0, X: 0 };

function changeButton(square) {
  if (square.innerText === "_") {
    square.innerText = playerTurn;

    checkWinner();

    playerTurn === "O" ? (playerTurn = "X") : (playerTurn = "O");
    player.innerText = `Player ${playerTurn}'s turn`;
  }
}

checkWinner = () => {
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
      // iterates throught the above array, checking if there are any winning patterns
      
      ) {
      alert(`Victory for player ${playerTurn}!!`);
      totals[playerTurn]++;
      tally.innerText = `O: ${totals.O} X: ${totals.X}`;
      // if there are winning patterns: alert, add one to total, update totals
    
    }
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
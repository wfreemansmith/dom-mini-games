let playerTurn = "o";

let squares = document.querySelectorAll(".square");
let reset = document.getElementById("reset");

function changeButton(square) {
  console.log(squares);

  if (square.innerText === "_") {
    square.innerText = playerTurn;
  }

  checkWinner();

  if (playerTurn === "o") {
    playerTurn = "x";
  } else {
    playerTurn = "o";
  }


  //   if square = empty string, then square = player turn
  //   if playerTurn = o, let it be x
}

checkWinner = () => {
    //horizontal
    if (squares[0].innerText === playerTurn && squares[1].innerText === playerTurn && squares[2].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}        location.reload();
        !!`);
      }   
      
      if (squares[3].innerText === playerTurn && squares[4].innerText === playerTurn && squares[5].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }

      if (squares[6].innerText === playerTurn && squares[7].innerText === playerTurn && squares[8].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }

      //diagonal
      if (squares[0].innerText === playerTurn && squares[4].innerText === playerTurn && squares[8].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }   
      
      if (squares[2].innerText === playerTurn && squares[4].innerText === playerTurn && squares[6].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }

      //vertical
      if (squares[0].innerText === playerTurn && squares[3].innerText === playerTurn && squares[6].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }   
      
      if (squares[1].innerText === playerTurn && squares[4].innerText === playerTurn && squares[7].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }

      if (squares[2].innerText === playerTurn && squares[5].innerText === playerTurn && squares[8].innerText === playerTurn) {
        alert(`victory for player ${playerTurn}!!`);
      }
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    changeButton(square);
  });
});

// function changePet() {
//   if (paragraph.innerText === "catEmoji") {
//     pet.innerText = "dog";
//   } else if (pet.innerText === "dogEmoji") {
//     pet.innerText = "cat";
//   }
// }

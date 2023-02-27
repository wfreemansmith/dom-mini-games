


exports.checkWinner = () => {

    //horizontal
    if (squares[0].innerText && squares[1].innerText && squares[2].innerText === playerTurn) {
        console.log("victory!!")
      }   
      
      if (squares[3].innerText && squares[4].innerText && squares[5].innerText === playerTurn) {
        console.log("victory!!")
      }

      if (squares[6].innerText && squares[7].innerText && squares[8].innerText === playerTurn) {
        console.log("victory!!")
      }

      //diagonal
      if (squares[0].innerText && squares[4].innerText && squares[8].innerText === playerTurn) {
        console.log("victory!!")
      }   
      
      if (squares[2].innerText && squares[4].innerText && squares[6].innerText === playerTurn) {
        console.log("victory!!")
      }

      //vertical
      if (squares[0].innerText && squares[3].innerText && squares[6].innerText === playerTurn) {
        console.log("victory!!")
      }   
      
      if (squares[1].innerText && squares[4].innerText && squares[7].innerText === playerTurn) {
        console.log("victory!!")
      }

      if (squares[2].innerText && squares[5].innerText && squares[8].innerText === playerTurn) {
        console.log("victory!!")
      }
}
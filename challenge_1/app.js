
count = 0
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]



function myFunction(id) {
  var toNumber = Number(id)
  if (document.getElementById(id).innerText.length === 0) {
    if (count % 2 === 0) {
      document.getElementById(id).textContent = 'X';
      count++
      board[toNumber - 1] = 1
    } else {
      document.getElementById(id).textContent = 'O';
      count++
      board[toNumber - 1] = 2
    }
    console.log(board)
  }
  gameplay(id)
}




function gameplay(checkingId) {
  checkColumns(checkingId)
  checkRows(checkingId)
}


function checkColumns(checkingId) {
  var checking = Number(checkingId) - 1
  console.log(checking)

  if (board[checking] === board[checking + 3] && board[checking + 6]) {
    console.log('winner')
  } else if (board[checking] === board[checking - 3] && board[checking - 6]) {
    console.log('you won')
  }
}

function checkRows(checkingId) {
  var checking = Number(checkingId) - 1
  if(board[checking] === board[checking - 1] && board[checking + 1]){
    console.log('winner')
  }
  if(board[checking] === board[checking + 1] && board[checking + 2]){
    console.log('win again')
  }
  if(board[checking] === board[checking - 1] && board[checking - 2]){
    console.log('you win again')
  }
}

function diagonal(){

}

function clearBoard() {

}




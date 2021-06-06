'strict';

// single round of rps
function round() {
  // computer selection
  function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'],
      compMove = moves[Math.floor(Math.random() * moves.length)];
    return compMove;
  }

  const compTurn = computerPlay();

  // user selection
  function userPlay() {
    let yourMove = prompt('Rock Paper Scissors?').toLowerCase();

    switch (yourMove) {
      case 'rock':
        break;
      case 'paper':
        break;
      case 'scissors':
        break;
      default:
        alert('Invalid move!');
        yourMove = prompt('Rock Paper Scissors?').toLowerCase();
    }

    return yourMove;
  }

  const userTurn = userPlay();

  // display selected moves
  function logMoves() {
    console.log(`Comp: ${compTurn}\nUser: ${userTurn}`);
  }

  if (compTurn == 'rock') {
    if (userTurn == 'rock') {
      logMoves();
      alert('DRAW!');
    } else if (userTurn == 'paper') {
      logMoves();
      alert('USER WINS!');
    } else {
      logMoves();
      alert('COMP WINS!');
    }
  } else if (compTurn == 'paper') {
    if (userTurn == 'paper') {
      logMoves();
      alert('DRAW!');
    } else if (userTurn == 'scissors') {
      logMoves();
      alert('USER WINS!');
    } else {
      logMoves();
      alert('COMP WINS!');
    }
  } else {
    if (userTurn == 'scissors') {
      logMoves();
      alert('DRAW!');
    } else if (userTurn == 'rock') {
      logMoves();
      alert('USER WINS!');
    } else {
      logMoves();
      alert('COMP WINS!');
    }
  }
}

for (let i = 0; i < 5; i++) {
  round();
}

export function game() {
  let userMove;
  let compMove;
  let userScore = 0;
  let compScore = 0;
  const moveOptions = document.querySelectorAll('.move-option');
  const userScoreCard = document.querySelector('.user-score');
  const compScoreCard = document.querySelector('.comp-score');
  const result = document.querySelector('.result');
  const resultSection = document.querySelector('.result-section');
  const scoreBoard = document.querySelector('.score-board');
  const winnerDisplay = document.querySelector('.winner-display');
  const hideMoves = document.querySelector('.move-list');

  moveOptions.forEach((moveOption) => {
    moveOption.addEventListener('click', () => {
      let moveName = moveOption.querySelector('p');
      userMove = moveName.textContent.toLowerCase();

      round(userMove, compMove);

      if (userScore == 5 || compScore == 5) {
        hideScoreMetrics();
        if (userScore > compScore) {
          winnerBanner("You're Victorious!");
        } else {
          winnerBanner('The computer beat you..');
        }
        removeMoves();
        setTimeout(() => {
          gameRestart();
        }, 3000);
      }
    });
  });

  function computerPlay() {
    const moves = ['rock', 'paper', 'scissors'];
    compMove = moves[~~(Math.random() * moves.length)];
    return compMove;
  }

  function round() {
    userMove = userMove;
    compMove = computerPlay().toLowerCase();

    if (userMove == compMove) {
      displayScores();
      displayResult('DRAW');
    } else if (
      (userMove == 'rock' && compMove == 'scissors') ||
      (userMove == 'paper' && compMove == 'rock') ||
      (userMove == 'scissors' && compMove == 'paper')
    ) {
      userScore++;
      displayScores();
      displayResult('User Won');
    } else {
      compScore++;
      displayScores();
      displayResult('Comp Won');
    }
  }

  function displayScores() {
    userScoreCard.textContent = 'USER: ' + userScore;
    compScoreCard.textContent = 'COMP: ' + compScore;
  }

  function displayResult(string) {
    result.textContent = string;
  }

  function hideScoreMetrics() {
    resultSection.style.display = 'none';
    scoreBoard.style.display = 'none';
  }

  function winnerBanner(string) {
    winnerDisplay.textContent = string;
  }

  function removeMoves() {
    hideMoves.style.display = 'none';
  }

  function gameRestart() {
    window.location.reload();
  }
}

import { colorFlip } from './colorflip.js';
import { game } from './game.js';
const play = document.querySelector('.play');
const moveOptions = document.querySelectorAll('.move-option');

('strict');

colorFlip();

play.addEventListener('click', () => {
  hidePlay();
  revealMoves();
  game();
});

function hidePlay() {
  play.style.display = 'none';
}

function revealMoves() {
  moveOptions.forEach(function (move) {
    move.style.display = 'block';
  });
}

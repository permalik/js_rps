import { colorFlip } from './colorflip.js';
import { game } from './game.js';
const play = document.querySelector('.play');
const showMoves = document.querySelector('.move-list');

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
  showMoves.style.display = 'block';
}

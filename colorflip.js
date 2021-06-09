export function colorFlip() {
  window.addEventListener('load', colorRandomizer);
}

const gameHeading = document.querySelector('.game-heading');

let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

function inifiniteColor() {
  if (randomColor != '') {
    randomColor = '';
  } else if (randomColor == '') {
    randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // If randomColor length is not 7 (# + 6 hex), complete with zeros
    if (randomColor.length < 7) {
      randomColor = randomColor + '0'.repeat(7 - randomColor.length);
    }
  }
  return randomColor;
}

function colorRandomizer() {
  setInterval(function () {
    colorMetrics();
  }, 300);
}

function colorMetrics() {
  if (gameHeading.style.color == '') {
    gameHeading.style.color = inifiniteColor();
  } else if (gameHeading.style.color == '#randomColor') {
    gameHeading.style.color = inifiniteColor();
  } else {
    gameHeading.style.color = '';
  }
}

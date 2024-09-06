'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageElement.textContent = '🚫 No number!';
  } else if (guess === secretNumber) {
    messageElement.textContent = '🎉 Correct number!';
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    if (highScore < score) highScore = score;
  } else {
    score--;
    if (score > 0) {
      messageElement.textContent =
        guess < secretNumber ? '📉 Too low!' : '📈 Too high!';
    } else {
      messageElement.textContent = `😩 You've lost!`;
    }
  }

  score = Math.max(score, 0);

  scoreElement.textContent = score;
  highScoreElement.textContent = highScore;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageElement.textContent = 'Start guessing...';
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  bodyElement.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Used in Refactoring DRY Principle | Reduce querySelector for message then created function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Used in Refactoring DRY Principle | Reduce querySelector for secretNumber then created function
const secretNumberFun = function (number) {
  document.querySelector('.number').textContent = number;
};

secretNumberFun('?');
let highScore = document.querySelector('.highscore').textContent;

// {------ Start Check btn ------}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // There is no inputs
  if (!guess) {
    displayMessage('⭕ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    secretNumberFun(secretNumber);
    document.querySelector('body').style.backgroundColor = '#56AA3F';
    document.querySelector('.number').style.width = '30rem';

    // High score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } // Used in Refactoring DRY Principle | Reduce code from ternary operator
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
    }
  }
});
// {------ End Check btn --------}

// {------ Start Again btn ------}
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  secretNumberFun('?');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#201F20';
});
// {------ End Again btn --------}

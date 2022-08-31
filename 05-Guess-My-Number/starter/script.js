'use strict';

// console.log(document.querySelector('.message').textContent);

/* 
--------------------------DOM AND DOM MANIPULATION-------------------------------

Sta je DOM??
-DOM je skracenica od DOCUMENT OBJECT MODEL
DOM predstavlja HTML dokument u obliku javaScript objekta.To znaci da mozemo menjati
svaki deo dokumenta ili kreirati novi elemnat u dokumentu.

-DOM nije dio JavaScripta, DOM(DOM metode i properties) su dio WEB APIs sto su prevodu
biblioteke koje se nalaze u web-pretrazivacima(goggle crome, safari, mozila firefox)
*/

// document.querySelector('.message').textContent = 'Correct Numeber';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 34;

/* 
----------------------------HANDLING CLICK EVENTS--------------------------
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!!Try Again');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!!!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('To high!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('To low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

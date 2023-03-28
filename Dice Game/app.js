'use strict'
// select element 
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');
const diceEl = document.querySelector('.dice');

const currentEl0 = document.querySelector('#current--0');
const currentEl1 = document.querySelector('#current--1');

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');

let currentScore = 0;
let activePlayer = 0;


// start roll dice 
rollBtn.addEventListener('click', function () {
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `./images/ludo-dice-${dice}.jpg`;

    if (dice !== 1) {
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
})

// start hold 
holdBtn.addEventListener('click', function () {})
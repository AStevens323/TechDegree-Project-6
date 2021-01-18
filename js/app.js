let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.getElementById('phrase');
const startGame = document.querySelector('.btn_reset');
let missedQuestion = 0;

let phrases = ['I', 'love', 'creating', 'coding', 'projects'];


startGame.addEventListener('click', () => {
    const displayOverlay = document.getElementById('overlay');
    displayOverlay.style.display=none;

});
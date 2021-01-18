let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.getElementById('phrase');
const btnStart = document.getElementsByClassName('btn_reset');
const displayOverlay = document.getElementById('overlay');

let missedQuestion = i=0;

let phrases = ['I', 'love', 'creating', 'coding', 'projects'];

btnStart.addEventListener('click', () => {
    displayOverlay.display=none;

});
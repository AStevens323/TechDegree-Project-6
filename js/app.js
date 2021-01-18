let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
let missedQuestion = 0;

let phrases = ['I', 'love', 'creating', 'coding', 'projects'];


startGame.addEventListener('click', () => {
    const displayOverlay = document.getElementById('overlay');
    displayOverlay.style.display='none';

});

const getRandomPhraseArray = (arr) => {
   /*Gets random number*/
   let randomNumber = Math.floor(Math.random() * phrases.length);
   return arr[randomNumber];

}

const addPhraseToDisplay = (arr) => {
    for(i=0; i<arr.length; i++) {


    }

}
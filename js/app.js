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
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseVariable.appendChild(li);
        
        if(arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';

        }
    }

}
const randomPhrase = getRandomPhraseArray(phrases)

addPhraseToDisplay(randomPhrase);
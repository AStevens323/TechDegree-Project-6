let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
let missedQuestion = 0;

let phrases = ['I', 'love', 'creating', 'coding', 'projects'];


startGame.addEventListener('click', () => {
    const displayOverlay = document.getElementById('overlay');
    displayOverlay.style.display='none';

});

const getRandomPhraseArray = (arr) => { /*Returns an index value for the 'phrases array'*/
   /*Gets random number*/
   let randomNumber = Math.floor(Math.random() * phrases.length);
   return arr[randomNumber];

}

const addPhraseToDisplay = (arr) => {
    
    for(i=0; i<arr.length; i++) { /*for loop cycles through length of a phrase in array - creates an li - appends it to a ul*/
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
const randomPhrase = getRandomPhraseArray(phrases) /*Returns an index value from the phrases array and assigns it to the variable*/

addPhraseToDisplay(randomPhrase); /*Adds index value returned from thr getRandomPhraseArray and displays it by creating li elements for each letter*/
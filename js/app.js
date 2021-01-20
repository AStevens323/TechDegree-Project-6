let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
let missedQuestion = 0;
const button = document.getElementsByTagName('button');
const displayOverlay = document.getElementById('overlay'); 

let phrases = ['Orange', 'Blue', 'Green', 'Black', 'Yellow'];



startGame.addEventListener('click', () => {
    const displayOverlay = document.getElementById('overlay');
    displayOverlay.style.display='none';

});

const getRandomPhraseArray = (arr) => { /*Returns an index value for the 'phrases array'*/
   /*Gets random number*/
   let randomNumber = Math.floor(Math.random() * phrases.length);
   return arr[randomNumber].split('');

};


const addPhraseToDisplay = (arr) => {
    
    for(i=0; i<arr.length; i++) { /*for loop cycles through length of a phrase in array - creates an li - appends it to a ul*/
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseVariable.appendChild(li);
        
        if(arr[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');

        }
    }

};
const randomPhrase = getRandomPhraseArray(phrases); /*Returns an index value from the phrases array and assigns it to the variable*/

addPhraseToDisplay(randomPhrase); /*Adds index value returned from thr getRandomPhraseArray and displays it by creating li elements for each letter*/

const checkLetter = button => {
    let liContain = document.getElementsByClassName('letter');
    let match = null;
    for (let i=0; i < liContain.length; i++) {
        if(button === liContain[i].textContent.toLowerCase()) {
            liContain[i].classList.add('show');
            match = liContain[i].textContent
        }
    }

    return match; 
};

qwertyVariable.addEventListener ('click', (e) => {
    let buttonClick = qwertyVariable.getElementsByClassName('keyrow');
    let button = qwertyVariable.getElementsByTagName('button');
    
    if(e.target.tagName == 'BUTTON' && button.classList != 'chosen') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
        const letterFind = checkLetter(e.target.textContent);
    if(letterFind == null) {
        let ol = document.querySelectorAll('#scoreboard ol li img');
        ol[missedQuestion].src = "images/lostHeart.png";
        missedQuestion += 1;
    }
}
    checkWin();
});

const checkWin = () => {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');

    if(show.length == letter.length) {
        displayOverlay.style.display = 'block';
        displayOverlay.classList.add('win');
    }

    if(missedQuestion >= 5) {
        displayOverlay.style.display = 'block';
        displayOverlay.classList.add('lose');
    }
};
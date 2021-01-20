let qwertyVariable = document.getElementById('qwerty');
let phraseVariable = document.querySelector('#phrases ul');
const startGame = document.querySelector('.btn__reset');
let missedQuestion = 0;
const button = document.getElementsByTagName('button'); 

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
            li.className = 'letter';
        } else {
            li.className = 'space';

        }
    }

};
const randomPhrase = getRandomPhraseArray(phrases); /*Returns an index value from the phrases array and assigns it to the variable*/

addPhraseToDisplay(randomPhrase); /*Adds index value returned from thr getRandomPhraseArray and displays it by creating li elements for each letter*/

const checkLetter = button => {
    let liContain = document.getElementsByTagName('li');
    const match = null;
    for (let i=0; i < liContain.length; i++) {
        if(button.textContent == liContain[i].textContent) {
            liContain[i].className = 'show';
            match.value =  button.value;
        }
    }

    return match; 
};

qwertyVariable.addEventListener ('click', (e) => {
    if(e.target.value == 'button' && e.target.className !== 'chosen') {
        e.target.className = 'chosen';
        let button = e.target.textContent;
       const letterFind = checkLetter(e.target.textContent);
    if(letterFind == null) {
        let ol = document.querySelectorAll('#scoreboard ol li img');
        ol[missedQuestion].src = "../images/lostHeart.png";
        missedQuestion += 1;
    }
}
});

const checkWin = () => {
    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
    const overlay = document.getElementById('overlay');

    if(show.length == letter.length) {
        overlay.style.display = 'block';
        overlay.className = 'win';
    }

    if(missedQuestion >= 5) {
        overlay.style.display = 'block';
        overlay.className = 'lose';
    }
};
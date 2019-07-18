import compareNumbers from './compare-numbers.js';

//DOM Elements
const submitBtn = document.getElementById('SubmitBtn');
const numberInput = document.getElementById('number-input');
const messageInput = document.getElementById('message');
const correctImage = document.getElementById('correct-image');
const incorrectImage = document.getElementById('incorrect-image');
const correctNumber = 3;

//What happens when the button is clicked?
submitBtn.addEventListener('click', () => {
  //Get Guess
    let userGuess = parseInt(numberInput.value);
    console.log(userGuess); //.value is for inputs
  //Compare w/answer
    let result = compareNumbers(userGuess, 3);
    console.log(result);
  //Show images
    if(result == 0) {
        correctImage.classList.remove('hidden');
    }
});
console.log(messageInput.textContent); //.textContent is for spans

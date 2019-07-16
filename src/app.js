import isYes from './is-yes.js';

const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');

quizButton.onclick = function() {
    alert('Thank you for choosing Yes from app.js');
    
    const confirmed = confirm('Please don\'t leave?');
    if(confirmed === false) {
        return;
    }
    
    let name = '';
    let response = '';
    
    const firstName = prompt('What is your first name?');
    name = name += firstName;
    response = 'Your name is ' + name;
    
    let correctAnswers = 0;
    
    const isCool = prompt('Is JavaScript cool (yes/no)?');
    
    //convert to boolean
    const correctIsCool = true;
    if(isYes(isCool) === correctIsCool) {
        correctAnswers += 1;
    }
    
    
    if(correctAnswers >= 1) {
        response += ' Yay! You know JavaScript!';
    }
    else {
        response += 'Aw, try again :(';
    }

    quizResult.textContent = response;
};




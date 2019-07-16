/* eslint-disable no-console */
import isYes from './is-yes.js';

// Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

// Initialization (setup, state variables)

// Event Handlers
quizButton.onclick = function() {
    // show the user a message. only options is "OK"
    alert('hello from app.js');
    
    // returns: true for "OK", and false for "Cancel"
    const confirmed = confirm('Are you sure about that?');
    if(confirmed === false) {
        return;
    }
    
    // example of what an empty string is
    // eslint-disable-next-line no-unused-vars
    const emptyString = '';

    let name = '';
    
    // returns string entered by user, unless they cancel
    // in which case returns null
    const firstName = prompt('What\'s your first name?');
    name = name + firstName;
    // short hand for above:
    // name += firstName;

    const lastName = prompt('What\'s your last name?');
    name = name + ' ' + lastName;
    // short hand for above:
    // name += lastName;

    let correctAnswers = 0;

    // get the text response from the user
    const isAwesome = prompt('Is JavaScript the most awesome language (Y/N)?');
    
    // convert to boolean
    const correctIsAwesome = true;
    if(isYes(isAwesome) === correctIsAwesome) {
        correctAnswers += 1;
    }

    let response = 'Your name is ' + name;

    if(correctAnswers >= 1) {
        response += ' And you know your JavaScript!';
    }
    else {
        response += ' And you need to brush up on getting to know JavaScript';
    }

    result.textContent = response;
};

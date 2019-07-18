import compareNumbers from '../src/compare-numbers.js';
const test = QUnit.test;
//GUESS NUMBER FUNCTION
function isGuessCorrect(guess, correctNumber) {
    const userGuess = parseInt(guess)
    if(userGuess === correctNumber) {
        return 0;
    }
    if(userGuess > correctNumber) {
        return 1;
    }
    if(userGuess < correctNumber) {
        return -1;
    }

}
//THIS IS A TEST FOR IF IS CORRECT NUMBER
test('returns 0 if correct', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = '3';
    const correctNumber = 3;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isGuessCorrect(guess, correctNumber);
    //Assert
    assert.equal(result, expected);
});

///THIS IS A TEST FOR IF NUMBER IS HIGHER 
test('returns 1 if guess > correctNumber', function(assert) {
    const guess = 4;
    const expected = 1;
    const result = compareNumbers(guess, 3);
    assert.equal(result, expected);
});

///THIS IS A TEST FOR IF NUMBER IS LOWER
test('return -1 if guess < correctNumber', function(assert) {
    const plant = 2;
    const expected = -1;
    const result = compareNumbers(plant, 3);
    assert.equal(result, expected);

   
})
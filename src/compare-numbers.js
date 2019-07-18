function compareNumbers(guess, actual) {
  //returns 1 if guess too hight
    if(guess > actual) {
        return 1;
    }
  //returns 0 if guess is correct
    else if(guess === actual) { 
        return 0;
    }
  //returns -0 if quess is too low
    else {
        return -1;
    }
}

export default compareNumbers;
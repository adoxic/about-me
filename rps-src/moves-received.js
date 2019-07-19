export function randomMove(max) {
    return Math.floor(Math.random() * max);
}

export function convertNum(randNumber) {
    if(randNumber === 0) {
        return 'rock';
    } else if(randNumber === 1) {
        return 'paper';
    } else if(randNumber === 2) {
        return 'scissors';
    }
}




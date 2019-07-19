import { convertNum } from './moves-received.js';
import { randomMove } from './moves-received.js';
import whoWon from './whoWon.js';

const play = document.getElementById('play');



play.addEventListener('click', () => {
    const randNumber = randomMove(3);
    const randomOutput = convertNum(randNumber);

    const playerChecked = document. querySelector('input:checked');
    
    const tally = whoWon(playerChecked.value, randomOutput);

    console.log(tally);
});



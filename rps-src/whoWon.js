export default function whoWon(player, computer) {   
    if(player === 'rock' && computer === 'paper') {
        return 'computer won';
    } else if(player === 'scissors' && computer === 'rock') {
        return 'computer won';
    } else if(play === 'paper' && computer === 'scissors') {
        return 'computer won';
    } 
    
    else if(player === 'paper' && computer === 'rock') {
        return 'player won';
    } else if(player === 'rock' && computer === 'scissors') {
        return 'player won';
    } else if(play === 'scissors' && computer === 'paper') {
        return 'player won';
    } else {
        return 'tie';
    }

}
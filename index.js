function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
           case 2: 
                return 'scissors';
            default: 
                return 'invalid';
                break;
        }
}    


function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats rock!"
        } else {
            return "You won! Rock beats scissors."
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "Sorry, you lose. Scissors beats paper."
        } else {
            return "You won! Paper beats rock!"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "Oops, you lose! Rock beats scissors."
        } else {
            return "Yahoo, you win! Scissors beats paper."
        }
    }

} 
console.log(playGame());
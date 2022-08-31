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


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats rock!"
        } else {
            return "You won! Rock beats scissors."
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            return "Sorry, you lose. Scissors beats paper."
        } else {
            return "You won! Paper beats rock!"
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            return "Oops, you lose! Rock beats scissors."
        } else {
            return "Yahoo, you win! Scissors beats paper."
        }
    }
} 

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        if (playerSelection > computerSelection) {
            console.log("You win!");
        } else {
            console.log("Sorry, you lost to the computer.")
        }   
}
}



const playerSelection = prompt("Rock, Paper, or Scissors?")
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
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


function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection =  prompt("Rock, Paper, or Scissors?");
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            playerScore += 1;
            return "You lose! Paper beats rock!"
        } else {
            computerScore += 1;
            return "You won! Rock beats scissors."
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'scissors') {
            playerScore += 1;
            return "Sorry, you lose. Scissors beats paper."
        } else {
            computerScore += 1;
            return "You won! Paper beats rock!"
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'rock') {
            playerScore += 1;
            return "Oops, you lose! Rock beats scissors."
        } else {
            computerScore += 1;
            return "Yahoo, you win! Scissors beats paper."
        }
    }
} 

function game(maxScore) {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i <= maxScore; i++) {
    console.log(playRound());
      if (i === maxScore) {
        if (playerScore > computerScore) {
        console.log("You won the game!");
      } else if (playerScore < computerScore) {
        console.log("You lost the game.");
      } else {
      }
        }
     }
    }

console.log(game(4));
// const computerSelection = getComputerChoice();
// const playerSelection = prompt("Rock, Paper, or Scissors?");
// console.log(playRound(playerSelection, computerSelection));
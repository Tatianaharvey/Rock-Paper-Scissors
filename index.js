const game = () => {
    let playerScore = 0
    let computerScore = 0
    let moves = 0;

   
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissors');
    const playerSelection = [rockBtn, paperBtn, scissorBtn];
    const computerSelection = ['rock', 'paper', 'scissors'];

    playerSelection.forEach(option => {
        option.addEventListener('click', function() {
            
        const movesLeft = document.querySelector('.movesLeft');
        moves++;
        movesLeft.innerText = `Moves Left: ${5 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerSelection[choiceNumber];

        winner(this.innerText, computerChoice)
        
        

        if(moves == 5) {
            gameOver(playerSelection, movesLeft)
         }
       })
   })
} 

const winner = (player, computer) => {
    const results = document.querySelector('.results');
    const playerScoreBoard = document.querySelector('.playerCount');
    const computerScoreBoard = document.querySelector('.computerCount');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
        results.textContent = 'Tie';
        results.style.color = '#B09E99';
    } else if (player == 'rock') {
        if (computer == 'paper') {
            results.textContent = 'Computer won.';
            results.style.color = 'red';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        
        } else {
            results.textContent = "You won!";
            results.style.color = 'blue';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (player == 'paper') {
        if (computer == 'scissors') {
            results.textContent = 'Computer won';
            results.style.color = 'red';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else {
            results.textContent = "You won!";
            results.style.color = 'blue';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    } else if (player == 'scissors') {
        if (computer == 'rock') {
            results.textContent = 'Computer Won.';
            results.style.color = 'red';
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        } else {
            results.textContent = "You won!";
            results.style.color = 'blue'; 
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

const gameOver = (playerSelection, movesLeft) => {
    const chooseMove = document.querySelector('.move');
    const gameResults = document.querySelector('.gameResults');
    const reloadBtn = document.querySelector('.reload');
    const firstTo = document.querySelector('.firstTo')

    playerSelection.forEach(option => {
        option.style.display = 'none';
    })

    chooseMove.innerText = 'Game Over!'
    chooseMove.style.color = "pink"
    chooseMove.style.fontSize = '2rem;'

    movesLeft.style.display = 'none';
    firstTo.style.display = 'none';

    if(playerScore > computerScore) {
        gameResults.style.innerText = 'You won the game!'
        gameResults.style.color = '#64b5ac'; 
    } else if (playerScore < computerScore) {
        gameResults.style.innerText = 'You lost the game!'
        gameResults.style.color = '#64b5ac'; 
    } else {
        gameResults.style.innerText = 'It was a tie!'
        gameResults.style.color = '#64b5ac'; 
    }

    reloadBtn.innerText = 'Rematch?';
    reloadBtn.style.display = 'flex';
    reloadBtn.style.border = 'none';
    reloadBtn.addEventListener ('click', () => {
        window.location.reload();
    })
}

    playGame()
}

game();




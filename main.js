function getHumanChoise() {
    const playerChoice = prompt("Type your choice").toLowerCase();

    switch(playerChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            console.log("Invalid input!");
            return null;
    }
}

function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 2);

    switch(randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoise) {
        if (!humanChoice) {
            console.log('Invalid human choice!');
            return;
        }
    
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoise}`);
    
        if (humanChoice === 'rock') {
            if (computerChoise === 'paper') {
                console.log('You lost! Paper beats rock.');
                computerScore++;
            } else if (computerChoise === 'scissors') {
                console.log('You win! Rock beats scissors.');
                humanScore++;
            } else {
                console.log('It\'s a tie!');
            }
        } else if (humanChoice === 'paper') {
            if (computerChoise === 'scissors') {
                console.log('You lost! Scissors beat paper.');
                computerScore++;
            } else if (computerChoise === 'rock') {
                console.log('You win! Paper beats rock.');
                humanScore++;
            } else {
                console.log('It\'s a tie!');
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoise === 'rock') {
                console.log('You lost! Rock beats scissors.');
                computerScore++;
            } else if (computerChoise === 'paper') {
                console.log('You win! Scissors beat paper.');
                humanScore++
            } else {
                console.log('It\'s a tie!');
            }
        }
    } 

    for (let i = 0; i < 5; i++) {
        console.log("Round ", i + 1)
        playRound(getHumanChoise(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Human win!");
        console.log(humanScore, " > ", computerScore);
    } else if (computerScore > humanScore) {
        console.log("Computer win!");
        console.log(computerScore, " > ", humanScore);
    } else {
        console.log("I'ts a tie again...");
        console.log(humanScore, " = ", computerScore);
    }
}

playGame();
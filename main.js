let humanScore = 0;
let computerScore = 0;
let game = 0;
let tieCounter = 0;

const human = document.querySelector("#human");
const comp = document.querySelector("#comp");
const tie = document.querySelector("#tie");

const container = document.querySelector("#container");

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


function playRound(humanChoice, computerChoise) {
            if (humanChoice === 'rock') {
                if (computerChoise === 'paper') {
                    game++;
                    computerScore++;
                    return 'You lost! Paper beats rock.';
                } else if (computerChoise === 'scissors') {
                    game++;
                    humanScore++;
                    return 'You win! Rock beats scissors.';
                } else {
                    game++;
                    tieCounter++;
                    return 'It\'s a tie!';
                }
            } else if (humanChoice === 'paper') {
                if (computerChoise === 'scissors') {
                    game++;
                    computerScore++;
                    return 'You lost! Scissors beat paper.';
                } else if (computerChoise === 'rock') {
                    game++;
                    humanScore++;
                    return 'You win! Paper beats rock.';
                } else {
                    game++;
                    tieCounter++;
                    return 'It\'s a tie!';
                }
            } else if (humanChoice === 'scissors') {
                if (computerChoise === 'rock') {
                    game++;
                    computerScore++;
                    return 'You lost! Rock beats scissors.';
                } else if (computerChoise === 'paper') {
                    game++
                    humanScore++
                    return 'You win! Scissors beat paper.';
                } else {
                    game++;
                    tieCounter++;
                    return 'It\'s a tie!';
                }
            }
}

document.querySelector("#rock").addEventListener("click", () => {
    playGame("rock");
});

document.querySelector("#paper").addEventListener("click", () => {
    playGame("paper");
});

document.querySelector("#scissors").addEventListener("click", () => {
    playGame("scissors");
});


function playGame(humanChoice) {
    if (game >= 5) {
        if (humanScore > computerScore) {
            container.textContent = `Human wins! - ${humanScore} > ${computerScore}`;
        } else if (humanScore < computerScore) {
            container.textContent = `Computer wins! - ${computerScore} > ${humanScore}`;
        } else {
            container.textContent = `It's a tie - ${humanScore} = ${computerScore}`;
        }
          return;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    human.textContent = humanScore;
    comp.textContent = computerScore;
    tie.textContent = tieCounter;
    container.textContent = result;
}



playGame();


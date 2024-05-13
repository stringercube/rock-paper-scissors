// Rock Paper Scissors console game! //

function getComputerChoice() {
    getIndex = Math.floor(3 * Math.random()); // provides randomly numbers 0, 1, 2
    options = ['rock', 'paper', 'scissors']; // options array
    return options[getIndex];
}

function getHumanChoice() {
    return prompt('Rock, Paper or Scissors?'); //prompt user to make his choice
}

function playRound(humanChoice, computerChoice) {    
    humanChoice = String(humanChoice).toLowerCase(); //case insensitive
    if (humanChoice === computerChoice) {
        return console.log(`Draw! you both have picked ${humanChoice}.`)
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') ||
               (humanChoice == 'paper' && computerChoice == 'scissors') ||
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        humanScore++;
        return console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    }      
}

function playGame(Rounds) {

    for (let i=0; i<Rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Ỳou won ${humanScore} - ${computerScore}, well done!`)
    } else if (humanScore < computerScore) {
        console.log(`Ỳou lost ${humanScore} - ${computerScore}, better luck next time`)
    } else{
        console.log(`Ỳou draw ${humanScore} - ${computerScore}, good game`)
    }

}

let humanScore = 0;
let computerScore = 0;

playGame(5);


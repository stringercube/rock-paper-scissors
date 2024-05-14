// Rock Paper Scissors console game! //


const options = ['rock', 'paper', 'scissors']; // options array

function getComputerChoice() {
    getIndex = Math.floor(3 * Math.random()); // provides randomly numbers 0, 1, 2
    return options[getIndex];
}

function getHumanChoice() {
    let textInput = prompt('Rock, Paper or Scissors?'); // prompt user to make his choice
    while (options.includes(textInput.toLowerCase()) == false) { // check if value introduced is invalid or null
        textInput = prompt('Please, no cheating, Rock, Paper or Scissors!'); // reprompt player
    }
    return textInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {    
    if (humanChoice === computerChoice) {   // case when players pick same option
        return console.log(`Draw! you both have picked ${humanChoice}.`)
    } else if ((humanChoice == 'rock' && computerChoice == 'paper') || // 3 conditions when player lose
               (humanChoice == 'paper' && computerChoice == 'scissors') ||
               (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore++; // add 1 to the computer
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else { // rest of cases, player wins
        humanScore++; // add 1 to the human
        return console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    }      
}

function playGame(Rounds) {

    for (let i=0; i<Rounds; i++) { // loop to the number of rounds played
        const humanSelection = getHumanChoice(); // iterate prompts  for each round
        const computerSelection = getComputerChoice(); // iterate computer picks for each round
        playRound(humanSelection, computerSelection); 
    }

    if (humanScore > computerScore) { // check final scores, 3 possibilities
        console.log(`You won ${humanScore} - ${computerScore}, well done!`) // player win statement
    } else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore} - ${computerScore}, better luck next time`) // player loses
    } else{
        console.log(`You draw ${humanScore} - ${computerScore}, good game`) // draw
    }
    
    humanScore = 0;
    computerScore = 0; // reset counters every game
}

let humanScore = 0; // initialize counters each game
let computerScore = 0;

playGame(5);


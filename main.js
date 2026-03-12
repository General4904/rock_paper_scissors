console.log(`Hello World`);

let humanScore = 0;
let computerScore = 0;
let gameRound = 0;
let userWinStatus;

function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomComputerChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return randomComputerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter a choice");
  return humanChoice.toLowerCase();
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(getComputerChoice, getHumanChoice) {
  if (getComputerChoice == "rock" && getHumanChoice == "paper") {
    console.log(`You lose, rock wins`);
    return (userWinStatus = false);
  } else if (getComputerChoice == "rock" && getHumanChoice == "scissors") {
    console.log(`You lose, rock wins`);
    return (userWinStatus = false);
  } else if (getComputerChoice == "paper" && getHumanChoice == "scissors") {
    console.log(`You win, scissors wins`);
    return (userWinStatus = true);
  } else if (getComputerChoice == "paper" && getHumanChoice == "rock") {
    console.log(`You win, rock wins`);
    return (userWinStatus = true);
  } else if (getComputerChoice == "scissors" && getHumanChoice == "paper") {
    console.log(`You lose, scissors wins`);
    return (userWinStatus = false);
  } else if (getComputerChoice == "scissors" && getHumanChoice == "rock") {
    console.log(`You win, state wins`);
    return (userWinStatus = truee);
  } else if (getComputerChoice === getHumanChoice) {
    console.log(`Tie`);
    return (userWinStatus = false);
  }
}

function playGame() {
  while (gameRound < 6) {
    playRound(getComputerChoice, getHumanChoice);
    if (userWinStatus === true) {
      humanScore++;
    } else {
      computerScore++;
    }
    console.log(`Computer Score: ${computerScore}\nHuman Score: ${humanScore}`);
    gameRound++;
  }
}

playGame();

let gameWinnerList = [];
let options = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  return options[randomNumber];
}

function getPlayerChoice(round) {
  let playerChoice = prompt(
    "Enter your choice (rock or paper or scissor ) Round :" + round
  );
  playerChoice = playerChoice.toLowerCase();

  return playerChoice;
}

function game(round) {
  let computerChoice = getComputerChoice();
  let playerChoice = getPlayerChoice(round);
  let winner;
  if (!options.includes(playerChoice)) {
    console.log("Incorrect user choice , points to computer ");
    return "incorrect choice ";
  } else if (computerChoice == playerChoice) {
    console.log(
      `Tie ,computer choice ${computerChoice} same as user choice ${playerChoice} `
    );
    winner = "Tie ";
  } else if (
    (computerChoice == "rock" && playerChoice == "scissor") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissor" && playerChoice == "paper")
  ) {
    console.log(`Computer won ,${computerChoice} beats ${playerChoice}`);
    winner = "computer";
  } else {
    console.log(`Player won ,${playerChoice} beats ${computerChoice}`);
    winner = "user";
  }

  return winner;
}

function playGame() {
  let userScore = 0,
    ComputerScore = 0;
  for (let round = 0; round < 5; round++) {
    let winner = game(round);

    if (winner == "computer") {
      gameWinnerList.push("computer");
      ComputerScore++;
    } else if (winner == "user") {
      gameWinnerList.push("user");
      userScore++;
    } else if (winner == "tie") {
      gameWinnerList.push("tie ");
    } else {
      gameWinnerList.push("Incorrect user choice");
    }
  }

  userScore > ComputerScore
    ? console.log("Winner :  wow you  won agains computer")
    : console.log("Winner :Sadly  Computer  won against you");

  console.log("Round Winner List :", gameWinnerList);
}

playGame();

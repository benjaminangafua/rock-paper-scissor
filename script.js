function playGame() {
  // Keep track of scores
  let computerScore = 0,
    humanScore = 0,
    draw = 0,
    rounds = 5;

  function playRound(computerChoice, humanChoice) {
    // Check winning position
    if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "scissor" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      humanScore++;
      console.log(`${humanChoice} beats ${computerChoice}`);
    } else if (
      (computerChoice == "rock" && humanChoice == "scissor") ||
      (computerChoice == "scissor" && humanChoice == "paper") ||
      (computerChoice == "paper" && humanChoice == "rock")
    ) {
      computerScore++;
      console.log(`${computerChoice} beats ${humanChoice}`);
    } else {
      draw++;
      console.log(`${computerChoice} = ${humanChoice}`);
    }
  }

  // Keep the game going until rounds is not equal to or less than 0
  while (rounds > 0) {
    rounds--;
    playRound(computer(), human());
  }

  const result = {
    Computer: computerScore,
    Human: humanScore,
    Draw: draw,
  };

  if (computerScore > humanScore) {
    console.log(`You lose!`);

    console.table(result);
  } else if (humanScore > computerScore) {
    console.log(`You won!`);
    console.table(result);
  } else if (humanScore === computerScore) {
    console.log(`Draw game!`);
    console.table(result);
  }
}
playGame();

// Computer should select a random option as its guess
function computer() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * options.length);
  if (randomIndex >= 0 && randomIndex <= 2) {
    console.log(randomIndex);

    return options[randomIndex];
  } else {
    return options[2];
  }
}

function human() {
  // Use DO...While loop to check each user input before guessing it
  let option;

  do {
    option = prompt("Enter your choice: rock, paper, or scissor");
  } while (!["rock", "paper", "scissor"].includes(option));

  return option.toLowerCase();
}

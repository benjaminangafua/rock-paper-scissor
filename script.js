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
      console.log("Human win!", humanScore);
    } else if (
      (computerChoice == "rock" && humanChoice == "scissor") ||
      (computerChoice == "scissor" && humanChoice == "paper") ||
      (computerChoice == "paper" && humanChoice == "rock")
    ) {
      computerScore++;
      console.log("Computer win!", computerScore);
    } else {
      draw++;
      console.log("Draw!", draw);
    }
  }

  // Keep the game going until rounds is not equal to or less than 0
  while (rounds > 0) {
    rounds--;
    playRound(computer(), human());
  }
  console.log(
    `Computer Score: ${computerScore} \nHuman Score: ${humanScore}\nDraw: ${draw}`
  );
}
playGame();

// Computer should select a random option as its guess
function computer() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.round(Math.random() * options.length);
  return options[randomIndex];
}

function human() {
  // Use DO...While loop to check each user input before guessing it
  let option;

  do {
    option = prompt("Enter your choice: rock, paper, or scissor");
  } while (!["rock", "paper", "scissor"].includes(option));

  return option.toLowerCase();
}

const humanChoice = document.querySelectorAll(".choice");
const HUMAN_SCORE = document.getElementById("humanScore");
const COMPUTER_SCORE = document.getElementById("computerScore");
const WINNER_STATUS = document.getElementById("divider");
const CHANCES = document.querySelectorAll(".chance");

function playGame() {
  // Keep track of scores
  let computerScore = 0,
    humanScore = 0,
    draw = 0,
    rounds = 1;

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

  function playRound(computerChoice, humanChoice) {
    // Check winning position
    if (
      (humanChoice == "rock" && computerChoice == "scissor") ||
      (humanChoice == "scissor" && computerChoice == "paper") ||
      (humanChoice == "paper" && computerChoice == "rock")
    ) {
      humanScore++;
      HUMAN_SCORE.innerHTML = humanScore;
      console.log(`${humanChoice} beats ${computerChoice}`);
    } else if (
      (computerChoice == "rock" && humanChoice == "scissor") ||
      (computerChoice == "scissor" && humanChoice == "paper") ||
      (computerChoice == "paper" && humanChoice == "rock")
    ) {
      computerScore++;
      COMPUTER_SCORE.innerHTML = computerScore;
      console.log(`${computerChoice} beats ${humanChoice}`);
    } else {
      draw++;
      console.log(`${computerChoice} = ${humanChoice}`);
    }
  }

  humanChoice.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      if (
        ["rock", "paper", "scissor"].includes(
          e.target.innerHTML.toLowerCase()
        ) &&
        rounds <= 5
      ) {
        playRound(computer(), e.target.innerHTML.toLowerCase());
        ChancesMAnipulation(rounds);
      }

      if (rounds === 5) {
        console.log(rounds);
        if (computerScore > humanScore) {
          WINNER_STATUS.innerHTML = "Oops computer won";
          WINNER_STATUS.style = `
          background : orangered;
          font-size: 2em;
          `;
        } else if (humanScore > computerScore) {
          WINNER_STATUS.innerHTML = `Congratulation 🎉🥳\n\nYou won!`;
          WINNER_STATUS.style = `
          background : green;
          font-size: 1em;
          `;
        } else if (humanScore === computerScore) {
          WINNER_STATUS.innerHTML = "GAME DRAW!";
        }
      }
      rounds++;
    });
  });

  const result = {
    Computer: computerScore,
    Human: humanScore,
    Draw: draw,
  };
}
playGame();

function ChancesMAnipulation(chance) {
  CHANCES.forEach((element) => {
    if (chance == parseInt(element.innerHTML)) {
      element.style = `background:black;
      color: white;`;
    }
  });
}

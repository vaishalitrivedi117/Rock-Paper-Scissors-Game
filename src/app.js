import "./styles.css";

let userChoice;
let computerChoice;
let result;

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //or you can use 3

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }

  if (randomNumber === 2) {
    computerChoice = "Paper";
  }

  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw!";
  }

  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You win!";
  }

  if (computerChoice === "Rock" && userChoice === "Dcissors") {
    result = "You lose!";
  }

  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You win!";
  }

  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You lose!";
  }

  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You win!";
  }

  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}

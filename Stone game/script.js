let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let result_div = document.getElementById("msg");

let choices = document.querySelectorAll('.choice');

const genComputerChoice = () => {
  const computerOptions = ['rock', 'paper', 'scissors'];
  return computerOptions[Math.floor(Math.random() * 3)];
}

const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();

  if (userChoice === computerChoice) {
    result_div.innerText = `It's a tie! Both chose ${userChoice}`;
    result_div.style.backgroundColor = 'gray';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    userScore_span.innerText = userScore;
    result_div.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    result_div.style.backgroundColor = 'green';
  } else {
    computerScore++;
    computerScore_span.innerText = computerScore;
    result_div.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
    result_div.style.backgroundColor = 'red';
  }
}

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});